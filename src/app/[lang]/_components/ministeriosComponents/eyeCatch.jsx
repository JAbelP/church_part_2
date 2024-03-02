import React from "react";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
const ebG = EB_Garamond({ subsets: ["latin"] });

function EyeCatch({ title, imageLocation, desc }) {
  return (
    <div className="text-black mb-8 ">
      <div className={ebG.className}>
        <div className="mb-2 text-black font-bold break-words text-3xl text-center lg:text-left fonts-medium tracking-[2.55px] capitalize w-3/4 mx-auto lg:w-auto">
          {/* <Text aText={title}/> */}
          {title}
        </div>
      </div>
      <div className="relative lg:w-[1326px] mx-auto w-3/4 h-[440px] bg-red-600 border-8 border-black mb-2">
        <Image src={imageLocation} alt="Example" fill={true} />
      </div>
      <div className="lg:w-[1026px]  text-xl px-7 font-medium leading-[31px] tracking-wider m-auto capitalize text-center">
        {desc}
      </div>
    </div>
  );
}

export default EyeCatch;
