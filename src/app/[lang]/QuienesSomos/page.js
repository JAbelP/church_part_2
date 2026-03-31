import Image from "next/image";
import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("QuienesSomosTitle"),
    description: t("QuienesSomosDescription"),
  };
}

export default async function QuienesSomos({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "WhoAreWe" });

  const sections = [
    { title: t("Mission"), body: t("WeAreAChurch") },
    { title: t("Vision"), body: t("Evangelize and Disciple through the city") },
  ];

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      {/* Page title */}
      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("whoAreWe")}
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto w-full px-4 md:px-6 py-12 md:py-16 flex flex-col gap-10">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border-l-4 border-red-600 pl-6"
          >
            <h2 className={`${CopperplateFont.className} text-blue-950 text-xl md:text-3xl font-bold tracking-widest mb-3`}>
              {section.title}
            </h2>
            <p className={`${ebG.className} text-lg md:text-xl text-blue-950/80 leading-relaxed`}>
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* Beliefs graphic */}
      <section className="flex justify-center px-4 pb-12">
        <Image
          width={600}
          height={650}
          src="/QuienesSomosSVG/middleEyeCatch.svg"
          alt="Beliefs"
          className="max-w-full h-auto"
        />
      </section>

      <Footer />
    </main>
  );
}
