import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.API_KEY as string);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
console.log(ADMIN_EMAIL);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, content } = body;
    const msg = {
      to,
      from: ADMIN_EMAIL,
      subject,
      text: content,
    };

    const res = await sgMail.send(msg);
    return NextResponse.json(res);
  } catch (error) {
    throw error;
  }
}
