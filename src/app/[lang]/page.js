import Header from "@/app/[lang]/_components/headerComponent/header";
import MiddleEyeCatch from "@/app/[lang]/_components/mainPageComponent/middleEyeCatch";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateFont = localFont({ src: "../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function Home({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Home" });

  const featureCards = [
    {
      Title: t("Leadership"),
      description: t("Leadership Desc"),
      imageSource: "/SoyNuevoImage/OutSideTheChurch.jpg",
      Url: "/Liderazgo",
    },
    {
      Title: t("Ministries"),
      description: t("Ministries Desc"),
      imageSource: "/SoyNuevoImage/NewEyeCatch.jpg",
      Url: "/Ministerios",
    },
    {
      Title: t("About Us"),
      description: t("Who Are We Desc"),
      imageSource: "/SoyNuevoImage/OutSideTheChurch.png",
      Url: "/QuienesSomos",
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden flex flex-col text-black">
      <Header lang={lang} />

      {/* Hero banner */}
      <section className="w-full px-4 md:px-6 pt-6 pb-4">
        <NewMember />
      </section>

      {/* Feature cards */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureCards.map((card) => (
            <MiddleEyeCatch
              key={card.Title}
              title={card.Title}
              desc={card.description}
              imageSrc={card.imageSource}
              urlLink={`/${lang}${card.Url}`}
            />
          ))}
        </div>
      </section>

      {/* Bible verse */}
      <section className="max-w-5xl mx-auto w-full px-6 md:px-10 py-12 md:py-16">
        <div className="border-l-4 border-red-600 pl-6">
          <blockquote className={`${ebG.className} text-xl md:text-3xl lg:text-4xl font-normal text-blue-950 leading-relaxed italic`}>
            {t("Bible Verse")}
          </blockquote>
          <cite className={`${ebG.className} block mt-4 text-base md:text-xl text-blue-950/60 not-italic text-right`}>
            {t("Bible Verse Cite")}
          </cite>
        </div>
      </section>

      <Footer />
    </main>
  );
}
