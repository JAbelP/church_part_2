import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Eventos from "@/app/[lang]/_components/eventosComponents/eventos";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });



export async function generateMetadata({ params: { locale } }) {

  return {
    title: "EventosTitle",
    description: "EventosDescription",
  };
}

export default function Home({params:{lang}}) {
  const Events = [
    {
      eventName: "event1",
      eventTime: "eventTime1",
      eventLocation: "eventLocation1",
      imageLocation: "/Events/Singing.webp",
    },
    {
      eventName: "event2",
      eventTime: "eventTime2",
      imageLocation: "/Events/GPS.jpg",
    },
  ];

  const headerTitles = [
    { Name: "Who Are We", Link: `${lang}/QuienesSomos` },
    { Name: "Leadership", Link: `${lang}/Liderazgo` },
    { Name: "Ministries", Link: `${lang}/Ministerios` },
    { Name: "Events", Link: `${lang}/Eventos` },
    { Name: "Sermons", Link: `${lang}/Sermones` },
    { Name: "Offerings", Link: `${lang}/Ofrenda` },
  ];
  return (
    <main className="bg-white h-fit w-full flex flex-col text-black overflow-x-hidden">
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <Header headerTitles={headerTitles} />
      <div>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl  text-3xl mt-3   tracking-widest mb-16">
            {"Events"}
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
