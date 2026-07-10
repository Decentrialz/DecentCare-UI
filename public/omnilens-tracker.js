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
  var compiledRules = compileRules(config.eventRules || []);

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
    return {
      anonymousId: anonymousId,
      sessionId: sessionId,
      patientId: patientId || null
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

  function buildContext() {
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
      context: buildContext(),
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
    getIdentity: getOrCreateIdentity
  };

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
    ruleCount: compiledRules.length,
    site: site
  });
})();
