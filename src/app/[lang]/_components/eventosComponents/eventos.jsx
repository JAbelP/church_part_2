import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import LanguageSelector from "../flagComponents/flagSelector";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

function Eventos({ eventName, eventTime, eventLocation, eventImage }) {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center text-left w-[348]  ">
        <div className="lg:w-[502px] h-[224px] w-10/12  relative">
          <Image src={eventImage} alt="Example" fill={true} />
        </div>
        <div className="ml-8">
          <div className={`${CopperplateBold.className} `}>
            <div className="text-2xl tracking-widest mb-4">
              {eventName}
            </div>
          </div>
          <div className="text-xl tracking-tight mb-4 ">
            {eventTime}
          </div>
          {eventLocation && (
            <p className="text-xl tracking-tight mb-4 ">
              {eventLocation}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Eventos;
