import Header from "@/app/[lang]/_components/headerComponent/header";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import localFont from "next/font/local";
import Image from "next/image";

const CopperplateBold = localFont({ src: "../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: 'Sermones',
//   description: 'Escuche Sermones Pasados',
// }
export async function generateMetadata({ params: { locale } }) {
  return {
    title: "SermonesTitle",
    description: "SermonesDescription",
  };
}

export default async function Home({ params: { lang } }) {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/sermons?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, { next: { revalidate: 10 } });
  const storyData = await req.json();

  const { Title, Sermons } = storyData.story.content;

  const index = 14;
  return (
    <main className="overflow-x-hidden">
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <Header lang={lang} />
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {Title}
          </p>
        </div>
        <div>
          {Sermons.map((sermon) => {
            return (
              <div
                className="flex flex-col items-center text-center py-4 lg:flex-row lg:justify-center"
                key={sermon.Title}
              >
                <div>
                  <a href={sermon.YoutubeLink.url}>
                    <Image
                      src={sermon.Image.filename}
                      alt={sermon.Title}
                      width={320}
                      height={180}
                      className="rounded-lg"
                    />
                  </a>
                </div>
                <div className="w-10/12 lg:w-3/12 lg:pl-4 pt-2">
                  <p className="font-bold capitalize">{sermon.Title}</p>
                  <p className="pt-2">{sermon.Speaker}</p>
                  <p className="pt-2 capitalize">{sermon.Description}</p>
                  <p className="pt-2">{sermon.Date}</p>
                </div>
              </div>
            );
          })}
          <div
            className="flex flex-col items-center text-center py-4 lg:flex-row lg:justify-center"
            key={Sermons[index].Title}
          >
            <div>
              <a href={Sermons[index].YoutubeLink.url}>
                <Image
                  src={Sermons[index].Image.filename}
                  alt={Sermons[index].Title}
                  width={320}
                  height={180}
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="w-10/12 lg:w-3/12 lg:pl-4 pt-2">
              <p className="font-bold capitalize">{Sermons[index].Title}</p>
              <p className="pt-2">{Sermons[index].Speaker}</p>
              <p className="pt-2 capitalize">{Sermons[index].Description}</p>
              <p className="pt-2">{Sermons[index].Date}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
