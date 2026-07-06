/**
 * Event Tracker - Core tracking functionality
 */

import { identityManager } from './identity';
import { Event, EventContext, EventType, TrackEvent, PageEvent, IdentifyEvent } from './types';

// API endpoint - will be configurable
const API_ENDPOINT = process.env.NEXT_PUBLIC_TRACKING_API || '/api/collect';

/**
 * Get device type from user agent
 */
function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';
  
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

/**
 * Build event context from browser APIs
 */
function buildContext(): EventContext {
  // Skip if running on server (SSR)
  if (typeof window === 'undefined') {
    return {
      page: { path: '', url: '', title: '', referrer: '', search: '' },
      device: { type: 'desktop' },
      screen: { width: 0, height: 0 },
      viewport: { width: 0, height: 0 },
      timezone: '',
      locale: '',
      userAgent: '',
      fingerprint: '',
    };
  }

  const identity = identityManager.getIdentity();
  const utm = identityManager.getCurrentUTM();

  return {
    page: {
      path: window.location.pathname,
      url: window.location.href,
      title: document.title,
      referrer: document.referrer,
      search: window.location.search,
    },
    campaign: utm.utm_source ? {
      source: utm.utm_source,
      medium: utm.utm_medium,
      name: utm.utm_campaign,
      content: utm.utm_content,
      term: utm.utm_term,
    } : undefined,
    device: {
      type: getDeviceType(),
    },
    screen: {
      width: window.screen.width,
      height: window.screen.height,
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: navigator.language,
    userAgent: navigator.userAgent,
    fingerprint: identity.fingerprint,
  };
}

/**
 * Generate UUID v4
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Send event using fetch with keepalive (supports custom headers for auth)
 */
function sendEvent(event: Event): boolean {
  // Skip if running on server (SSR)
  if (typeof window === 'undefined') return false;
  
  // Send original Segment format to local API
  // The API route will handle transformation for backend forwarding
  const payload = JSON.stringify(event);
  
  const eventName = event.type === 'track' ? (event as TrackEvent).event : 
                    event.type === 'page' ? (event as PageEvent).name : 
                    event.type;
  console.log('[Tracker] Sending event:', event.type, eventName, event);
  
  // Use sendBeacon first so unload-time events are not dropped.
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    const beaconBody = new Blob([payload], { type: 'application/json' });
    const accepted = navigator.sendBeacon(API_ENDPOINT, beaconBody);
    if (accepted) {
      return true;
    }
  }

  // Fallback: fetch keepalive for browsers where beacon is unavailable/rejected.
  fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
    keepalive: true,
  })
    .then(response => {
      if (response.ok) {
        console.log('[Tracker] ✅ Event sent successfully:', response.status);
      } else {
        console.error('[Tracker] ❌ Event failed:', response.status, response.statusText);
        response.text().then(text => console.error('[Tracker] Response:', text));
      }
    })
    .catch((err) => console.error('[Tracker] ❌ Failed to send event:', err));

  return true;
}

/**
 * Create base event structure
 */
function createBaseEvent(type: EventType): Omit<Event, 'type'> {
  const identity = identityManager.getIdentity();
  const now = new Date().toISOString();

  return {
    messageId: generateUUID(),
    anonymousId: identity.anonymous_id,
    sessionId: identity.session_id,
    patientId: identity.patient_id,
    originalTimestamp: now,
    sentAt: now,
    context: buildContext(),
  };
}

/**
 * Track a custom event
 */
export function track(eventName: string, properties?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  
  const event: TrackEvent = {
    ...createBaseEvent('track'),
    type: 'track',
    event: eventName,
    properties,
  };
  sendEvent(event);
}

/**
 * Track a page view
 */
export function page(name?: string, properties?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  
  const event: PageEvent = {
    ...createBaseEvent('page'),
    type: 'page',
    name: name || document.title,
    properties,
  };
  sendEvent(event);
}

/**
 * Identify a user (called when patient is linked)
 */
export function identify(patientId: string, traits?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  
  identityManager.linkPatient(patientId);
  
  const event: IdentifyEvent = {
    ...createBaseEvent('identify'),
    type: 'identify',
    traits,
  };
  sendEvent(event);
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(): void {
  if (typeof window === 'undefined') return;
  
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollDepth = docHeight > 0 ? scrollTop / docHeight : 0;

  track('scroll', {
    depth: Math.round(scrollDepth * 100) / 100,
    pixels: scrollTop,
  });
}

/**
 * Track click on element
 */
export function trackClick(element: HTMLElement, customProperties?: Record<string, any>): void {
  const properties: Record<string, any> = {
    element_type: element.tagName.toLowerCase(),
    element_id: element.id || undefined,
    element_class: element.className || undefined,
    element_text: element.innerText?.substring(0, 100) || undefined,
    ...customProperties,
  };

  // Get data-track attributes
  const trackEvent = element.getAttribute('data-track');
  const trackProps = element.getAttribute('data-track-props');
  
  if (trackProps) {
    try {
      Object.assign(properties, JSON.parse(trackProps));
    } catch (e) {
      console.warn('[Tracker] Invalid data-track-props JSON');
    }
  }

  // Collect all data-track-* attributes
  Array.from(element.attributes).forEach(attr => {
    if (attr.name.startsWith('data-track-') && attr.name !== 'data-track-props') {
      const key = attr.name.replace('data-track-', '');
      properties[key] = attr.value;
    }
  });

  track(trackEvent || 'element_clicked', properties);
}

export const tracker = {
  track,
  page,
  identify,
  trackScrollDepth,
  trackClick,
};
