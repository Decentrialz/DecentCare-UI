/**
 * Zapier Integration Health Check Endpoint
 * Verifies that the Zapier webhook is configured and accessible
 */

import { NextResponse } from 'next/server';

interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  message: string;
  zapierConfigured: boolean;
  timestamp: string;
  version: string;
}

export async function GET(): Promise<NextResponse<HealthCheckResponse>> {
  const timestamp = new Date().toISOString();
  const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

  // Check if Zapier webhook URL is configured
  if (!ZAPIER_WEBHOOK_URL) {
    return NextResponse.json(
      {
        status: 'degraded',
        message: 'Zapier webhook URL is not configured. Forms will not be submitted.',
        zapierConfigured: false,
        timestamp,
        version: '1.0.0',
      },
      { status: 200 }
    );
  }

  try {
    const testPayload = {
      test: true,
      timestamp,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {

      return NextResponse.json(
        {
          status: 'degraded',
          message: `Zapier webhook returned HTTP ${response.status}. Forms may not be delivered.`,
          zapierConfigured: true,
          timestamp,
          version: '1.0.0',
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: 'healthy',
        message: 'Zapier integration is healthy and operational',
        zapierConfigured: true,
        timestamp,
        version: '1.0.0',
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    console.error(`Zapier health check failed: ${errorMessage}`);

    return NextResponse.json(
      {
        status: 'unhealthy',
        message: `Zapier webhook is unreachable: ${errorMessage}`,
        zapierConfigured: true,
        timestamp,
        version: '1.0.0',
      },
      { status: 200 }
    );
  }
}
