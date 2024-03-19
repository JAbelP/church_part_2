import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";
import { useTranslations } from "next-intl";

const ebG = EB_Garamond({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  return {
    title: "OfferingThanksTitle",
  };
}
export default function Home({ params: { lang } }) {
  const t = useTranslations("Success");
  return (
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header lang={lang} />
        </div>
        <LanguageSelector />
        <div>
          <div className="lg:text-5xl text-3xl text-center font-bold my-6">
            {t("Donation")}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
