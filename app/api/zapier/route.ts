/**
 * Zapier Webhook Integration API
 * Handles form submissions from Demo and Contact forms
 */

import { NextRequest, NextResponse } from 'next/server';
import { FormSubmissionData, ZapierResponse } from '@/lib/zapier/types';
import { buildZapierPayload } from '@/lib/zapier/payload-builder';

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

export async function POST(request: NextRequest): Promise<NextResponse<ZapierResponse>> {
  const timestamp = new Date().toISOString();

  try {
    let data: Partial<FormSubmissionData>;
    try {
      data = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON in request body',
          error: 'Request body must be valid JSON',
          timestamp,
        },
        { status: 400 }
      );
    }

    const formData = data as FormSubmissionData;
    const pageUrl = request.headers.get('referer') || 'decentcare.ai';
    const zapierPayload = buildZapierPayload(formData, pageUrl);

    if (!ZAPIER_WEBHOOK_URL) {
      console.error('Zapier webhook URL is not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Zapier integration is not configured',
          error: 'ZAPIER_WEBHOOK_URL environment variable is missing',
          timestamp,
        },
        { status: 500 }
      );
    }

    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierPayload),
    });

    const zapierBody = await zapierResponse.text();

    console.log('Environment:', process.env.NODE_ENV);
    console.log('Payload:', JSON.stringify(zapierPayload));
    console.log('Zapier status:', zapierResponse.status);
    console.log('Zapier response:', zapierBody);

    console.log('Zapier webhook configured:', Boolean(ZAPIER_WEBHOOK_URL));

    if (ZAPIER_WEBHOOK_URL) {
      console.log(
        'Zapier webhook host:',
        new URL(ZAPIER_WEBHOOK_URL).host
      );

      console.log(
        'Zapier webhook path:',
        new URL(ZAPIER_WEBHOOK_URL).pathname
      );
    }

    if (!zapierResponse.ok) {
      console.error('Zapier webhook error:', zapierResponse.status);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to submit to Zapier',
          error: `Zapier returned status ${zapierResponse.status}`,
          timestamp,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Zapier API error:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process form submission',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp,
      },
      { status: 500 }
    );
  }
}
