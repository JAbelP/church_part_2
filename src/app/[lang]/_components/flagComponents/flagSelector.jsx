"use client";
import { useLanguageContext } from "./LanguageContext";
import Image from "next/image";
import BrazilImage from "../../../../../public/Language Icons/brazil.png";
import EnglishImage from "../../../../../public/Language Icons/usa.png";
import SpanishImage from "../../../../../public/Language Icons/spain.png";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const LanguageSelector = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const pushme = (language) => {
    const restOfPath = pathname.split("/")[2] || "/";
    const changeLanguage = `/${language}/${restOfPath}`;
    console.log("changeLanguage: " + changeLanguage);
    push(changeLanguage, changeLanguage, { locale: { language } });
  };
  return (
    <div className=" bg-blue-500 z-20 p-3 rounded-lg flex flex-col fixed lg:right-2 lg:top-8 top-10 gap-x-6">
      <Link href={`/pt/${pathname.split("/")[2] || "/"}`}>
        <Image src={BrazilImage} />
      </Link>
      <Link href={`/es/${pathname.split("/")[2] || "/"}`}>
        <Image src={SpanishImage} />
      </Link>

      <Link href={`/en/${pathname.split("/")[2] || "/"}`}>
        <Image src={EnglishImage} />
      </Link>
      
    </div>
  );
};

export default LanguageSelector;
