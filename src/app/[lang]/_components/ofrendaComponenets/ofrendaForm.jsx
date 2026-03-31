"use client";

import { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import zelleImage from "../../../../../public/offerings/zelle-64.png";

const ebG = EB_Garamond({ subsets: ["latin"] });
const trajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

export default function OfrendaForm({
  nameText,
  phoneText,
  emailText,
  submitText,
  thanks,
  bibleVerse,
  bibleVerseCite,
  click,
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { push, refresh } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    grecaptcha.ready(() => {
      grecaptcha.execute(siteKey, { action: "submit" }).then(async (token) => {
        try {
          const response1 = await fetch("/api/reCaptcha", {
            method: "POST",
            headers: { "content-type": "application/json;charset=utf-8" },
            body: JSON.stringify({ recaptchaResponse: token }),
          });

          if (response1.ok) {
            const json = await response1.json();
            if (json.success) {
              await fetch("/api/submit", {
                method: "POST",
                headers: { "content-type": "application/json;charset=utf-8" },
                body: JSON.stringify({ name, email, phone, subject: "Ofrenda" }),
              });
              push(`/Ofrenda/Thanks`);
              refresh();
            }
          }
        } catch {}
      }).catch(() => {});
    });
  };

  const labelClass = "block text-gray-700 font-bold mb-1.5 text-sm";
  const inputClass = "border border-blue-950/20 bg-slate-50 rounded-lg px-3 py-2.5 w-full focus:outline-none focus:border-blue-950/50 focus:bg-white transition-colors";

  return (
    <div className={`${ebG.className} bg-white w-full text-black`}>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} />
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 flex flex-col lg:flex-row gap-10">

        {/* Form side */}
        <div className="flex-1">
          <p className="text-blue-950/80 text-base mb-5 leading-relaxed">{thanks}</p>

          {/* Zelle CTA */}
          <div className="flex items-center gap-4 bg-blue-50 border border-blue-950/10 rounded-xl px-4 py-4 mb-6">
            <Image src={zelleImage} alt="Zelle" width={48} height={48} />
            <p className="text-sm text-blue-950/70 flex-1">{click}</p>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText("(321)-278-3777")}
              className="bg-blue-950 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors whitespace-nowrap"
            >
              (321)-278-3777
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-blue-950/5 rounded-2xl p-6">
            <div>
              <label htmlFor="name" className={labelClass}>{nameText}</label>
              <input type="text" id="name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="phone" className={labelClass}>{phoneText}</label>
                <input type="tel" id="phone" className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className={labelClass}>{emailText}</label>
                <input type="email" id="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 tracking-wide"
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>

        {/* Bible verse sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-20 border-l-4 border-red-600 pl-5">
            <blockquote className={`${ebG.className} text-lg text-blue-950 italic leading-relaxed`}>
              {bibleVerse}
            </blockquote>
            <cite className={`${ebG.className} block mt-3 text-base text-blue-950/60 not-italic text-right`}>
              {bibleVerseCite}
            </cite>
          </div>
        </aside>
      </div>
    </div>
  );
}
