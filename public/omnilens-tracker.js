(function () {
  'use strict';

  var config = window.OmnilensConfig || {};
  var collectUrl = config.collectUrl || '/api/collect';
  var autoPageView = config.autoPageView !== false;
  var autoClicks = config.autoClicks !== false;
  var trackAllClicks = Boolean(config.trackAllClicks);
  var replaceEventWithDerived = Boolean(config.replaceEventWithDerived);
  var debug = Boolean(config.debug);
  var site = config.site || 'unknown_site';
  var enableFingerprint = config.enableFingerprint !== false;
  var fingerprintJsUrl = config.fingerprintJsUrl || '';
  var virtualNumbersConfig = config.virtualNumbers || {};
  var enableVirtualNumbers = Boolean(virtualNumbersConfig.enabled);
  var virtualAssignUrl = virtualNumbersConfig.assignUrl || config.virtualAssignUrl || '/api/virtual-numbers/assign';
  var virtualHeartbeatUrl = virtualNumbersConfig.heartbeatUrl || config.virtualHeartbeatUrl || '/api/virtual-numbers/heartbeat';
  var virtualPhoneTextSelector = virtualNumbersConfig.phoneTextSelector || '[data-omnilens-phone-text],[data-phone],.phone,.phone-number';
  var virtualTelLinkSelector = virtualNumbersConfig.telLinkSelector || '[data-omnilens-phone-link],a[href^="tel:"]';
  var virtualHeartbeatSecOverride = Number(virtualNumbersConfig.heartbeatSec || 0);
  var virtualGeolocationTimeoutMs = Number(virtualNumbersConfig.geolocationTimeoutMs || 5000);
  var virtualHashAnonymousId = virtualNumbersConfig.hashAnonymousId !== false;
  var virtualPersistKey = virtualNumbersConfig.persistKey || 'omnilens_virtual_assignment';
  var virtualMutationObserver = null;
  var virtualRoutePatched = false;
  var virtualDebounceTimer = null;
  var compiledRules = compileRules(config.eventRules || []);
  var fingerprintInitPromise = null;
  var virtualAssignment = null;
  var virtualHeartbeatTimer = null;

  var VERB_TOKENS = {
    login: 1,
    sign: 1,
    signup: 1,
    register: 1,
    checkout: 1,
    buy: 1,
    book: 1,
    call: 1,
    contact: 1,
    view: 1,
    open: 1,
    start: 1,
    submit: 1,
    apply: 1,
    explore: 1,
    watch: 1,
    read: 1,
    download: 1
  };

  var STOP_TOKENS = {
    the: 1,
    and: 1,
    or: 1,
    to: 1,
    now: 1,
    more: 1,
    here: 1,
    our: 1,
    your: 1,
    my: 1,
    us: 1,
    with: 1,
    for: 1,
    on: 1,
    at: 1,
    in: 1,
    of: 1,
    a: 1,
    an: 1
  };

  function log() {
    if (!debug) return;
    var args = Array.prototype.slice.call(arguments);
    args.unshift('[OmnilensTracker]');
    console.log.apply(console, args);
  }

  function uuid() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function anonToShort(value) {
    if (!value) return value;

    var uuidValue = String(value).replace(/^anon_/, '');
    var hex = uuidValue.replace(/-/g, '').toLowerCase();
    if (!/^[0-9a-f]{32}$/.test(hex)) {
      return value;
    }

    var pairs = hex.match(/.{2}/g);
    if (!pairs) return value;

    var bytes = new Uint8Array(pairs.map(function (b) { return parseInt(b, 16); }));
    var binary = '';
    for (var i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  function sanitizePhoneForTel(phone) {
    if (!phone) return '';
    var raw = String(phone).trim();
    var keepPlus = raw.charAt(0) === '+';
    var digits = raw.replace(/[^0-9]/g, '');
    return keepPlus ? ('+' + digits) : digits;
  }

  function toTelHref(phone) {
    var sanitized = sanitizePhoneForTel(phone);
    if (!sanitized) return null;
    return 'tel:' + sanitized;
  }

  function safeParseJson(text) {
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }

  function getGeoData() {
    if (!navigator.geolocation) {
      return Promise.resolve(null);
    }

    return new Promise(function (resolve) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy_m: Math.round(position.coords.accuracy)
          });
        },
        function () {
          resolve(null);
        },
        { enableHighAccuracy: false, timeout: virtualGeolocationTimeoutMs, maximumAge: 60000 }
      );
    });
  }

  function readVirtualAssignmentPayload(responsePayload) {
    if (!responsePayload) return null;
    if (responsePayload.data && typeof responsePayload.data === 'object') return responsePayload.data;
    return responsePayload;
  }

  function stopVirtualHeartbeat() {
    if (virtualHeartbeatTimer) {
      clearInterval(virtualHeartbeatTimer);
      virtualHeartbeatTimer = null;
    }
  }

  function sendVirtualHeartbeat() {
    if (!enableVirtualNumbers || !virtualAssignment || !virtualAssignment.assignment_token) return;
    if (document.hidden) return;

    var ids = getOrCreateIdentity();
    var payload = {
      assignment_token: virtualAssignment.assignment_token,
      session_id: ids.sessionId,
      page_url: window.location.pathname
    };

    fetch(virtualHeartbeatUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(function (err) {
      log('virtual heartbeat failed', err);
    });
  }

  function startVirtualHeartbeat() {
    stopVirtualHeartbeat();

    if (!virtualAssignment || !virtualAssignment.assignment_token) return;
    if (virtualAssignment.distribution_mode && virtualAssignment.distribution_mode !== 'unique') return;

    var heartbeatSec = virtualHeartbeatSecOverride || Number(virtualAssignment.heartbeat_interval_sec || 30);
    if (!heartbeatSec || heartbeatSec < 5) heartbeatSec = 30;

    virtualHeartbeatTimer = setInterval(function () {
      sendVirtualHeartbeat();
    }, heartbeatSec * 1000);
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function replacePhoneInTextNode(node, findPattern, replaceValue) {
    if (!node || !node.nodeValue) return false;
    if (!findPattern.test(node.nodeValue)) return false;
    node.nodeValue = node.nodeValue.replace(findPattern, replaceValue);
    return true;
  }

  function buildPhoneSearchPattern(assignment) {
    var candidates = [];
    if (assignment.display_number) candidates.push(String(assignment.display_number));
    if (assignment.virtual_number) candidates.push(String(assignment.virtual_number));

    var originalPhone = assignment.original_phone || assignment.original_number || assignment.base_phone;
    if (originalPhone) candidates.push(String(originalPhone));

    var patterns = [];
    for (var i = 0; i < candidates.length; i++) {
      var compact = candidates[i].replace(/\s+/g, ' ').trim();
      if (!compact) continue;
      patterns.push(escapeRegExp(compact));
      var digits = compact.replace(/[^0-9]/g, '');
      if (digits.length >= 7) {
        patterns.push(escapeRegExp(digits));
      }
    }

    if (patterns.length === 0) return null;
    return new RegExp(patterns.join('|'), 'g');
  }

  function persistVirtualAssignment(assignment) {
    if (!assignment) return;
    try {
      sessionStorage.setItem(virtualPersistKey, JSON.stringify(assignment));
    } catch (e) {
      log('failed to persist virtual assignment', e);
    }
  }

  function restoreVirtualAssignment() {
    try {
      var raw = sessionStorage.getItem(virtualPersistKey);
      if (!raw) return null;
      var parsed = safeParseJson(raw);
      if (!parsed || !parsed.virtual_number || !parsed.display_number) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function scheduleVirtualDomApply() {
    if (!enableVirtualNumbers || !virtualAssignment) return;
    if (virtualDebounceTimer) {
      clearTimeout(virtualDebounceTimer);
      virtualDebounceTimer = null;
    }
    virtualDebounceTimer = setTimeout(function () {
      virtualDebounceTimer = null;
      applyVirtualNumberToDom(virtualAssignment);
    }, 60);
  }

  function applyVirtualNumberToDom(assignment) {
    if (!assignment) return;

    var displayNumber = assignment.display_number || assignment.virtual_number;
    var telHref = toTelHref(assignment.virtual_number || assignment.display_number);

    if (displayNumber && virtualPhoneTextSelector) {
      var textNodes = document.querySelectorAll(virtualPhoneTextSelector);
      for (var i = 0; i < textNodes.length; i++) {
        textNodes[i].textContent = displayNumber;
        textNodes[i].setAttribute('data-omnilens-virtual-number', assignment.virtual_number || '');
      }
    }

    // Best-effort fallback replacement for plain text phone numbers in common UI nodes.
    var phonePattern = buildPhoneSearchPattern(assignment);
    if (displayNumber && phonePattern) {
      var fallbackNodes = document.querySelectorAll('p,span,div,strong,small,li,td,h1,h2,h3,h4,h5,h6');
      for (var k = 0; k < fallbackNodes.length; k++) {
        var host = fallbackNodes[k];
        if (!host || !host.childNodes) continue;

        for (var n = 0; n < host.childNodes.length; n++) {
          var child = host.childNodes[n];
          if (child && child.nodeType === 3) {
            replacePhoneInTextNode(child, phonePattern, displayNumber);
          }
        }
      }
    }

    if (telHref && virtualTelLinkSelector) {
      var linkNodes = document.querySelectorAll(virtualTelLinkSelector);
      for (var j = 0; j < linkNodes.length; j++) {
        var link = linkNodes[j];
        if (!link.getAttribute('data-omnilens-original-href')) {
          link.setAttribute('data-omnilens-original-href', link.getAttribute('href') || '');
        }
        link.setAttribute('href', telHref);
        link.setAttribute('data-omnilens-virtual-number', assignment.virtual_number || '');
      }
    }

    // Force all tel links to virtual number when enabled.
    if (telHref) {
      var allTelLinks = document.querySelectorAll('a[href^="tel:"]');
      for (var m = 0; m < allTelLinks.length; m++) {
        var telLink = allTelLinks[m];
        if (!telLink.getAttribute('data-omnilens-original-href')) {
          telLink.setAttribute('data-omnilens-original-href', telLink.getAttribute('href') || '');
        }
        telLink.setAttribute('href', telHref);
        telLink.setAttribute('data-omnilens-virtual-number', assignment.virtual_number || '');
      }
    }

    persistVirtualAssignment(assignment);
  }

  function installVirtualDomObservers() {
    if (!enableVirtualNumbers) return;

    if (virtualMutationObserver) {
      virtualMutationObserver.disconnect();
      virtualMutationObserver = null;
    }

    virtualMutationObserver = new MutationObserver(function () {
      scheduleVirtualDomApply();
    });

    virtualMutationObserver.observe(document.documentElement || document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['href']
    });

    // SPA navigation hooks
    if (!virtualRoutePatched) {
      virtualRoutePatched = true;

      var originalPushState = history.pushState;
      history.pushState = function () {
        var result = originalPushState.apply(this, arguments);
        scheduleVirtualDomApply();
        return result;
      };

      var originalReplaceState = history.replaceState;
      history.replaceState = function () {
        var result = originalReplaceState.apply(this, arguments);
        scheduleVirtualDomApply();
        return result;
      };
    }

    window.addEventListener('popstate', scheduleVirtualDomApply);
    window.addEventListener('hashchange', scheduleVirtualDomApply);
    window.addEventListener('pageshow', scheduleVirtualDomApply);
  }

  function installVirtualPhoneClickTracking() {
    if (!virtualTelLinkSelector) return;

    document.addEventListener('click', function (event) {
      if (!virtualAssignment) return;

      var rawTarget = event.target;
      var target = rawTarget;
      if (target && target.nodeType === 3) {
        target = target.parentElement;
      }

      if (!target || typeof target.closest !== 'function') return;
      var telElement = target.closest(virtualTelLinkSelector);
      if (!telElement) return;

      var href = telElement.getAttribute('href') || '';
      if (href.indexOf('tel:') !== 0) return;

      track('phone_clicked', {
        location: 'virtual_number_script',
        phone_number: virtualAssignment.virtual_number || undefined,
        dialed_number: sanitizePhoneForTel(href.replace(/^tel:/, '')) || undefined,
        assignment_id: virtualAssignment.assignment_id || undefined,
        distribution_mode: virtualAssignment.distribution_mode || undefined,
        source: 'omnilens-tracker-js'
      });
    });
  }

  function assignVirtualNumber() {
    if (!enableVirtualNumbers) {
      return Promise.resolve(null);
    }

    var ids = getOrCreateIdentity();
    var searchParams = new URLSearchParams(window.location.search);
    var anonymousIdForAssign = virtualHashAnonymousId ? anonToShort(ids.anonymousId) : ids.anonymousId;

    return getGeoData().then(function (geo) {
      var payload = {
        anonymous_id: anonymousIdForAssign,
        session_id: ids.sessionId,
        page_url: window.location.pathname,
        referrer: document.referrer || undefined,
        utm_source: searchParams.get('utm_source') || undefined,
        utm_medium: searchParams.get('utm_medium') || undefined,
        utm_campaign: searchParams.get('utm_campaign') || undefined,
        site: site
      };

      if (geo) {
        payload.lat = geo.lat;
        payload.lng = geo.lng;
        payload.accuracy_m = geo.accuracy_m;
      }

      return fetch(virtualAssignUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (response) {
        return response.text().then(function (raw) {
          var parsed = safeParseJson(raw);
          if (!response.ok) {
            var detail = parsed && (parsed.detail || parsed.error) ? (parsed.detail || parsed.error) : raw;
            throw new Error(detail || ('Assign failed (' + response.status + ')'));
          }

          var data = readVirtualAssignmentPayload(parsed);
          if (!data || !data.virtual_number || !data.display_number) {
            throw new Error('Assign returned invalid payload');
          }

          virtualAssignment = data;
          applyVirtualNumberToDom(data);
          startVirtualHeartbeat();

          track('virtual_number_assigned', {
            assignment_id: data.assignment_id || undefined,
            distribution_mode: data.distribution_mode || undefined,
            source: 'omnilens-tracker-js'
          });

          return data;
        });
      });
    }).catch(function (err) {
      track('virtual_number_assign_failed', {
        reason: err && err.message ? err.message : 'unknown_error',
        source: 'omnilens-tracker-js'
      });
      log('virtual number assign failed', err);
      return null;
    });
  }

  function installVirtualNumberIntegration() {
    if (!enableVirtualNumbers) return;

    installVirtualPhoneClickTracking();
    installVirtualDomObservers();

    var restoredAssignment = restoreVirtualAssignment();
    if (restoredAssignment) {
      virtualAssignment = restoredAssignment;
      applyVirtualNumberToDom(restoredAssignment);
      startVirtualHeartbeat();
    }

    scheduleVirtualDomApply();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', scheduleVirtualDomApply);
    } else {
      setTimeout(scheduleVirtualDomApply, 0);
    }
    setTimeout(scheduleVirtualDomApply, 400);
    setTimeout(scheduleVirtualDomApply, 1200);

    assignVirtualNumber();

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stopVirtualHeartbeat();
        return;
      }

      startVirtualHeartbeat();
      sendVirtualHeartbeat();
    });

    window.addEventListener('beforeunload', function () {
      sendVirtualHeartbeat();
      stopVirtualHeartbeat();
    });
  }

  function getOrCreateFallbackFingerprint() {
    var fallback = localStorage.getItem('fingerprint_fallback_id');
    if (!fallback) {
      fallback = 'fp_fallback_' + uuid();
      localStorage.setItem('fingerprint_fallback_id', fallback);
    }
    return fallback;
  }

  function setFingerprint(value) {
    if (!value) return;
    try {
      localStorage.setItem('fingerprint', value);
    } catch (e) {
      log('failed to persist fingerprint', e);
    }
  }

  function getStoredFingerprint() {
    try {
      return localStorage.getItem('fingerprint');
    } catch (e) {
      return null;
    }
  }

  function loadFingerprintJsLibrary() {
    return new Promise(function (resolve, reject) {
      if (window.FingerprintJS) {
        resolve();
        return;
      }

      if (!fingerprintJsUrl) {
        reject(new Error('FingerprintJS not available and fingerprintJsUrl not configured'));
        return;
      }

      var existing = document.querySelector('script[data-omnilens-fpjs="true"]');
      if (existing) {
        existing.addEventListener('load', function () { resolve(); }, { once: true });
        existing.addEventListener('error', function () { reject(new Error('Failed to load FingerprintJS script')); }, { once: true });
        return;
      }

      var script = document.createElement('script');
      script.src = fingerprintJsUrl;
      script.async = true;
      script.defer = true;
      script.setAttribute('data-omnilens-fpjs', 'true');
      script.onload = function () { resolve(); };
      script.onerror = function () { reject(new Error('Failed to load FingerprintJS script')); };
      document.head.appendChild(script);
    });
  }

  function initializeFingerprint() {
    if (!enableFingerprint) return;
    if (fingerprintInitPromise) return;

    fingerprintInitPromise = (function () {
      var current = localStorage.getItem('fingerprint');
      if (current && current !== 'fp_loading') {
        return Promise.resolve(current);
      }

      setFingerprint('fp_loading');

      return loadFingerprintJsLibrary()
        .then(function () {
          if (!window.FingerprintJS || typeof window.FingerprintJS.load !== 'function') {
            throw new Error('FingerprintJS global is unavailable');
          }
          return window.FingerprintJS.load();
        })
        .then(function (fpAgent) {
          return fpAgent.get();
        })
        .then(function (result) {
          var value = result && result.visitorId ? result.visitorId : getOrCreateFallbackFingerprint();
          setFingerprint(value);
          return value;
        })
        .catch(function (err) {
          log('Fingerprint initialization failed, using fallback', err);
          var fallback = getOrCreateFallbackFingerprint();
          setFingerprint(fallback);
          return fallback;
        });
    })();
  }

  function compileRules(rules) {
    var valid = [];
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!rule || !rule.event) continue;

      var pattern = null;
      if (rule.match instanceof RegExp) {
        pattern = rule.match;
      } else if (typeof rule.match === 'string' && rule.match.trim()) {
        pattern = new RegExp(rule.match, 'i');
      }

      if (!pattern) continue;

      valid.push({
        match: pattern,
        event: rule.event,
        feature: rule.feature,
        intent: rule.intent
      });
    }
    return valid;
  }

  function normalizeValue(value) {
    if (!value) return '';
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, '_')
      .replace(/^_+|_+$/g, '');
  }

  function getPathFromHref(href) {
    if (!href) return '';
    try {
      var url = new URL(href, window.location.origin);
      return normalizeValue(url.pathname);
    } catch (e) {
      return normalizeValue(href);
    }
  }

  function getPathTailFromHref(href) {
    if (!href) return '';
    try {
      var url = new URL(href, window.location.origin);
      var normalizedPath = normalizeValue(url.pathname);
      if (!normalizedPath) return '';
      var parts = normalizedPath.split('_').filter(Boolean);
      return parts.slice(-2).join('_');
    } catch (e) {
      return '';
    }
  }

  function splitTokens(value) {
    if (!value) return [];
    return value.split('_').filter(Boolean);
  }

  function pickVerb(tokens, elementType) {
    for (var i = 0; i < tokens.length; i++) {
      if (VERB_TOKENS[tokens[i]]) return tokens[i];
    }
    if (elementType === 'a') return 'open';
    return 'click';
  }

  function pickObject(tokens) {
    var objectTokens = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (VERB_TOKENS[token] || STOP_TOKENS[token]) continue;
      objectTokens.push(token);
    }
    if (objectTokens.length === 0) return '';
    return objectTokens.slice(0, 3).join('_');
  }

  function deriveGenericEventName(properties) {
    var textBase = normalizeValue(properties.element_text || properties.element_aria_label || properties.element_name);
    var hrefBase = getPathTailFromHref(properties.element_href);
    var base = textBase || hrefBase;

    if (!base) {
      return 'element_clicked';
    }

    var tokens = splitTokens(base);
    if (tokens.length === 0) {
      return 'element_clicked';
    }

    var verb = pickVerb(tokens, properties.element_type || '');
    var objectPart = pickObject(tokens);
    if (!objectPart) {
      objectPart = tokens.slice(0, 2).join('_');
    }

    if (!objectPart) {
      return 'element_clicked';
    }

    return normalizeValue(verb + '_' + objectPart + '_clicked') || 'element_clicked';
  }

  function inferFeature(properties, ruleHit) {
    if (ruleHit && ruleHit.feature) return ruleHit.feature;

    var href = properties.element_href || '';
    var path = getPathFromHref(href);
    if (path) {
      var segments = path.split('_').filter(Boolean);
      if (segments.length > 0) return segments[0];
    }

    var name = properties.element_name || '';
    if (name) return name.split('_')[0];
    return 'general';
  }

  function deriveIntent(properties, ruleHit) {
    if (ruleHit && ruleHit.intent) return ruleHit.intent;

    var href = properties.element_href || '';
    var type = properties.element_type || '';
    var textIndex = [
      properties.element_name,
      properties.element_text,
      href
    ].join(' ').toLowerCase();

    if (href && href.indexOf('#') === 0) return 'in_page_navigation';
    if (/checkout|buy|pricing|pay|book_now|purchase/.test(textIndex)) return 'purchase_intent';
    if (type === 'a' || !!href) return 'navigation';
    if (/login|signup|submit|book|appointment|contact|call|apply/.test(textIndex)) return 'action';
    return 'action';
  }

  function deriveEventName(properties) {
    var searchable = [
      properties.element_name,
      properties.element_text,
      properties.element_href,
      properties.element_class,
      properties.element_type
    ].join(' ').toLowerCase();

    var matchedRule = null;
    for (var i = 0; i < compiledRules.length; i++) {
      if (compiledRules[i].match.test(searchable)) {
        matchedRule = compiledRules[i];
        break;
      }
    }

    var eventName = matchedRule ? matchedRule.event : null;
    if (!eventName) {
      eventName = deriveGenericEventName(properties);
    }

    if (!eventName) {
      eventName = 'element_clicked';
    }

    return {
      event: eventName,
      rule: matchedRule
    };
  }

  function enrichClickProperties(rawProperties) {
    var enriched = {};
    for (var key in rawProperties) {
      if (Object.prototype.hasOwnProperty.call(rawProperties, key)) {
        enriched[key] = rawProperties[key];
      }
    }

    var normalizedText = normalizeValue(enriched.element_text || enriched.element_aria_label || enriched.element_name);
    if (normalizedText) {
      enriched.element_name = normalizedText;
    }

    var derivation = deriveEventName(enriched);
    enriched.derived_event = derivation.event;
    enriched.intent = deriveIntent(enriched, derivation.rule);
    enriched.feature = inferFeature(enriched, derivation.rule);

    return enriched;
  }

  function getOrCreateIdentity() {
    var anonymousId = localStorage.getItem('anonymous_id');
    if (!anonymousId) {
      anonymousId = 'anon_' + uuid();
      localStorage.setItem('anonymous_id', anonymousId);
    }

    var sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = 'sess_' + uuid();
      sessionStorage.setItem('session_id', sessionId);
    }

    var patientId = localStorage.getItem('patient_id');
    var fingerprint = null;

    if (enableFingerprint) {
      fingerprint = localStorage.getItem('fingerprint');
      if (!fingerprint) {
        setFingerprint('fp_loading');
        fingerprint = 'fp_loading';
      }
      initializeFingerprint();
    }

    return {
      anonymousId: anonymousId,
      sessionId: sessionId,
      patientId: patientId || null,
      fingerprint: fingerprint || null
    };
  }

  function getCampaign() {
    var params = new URLSearchParams(window.location.search);
    var source = params.get('utm_source') || undefined;
    var medium = params.get('utm_medium') || undefined;
    var name = params.get('utm_campaign') || undefined;
    var content = params.get('utm_content') || undefined;
    var term = params.get('utm_term') || undefined;

    if (!source && !medium && !name && !content && !term) {
      return undefined;
    }

    return {
      source: source,
      medium: medium,
      name: name,
      content: content,
      term: term
    };
  }

  function getDeviceType() {
    var ua = navigator.userAgent || '';
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  function buildContext(identity) {
    var contextFingerprint = undefined;
    if (enableFingerprint) {
      contextFingerprint = (identity && identity.fingerprint) || getStoredFingerprint() || 'fp_loading';
    }

    return {
      page: {
        path: window.location.pathname,
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        search: window.location.search
      },
      campaign: getCampaign(),
      device: {
        type: getDeviceType()
      },
      screen: {
        width: window.screen.width,
        height: window.screen.height
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: navigator.language,
      userAgent: navigator.userAgent,
      fingerprint: contextFingerprint,
      site: site
    };
  }

  function send(eventPayload) {
    var body = JSON.stringify(eventPayload);

    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' });
        if (navigator.sendBeacon(collectUrl, blob)) {
          return;
        }
      }
    } catch (e) {
      log('sendBeacon failed, falling back to fetch', e);
    }

    fetch(collectUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
      keepalive: true
    }).catch(function (err) {
      log('Event send failed', err);
    });
  }

  function track(eventName, properties) {
    var ids = getOrCreateIdentity();
    var now = new Date().toISOString();

    var payload = {
      messageId: uuid(),
      type: 'track',
      event: eventName,
      anonymousId: ids.anonymousId,
      sessionId: ids.sessionId,
      patientId: ids.patientId,
      originalTimestamp: now,
      sentAt: now,
      context: buildContext(ids),
      properties: properties || {}
    };

    log('track', eventName, payload);
    send(payload);
  }

  function installAutoPageView() {
    if (!autoPageView) return;
    track('page_view', {
      source: 'omnilens-tracker-js'
    });
  }

  function collectDataTrackProps(element) {
    var props = {};
    for (var i = 0; i < element.attributes.length; i++) {
      var attr = element.attributes[i];
      if (!attr.name || attr.name === 'data-track') continue;
      if (attr.name.indexOf('data-track-') === 0) {
        var key = attr.name.replace('data-track-', '');
        props[key] = attr.value;
      }
    }
    return props;
  }

  function shouldIgnoreGenericClick(element) {
    if (!element || !element.tagName) return true;
    var tag = element.tagName.toLowerCase();
    if (tag === 'html' || tag === 'body' || tag === 'svg' || tag === 'path') return true;
    if (tag === 'script' || tag === 'style' || tag === 'meta' || tag === 'link') return true;
    return false;
  }

  function getElementText(element) {
    var text = (element.innerText || element.textContent || '').trim();
    if (!text) return undefined;
    return text.substring(0, 120);
  }

  function buildGenericClickProps(element) {
    var tagName = element.tagName ? element.tagName.toLowerCase() : 'unknown';
    var href = element.getAttribute && element.getAttribute('href');
    var name = element.getAttribute && element.getAttribute('name');
    var role = element.getAttribute && element.getAttribute('role');
    var ariaLabel = element.getAttribute && element.getAttribute('aria-label');

    return {
      location: 'auto_generic',
      element_type: tagName,
      element_id: element.id || undefined,
      element_class: element.className || undefined,
      element_name: name || undefined,
      element_role: role || undefined,
      element_aria_label: ariaLabel || undefined,
      element_href: href || undefined,
      element_text: getElementText(element)
    };
  }

  function shouldTrackElement(element) {
    if (!element || !element.closest) return false;
    if (element.closest('[data-track-ignore="true"]')) return false;
    return true;
  }

  function installAutoClicks() {
    if (!autoClicks) return;

    document.addEventListener('click', function (event) {
      var rawTarget = event.target;
      var target = rawTarget;

      if (target && target.nodeType === 3) {
        target = target.parentElement;
      }

      if (!target || typeof target.closest !== 'function') return;
      if (!shouldTrackElement(target)) return;

      var trackElement = target.closest('[data-track]');
      if (!trackElement) {
        if (!trackAllClicks) return;

        var genericElement = target.closest('a,button,input,select,textarea,[role="button"],[onclick],label,summary') || target;
        if (shouldIgnoreGenericClick(genericElement)) return;

        var genericProperties = enrichClickProperties(buildGenericClickProps(genericElement));
        var genericEvent = replaceEventWithDerived ? genericProperties.derived_event : 'element_clicked';
        track(genericEvent, genericProperties);
        return;
      }

      var eventName = trackElement.getAttribute('data-track') || 'element_clicked';
      var props = collectDataTrackProps(trackElement);
      var rawBaseProps = buildGenericClickProps(trackElement);
      for (var propKey in props) {
        if (Object.prototype.hasOwnProperty.call(props, propKey)) {
          rawBaseProps[propKey] = props[propKey];
        }
      }

      var enrichedProps = enrichClickProperties(rawBaseProps);

      if (!enrichedProps.location) {
        enrichedProps.location = 'unknown';
      }

      if (eventName === 'element_clicked' && replaceEventWithDerived) {
        track(enrichedProps.derived_event, enrichedProps);
        return;
      }

      track(eventName, enrichedProps);
    });
  }

  window.OmnilensTracker = {
    track: track,
    getIdentity: getOrCreateIdentity,
    getVirtualNumber: function () { return virtualAssignment; },
    refreshVirtualNumber: function () { return assignVirtualNumber(); }
  };

  initializeFingerprint();
  installVirtualNumberIntegration();

  installAutoClicks();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installAutoPageView);
  } else {
    installAutoPageView();
  }

  log('initialized', {
    collectUrl: collectUrl,
    autoPageView: autoPageView,
    autoClicks: autoClicks,
    trackAllClicks: trackAllClicks,
    replaceEventWithDerived: replaceEventWithDerived,
    enableFingerprint: enableFingerprint,
    enableVirtualNumbers: enableVirtualNumbers,
    ruleCount: compiledRules.length,
    site: site
  });
})();
