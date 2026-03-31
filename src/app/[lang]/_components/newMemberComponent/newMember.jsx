import Link from "next/link";
import Image from "next/image";
import heroBanner from "../../../../../public/SoyNuevoImage/preChanges.webp";
import { EB_Garamond } from "next/font/google";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });

export default async function NewMember() {
  const t = await getTranslations("newMemberComponent");

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <Image
        src={heroBanner}
        alt="Welcome new members!"
        className="w-full object-cover"
        style={{ maxHeight: "380px", objectPosition: "center" }}
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-blue-950/40" />

      {/* CTA button */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
        <Link
          href="/SoyNuevo"
          className={`${ebG.className} inline-block bg-red-600 hover:bg-red-700 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-200`}
        >
          {t("Call To Action")}
        </Link>
      </div>
    </div>
  );
}
