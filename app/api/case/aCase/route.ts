import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const query = `SELECT cases.*, company.companyName
      FROM cases
      LEFT JOIN company ON cases.companyId=company.id 
      where cases.id = ${id}`;
    const rows = await new Promise((resolve, reject) => {
      connection.query(query, (error, rows) => {
        if (error) {
          return NextResponse.json({ type: "error" });
        }
        resolve(rows);
      });
    });
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const { val, reason } = await request.json();
    console.log(id, val);
    const update = val ? "承認" : "否認";
    const query = `UPDATE cases
    SET status = '${update}',reason = '${reason}'
    WHERE id = ${id}`;
    const result = await connection.query(query);
    if (result) return NextResponse.json({ type: "success" });
    else return NextResponse.json({ type: "error" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
