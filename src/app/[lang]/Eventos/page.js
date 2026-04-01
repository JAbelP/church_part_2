import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("EventosTitle"),
    description: t("EventosDescription"),
  };
}

export default async function Eventos({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });
  const tE = await getTranslations({ locale: lang, namespace: "Events" });

  // ─── Edit events here ────────────────────────────────────────────────────
  const events = [
    {
      nameKey: "Worship Service",
      timeKey: "Worship Service Time",
      locationKey: "Event Location",
      image: "/SoyNuevoImage/OutSideTheChurch.jpg",
    },
    {
      nameKey: "Bible Study",
      timeKey: "Bible Study Time",
      locationKey: "Event Location",
      image: "/SoyNuevoImage/NewEyeCatch.jpg",
    },
  ];
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("EventosTitle")}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto w-full px-4 md:px-6 py-12 flex flex-col gap-10">
        {events.map((event) => (
          <article
            key={event.nameKey}
            className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-white rounded-2xl shadow-sm border border-blue-950/10 overflow-hidden"
          >
            <div className="w-full md:w-72 shrink-0">
              <Image
                src={event.image}
                alt={tE(event.nameKey)}
                width={320}
                height={200}
                className="w-full h-52 md:h-full object-cover"
              />
            </div>
            <div className={`${ebG.className} flex flex-col gap-2 p-5 md:p-6 text-center md:text-left`}>
              <h2 className="text-xl md:text-2xl font-bold capitalize text-blue-950">
                {tE(event.nameKey)}
              </h2>
              <p className="text-blue-950/70 text-base">{tE(event.timeKey)}</p>
              <p className="text-blue-950/60 text-sm">{tE(event.locationKey)}</p>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
