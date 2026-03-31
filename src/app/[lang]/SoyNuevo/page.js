import Header from "@/app/[lang]/_components/headerComponent/header";
import EntirePage from "@/app/[lang]/_components/newMemberComponent/newMemberEntirePage";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const CopperplateFont = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("NewMemberTitle"),
    description: t("NewMemberDescription"),
  };
}

export default async function SoyNuevo({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: "NewMembers" });

  return (
    <main className="bg-white min-h-screen flex flex-col text-black overflow-x-hidden">
      <Header lang={lang} />

      {/* Page title */}
      <section className="bg-blue-950 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className={`${CopperplateFont.className} text-white text-3xl md:text-4xl lg:text-5xl tracking-widest`}>
            {t("About You")}
          </h1>
        </div>
      </section>

      <EntirePage
        aboutYouHeader={t("About You")}
        nameText={t("Name")}
        ageText={t("Age")}
        genderText={t("Gender")}
        Male={t("Male")}
        Female={t("Female")}
        phoneText={t("Phone")}
        emailText={t("Email")}
        Evangalism={t("Evangalism")}
        Facebook={t("Facebook")}
        Convert={t("Convert")}
        selectGender={t("Select Gender")}
        contactInformation={t("Contact Information")}
        additionalInformation={t("Additional Information")}
        howDidYouHear={t("How Did You Hear")}
        selectAnOption={t("Select An Option")}
        iWouldLikeTo={t("I Would Like To")}
        joinTheChurch={t("Join The Church")}
        talkToSomeone={t("Talk To Someone")}
        doYouHaveaPetition={t("Do You Have a Petition?")}
        friend={t("Friend")}
        submitText={t("Submit")}
        bibleVerse={t("Bible Verse")}
        bibleVerseCite={t("Bible Verse Cite")}
      />

      <Footer />
    </main>
  );
}
