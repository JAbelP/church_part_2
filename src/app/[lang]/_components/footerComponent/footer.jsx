import { getTranslations } from "next-intl/server";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Credits from "./credits";

const ebG = EB_Garamond({ subsets: ["latin"] });
const TrajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-blue-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand block */}
          <div>
            <p className={`${TrajanProFont.className} text-white text-xl font-bold tracking-widest mb-3`}>
              Luz <span className="text-red-500">Y</span> Vida
            </p>
            <p className={`${ebG.className} text-white/60 text-sm leading-relaxed max-w-xs`}>
              Iglesia Cristiana Luz Y Vida — Orlando, FL
            </p>
            <a
              href="https://mosaicmennonites.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs text-white/40 hover:text-white/70 transition-colors duration-150 tracking-wider uppercase"
            >
              Mosaic Mennonite Conference
            </a>
          </div>

          {/* Visit info */}
          <div>
            <p className={`${TrajanProFont.className} text-white/80 text-xs font-semibold tracking-widest uppercase mb-4`}>
              {t("Visit")}
            </p>
            <address className={`${ebG.className} not-italic text-white/60 text-base leading-relaxed`}>
              7600 Winegard Rd.<br />
              Orlando, FL 32809
            </address>
            <div className="mt-4">
              <p className={`${TrajanProFont.className} text-white/80 text-xs font-semibold tracking-widest uppercase mb-2`}>
                {t("Hours")}
              </p>
              <p className={`${ebG.className} text-white/60 text-base`}>{t("Time1")}</p>
              <p className={`${ebG.className} text-white/60 text-base`}>{t("Time2")}</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8445983612955!2d-81.38578!3d28.4541006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c56424b846b%3A0x86231d74c47a331f!2s7600%20Winegard%20Rd%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sen!2sus!4v1695267438256!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iglesia Luz Y Vida Location"
            />
          </div>
        </div>
      </div>

      <Credits />
    </footer>
  );
}
