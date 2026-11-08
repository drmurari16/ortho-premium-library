import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    success: true,
    mode: 'demo',
    gateway: 'razorpay',
    order_id: body?.order_id || 'demo_order',
    status: 'payment-received',
    message: 'Razorpay integration is configured for production credentials. Replace demo values with real env keys and verify webhooks before launch.',
  });
}
