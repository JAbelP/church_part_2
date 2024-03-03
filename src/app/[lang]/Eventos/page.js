import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Eventos from "../../component/eventosComponents/eventos";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import LanguageSelector from "../../component/flagComponents/flagSelector";


export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("EventosTitle"),
    description: t("EventosDescription"),
  };
}

export default function Home() {
  const t = useTranslations("Events");
  const Events = [
    {
      eventName: t("event1"),
      eventTime: t("eventTime1"),
      eventLocation: t("eventLocation1"),
      imageLocation: "/Events/Singing.webp",
    },
    {
      eventName: t("event2"),
      eventTime: t("eventTime2"),
      imageLocation: "/Events/GPS.jpg",
    },
  ];

  const headerTranslations = useTranslations("Header");
  const headerTitles = [
    { Name: headerTranslations("Who Are We"), Link: "/QuienesSomos" },
    { Name: headerTranslations("Leadership"), Link: "/Liderazgo" },
    { Name: headerTranslations("Ministries"), Link: "/Ministerios" },
    { Name: headerTranslations("Events"), Link: "/Eventos" },
    { Name: headerTranslations("Sermons"), Link: "/Sermones" },
    { Name: headerTranslations("Offerings"), Link: "/Ofrenda" },
  ];
  return (
    <main className="bg-white h-fit w-full flex flex-col text-black overflow-x-hidden">
      <LanguageSelector/>
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <Header headerTitles={headerTitles} />
      <div>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl  text-3xl mt-3   tracking-widest mb-16">
            {t("Events")}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {Events.map((item, index) => (
            <Eventos
              eventName={item.eventName}
              eventLocation={item.eventLocation}
              eventTime={item.eventTime}
              eventImage={item.imageLocation}
              key={index} // Don't forget to add the key prop
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
