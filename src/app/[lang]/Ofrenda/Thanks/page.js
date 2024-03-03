import Header from "../../../component/headerComponent/header";
import NewMember from "../../../component/newMemberComponent/newMember";
import Footer from "../../../component/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import OfrendaForm from "../../../component/ofrendaComponenets/ofrendaForm";
import LanguageSelector from "../../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("OfferingThanksTitle")
  };
}
export default function Home() {
  const t = useTranslations("Success");
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
        <div>
          <div className="lg:text-5xl text-3xl text-center font-bold my-6">{t("Donation")}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
