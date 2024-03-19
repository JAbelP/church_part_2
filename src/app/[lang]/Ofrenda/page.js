import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import OfrendaForm from "@/app/[lang]/_components/ofrendaComponenets/ofrendaForm";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("OfferingTitle"),
    description: t("OfferingDescription"),
  };
}

export default function Home({ params: { lang } }) {
  const t = useTranslations("Offering");

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
        <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
          {t("Title")}
        </div>
        {/* [TODO]: figure out how the other titles are done on the pages. */}
        <OfrendaForm
          instruct={t("Instruction")}
          emailText={t("Email")}
          submitText={t("Submit")}
          nameText={t("Name")}
          phoneText={t("Phone")}
          thanks={t("Thanks")}
          bibleVerse={t("Verse")}
          bibleVerseCite={t("cite")}
          click={t("click")}
        />
        <div className="flex flex-col text-center items-center mt-5"></div>
        <Footer />
      </div>
    </main>
  );
}
