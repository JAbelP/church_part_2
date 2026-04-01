import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import EyeCatch from "@/app/[lang]/_components/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("MinistriesTitle"),
    description: t("MinistriesDescription"),
  };
}

export default async function Ministerios({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });
  const tM = await getTranslations({ locale: lang, namespace: "Minstries" });

  // ─── Edit ministries here ─────────────────────────────────────────────────
  const ministries = [
    { titleKey: "Evangelism Title", descKey: "Evangelism Short", image: "/SoyNuevoImage/OutSideTheChurch.jpg" },
    { titleKey: "Worship Title", descKey: "Worship Short", image: "/SoyNuevoImage/NewEyeCatch.jpg" },
    { titleKey: "Christian Education Title", descKey: "Christian Education Short", image: "/SoyNuevoImage/OutSideTheChurch.png" },
    { titleKey: "Missions Title", descKey: "Missions Short", image: "/SoyNuevoImage/OutSideTheChurch.jpg" },
    { titleKey: "Prayer Title", descKey: "Prayer Short", image: "/SoyNuevoImage/NewEyeCatch.jpg" },
    { titleKey: "Mens Ministry Title", descKey: "Mens Ministry Short", image: "/SoyNuevoImage/OutSideTheChurch.png" },
    { titleKey: "Womens Ministry Title", descKey: "Womens Ministry Short", image: "/SoyNuevoImage/OutSideTheChurch.jpg" },
    { titleKey: "Youth Ministry Title", descKey: "Youth Ministry Short", image: "/SoyNuevoImage/NewEyeCatch.jpg" },
    { titleKey: "Childrens Ministry Title", descKey: "Childrens Ministry Short", image: "/SoyNuevoImage/OutSideTheChurch.png" },
  ];
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("MinistriesTitle")}
          </h1>
        </div>
      </section>

      <section className="py-12">
        {ministries.map((item) => (
          <EyeCatch
            key={item.titleKey}
            title={tM(item.titleKey)}
            desc={tM(item.descKey)}
            imageLocation={item.image}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}
