import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import OfrendaForm from "../../component/ofrendaComponenets/ofrendaForm";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("OfferingTitle"),
    description: t("OfferingDescription"),
  };
}

export default function Home() {
  const t = useTranslations("Offering");
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
          emailText={t("Email")}
          submitText={t("Submit")}
          nameText={t("Name")}
          phoneText={t("Phone")}
          thanks={t("Thanks")}
          bibleVerse={t("Verse")}
          bibleVerseCite={t("cite")}
          click={t("click")}
          // bibleVerse={t("Verse")}
          // bibleVerseCite={t("cite")}
        />
        <div className="flex flex-col text-center items-center mt-5"></div>
        <Footer />
      </div>
    </main>
  );
}
