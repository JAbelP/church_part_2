import Header from "@/app/[lang]/_components/headerComponent/header";

import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import SubEyeCatch from "@/app/[lang]/_components/ministeriosComponents/subEyeCatch";
import localFont from "next/font/local";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: "Liderazgo",
//   description: "Conozca el liderazgo",
// };

export async function generateMetadata({ params: { locale } }) {

  return {
    title: "LeadershipTitle",
    description: "LeadershipDescription",
  };
}

export default function home({params:{lang}}) {
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
        <LanguageSelector />
        <div className="mt-13 md:mt-0">
          <Header headerTitles={headerTitles} />
        </div>

        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {"Leadership"}
          </div>
        </div>

        <div className="text-5xl font-medium tracking-widest mx-auto uppercase">
          {"Pastors"}
        </div>
        <div className="flex flex-col">
          <div>
            <SubEyeCatch
              names={"TOMAS & INGRID RAMIREZ"}
              imageLocation={"/Leadership/TioyTia1.jpg"}
              altText={"Pastores: TOMAS Y INGRID RAMIREZ"}
            />
          </div>
          <div className="text-4xl font-medium tracking-widest uppercase text-center justify-center mx-auto">
            {"Associate Pastores"}
          </div>
          <div>
            <SubEyeCatch
              names={"ALDO & BRENDA COLON"}
              imageLocation={"/Leadership/Colon.jpg"}
              altText={"PASTOR ASOCIADO: ALDO Y BRENDA COLON"}
            />
          </div>
        </div>

        <div className=" mt-16">
          <div className=" mb-8 text-center  text-4xl font-medium tracking-widest">
            {"Decons"}
          </div>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            <SubEyeCatch
              names={"WELLINGTON & MARCIA DE JESUS"}
              imageLocation={"/Leadership/Wellington.jpg"}
              altText={"Decon: WELLINGTON Y MARCIA DE JESUS"}
            />

            <SubEyeCatch
              names={"JOSE & ANA PAULA DE LA ROSA"}
              imageLocation={"/Leadership/DeRosa.jpg"}
              altText={"Decon: JOSE & ANA PAULA DE LA ROSA"}
            />
          </div>
        </div>
        <div className=" mt-16">
          <div className=" mb8 text-center  text-4xl font-medium tracking-widest">
            {"Worship Leader"}
          </div>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            <SubEyeCatch
              names={"MOISÉS RAMIREZ"}
              imageLocation={"/Leadership/Moises.jpg"}
              altText={"Worship Leader: Moises Ramirez"}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
