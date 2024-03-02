import React from "react";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

function MainEyeCatch({ title, names, imageLocation, altText }) {
  return (
    <div className="text-center my-16">
      <div className={ebG.className}>
        <div className="text-black flex flex-col">
          <div>
            <p className="text-5xl font-medium tracking-widest">{title}</p>
          </div>
          <div className="lg:h-[610px] lg:w-[1500px] w-4/5 h-[400px] border-4 border-black relative mx-auto my-4">
            {/* Use mx-auto class to center the image */}
            <Image
              src={imageLocation}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-4xl font-normal tracking-widest mt-4">
          {/* Add mt-4 for top margin */}
          {names}
        </div>
      </div>
    </div>
  );
}

export default MainEyeCatch;
