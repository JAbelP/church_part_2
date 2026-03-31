import Header from "@/app/[lang]/_components/headerComponent/header";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import localFont from "next/font/local";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("SermonesTitle"),
    description: t("SermonesDescription"),
  };
}

// ─── Edit sermons here ────────────────────────────────────────────────────────
const sermons = [
  {
    Title: "El andar del creyente",
    Speaker: "Pastor",
    Date: "",
    Description: "We continue with the beautiful teaching of our beloved father Jesus Christ because his ways are wonderful.",
    YoutubeLink: "https://www.youtube.com/@luzyvidamc",
    image: "/SoyNuevoImage/OutSideTheChurch.jpg",
  },
  {
    Title: "Dependiendo de Dios",
    Speaker: "Pastor",
    Date: "",
    Description: "Depending on God in all circumstances of life.",
    YoutubeLink: "https://www.youtube.com/@luzyvidamc",
    image: "/SoyNuevoImage/NewEyeCatch.jpg",
  },
  {
    Title: "La Bendición Espiritual del creyente de Cristo",
    Speaker: "Pastor",
    Date: "",
    Description: "The Spiritual Blessing of the believer in Christ.",
    YoutubeLink: "https://www.youtube.com/@luzyvidamc",
    image: "/SoyNuevoImage/OutSideTheChurch.png",
  },
  {
    Title: "Fijando los ojos en Cristo",
    Speaker: "Pastor",
    Date: "",
    Description: "Fixing our eyes on Christ in every season.",
    YoutubeLink: "https://www.youtube.com/@luzyvidamc",
    image: "/SoyNuevoImage/OutSideTheChurch.jpg",
  },
  {
    Title: "Una nueva vestimenta",
    Speaker: "Pastor",
    Date: "",
    Description: "This message teaches us the importance of God's clothing.",
    YoutubeLink: "https://www.youtube.com/@luzyvidamc",
    image: "/SoyNuevoImage/NewEyeCatch.jpg",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default async function Sermones({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      <section className="bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-5xl lg:text-6xl tracking-widest`}>
            {t("SermonesTitle")}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto w-full px-4 md:px-6 py-12 flex flex-col gap-8">
        {sermons.map((sermon) => (
          <a
            key={sermon.Title}
            href={sermon.YoutubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row gap-5 items-center md:items-start bg-white rounded-2xl shadow-sm border border-blue-950/10 overflow-hidden hover:shadow-md hover:border-red-600/30 transition-all duration-200"
          >
            <div className="shrink-0 w-full md:w-64">
              <Image
                src={sermon.image}
                alt={sermon.Title}
                width={320}
                height={180}
                className="w-full h-48 md:h-44 object-cover group-hover:brightness-90 transition-all duration-200"
              />
            </div>
            <div className={`${ebG.className} flex flex-col gap-1.5 p-5 md:p-4 text-center md:text-left`}>
              <h2 className="text-lg md:text-xl font-bold capitalize text-blue-950 group-hover:text-red-600 transition-colors duration-150">
                {sermon.Title}
              </h2>
              {sermon.Speaker && (
                <p className="text-blue-950/70 text-sm font-medium">{sermon.Speaker}</p>
              )}
              {sermon.Date && (
                <p className="text-blue-950/50 text-xs">{sermon.Date}</p>
              )}
              {sermon.Description && (
                <p className="text-blue-950/70 text-sm capitalize leading-relaxed mt-1 line-clamp-3">
                  {sermon.Description}
                </p>
              )}
            </div>
          </a>
        ))}
      </section>

      <Footer />
    </main>
  );
}
