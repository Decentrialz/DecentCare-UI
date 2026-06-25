/**
 * Event Types - Following Segment Spec
 */

export type EventType = 'page' | 'track' | 'identify' | 'alias';

export interface BaseEvent {
  messageId: string;
  type: EventType;
  anonymousId: string;
  sessionId: string;
  patientId?: string | null;
  originalTimestamp: string;
  sentAt: string;
  context: EventContext;
}

export interface EventContext {
  page: {
    path: string;
    url: string;
    title: string;
    referrer: string;
    search?: string;
  };
  campaign?: {
    source?: string;
    medium?: string;
    name?: string;
    content?: string;
    term?: string;
  };
  device: {
    type: 'desktop' | 'mobile' | 'tablet';
  };
  screen: {
    width: number;
    height: number;
  };
  viewport: {
    width: number;
    height: number;
  };
  timezone: string;
  locale: string;
  userAgent: string;
  ip?: string;
  fingerprint?: string;
}

export interface PageEvent extends BaseEvent {
  type: 'page';
  name: string;
  properties?: Record<string, any>;
}

export interface TrackEvent extends BaseEvent {
  type: 'track';
  event: string;
  properties?: Record<string, any>;
}

export interface IdentifyEvent extends BaseEvent {
  type: 'identify';
  traits?: Record<string, any>;
}

export interface AliasEvent extends BaseEvent {
  type: 'alias';
  previousId: string;
}

export type Event = PageEvent | TrackEvent | IdentifyEvent | AliasEvent;
