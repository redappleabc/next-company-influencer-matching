import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../util/db";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const query = `SELECT cases.*, company.companyName
      FROM cases
      LEFT JOIN company ON cases.companyId=company.id 
      where cases.id = ${id}`;
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const { update, reason, approveMode } = await request.json();
    const query = approveMode
      ? `UPDATE cases
    SET status = '${update}',reason = '${reason}'
    WHERE id = ${id}`
      : `UPDATE cases
    SET collectionStatus = '${update}'
    WHERE id = ${id}`;

    const result = await executeQuery(query);
    if (result) return NextResponse.json({ type: "success" });
    else return NextResponse.json({ type: "error" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
