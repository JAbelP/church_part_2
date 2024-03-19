import React from "react";
import { EB_Garamond } from "next/font/google";
import Credits from "./credits";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });

function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className={ebG.className}>
      <div className="text-black my-6">
        <div className="bg-black h-8 mb-8" />
        <div className="flex lg:flex-row flex-col gap-x-6 justify-center">
          <div className=" hidden lg:block lg:ml-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8445983612955!2d-81.38578!3d28.4541006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c56424b846b%3A0x86231d74c47a331f!2s7600%20Winegard%20Rd%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sen!2sus!4v1695267438256!5m2!1sen!2sus"
              width="703"
              height="324"
              style={{ border: "0" }} // Convert the style attribute to an object
              allowFullScreen="" // camelCase "allowfullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-[343px] h-auto relative  my-4 text-4xl mx-auto">
            {/* Time and dates  */}
            <div className="w-[395px] mt-5 ">
              <div className="mb-4">
                <div className="underline">{t("Visit")}</div>
                <p>7600 Winegard Rd. Orlando, FL 32809</p>
              </div>
              <div className="mb-4">
                <div className="underline ">{t("Hours")}</div>
                <div>
                  <div>{t("Time1")}</div>
                  <div>{t("Time2")}</div>
                </div>
              </div>
              <div className="lg:hidden block">
                <p className="text-4xl underline mb-3">Links</p>
                <a href="https://mosaicmennonites.org/" className=" text-xl">
                  MOSAIC MENNONITE CONFERENCE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:ml-8 lg:mt-4 lg:block">
          <div className="mb-40">
            <p className="text-5xl">Links</p>
            <a href="https://mosaicmennonites.org/" className="font-semibold">
              MOSAIC MENNONITE CONFERENCE
            </a>
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default Footer;
