import Image from "next/image";
import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });


export async function generateMetadata({ params: { lang } }) {

  return {
    title: "QuienesSomosTitle",
    description: "QuienesSomosDescription"
  };
}

export default function Home({params:{lang}}) {
  const headerTitles = [
    { Name: "Who Are We", Link: `${lang}/QuienesSomos` },
    { Name: "Leadership", Link: `${lang}/Liderazgo` },
    { Name: "Ministries", Link: `${lang}/Ministerios` },
    { Name: "Events", Link: `${lang}/Eventos` },
    { Name: "Sermons", Link: `${lang}/Sermones` },
    { Name: "Offerings", Link: `${lang}/Ofrenda` },
  
  ];


  return (
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header headerTitles={headerTitles}/>
        </div>
        <div className="flex flex-col text-center items-center mt-5">
          <div className={CopperplateBold.className}>
            <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
              {'whoAreWe'}
            </div>
          </div>
          <h1 className="font-extrabold text-6xl pb-4">
          {'Mission'}
          </h1>
          <div className="text-3xl pb-8">
          {'WeAreAChurch'}
          </div>
          <div>
            <h1 className="font-extrabold text-6xl pb-4">
            {'Vision'}
            </h1>
            <p className="text-3xl pb-8 px-3">
            {'Evangelize and Disciple through the city'}
              
            </p>
          </div>
          <Image  width={642} height={696} src={"/QuienesSomosSVG/middleEyeCatch.svg"} alt="Beliefs" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
