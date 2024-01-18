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
export default async function PUT(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ type: "success", data: body });

  // connection.query(
  //     `
  //   INSERT INTO users (email,password,name ,role)
  //   VALUES ('test@gmail.com','12345','管理者' ,'admin')
  //   `,
  //     (error, result) => {
  //       if (error) {
  //         console.error("Error creating admin:", error);
  //         return;
  //       }
  //       console.log("Admin created successfully.");
  //     }
  //   );
}
