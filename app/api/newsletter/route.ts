import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body?.email === 'string' ? body.email.trim() : '';

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { success: false, message: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Newsletter subscription request accepted. Connect to a CRM or email provider to activate it in production.',
    email,
  });
}
