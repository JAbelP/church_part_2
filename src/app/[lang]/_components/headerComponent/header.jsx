"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";

const TrajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

function LanguageSwitcher({ currentLang }) {
  const pathname = usePathname();

  const getLocalizedPath = (targetLang) => {
    const segments = pathname.split("/").filter(Boolean);
    const knownLocales = ["en", "es", "pt"];
    if (knownLocales.includes(segments[0])) {
      segments[0] = targetLang;
    } else {
      segments.unshift(targetLang);
    }
    return "/" + segments.join("/");
  };

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <Link
            href={getLocalizedPath(lang.code)}
            className={`text-xs font-semibold tracking-widest px-1 py-0.5 rounded transition-colors duration-150 ${
              currentLang === lang.code
                ? "text-red-600 underline underline-offset-2"
                : "text-blue-950/60 hover:text-blue-950"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {lang.label}
          </Link>
          {i < languages.length - 1 && (
            <span className="text-blue-950/20 text-xs select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Header({ lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const navLinks = [
    { label: t("Who Are We"), href: `/${lang}/QuienesSomos` },
    { label: t("Leadership"), href: `/${lang}/Liderazgo` },
    { label: t("Ministries"), href: `/${lang}/Ministerios` },
    { label: t("Events"), href: `/${lang}/Eventos` },
    { label: t("Sermons"), href: `/${lang}/Sermones` },
    { label: t("Offerings"), href: `/${lang}/Ofrenda` },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-blue-950/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center shrink-0">
          <span className={`${TrajanProFont.className} text-blue-950 text-base md:text-lg font-bold tracking-widest`}>
            Luz <span className="text-red-600">Y</span> Vida
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${TrajanProFont.className} text-xs xl:text-sm font-medium text-blue-950 hover:text-red-600 transition-colors duration-150 tracking-widest whitespace-nowrap`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: language switcher + mobile toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} />

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-blue-950 transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-blue-950 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-blue-950 transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-blue-950/10`}
      >
        <nav className="flex flex-col px-6 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${TrajanProFont.className} text-blue-950 hover:text-red-600 text-sm font-medium tracking-wider py-3 border-b border-blue-950/5 last:border-b-0 transition-colors duration-150`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
