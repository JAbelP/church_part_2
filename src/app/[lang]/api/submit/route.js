// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// async function sendMail(body) {
//   const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: SMTP_EMAIL,
//       pass: SMTP_PASSWORD,
//     },
//   });

//   try {
//     const testResult = await transport.verify();
//   } catch (error) {
//     console.error({ error });
//     return;
//   }
//   const bodyJsonString = JSON.stringify(body);
//   let sendResult;
//   try {
//     if (body.subject === "New Member") {
//       sendResult = await transport.sendMail({
//         from: SMTP_EMAIL,
//         to: SMTP_EMAIL,
//         subject: "New Member",
//         text: JSON.stringify(body),
//         // html: body,
//       });
//     }
//     if (body.subject === "Ofrenda") {
//       sendResult = await transport.sendMail({
//         from: SMTP_EMAIL,
//         to: SMTP_EMAIL,
//         subject: "New Member",
//         text: JSON.stringify(body),
//       });
//       return {};
//     }
//     console.log(sendResult);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function POST(request) {
//   const body = await request.json();
//   await sendMail(body);
//   return NextResponse.json({ status: 200 });
// }

const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // const { firstName, lastName, email, message } = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: SMTP_EMAIL,
    to: SMTP_EMAIL,
    subject: "New Member",
    text: "Test",
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
};
