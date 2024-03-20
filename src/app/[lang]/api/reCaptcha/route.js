import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;
  
    const { recaptchaResponse } = body;
  
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`;
  
    try {
        const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
        const recaptchaJson = await recaptchaRes.json();
        
        return NextResponse.json({...recaptchaJson},{status: 200});
    } catch (e) {
        
        return NextResponse.json({error:e.error},{status: 400});
    }
  };
