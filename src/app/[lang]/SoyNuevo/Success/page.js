import { getTranslations } from "next-intl/server";
import { EB_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";
import Header from "../../../component/headerComponent/header";
import LanguageSelector from "../../../component/flagComponents/flagSelector";
import Footer from "../../../component/footerComponent/footer";

const ebG = EB_Garamond({ subsets: ["latin"] });
// export const metadata = {
//   title: "Soy Nuevo",
//   description: "Únase a nuestra Iglesia",
// };

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("NewMemberSuccessTitle"),
  };
}

export default function Home() {
  const headerTranslations = useTranslations("Header");
  const Success = useTranslations("Success");
  const headerTitles = [
    { Name: headerTranslations("Who Are We"), Link: "/QuienesSomos" },
    { Name: headerTranslations("Leadership"), Link: "/Liderazgo" },
    { Name: headerTranslations("Ministries"), Link: "/Ministerios" },
    { Name: headerTranslations("Events"), Link: "/Eventos" },
    { Name: headerTranslations("Sermons"), Link: "/Sermones" },
    { Name: headerTranslations("Offerings"), Link: "/Ofrenda" },
  ];
  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="md:mt-0 mt-48">
          <Header headerTitles={headerTitles} />
        </div>
        <LanguageSelector />{" "}
        <div>
          <div className="lg:text-5xl text-3xl">{Success("Thanks")}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
