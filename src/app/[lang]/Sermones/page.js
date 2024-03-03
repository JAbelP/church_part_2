import Header from "../../component/headerComponent/header";
import NewMember from "../../component/newMemberComponent/newMember";
import Footer from "../../component/footerComponent/footer";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import LanguageSelector from "../../component/flagComponents/flagSelector";
import Image from "next/image";

const API_URL = process.env.WORDPRESS_API_URL;
const CopperplateBold = localFont({ src: "../../../font/CopperplateBold.ttf" });

// export const metadata = {
//   title: 'Sermones',
//   description: 'Escuche Sermones Pasados',
// }
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: "SermonesTitle",
    description: "SermonesDescription",
  };
}

export default async function Home() {
  // const t = useTranslations("Sermons");
  // const y = useTranslations("SermonsList");
  // const  = useTranslations("Header");
  const headerTitles = [
    { Name: "Who Are We", Link: "/QuienesSomos" },
    { Name: "Leadership", Link: "/Liderazgo" },
    { Name: "Ministries", Link: "/Ministerios" },
    { Name: "Events", Link: "/Eventos" },
    { Name: "Sermons", Link: "/Sermones" },
    { Name: "Offerings", Link: "/Ofrenda" },
  ];

  const sermonsList = [
    {
      Title: "El andar del creyente",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Jan 23, 2024",
      Description:
        "Seguimos con la hermosa enseñanza de nuestro padre amado Jesucristo porque maravilloso son sus caminos",
      ImageURL: "/SermonsImages/El Andar Del Creyente.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=nSymVeTo88M",
    },
    {
      Title: "La Bendición Espiritual del creyente de Cristo",
      Speaker: "Hermano Julian Musa",
      Date: "Jan 23, 2024",
      Description:
        "De corazon deseo que Dios te permita llenar tu vida con esta palabra no dejes de escuchar este maravilloso mensaje",
      ImageURL: "/SermonsImages/BendicionEspiritualDelCreyente.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=cBYjT6RvuLI",
    },
    {
      Title: "De donde vendrá mi ayuda",
      Speaker: "Hermano Julian Musa",
      Date: "Jan 5, 2024",
      ImageURL: "/SermonsImages/DeDondeVendraMiAyuda.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=HFLjyk2jRPo",
    },
    {
      Title: "Dependiendo de Dios",
      Speaker: "Pastor Aldo Colon",
      Date: "Dec 12, 2023",
      Description: "Dios quiere hablar y bendecir tu vida",
      ImageURL: "/SermonsImages/DependiendoDeDios.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=dqwGvQGK9Lg",
    },
    {
      Title: "Una nueva vestimenta",
      Speaker: "Pastor Aldo Colon",
      Date: "Nov 23, 2023",
      Description:
        "Dios les permita seguir avanzando y seguir confiando en su camino Este mensaje nos enseña la importancia de la vestimenta de Dios",
      ImageURL: "/SermonsImages/UnaNuevaVestimenta.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=G_AVEdNPrPw",
    },
    {
      Title: "Iglesia Y Pastores",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Nov 21, 2023",
      Description:
        "Dios quiere llegar a tu vida con este mensaje No dejes de conocer la verdad y todo lo referente a su camino",
      ImageURL: "/SermonsImages/IglesiaYPastores.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=H8UOoYRJaiU&",
    },
    {
      Title: "¿De quien eres esclavo?",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Nov 18, 2023",
      Description:
        "Dios le permita seguir avanzando en todos sus proyectos hoy Dios me ha permitido llevar un hermoso mensaje para todos mis hermanos en Cristo",
      ImageURL: "/SermonsImages/De Quien Eres Esclavo.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=qmn3HaZHPQQ",
    },
    {
      Title: "La Iglesia",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Oct 12, 2023",
      Description:
        "Deseo de Corazón que Dios este hablando a tu vida y bendiciéndote con este maravilloso mensaje",
      ImageURL: "/SermonsImages/La Iglesia.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=92nXwnVflR0",
    },
    {
      Title: "La Iglesia Parte 2",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Oct 12, 2023",
      Description:
        "Dios es maravillo y se esta glorificando de gran manera para que puedas conocer su camino",
      ImageURL: "/SermonsImages/La Iglesia.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=RSZlscIK3dI",
    },
    {
      Title: "Momentos Malos",
      Speaker: "Joshua de la Rosa",
      Date: "Oct 12, 2023",
      Description:
        "Esta poderosa palabra nos hace entender que Dios puede usar a nuestros jóvenes para grandes cosas",
      ImageURL: "/SermonsImages/Momentos Malos.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=ag7TA_Xlnwk",
    },
    {
      Title: "Fijando los ojos en Cristo",
      Speaker: "Pastor Aldo Colon",
      Date: "Oct 12, 2023",
      Description:
        "Deseamos que Dios hable a tu corazón en este momento y te permita cumplir su palabra en tu vida",
      ImageURL: "/SermonsImages/Fijando Los Ojos En Cristo.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=2zep9_dgtTE",
    },
    {
      Title: "Yo lo Hare",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Sep 7, 2023",
      Description:
        "De corazon deseo que Dios te permita llenar tu vida con esta palabra no dejes de escuchar este maravilloso mensaje",
      ImageURL: "/SermonsImages/Yo Lo Hare.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=IjDO79orPrU",
    },
    {
      Title: "Viviendo según el llamado",
      Speaker: "Pastor Aldo Colon",
      Date: "Sep 1, 2023",
      ImageURL: "/SermonsImages/Viviendo Seguin El Llamando.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=uuwq3huJgzc",
    },
    {
      Title: "¡EL MUNDO NO ME PUEDE OFRECER NADA",
      Speaker: "Pastor Tomas Ramirez",
      Date: "Jul 2, 2023",
      ImageURL: "/SermonsImages/El Mundo No Me Puede Ofrecer Nada.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=jv0-RsY6ueA",
    },
    {
      Title: "REMOVIENDO LAS CENIZAS PARA QUE EL FUEGO NO SE APAGUE",
      Speaker: "Pastor Tomas Ramirez",
      Date: "May 4, 2023",
      ImageURL: "/SermonsImages/Removiendo las Cenizas.jpg",
      YoutubeURL: "https://www.youtube.com/watch?v=tsLE7ry4bUY",
    },
  ];

  const sermonList = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `query MyQuery2 {
        posts( where: {categoryName: "Sermons"}) {
          edges {
            node {
              date
              title(format: RENDERED)
              sermons {
                sermontitle
                sermonimage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                youtubelink
              }
            }
          }
        }
      }`,
    }),
  });

  return (
    <main className="overflow-x-hidden">
      <LanguageSelector />
      <div className="bg-white h-fit w-full flex flex-col text-black">
        <div className="lg:m-auto mt-28">
          <NewMember />
        </div>
        <Header headerTitles={headerTitles} />
        <div className={CopperplateBold.className}>
          <p className="text-center text-black lg:text-7xl text-3xl  tracking-widest lg:mb-16 my-5">
            {"Sermons"}
          </p>
        </div>
        <div>
          {sermonsList.map((sermon) => (
            <div
              className="flex flex-col items-center text-center py-4 lg:flex-row lg:justify-center"
              key={sermon.Title}
            >
              <div>
                <a href={sermon.YoutubeURL}>
                  <Image
                    src={sermon.ImageURL}
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
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
