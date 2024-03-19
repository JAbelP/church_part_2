import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import EyeCatch from "@/app/[lang]/_components/ministeriosComponents/eyeCatch";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";

const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });


export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("MinistriesTitle"),
    description: t("MinistriesDescription"),
  };
}


export default async function home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/ministries?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();
  const { Title, MinistriesCards } = storyData.story.content;

  return (
    <main className="overflow-x-hidden">
      {" "}
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <Header lang={lang} />
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {Title}
          </div>
        </div>
        <div className="flex flex-col items-center">
          {MinistriesCards.map((item, index) => (
            <EyeCatch
              title={item.Titles}
              desc={item.Description}
              key={index}
              imageLocation={item.Image.filename}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
