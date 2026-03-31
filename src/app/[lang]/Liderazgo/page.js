import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import SubEyeCatch from "@/app/[lang]/_components/ministeriosComponents/subEyeCatch";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("LeadershipTitle"),
    description: t("LeadershipDescription"),
  };
}

// ─── Edit leadership here ─────────────────────────────────────────────────────
const leadership = {
  pastorHeader: "Senior Pastor",
  pastor: { Name: "Tomas & Ingrid Ramirez", photo: "/Liderazgo/pastors.webp" },

  associateHeader: "Associate Pastor",
  associate: { Name: "Aldo & Brenda Colon", photo: "/Liderazgo/associate.jpg" },

  deaconsHeader: "Deacons",
  deacons: [
    { Name: "Wellington & Marcia De Jesus", photo: "/Liderazgo/decon1.webp" },
    { Name: "Jose & Ana Paula De La Rosa", photo: "/Liderazgo/decon2.webp" },
  ],

  worshipHeader: "Worship Leader",
  worshipLeader: { Name: "Moisés Ramirez", photo: "/Liderazgo/worship.webp" },
};
// ─────────────────────────────────────────────────────────────────────────────

export default async function Liderazgo({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("LeadershipTitle")}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-12 flex flex-col gap-16">

        <section>
          <h2 className={`${CopperplateFont.className} text-blue-950 text-lg md:text-2xl tracking-widest uppercase text-center mb-8 pb-2 border-b border-red-600/30`}>
            {leadership.pastorHeader}
          </h2>
          <div className="flex justify-center">
            <SubEyeCatch names={leadership.pastor.Name} imageLocation={leadership.pastor.photo} altText={leadership.pastor.Name} />
          </div>
        </section>

        <section>
          <h2 className={`${CopperplateFont.className} text-blue-950 text-lg md:text-2xl tracking-widest uppercase text-center mb-8 pb-2 border-b border-red-600/30`}>
            {leadership.associateHeader}
          </h2>
          <div className="flex justify-center">
            <SubEyeCatch names={leadership.associate.Name} imageLocation={leadership.associate.photo} altText={leadership.associate.Name} />
          </div>
        </section>

        <section>
          <h2 className={`${CopperplateFont.className} text-blue-950 text-lg md:text-2xl tracking-widest uppercase text-center mb-8 pb-2 border-b border-red-600/30`}>
            {leadership.deaconsHeader}
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly md:flex-wrap gap-8">
            {leadership.deacons.map((deacon) => (
              <SubEyeCatch key={deacon.Name} names={deacon.Name} imageLocation={deacon.photo} altText={deacon.Name} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={`${CopperplateFont.className} text-blue-950 text-lg md:text-2xl tracking-widest uppercase text-center mb-8 pb-2 border-b border-red-600/30`}>
            {leadership.worshipHeader}
          </h2>
          <div className="flex justify-center">
            <SubEyeCatch names={leadership.worshipLeader.Name} imageLocation={leadership.worshipLeader.photo} altText={leadership.worshipLeader.Name} />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
