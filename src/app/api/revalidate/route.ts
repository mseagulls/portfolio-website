import { type NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
  return NextResponse.json(
    {
      status: 200,
      revalidated: false,
      message: "Sanity revalidation is disabled in this deployment build.",
    },
    { status: 200 },
  );
}
