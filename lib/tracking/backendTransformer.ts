/**
 * Transform Segment Spec events to Backend API format
 */

export interface BackendEvent {
  event_type: string;
  anonymous_id: string;
  session_id: string;
  patient_id?: string;
  timestamp_ms: number;
  page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  device_type?: string;
  browser?: string;
  screen_width?: number;
  screen_height?: number;
  viewport_width?: number;
  viewport_height?: number;
  timezone?: string;
  locale?: string;
  props?: Record<string, any>;
}

export function transformToBackendFormat(segmentEvent: any): BackendEvent {
  const backendEvent: BackendEvent = {
    // Map event type
    event_type: getEventType(segmentEvent),
    
    // Identity
    anonymous_id: segmentEvent.anonymousId,
    session_id: segmentEvent.sessionId,
    ...(segmentEvent.patientId && { patient_id: segmentEvent.patientId }),
    
    // Timestamp (convert to milliseconds)
    timestamp_ms: new Date(segmentEvent.originalTimestamp || new Date()).getTime(),
    
    // Page info
    ...(segmentEvent.context?.page?.path && { page: segmentEvent.context.page.path }),
    ...(segmentEvent.context?.page?.referrer && { referrer: segmentEvent.context.page.referrer }),
    
    // UTM params
    ...(segmentEvent.context?.campaign?.source && { utm_source: segmentEvent.context.campaign.source }),
    ...(segmentEvent.context?.campaign?.medium && { utm_medium: segmentEvent.context.campaign.medium }),
    ...(segmentEvent.context?.campaign?.name && { utm_campaign: segmentEvent.context.campaign.name }),
    ...(segmentEvent.context?.campaign?.content && { utm_content: segmentEvent.context.campaign.content }),
    ...(segmentEvent.context?.campaign?.term && { utm_term: segmentEvent.context.campaign.term }),
    
    // Device info
    ...(segmentEvent.context?.device?.type && { device_type: segmentEvent.context.device.type }),
    ...(segmentEvent.context?.userAgent && { browser: extractBrowser(segmentEvent.context.userAgent) }),
    
    // Screen info
    ...(segmentEvent.context?.screen?.width && { screen_width: segmentEvent.context.screen.width }),
    ...(segmentEvent.context?.screen?.height && { screen_height: segmentEvent.context.screen.height }),
    ...(segmentEvent.context?.viewport?.width && { viewport_width: segmentEvent.context.viewport.width }),
    ...(segmentEvent.context?.viewport?.height && { viewport_height: segmentEvent.context.viewport.height }),
    
    // Location info
    ...(segmentEvent.context?.timezone && { timezone: segmentEvent.context.timezone }),
    ...(segmentEvent.context?.locale && { locale: segmentEvent.context.locale }),
    
    // Custom properties
    ...(segmentEvent.properties && Object.keys(segmentEvent.properties).length > 0 && { props: segmentEvent.properties }),
  };
  
  return backendEvent;
}

function getEventType(event: any): string {
  if (event.type === 'page') {
    return 'page_view';
  }
  if (event.type === 'track' && event.event) {
    // Convert to snake_case
    return event.event.toLowerCase().replace(/\s+/g, '_');
  }
  if (event.type === 'identify') {
    return 'identify';
  }
  return 'custom_event';
}

function extractBrowser(userAgent: string): string {
  if (!userAgent) return 'Unknown';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Unknown';
}
