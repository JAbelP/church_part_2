import React from "react";
import Link from "next/link";
import heroBanner from "../../../../../public/SoyNuevoImage/preChanges.webp";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });

function NewMember() {
  const t = useTranslations('newMemberComponent')
  return (
    <div className="bg-red-600 rounded-md mx-auto md:w-[1220px] md:min-h-[379px] w-3/4 flex flex-col justify-end relative">
      <Image
        className="rounded-md w-[12204px] min-h-[379px] max-h-[379px] border-sky-500 border-8"
        src={heroBanner}
        alt={"Welcome new members!"}
      />
      <Link href={"/SoyNuevo"}>
        <button className="bg-sky-500 p-3 rounded-xl text-3xl absolute bottom-14 right-20 text-black">
          <div className={ebG.className}>
          {t('Call To Action')}
          </div>
        </button>
      </Link>
    </div>
  );
}

export default NewMember;
