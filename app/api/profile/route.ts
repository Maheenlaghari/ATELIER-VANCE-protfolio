import { NextResponse } from "next/server";
import { profileData } from "@/data/profile-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: profileData,
  });
}
