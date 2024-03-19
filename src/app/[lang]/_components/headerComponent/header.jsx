"use client";
import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { Hamburger } from "../icons/hamburger";

// Load the font and assign it to a constant in the module scope
const TrajanProFont = localFont({ src: "../../../font/TrajanProR.ttf" });

function Header(lang) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  let headerTitles = [
    { Name: "Who Are We", Link: `/QuienesSomos` },
    { Name: "Leadership", Link: `/Liderazgo` },
    { Name: "Ministries", Link: `/Ministerios` },
    { Name: "Events", Link: `/Eventos` },
    { Name: "Sermons", Link: `/Sermones` },
    { Name: "Offerings", Link: `/Ofrenda` },
  ];

  if (lang.lang === "en") {
    headerTitles = [
      { Name: "Who Are We", Link: `/QuienesSomos` },
      { Name: "Leadership", Link: `/Liderazgo` },
      { Name: "Ministries", Link: `/Ministerios` },
      { Name: "Events", Link: `/Eventos` },
      { Name: "Sermons", Link: `/Sermones` },
      { Name: "Offerings", Link: `/Ofrenda` },
    ];
  }

  if (lang.lang === "es") {
    headerTitles = [
      { Name: "¿Quiénes Somos?", Link: `/QuienesSomos` },
      { Name: "Liderazgo", Link: `/Liderazgo` },
      { Name: "Ministerios", Link: `/Ministerios` },
      { Name: "Eventos", Link: `/Eventos` },
      { Name: "Sermónes", Link: `/Sermones` },
      { Name: "Ofrendas", Link: `/Ofrenda` },
    ];
  }

  if (lang.lang === "pt") {
    headerTitles = [
      { Name: "Quem Somos Nós", Link: `/QuienesSomos` },
      { Name: "Liderança", Link: `/Liderazgo` },
      { Name: "Ministérios", Link: `/Ministerios` },
      { Name: "Eventos", Link: `/Eventos` },
      { Name: "Sermões", Link: `/Sermones` },
      { Name: "Ofertas", Link: `/Ofrenda` },
    ];
  }

  return (
    <div>
      {/* Full Sized Header */}
      <div className="hidden lg:block mx-auto">
        <div className="flex justify-center my-8">
          <div className="gap-9 flex flex-row">
            {headerTitles.map((item, index) => (
              <Link key={index} href={item.Link}>
                <div className={TrajanProFont.className}>
                  <p
                    className={`text-black text-3xl font-bold font-[Trajan Pro] underline capitalize tracking-widest`}
                  >
                    {item.Name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Full Sized Header */}

      <div
        className="absolute top-[3.5rem] visible lg:invisible z-30"
        style={{ right: "1.5rem", top: "38px" }}
      >
        <button onClick={handleMenuClick}>
          <Hamburger />
        </button>
      </div>
      {/* Tray */}
      <div
        className={`fixed w-2/3 h-full bg-blue-500 right-0 top-0 duration-300 z-20 transition-transform transform ${
          menuOpen ? "-translate-x-0" : "translate-x-full"
        } text-center text-4xl pt-36`}
      >
        <ul>
          {headerTitles.map((header) => {
            return (
              <li className="pb-10" key={header.Name}>
                <Link href={header.Link}>
                  <div onClick={handleMenuClick}>{header.Name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={handleMenuClick}
        className={`fixed w-1/3 h-full bg-blue-950 opacity-75 left-0 top-0 duration-300 z-20 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } text-center text-5xl pt-36`}
      ></div>
      {/* tray */}
    </div>
  );
}

export default Header;
