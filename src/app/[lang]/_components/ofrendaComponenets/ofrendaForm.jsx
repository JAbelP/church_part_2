"use client";
import React, { useState } from "react";
import Header from "../headerComponent/header";
import localFont from "next/font/local";
import Script from "next/script";
import { EB_Garamond } from "next/font/google";
import LanguageSelector from "../flagComponents/flagSelector";
import Image from "next/image";
import zelleImage from "../../../../../public/offerings/zelle-64.png";
import Router from "next/router";
import { useRouter } from "next/navigation";

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
  // set up for reCaptcha
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  // State for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { push, refresh } = useRouter();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data submission here

    grecaptcha.ready(() => {
      // Display the key/value pairs
      grecaptcha
        .execute(siteKey, { action: "submit" })
        .then(async (token) => {
          const bodyForGoogleResponse = {
            recaptchaResponse: token,
          };

          try {
            const response1 = await fetch("/api/reCaptcha", {
              method: "POST",
              headers: { "content-type": "application/json;charset=utf-8" },
              body: JSON.stringify(bodyForGoogleResponse),
            });

            if (response1.ok) {
              const json = await response1.json();

              const bodyNoJson = {
                name,
                email,
                phone,
                subject: "Ofrenda",
              };

              const body = JSON.stringify(bodyNoJson);
              if (json.success) {
                const response = await fetch("/api/submit", {
                  method: "POST",
                  headers: { "content-type": "application/json;charset=utf-8" },
                  body,
                });
                push(`/Ofrenda/Thanks`);
                Router.push("/Ofrenda/Thanks");
                refresh();
              }
            } else {
              throw new Error(response1.statusText);
            }
          } catch (error) {}
        })
        .catch((error) => {});
    });
  };

  return (
    <main className={`${ebG.className}`}>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      />
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="flex flex-row mb-16 lg:pl-16 text-xl lg:mt-0 mt-32 mx-auto justify-center">
          {/* Left Hand Side */}
          <div>
            <div className="w-2/3 mx-auto">
              <div className="mb-4 w-11/12 text-center">{thanks}</div>
              <div className=" rounded-lg  mb-4 px-4 py-3 h-auto bg-purple-300 h-16 flex flex-row justify-around items-center">
                <div className="flex flex-row items-center">
                  <Image
                    src={zelleImage}
                    alt="zelle-64"
                    width={64}
                    height={64}
                  />
                </div>{" "}
                <p className=" text-base">{click}</p>
                <div
                  className="text-xl bg-white rounded-md p-2"
                  onClick={() =>
                    navigator.clipboard.writeText("(321)-278-3777")
                  }
                >
                  (321)-278-3777
                </div>
              </div>
              <form
                className="bg-blue-200 rounded-lg p-8"
                onSubmit={handleSubmit}
              >
                {/* First Section */}
                {/* First Row */}
                <div className=" flex lg:flex-row flex-col gap-x-8 ">
                  {/* Name */}
                  <div className="mb-4">
                    <div className="block text-gray-700 font-bold mb-2">
                      <label htmlFor="name">{nameText} </label>
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="border bg-slate-200 rounded-lg px-3 py-2 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  {/* Name */}
                </div>
                {/* First Row */}

                <div className=" flex lg:flex-row flex-col gap-x-8 ">
                  {/* Phone */}
                  <div className="mb-4">
                    <div className="block text-gray-700 font-bold mb-2">
                      <label htmlFor="phone">{phoneText}</label>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className="border rounded-lg px-3 py-2 bg-slate-200 w-full"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  {/* Phone */}

                  {/* Email */}
                  <div className="mb-4">
                    <div className="block text-grasupy-700 font-bold mb-2">
                      <label htmlFor={"email"}> {emailText}</label>
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="border rounded-lg bg-slate-200 px-3 py-2 w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Email */}
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    {submitText}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right hand side */}
          <div className="w-1/3 hidden lg:block">
            <div className="relative">
              <div className="w-[298px]">
                <div className="text-[34px] capitalize leading-[70.38px]">
                  {bibleVerse}
                </div>
              </div>
              <div className="text-[51px]">{bibleVerseCite}</div>
            </div>
          </div>

          {/* Right Hand side */}
        </div>
      </div>
    </main>
  );
}
