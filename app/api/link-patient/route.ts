import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const baseApi = process.env.BACKEND_TRACKING_API?.replace('/collect', '') || 'https://omnilens.dev.decentcare.ai/api/v1';
    
    const response = await fetch(`${baseApi}/link-patient`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error in /api/link-patient:', error);
    return NextResponse.json({ error: 'Failed to link patient' }, { status: 500 });
  }
}
