import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import EyeCatch from "@/app/[lang]/_components/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";

const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { locale } }) {
  return { title: "MinistriesTitle", description: "MinistriesDescription" };
}

export default function home({ params: { lang } }) {
  const mini = [
    {
      title: "Evenglism",
      desc: "Evangelization Desc",
      imageLocation: "/Ministries/evangelismo.webp",
    },
    {
      // [TODO] Fix this discription
      title: "Small Health Groups",
      desc: "Evangelization Desc",
      imageLocation: "/Ministries/GPS.jpg",
    },
    {
      title: "WORSHIP AND PRAISE",
      desc: "Worship and Praise Desc",
      imageLocation: "/Ministries/worship.webp",
    },
    {
      title: "CHRISTIAN EDUCATION",
      desc: "Christian Education Desc",
      imageLocation: "/Ministries/Study.jpg",
    },
    {
      title: "MISSIONS",
      desc: "Missions Desc",
      imageLocation: "/Ministries/Mission.jpg",
    },
    {
      title: "PRAYER",
      desc: "Prayer Desc",
      imageLocation: "/Ministries/Prayer.jpg",
    },
    {
      title: "PASTORAL COUNSELING",
      desc: "Pastoral Counseling Desc",
      imageLocation: "/Ministries/Pastoral Therapy.jpg",
    },
    {
      title: "COUPLES MINISTRY",
      desc: "Couples Ministry Desc",
      imageLocation: "/Ministries/CoupleTherapy.jpg",
    },
    {
      title: "MEN'S MINISTRY",
      desc: "Men's Ministry Desc",
      imageLocation: "/Ministries/Men_Prayer.jpg",
    },
    {
      title: "WOMEN'S MINISTRY",
      desc: "Women's Ministry Desc",
      imageLocation: "/Ministries/Women_Prayer.webp",
    },
    {
      title: "TEENS'S MINISTRY",
      desc: "Teen's Ministry Desc",
      imageLocation: "/Ministries/YouthGroup1.webp",
    },
    {
      title: "CHILDREN'S MINISTRY",
      desc: "Children's Ministry Desc",
      imageLocation: "/Ministries/childPraying.jpg",
    },
  ];
  const headerTitles = [
    { Name: "Who Are We", Link: `${lang}/QuienesSomos` },
    { Name: "Leadership", Link: `${lang}/Liderazgo` },
    { Name: "Ministries", Link: `${lang}/Ministerios` },
    { Name: "Events", Link: `${lang}/Eventos` },
    { Name: "Sermons", Link: `${lang}/Sermones` },
    { Name: "Offerings", Link: `${lang}/Ofrenda` },
  ];
  return (
    <main className="overflow-x-hidden">
      {" "}
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <Header headerTitles={headerTitles} />
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {"Minstries"}
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
