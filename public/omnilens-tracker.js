(function () {
  'use strict';

  var config = window.OmnilensConfig || {};
  var collectUrl = config.collectUrl || '/api/collect';
  var autoPageView = config.autoPageView !== false;
  var autoClicks = config.autoClicks !== false;
  var debug = Boolean(config.debug);
  var site = config.site || 'unknown_site';

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

  function installAutoClicks() {
    if (!autoClicks) return;

    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!target || !target.closest) return;

      var trackElement = target.closest('[data-track]');
      if (!trackElement) return;

      var eventName = trackElement.getAttribute('data-track') || 'element_clicked';
      var props = collectDataTrackProps(trackElement);

      if (!props.location) {
        props.location = 'unknown';
      }

      track(eventName, props);
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
    site: site
  });
})();
