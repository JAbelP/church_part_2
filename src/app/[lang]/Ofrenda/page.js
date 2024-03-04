import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import OfrendaForm from "@/app/[lang]/_components/ofrendaComponenets/ofrendaForm";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  return {
    title: "OfferingTitle",
    description: "OfferingDescription",
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
          <Header headerTitles={headerTitles} />
        </div>
        <LanguageSelector />
        <OfrendaForm
          emailText={"Email"}
          submitText={"Submit"}
          nameText={"Name"}
          phoneText={"Phone"}
          thanks={"Thanks"}
          bibleVerse={"Verse"}
          bibleVerseCite={"cite"}
          click={"click"}
          // bibleVerse={"Verse")}
          // bibleVerseCite={"cite")}
        />
        <div className="flex flex-col text-center items-center mt-5"></div>
        <Footer />
      </div>
    </main>
  );
}
