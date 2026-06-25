import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const baseApi = process.env.BACKEND_TRACKING_API?.replace('/collect', '') || 'https://omnilens.dev.decentcare.ai/api/v1';
    
    const response = await fetch(`${baseApi}/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BACKEND_COGNITO_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error in /api/tokens:', error);
    return NextResponse.json({ error: 'Failed to generate token' }, { status: 500 });
  }
}
