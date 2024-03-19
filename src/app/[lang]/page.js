import Header from "@/app/[lang]/_components/headerComponent/header";
import MiddleEyeCatch from "@/app/[lang]/_components/mainPageComponent/middleEyeCatch";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const ebG = EB_Garamond({ subsets: ["latin"] });

export async function generateMetadata({ params: { lang } }) {
  const t = await getTranslations({ lang, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&language=`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();

  const t = await getTranslations({ lang, namespace: "Home" });

  const { MiddleEyeCatchArray } = storyData.story.content;

  return (
    <main className="bg-white overflow-x-hidden lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <div className="mt-13 md:mt-0">
        <Header lang={lang} />
      </div>
      <div className="flex flex-col mx-auto items-center justify-center gap-y-6 my-6 lg:flex-row lg:gap-x-3">
        {MiddleEyeCatchArray.map((middEyeCatchCard) => {
          const urlLink = `${middEyeCatchCard.Url}`;
          return (
            <MiddleEyeCatch
              title={middEyeCatchCard.Title}
              desc={middEyeCatchCard.description}
              imageSrc={middEyeCatchCard.imageSource.filename}
              urlLink={urlLink}
            />
          );
        })}
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-fit lg:pl-[154px] lg:pr-[108px] text-black lg:text-5xl text-2xl mx-6 font-normal capitalize mb-4 ">
          <div className={ebG.className}>{t("Bible Verse")}</div>
        </div>
        <div className="text-black text-5xl  font-normal uppercase relative text-right pr-16 overflow-hidden">
          <div className={ebG.className}>{t("Bible Verse Cite")}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
