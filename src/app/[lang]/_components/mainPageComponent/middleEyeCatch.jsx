"use client";

import Link from "next/link";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default function MiddleEyeCatch({ title, desc, imageSrc, urlLink }) {
  return (
    <Link href={urlLink} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden shadow-md border border-blue-950/10"
        style={{ height: "320px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className={`${ebG.className} text-xl md:text-2xl font-bold text-white tracking-wide mb-1`}>
            {title}
          </h3>
          {desc && (
            <p className={`${ebG.className} text-sm md:text-base text-white/80 leading-snug line-clamp-2`}>
              {desc}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
