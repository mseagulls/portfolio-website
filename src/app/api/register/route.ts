import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, email, password } = body as {
    name?: string;
    email?: string;
    password?: string;
  };

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  return NextResponse.json({
    id: "demo-user",
    name,
    email,
    message: "Registration is disabled in this stripped-down deployment build.",
  });
}
