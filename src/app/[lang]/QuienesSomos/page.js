import Image from "next/image";
import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

export async function generateMetadata({ params: { lang } }) {
  return {
    title: "QuienesSomosTitle",
    description: "QuienesSomosDescription",
  };
}

export default async function Home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/quienes-somos?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();

  const { Title, MiddleEyeCatchArray,Beliefs } = storyData.story.content;

  function MiddlePageText({ header, description }) {
    return (
      <div>
        <h1 className="font-extrabold text-6xl pb-4">{header}</h1>
        <p className="text-3xl pb-8 px-3">{description}</p>
      </div>
    );
  }

  return (
    <main className={`${ebG.className} overflow-x-hidden`}>
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="mt-28 mx-auto md:mt-0">
          <NewMember />
        </div>
        <div className="mt-13 md:mt-0">
          <Header lang={lang} />
        </div>
        <div className="flex flex-col text-center items-center mt-5">
          <div className={CopperplateBold.className}>
            <div className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
              {Title}
            </div>
          </div>
          {MiddleEyeCatchArray.map((middEyeCatchCard) => {
            return (
              <MiddlePageText
                header={middEyeCatchCard.Title}
                description={middEyeCatchCard.Description}
                key={middEyeCatchCard.Title}
              />
            );
          })}
          <Image
            width={642}
            height={696}
            src={Beliefs.filename}
            alt="Beliefs"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}
