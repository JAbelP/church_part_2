import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateFont = localFont({ src: "../../../font/CopperplateBold.ttf" });

export default function EyeCatch({ title, imageLocation, desc }) {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12 px-4 md:px-6">
      <h2 className={`${CopperplateFont.className} text-xl md:text-2xl font-bold text-blue-950 tracking-widest capitalize mb-4`}>
        {title}
      </h2>
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md border border-blue-950/10">
        <Image
          src={imageLocation}
          alt={title || "Ministry"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
      </div>
      <p className={`${ebG.className} text-base md:text-lg leading-relaxed tracking-wide text-blue-950/80 mt-4 max-w-4xl mx-auto text-center`}>
        {desc}
      </p>
    </div>
  );
}
