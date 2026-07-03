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

export async function POST(request: NextRequest) {
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
    
    return NextResponse.json({ 
      success: true,
      received: enrichedEvents.length 
    }, { status: 202 });
    
  } catch (error) {
    console.error('[Tracking API] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process events' 
    }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
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
  
  return NextResponse.json({
    total: filteredEvents.length,
    events: recentEvents,
    stats: {
      totalEvents: events.length,
      uniqueVisitors: new Set(events.map(e => e.anonymousId)).size,
      uniqueSessions: new Set(events.map(e => e.sessionId)).size,
    }
  });
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