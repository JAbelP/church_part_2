import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Eventos from "@/app/[lang]/_components/eventosComponents/eventos";
const ebG = EB_Garamond({ subsets: ["latin"] });
const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("EventosTitle"),
    description: t("EventosDescription"),
  };
}

export default async function Home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/events?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();

  const { Title, EventsArrayList } = storyData.story.content;
  console.log(EventsArrayList[0].EventName);

  return (
    <main className="bg-white h-fit w-full flex flex-col text-black overflow-x-hidden">
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <Header lang={lang} />
      <div>
        <div className={CopperplateBold.className}>
          <div className="text-center text-black lg:text-7xl  text-3xl mt-3   tracking-widest mb-16">
            {Title}
          </div>
        </div>
        <div >
          {EventsArrayList.map((events) => {
            return (
              <div
                className="flex flex-col items-center text-center py-4 lg:flex-row lg:justify-center"
                key={events.Title}
              >
                <div>
                    <Image
                      src={events.Image.filename}
                      alt={events.Title}
                      width={320}
                      height={180}
                      className="rounded-lg"
                    />
                </div>
                <div className="w-10/12 lg:w-3/12 lg:pl-6 pt-2">
                  <p className="font-bold capitalize">{events.EventName}</p>
                  <p className="pt-2">{events.EventTime}</p>
                  <p className="pt-2">{events.EventLocation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
