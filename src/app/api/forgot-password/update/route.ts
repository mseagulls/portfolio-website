import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { email, password } = body as { email?: string; password?: string };

  if (!email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  return NextResponse.json(
    {
      message: "Password update is disabled in this deployment build.",
      email,
    },
    { status: 200 },
  );
}
