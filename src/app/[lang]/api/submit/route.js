// [IMPROVE] :  try implementing this https://www.youtube.com/watch?v=dDpZfOQBMaU&ab_channel=LeeRobinson

// import type { NextApiRequest, NextApiResponse } from 'next'
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("handler")
//   const data = req.body
//   const id = await (data)
//   console.log(id)
//   res.status(200).json({ id })
// }

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
      sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        subject: "New Member",
        text: JSON.stringify(body),
        // html: body,
      });
    }
    if (body.subject === "Ofrenda") {
      sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        subject: "New Member",
        text: JSON.stringify(body),
      });
      return {};
    }
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request) {
  const body = await request.json();
  sendMail(body);
  return NextResponse.json({ status: 200 });
}
