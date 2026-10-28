import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required" },
        { status: 400 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Studio monograph dispatch subscription confirmed",
      email,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process subscription" },
      { status: 400 }
    );
  }
}
