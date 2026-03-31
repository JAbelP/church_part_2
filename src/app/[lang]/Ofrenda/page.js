import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import OfrendaForm from "@/app/[lang]/_components/ofrendaComponenets/ofrendaForm";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("OfferingTitle"),
    description: t("OfferingDescription"),
  };
}

export default async function Ofrenda({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Offering" });

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      {/* Page title */}
      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("Title")}
          </h1>
        </div>
      </section>

      <OfrendaForm
        emailText={t("Email")}
        submitText={t("Submit")}
        nameText={t("Name")}
        phoneText={t("Phone")}
        thanks={t("Thanks")}
        bibleVerse={t("Verse")}
        bibleVerseCite={t("cite")}
        click={t("click")}
      />

      <Footer />
    </main>
  );
}
