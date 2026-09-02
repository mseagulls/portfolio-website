import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await request.json().catch(() => ({}));

  return NextResponse.json(
    {
      message: "Stripe checkout is disabled in this deployment build.",
    },
    { status: 410 },
  );
}
