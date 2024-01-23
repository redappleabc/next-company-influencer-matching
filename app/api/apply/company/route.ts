import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../util/db";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const query = `SELECT apply.*,influencer.nickName, influencer.instagram,influencer.x,influencer.tiktok,influencer.youtube, influencer.facebook
      FROM apply
      LEFT JOIN influencer ON apply.influencerId = influencer.id
      WHERE apply.caseId = '${id}'
      ORDER BY apply.id DESC`;
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
