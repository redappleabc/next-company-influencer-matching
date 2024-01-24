import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../util/db";

export interface RowType {
  id: number;
  email: string;
  password: string;
  role: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);

    const result = await executeQuery(
      `SELECT * FROM users where email = '${body.id}'`
    ).catch((e) => {
      return NextResponse.json({ type: "error" });
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
    const result1 = await executeQuery(
      `SELECT * FROM ${type} where userId = ${user.id}`
    ).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    const targetId = result1[0].id;
    const targetStatus = result1[0].status;
    const isFree = result1[0].freeAccount ? result1[0].freeAccount : true;

    return NextResponse.json({
      type: "success",
      data: { ...user, targetId, targetStatus, isFree },
    });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
