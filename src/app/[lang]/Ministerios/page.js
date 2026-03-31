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

// ─── Edit ministries here ─────────────────────────────────────────────────────
const ministries = [
  {
    title: "Evangelism",
    description: "Bringing the Good News of Jesus Christ to our community and beyond.",
    image: "/SoyNuevoImage/OutSideTheChurch.jpg",
  },
  {
    title: "Worship & Praise",
    description: "Enriching our spiritual life through music and corporate worship.",
    image: "/SoyNuevoImage/NewEyeCatch.jpg",
  },
  {
    title: "Christian Education",
    description: "Growing together in the knowledge and faith of Jesus Christ.",
    image: "/SoyNuevoImage/OutSideTheChurch.png",
  },
  {
    title: "Missions",
    description: "Responding to Christ's call to carry the Gospel to the ends of the earth.",
    image: "/SoyNuevoImage/OutSideTheChurch.jpg",
  },
  {
    title: "Prayer",
    description: "Sustaining the spiritual life of the church through constant, fervent prayer.",
    image: "/SoyNuevoImage/NewEyeCatch.jpg",
  },
  {
    title: "Men's Ministry",
    description: "Connecting men with God, His Word, and each other.",
    image: "/SoyNuevoImage/OutSideTheChurch.png",
  },
  {
    title: "Women's Ministry",
    description: "Empowering women to grow in faith and impact their homes and community.",
    image: "/SoyNuevoImage/OutSideTheChurch.jpg",
  },
  {
    title: "Youth Ministry",
    description: "Capturing the hearts of young people through the love of Jesus.",
    image: "/SoyNuevoImage/NewEyeCatch.jpg",
  },
  {
    title: "Children's Ministry",
    description: "Leading children to love Jesus and be filled with the Holy Spirit.",
    image: "/SoyNuevoImage/OutSideTheChurch.png",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default async function Ministerios({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

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
            key={item.title}
            title={item.title}
            desc={item.description}
            imageLocation={item.image}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}
