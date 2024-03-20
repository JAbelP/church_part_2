import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

async function sendMail(body) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
  } catch (error) {
    console.error({ error });
    return;
  }
  const bodyJsonString = JSON.stringify(body);
  let sendResult;
  try {
    if (body.subject === "New Member") {
      await new Promise((resolve, reject) => {
        sendResult = transport.sendMail({
          from: SMTP_EMAIL,
          to: SMTP_EMAIL,
          subject: "New Member",
          text: JSON.stringify(body),
          // html: body,
        });
      });
    }
    if (body.subject === "Ofrenda") {
      await new Promise((resolve, reject) => {
        sendResult = transport.sendMail({
          from: SMTP_EMAIL,
          to: SMTP_EMAIL,
          subject: "Ofrenda",
          text: JSON.stringify(body),
          // html: body,
        });
      });
    }
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request) {
  const body = await request.json();
  await sendMail(body);
  return NextResponse.json({ status: 200 });
}
