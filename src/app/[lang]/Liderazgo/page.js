import Header from "@/app/[lang]/_components/headerComponent/header";

import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import SubEyeCatch from "@/app/[lang]/_components/ministeriosComponents/subEyeCatch";
import localFont from "next/font/local";
import LanguageSelector from "@/app/[lang]/_components/flagComponents/flagSelector";
import { getTranslations } from "next-intl/server";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: "Liderazgo",
//   description: "Conozca el liderazgo",
// };

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("LeadershipTitle"),
    description: t("LeadershipDescription"),
  };
}


export default async function Home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/leadership?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();
  console.log(storyData.story.content.Pastor[0].Name)

  const {
    Title,
    PastorHeader,
    Pastor,
    AssociatePastorHeader,
    AssociatePastores,
    DeconsHeader,
    Decons,
    WorshipLeaderHeader,
    WorshipLeader,
  } = storyData.story.content;

  return (
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <LanguageSelector />
        <div className="mt-13 md:mt-0">
          <Header lang={lang} />
        </div>

        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {Title}
          </div>
        </div>

        <div className="text-5xl font-medium tracking-widest mx-auto uppercase">
          {PastorHeader}
        </div>
        <div className="flex flex-col">
          <div>
            <SubEyeCatch
              names={Pastor[0].Name}
              imageLocation={Pastor[0].Photo.filename}
              altText={Pastor[0].Photo.filename}
            />
          </div>
          <div className="text-4xl font-medium tracking-widest uppercase text-center justify-center mx-auto">
            {AssociatePastorHeader}
          </div>
          <div>
            <SubEyeCatch
              names={AssociatePastores[0].Name}
              imageLocation={AssociatePastores[0].Photo.filename}
              altText={AssociatePastores[0].Photo.filename}
            />
          </div>
        </div>

        <div className=" mt-16">
          <div className=" mb-8 text-center  text-4xl font-medium tracking-widest">
            {DeconsHeader}
          </div>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            {Decons.map((decon) => {
              return (
                <SubEyeCatch
                  names={decon.Name}
                  imageLocation={decon.Photo.filename}
                  altText={decon.Photo.filename}
                />
              );
            })}
          </div>
        </div>
        <div className=" mt-16">
          <div className=" mb8 text-center  text-4xl font-medium tracking-widest">
            {WorshipLeaderHeader}
          </div>
          <div className="flex md:flex-row md:justify-evenly flex-col gap-y-16">
            <SubEyeCatch
              names={WorshipLeader[0].Name}
              imageLocation={WorshipLeader[0].Photo.filename}
              altText={WorshipLeader[0].Photo.filename}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
