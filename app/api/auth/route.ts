import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/api/util/db.js";

export interface RowType {
  id: number;
  email: string;
  password: string;
  role: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await new Promise<RowType[]>((resolve, reject) => {
      connection.query(
        `SELECT * FROM users where email = '${body.id}'`,
        (error, result) => {
          if (error) {
            return NextResponse.json({ type: "error" });
          }
          resolve(result);
        }
      );
    });
    if (result.length === 0) {
      return NextResponse.json({
        type: "error",
        msg: "入力に誤りがあります。",
      });
    }
    const user = result[0];
    if (user.password !== body.password) {
      return NextResponse.json({
        type: "error",
        msg: "入力に誤りがあります。",
      });
    }
    if (user.role === "admin") {
      return NextResponse.json({ type: "success", data: user });
    }
    const type = user.role === "企業" ? "company" : "influencer";
    let result1 = await new Promise<RowType[]>((resolve, reject) => {
      connection.query(
        `SELECT id FROM ${type} where userId = ${user.id}`,
        (error, result) => {
          if (error) {
            return NextResponse.json({ type: "error" });
          }
          resolve(result);
        }
      );
    });
    const targetId = result1[0].id;
    return NextResponse.json({
      type: "success",
      data: { ...user, targetId },
    });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const result = await new Promise<RowType[]>((resolve, reject) => {
//       connection.query("SELECT * FROM users", (error, result) => {
//         if (error) {
//           reject(error);
//           return;
//         }
//         resolve(result);
//       });
//     });
//     const user = result.filter((aUser) => aUser.email === body.id);
//     if (user.length === 0) {
//       return NextResponse.json({
//         type: "error",
//         msg: "入力に誤りがあります。",
//       });
//     }
//     if (user[0].password !== body.password) {
//       return NextResponse.json({
//         type: "error",
//         msg: "入力に誤りがあります。",
//       });
//     }
//     return NextResponse.json({ type: "success", data: user[0] });
//   } catch (error) {
//     console.error("Error creating table or inserting record:", error);
//     return NextResponse.json({ error: error });
//   }
// }
