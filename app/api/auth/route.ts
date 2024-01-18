import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export interface RowType {
  email: string;
  password: string;
  role: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await new Promise<RowType[]>((resolve, reject) => {
      connection.query("SELECT * FROM users", (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
    const user = result.filter((aUser) => aUser.email === body.id);
    if (user.length === 0) {
      return NextResponse.json({
        type: "error",
        msg: "入力に誤りがあります。",
      });
    }
    if (user[0].password !== body.password) {
      return NextResponse.json({
        type: "error",
        msg: "入力に誤りがあります。",
      });
    }
    return NextResponse.json({ type: "success", data: user[0] });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
