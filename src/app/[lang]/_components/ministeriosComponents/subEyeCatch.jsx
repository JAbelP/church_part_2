import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function SubEyeCatch({ names, imageLocation, altText }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-2 border-blue-950/10">
        <Image
          src={imageLocation}
          alt={altText || names}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
        />
      </div>
      <p className={`${ebG.className} text-xl md:text-2xl font-medium tracking-widest text-center mt-4 mb-6 text-blue-950`}>
        {names}
      </p>
    </div>
  );
}
