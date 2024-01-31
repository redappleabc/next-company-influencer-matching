import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { API_KEY, ADMIN_EMAIL } from "./contig";

sgMail.setApiKey(API_KEY);

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
