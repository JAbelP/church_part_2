import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import LanguageSelector from "../flagComponents/flagSelector";
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

{
  /* <div className={`${CopperplateBold.className} `}> */
}

function Eventos({ eventName, eventTime, eventLocation, eventImage }) {
  return (
    <>
      {/* <div className="flex md:flex-row flex-col text-left w-[348]  "> */}
      <div className="flex flex-row gap-x-3">
        <div className="w-[348]">
          <Image src={eventImage} alt="Example" width={348} height={120} />
        </div>
        <div>
          {eventName}
          {eventTime}
        </div>
      </div>
      {/* {eventLocation && { eventLocation }} */}
      <div className="flex flex-col items-center text-center py-4 lg:flex-row lg:justify-center">
        <div>
          <Image
            src={eventImage}
            alt={eventName}
            width={320}
            height={180}
            // className="rounded-lg"
          />
        </div>
        <div className="w-10/12 lg:w-3/12 lg:pl-4 pt-2">
          <p className="font-bold capitalize">{eventName}</p>
          <p className="pt-2">{eventTime}</p>
          <p className="pt-2 capitalize">{eventLocation}</p>
          <p className="pt-2">{sermon.Date}</p>
        </div>
      </div>
      );
    </>
  );
}

export default Eventos;
