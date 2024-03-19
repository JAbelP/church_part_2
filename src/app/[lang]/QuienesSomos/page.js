import Image from "next/image";
import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { lang } }) {
  return {
    title: "QuienesSomosTitle",
    description: "QuienesSomosDescription",
  };
}

export default function Home({ params: { lang } }) {
  const t = useTranslations("WhoAreWe");

  function MiddlePageText({ header, description }) {
    return (
      <div>
        <h1 className="font-extrabold text-6xl pb-4">{header}</h1>
        <p className="text-3xl pb-8 px-3">{description}</p>
      </div>
    );
  }

  const MiddleEyeCatchArray = [
    { Title: t("Mission"), Description: t("WeAreAChurch") },
    {
      Title: t("Vision"),
      Description: t("Evangelize and Disciple through the city"),
    },
  ];

  return (
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header lang={lang} />
        </div>
        <div className="flex flex-col text-center items-center mt-5">
          <div className={CopperplateBold.className}>
            <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
              {t("whoAreWe")}
            </div>
          </div>
          {MiddleEyeCatchArray.map((middEyeCatchCard) => {
            return (
              <MiddlePageText
                header={middEyeCatchCard.Title}
                description={middEyeCatchCard.Description}
                key={middEyeCatchCard.Title}
              />
            );
          })}
          <Image
            width={642}
            height={696}
            src={"/QuienesSomosSVG/middleEyeCatch.svg"}
            alt="Beliefs"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}
