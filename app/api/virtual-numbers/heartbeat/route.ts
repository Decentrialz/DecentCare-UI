import { NextRequest, NextResponse } from 'next/server';

const TRACKER_ALLOWED_ORIGINS = (process.env.TRACKER_ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

function getApiBase(): string {
  const backendCollect = process.env.BACKEND_TRACKING_API || 'https://omnilens.dev.decentcare.ai/api/v1/collect';
  return backendCollect.replace(/\/collect\/?$/, '');
}

function resolveAllowedOrigin(request: NextRequest): string | null {
  const requestOrigin = request.headers.get('origin');

  if (!requestOrigin) {
    return TRACKER_ALLOWED_ORIGINS[0] || '*';
  }

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
    if (allowedOrigin !== '*') {
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
  }

  response.headers.set('Access-Control-Allow-Methods', 'POST,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-tenant-id');
  response.headers.set('Access-Control-Max-Age', '86400');
  response.headers.set('Vary', 'Origin');

  return response;
}

function corsDenied(request: NextRequest): NextResponse {
  return withCors(
    request,
    NextResponse.json(
      { error: 'Origin not allowed' },
      { status: 403 }
    )
  );
}

function safeParseJson(text: string): any {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
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
    const tenantIdHeader = request.headers.get('x-tenant-id');
    const forwardHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (tenantIdHeader) {
      forwardHeaders['x-tenant-id'] = tenantIdHeader;
    }

    const response = await fetch(`${getApiBase()}/virtual-numbers/heartbeat`, {
      method: 'POST',
      headers: forwardHeaders,
      body: JSON.stringify(body),
    });

    const raw = await response.text();
    const parsed = safeParseJson(raw);
    const payload = parsed ?? { detail: raw || null };
    return withCors(request, NextResponse.json(payload, { status: response.status }));
  } catch (error) {
    console.error('Error in /api/virtual-numbers/heartbeat:', error);
    return withCors(
      request,
      NextResponse.json({ error: 'Failed to heartbeat virtual number assignment' }, { status: 500 })
    );
  }
}
