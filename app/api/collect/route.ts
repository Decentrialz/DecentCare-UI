/**
 * Event Collection API (Proxy + Local Storage)
 * Receives tracking events from the frontend and forwards to backend
 * Also stores locally for dashboard viewing
 */

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for dashboard
let events: any[] = [];

// Backend API configuration
const BACKEND_API = process.env.BACKEND_TRACKING_API || 'https://omnilens.dev.decentcare.ai/api/v1/collect';
const COGNITO_TOKEN = process.env.BACKEND_COGNITO_TOKEN || 'dev';

const TRACKER_ALLOWED_ORIGINS = (process.env.TRACKER_ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

function resolveAllowedOrigin(request: NextRequest): string | null {
  const requestOrigin = request.headers.get('origin');

  // Non-browser calls may omit Origin.
  if (!requestOrigin) {
    return TRACKER_ALLOWED_ORIGINS[0] || '*';
  }

  // If allowlist is empty, allow the calling browser origin.
  if (TRACKER_ALLOWED_ORIGINS.length === 0 || TRACKER_ALLOWED_ORIGINS.includes('*')) {
    return requestOrigin;
  }

  if (TRACKER_ALLOWED_ORIGINS.includes(requestOrigin)) {
    return requestOrigin;
  }

  return null;
}

function withCors(request: NextRequest, response: NextResponse): NextResponse {
  const allowedOrigin = resolveAllowedOrigin(request);
  if (allowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);

    // Browsers reject credentialed requests when origin is '*'.
    if (allowedOrigin !== '*') {
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
  }

  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');
  response.headers.set('Vary', 'Origin');

  return response;
}

function corsDenied(request: NextRequest): NextResponse {
  return withCors(
    request,
    NextResponse.json(
      { success: false, error: 'Origin not allowed' },
      { status: 403 }
    )
  );
}

export async function OPTIONS(request: NextRequest) {
  if (!resolveAllowedOrigin(request)) {
    return corsDenied(request);
  }

  return withCors(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  if (!resolveAllowedOrigin(request)) {
    return corsDenied(request);
  }

  try {
    const body = await request.json();
    
    // Handle both single event and batch
    const incomingEvents = Array.isArray(body) ? body : [body];
    
    // Add server-side enrichment
    const enrichedEvents = incomingEvents.map(event => ({
      ...event,
      receivedAt: new Date().toISOString(),
      timestamp: calculateTimestamp(event),
      serverContext: {
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }
    }));
    
    // Store events locally for dashboard
    events.push(...enrichedEvents);
    if (events.length > 1000) {
      events = events.slice(-1000);
    }
    
    console.log(`[Tracking API] Received ${enrichedEvents.length} event(s):`, 
      enrichedEvents.map(e => e.event_type || e.type).join(', ')
    );
    
    // Forward to backend API (fire and forget, don't block response)
    forwardToBackend(body).catch(err => {
      console.error('[Tracking API] Backend forward failed:', err.message);
    });
    
    return withCors(
      request,
      NextResponse.json(
        {
          success: true,
          received: enrichedEvents.length,
        },
        { status: 202 }
      )
    );
    
  } catch (error) {
    console.error('[Tracking API] Error:', error);
    return withCors(
      request,
      NextResponse.json(
        {
          success: false,
          error: 'Failed to process events',
        },
        { status: 400 }
      )
    );
  }
}

export async function GET(request: NextRequest) {
  if (!resolveAllowedOrigin(request)) {
    return corsDenied(request);
  }

  // Get recent events for debugging/dashboard
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '100');
  const type = url.searchParams.get('type');
  const anonymousId = url.searchParams.get('anonymousId');
  
  let filteredEvents = events;
  
  if (type) {
    filteredEvents = filteredEvents.filter(e => e.type === type);
  }
  
  if (anonymousId) {
    filteredEvents = filteredEvents.filter(e => e.anonymousId === anonymousId);
  }
  
  // Return most recent events first
  const recentEvents = filteredEvents.slice(-limit).reverse();
  
  return withCors(
    request,
    NextResponse.json({
      total: filteredEvents.length,
      events: recentEvents,
      stats: {
        totalEvents: events.length,
        uniqueVisitors: new Set(events.map(e => e.anonymousId)).size,
        uniqueSessions: new Set(events.map(e => e.sessionId)).size,
      },
    })
  );
}

function calculateTimestamp(event: any): string {
  try {
    const receivedAt = new Date();
    const sentAt = new Date(event.sentAt);
    const originalTimestamp = new Date(event.originalTimestamp);
    
    // Corrected timestamp = receivedAt - (sentAt - originalTimestamp)
    const clockSkew = sentAt.getTime() - originalTimestamp.getTime();
    const correctedTime = new Date(receivedAt.getTime() - clockSkew);
    
    return correctedTime.toISOString();
  } catch (error) {
    return new Date().toISOString();
  }
}

/**
 * Forward events to backend API (bypasses CORS since this runs server-side)
 * Forward payload unchanged; backend normalizes Segment/flat payloads.
 */
async function forwardToBackend(eventData: any): Promise<void> {
  try {
    const response = await fetch(BACKEND_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COGNITO_TOKEN}`,
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      console.log('[Tracking API] ✅ Forwarded to backend:', response.status);
    } else {
      const text = await response.text();
      console.error('[Tracking API] ❌ Backend rejected:', response.status, text);
    }
  } catch (error: any) {
    console.error('[Tracking API] ❌ Backend request failed:', error.message);
    throw error;
  }
}