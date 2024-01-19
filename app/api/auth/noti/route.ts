import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export interface RowType {
  id: number;
  companyNoti: string;
  mainNoti: string;
  influencerNoti: string;
}
export async function POST(request: NextRequest) {
  try {
    const { companyNoti, mainNoti, influencerNoti } = await request.json();
    await connection.query(`
          CREATE TABLE IF NOT EXISTS notification (
            id INT AUTO_INCREMENT PRIMARY KEY,
            companyNoti text NOT NULL,
            mainNoti text NOT NULL,
            influencerNoti text NOT NULL
          )
        `);
    console.log("Table created successfully!");
    const origin = await connection.query<RowType[]>(
      `SELECT * from notificatin `
    );
    await connection.query(
      `
            INSERT INTO notification (companyNoti, mainNoti, influencerNoti)
            VALUES ('${companyNoti}', '${mainNoti}','${influencerNoti}')
          `
    );
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ type: "error" });
  }
}

export async function GET() {
  try {
    const notification = await new Promise<RowType[]>((resolve, reject) => {
      connection.query(`SELECT * from notification `, (error, rows) => {
        if (error) {
          return NextResponse.json({ type: "error" });
        }
        resolve(rows);
      });
    });
    const last =
      notification.length === 0
        ? { companyNoti: "", newNoti: "", influencerNoti: "" }
        : notification[notification.length - 1];
    return NextResponse.json({ type: "success", data: last });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ type: "error" });
  }
}
