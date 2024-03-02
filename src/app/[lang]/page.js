// import Navbar from "./_components/Navbar";
// import HeroSection from "./_components/HeroSection";
// import ServiceSection from "./_components/ServiceSection";
// import TestimonialSection from "./_components/TestimonialSection";
// import ContactSection from "./_components/ContactSection";
// import FaqSection from "./_components/FaqSection";
// import Footer from "./_components/Footer";

// const getLandingPageData = async (lang) => {
//   const version = process.env.SB_DATA_VERSION;
//   const token = process.env.SB_TOKEN;
//   const url = `https://api-us.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;
//   let req = await fetch(url, { next: { revalidate: 10 } });

//   const storyData = await req.json();
//   const {
//     Nav_Section,
//     Hero_Section,
//     Services_Section,
//     Testimonial_Section,
//     Contact_Section,
//     FAQ_Section,
//     Footer_Section,
//   } = storyData.story.content;
//   return {
//     nav_section: Nav_Section[0],
//     hero_section: Hero_Section[0],
//     services_section: Services_Section[0],
//     testimonial_section: Testimonial_Section[0],
//     contact_section: Contact_Section[0],
//     faq_section: FAQ_Section[0],
//     footer_section: Footer_Section[0],
//   };
// };

// // export default async function Home({params:{lang}}) {
// //   const storyData = await getLandingPageData(lang);
// //   return (
// //     <>
// //       <Navbar data={storyData.nav_section} />
// //       <HeroSection data={storyData.hero_section} />
// //       <ServiceSection data={storyData.services_section} />
// //       <TestimonialSection data={storyData.testimonial_section} />
// //       <ContactSection data={storyData.contact_section} />
// //       <FaqSection data={storyData.faq_section} />
// //       <Footer data={storyData.footer_section} />
// //     </>
// //   );
// // }

// // import Link from "next/link";
// // export default function home({params:{lang}}) {
// //   return (
// //     <main className="bg-white overflow-x-hidden lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
// //       {" "}
// //       <Link href={`${lang}/test`}>Holly Molly</Link>
// //     </main>
// //   );
// // }
import Header from "@/app/[lang]/_components/headerComponent/header"
import MiddleEyeCatch from "@/app/[lang]/_components/mainPageComponent/middleEyeCatch";
import NewMember from "@/app/[lang]/_components/newMemberComponent/newMember";
import Footer from "@/app/[lang]/_components/footerComponent/footer";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });


export async function generateMetadata({ params: { lang } }) {
  return {
    title: "homeTitle",
    description: "homeDescription",
  };
}

export default function home({params:{lang}}) {
  const headerTitles = [
    { Name: "Who Are We", Link: `${lang}/QuienesSomos` },
    { Name: "Leadership", Link: `${lang}/Liderazgo` },
    { Name: "Ministries", Link: `${lang}/Ministerios` },
    { Name: "Events", Link: `${lang}/Eventos` },
    { Name: "Sermons", Link: `${lang}/Sermones` },
    { Name: "Offerings", Link: `${lang}/Ofrenda` },
  ];

  return (
    <main className="bg-white overflow-x-hidden lg:h-fit lg:w-full h-auto w-screen flex flex-col text-black overflow-clip">
      <div className="mt-28 mx-auto md:mt-0">
        <NewMember />
      </div>
      <div className="mt-13 md:mt-0">
        <Header headerTitles={headerTitles} />
      </div>
      <div className="flex flex-col mx-auto items-center justify-center gap-y-6 my-6 lg:flex-row lg:gap-x-3">
        <MiddleEyeCatch
          title={"Leadership"}
          desc={"Read More About Our Leadership"}
          imageSrc={"/Leadership/TioyTia1.jpg"}
          urlLink={"/Liderazgo"}
        />
        <MiddleEyeCatch
          title={"Ministries"}
          desc={"Learn More About Our Ministries"}
          imageSrc={"/Ministries/YouthGroup1.webp"}
          urlLink={"/Ministerios"}
        />
        <MiddleEyeCatch
          title={"About Us"}
          desc={"Learn More About Our Church"}
          imageSrc={"/Ministries/worship.webp"}
          urlLink={"/QuienesSomos"}
        />
      </div>
      <div className=" h-60 flex-col lg:mb-10 mb-80 ">
        <div className="h-fit lg:pl-[154px] lg:pr-[108px] text-black lg:text-5xl text-2xl mx-6 font-normal capitalize mb-4 ">
          <div className={ebG.className}>{"Bible Verse"}</div>
        </div>
        <div className="text-black text-5xl  font-normal uppercase relative text-right pr-16 overflow-hidden">
          <div className={ebG.className}>{"Bible Verse Cite"}</div>
        </div>
      </div>
      <Footer />
    </main>
)
}
