import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";
    const query = `SELECT * FROM cases where companyId = ${id}`;
    const rows = await new Promise((resolve, reject) => {
      connection.query(query, (error, rows) => {
        if (error) {
          return NextResponse.json({ type: "error" });
        }
        resolve(rows);
      });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
