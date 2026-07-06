import { NextResponse } from 'next/server';

function getApiBase(): string {
  const backendCollect = process.env.BACKEND_TRACKING_API || 'https://omnilens.dev.decentcare.ai/api/v1/collect';
  return backendCollect.replace(/\/collect\/?$/, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${getApiBase()}/virtual-numbers/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error in /api/virtual-numbers/assign:', error);
    return NextResponse.json({ error: 'Failed to assign virtual number' }, { status: 500 });
  }
}
