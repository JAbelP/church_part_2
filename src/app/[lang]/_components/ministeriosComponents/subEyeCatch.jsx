import React from "react";
import Image from "next/image";

function SubEyeCatch({ names, imageLocation, altText, type }) {
  return (
    <div className="text-black relative">
      <div className="flex justify-center items-center">
        <div className="h-[500px] lg:w-[500px] w-3/5 border-4 border-black relative">
          <Image
            src={imageLocation}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="text-4xl font-normal tracking-widest mt-4 text-center mb-8">
        
        <p>{names}</p>
      </div>
    </div>
  );
}

export default SubEyeCatch;
