import { getTranslations } from "next-intl/server";
import { EB_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";
import Header from "@/app/[lang]/_components/headerComponent/header";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";
import Footer from "@/app/[lang]/_components/footerComponent/footer";

const ebG = EB_Garamond({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("NewMemberSuccessTitle"),
  };
}
export default function Home({ params: { lang } }) {
  const Success = useTranslations("Success");
  return (
    <main className={ebG.className}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="md:mt-0 mt-48">
          <Header lang={lang} />
        </div>
        <LanguageSelector />{" "}
        <div className="text-center my-9">
          <div className="lg:text-5xl text-3xl">{Success("Thanks")}</div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
