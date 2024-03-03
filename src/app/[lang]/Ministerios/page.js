import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import EyeCatch from "../../component/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });



export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("MinistriesTitle"),
    description: t("MinistriesDescription"),
  };
}


export default function Home() {
  const t = useTranslations("Minstries");

  const mini = [
    {
      title: t("Evenglism"),
      desc: t("Evangelization Desc"),
      imageLocation: "/Ministries/evangelismo.webp",
    },
    {
      // [TODO] Fix this discription
      title: t("Small Health Groups"),
      desc: t("Evangelization Desc"),
      imageLocation: "/Ministries/GPS.jpg",
    },
    {
      title: t("WORSHIP AND PRAISE"),
      desc: t("Worship and Praise Desc"),
      imageLocation: "/Ministries/worship.webp",
    },
    {
      title: t("CHRISTIAN EDUCATION"),
      desc: t("Christian Education Desc"),
      imageLocation: "/Ministries/Study.jpg",
    },
    {
      title: t("MISSIONS"),
      desc: t("Missions Desc"),
      imageLocation: "/Ministries/Mission.jpg",
    },
    {
      title: t("PRAYER"),
      desc: t("Prayer Desc"),
      imageLocation: "/Ministries/Prayer.jpg",
    },
    {
      title: t("PASTORAL COUNSELING"),
      desc: t("Pastoral Counseling Desc"),
      imageLocation: "/Ministries/Pastoral Therapy.jpg",
    },
    {
      title: t("COUPLES MINISTRY"),
      desc: t("Couples Ministry Desc"),
      imageLocation: "/Ministries/CoupleTherapy.jpg",
    },
    {
      title: t("MEN'S MINISTRY"),
      desc: t("Men's Ministry Desc"),
      imageLocation: "/Ministries/Men_Prayer.jpg",
    },
    {
      title: t("WOMEN'S MINISTRY"),
      desc: t("Women's Ministry Desc"),
      imageLocation: "/Ministries/Women_Prayer.webp",
    },
    {
      title: t("TEENS'S MINISTRY"),
      desc: t("Teen's Ministry Desc"),
      imageLocation: "/Ministries/YouthGroup1.webp",
    },
    {
      title: t("CHILDREN'S MINISTRY"),
      desc: t("Children's Ministry Desc"),
      imageLocation: "/Ministries/childPraying.jpg",
    },
  ];
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
    
<main className="overflow-x-hidden">      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <LanguageSelector />
        <Header headerTitles={headerTitles}/>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
           {t('Minstries')}
          </div>
        </div>
        <div className="flex flex-col items-center">
          {mini.map((item, index) => (
        <EyeCatch
              title={item.title}
              desc={item.desc}
              key={index}
              imageLocation={item.imageLocation}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
