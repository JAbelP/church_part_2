"use client";

import { useState } from "react";
import Script from "next/script";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const ebG = EB_Garamond({ subsets: ["latin"] });
const trajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

export default function EntirePage({
  aboutYouHeader,
  nameText,
  ageText,
  genderText,
  Male,
  Female,
  phoneText,
  emailText,
  Evangalism,
  Facebook,
  Convert,
  selectGender,
  contactInformation,
  additionalInformation,
  howDidYouHear,
  selectAnOption,
  iWouldLikeTo,
  joinTheChurch,
  talkToSomeone,
  doYouHaveaPetition,
  friend,
  submitText,
  bibleVerse,
  bibleVerseCite,
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [heard, setHeard] = useState("");
  const [wouldLikeTo, setWouldLikeTo] = useState("");
  const [petition, setPetition] = useState("");
  const { push, refresh } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    grecaptcha.ready(() => {
      grecaptcha.execute(siteKey, { action: "submit" }).then(async (token) => {
        try {
          const response1 = await fetch(`/api/reCaptcha`, {
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
                body: JSON.stringify({ name, age, gender, email, phone, heard, wouldLikeTo, petition, subject: "New Member" }),
              });
              push(`/SoyNuevo/Success`);
              refresh();
            }
          }
        } catch {}
      }).catch(() => {});
    });
  };

  const labelClass = "block text-gray-700 font-bold mb-1.5 text-sm";
  const inputClass = "border border-blue-950/20 bg-slate-50 rounded-lg px-3 py-2.5 w-full focus:outline-none focus:border-blue-950/50 focus:bg-white transition-colors";
  const selectClass = "border border-blue-950/20 bg-slate-50 rounded-lg px-3 py-2.5 w-full focus:outline-none focus:border-blue-950/50 transition-colors";
  const sectionHeadClass = `${trajanProFont.className} text-xl md:text-2xl font-extrabold mb-5 mt-8 text-blue-950 tracking-wider border-b border-red-600/30 pb-2`;

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} />
      <div className={`${ebG.className} bg-white w-full text-black`}>
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 flex flex-col lg:flex-row gap-10">

          {/* Form */}
          <div className="flex-1">
            <h2 className={sectionHeadClass}>{aboutYouHeader}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className={labelClass}>{nameText}</label>
                  <input type="text" id="name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="age" className={labelClass}>{ageText}</label>
                  <input type="number" id="age" className={inputClass} value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
              </div>

              <div className="max-w-xs">
                <label htmlFor="gender" className={labelClass}>{genderText}</label>
                <select id="gender" className={selectClass} value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">{selectGender}</option>
                  <option value="Male">{Male}</option>
                  <option value="Female">{Female}</option>
                </select>
              </div>

              <h2 className={sectionHeadClass}>{contactInformation}</h2>
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

              <h2 className={sectionHeadClass}>{additionalInformation}</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="heard" className={labelClass}>{howDidYouHear}</label>
                  <select id="heard" className={selectClass} value={heard} onChange={(e) => setHeard(e.target.value)} required>
                    <option value="">{selectAnOption}</option>
                    <option value="Friend">{friend}</option>
                    <option value="Evangalism">{Evangalism}</option>
                    <option value="Facebook">{Facebook}</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="wouldLikeTo" className={labelClass}>{iWouldLikeTo}</label>
                  <select id="wouldLikeTo" className={selectClass} value={wouldLikeTo} onChange={(e) => setWouldLikeTo(e.target.value)} required>
                    <option value="">{selectAnOption}</option>
                    <option value="Join The Church">{joinTheChurch}</option>
                    <option value="Convert">{Convert}</option>
                    <option value="Talk To Someone">{talkToSomeone}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="petition" className={labelClass}>{doYouHaveaPetition}</label>
                <textarea
                  id="petition"
                  className={`${inputClass} h-40 resize-none`}
                  value={petition}
                  onChange={(e) => setPetition(e.target.value)}
                />
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
    </>
  );
}
