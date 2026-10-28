import { NextResponse } from "next/server";
import { loeweProjectData } from "@/data/loewe-project";
import { archiveProjectsData } from "@/data/archive-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug === "loewe" || slug === "loewe_paris" || slug === "loewe-paris") {
    return NextResponse.json({
      success: true,
      data: loeweProjectData,
    });
  }

  return NextResponse.json({
    success: true,
    data: archiveProjectsData,
    total: archiveProjectsData.length,
  });
}
