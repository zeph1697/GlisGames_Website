"use client";

import { NavLinks } from "@/constant/general-config";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(true);
  const [isSmallScr, setIsSmallScr] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const pathName = usePathname();

  const handleScroll = () => {
    window.scrollY >= 80 ? setScrollTop(false) : setScrollTop(true);
  };

  const responsiveScr = () => {
    window.matchMedia("(max-width: 640px)").matches
      ? setIsSmallScr(true)
      : setIsSmallScr(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    responsiveScr();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed flex justify-between items-center xl:px-8 px-6 w-full z-40 transition-all ease-out ${
        scrollTop ? "bg-transparent h-24" : "bg-subBgColor h-16"
      }`}
    >
      <div className="flex max-sm:flex-col items-center xl:gap-10 md:gap-6">
        <Link
          href={isSmallScr ? "" : "/"}
          scroll={isSmallScr ? false : true}
          className="px-2 md:text-4xl text-3xl text-white hover:text-sky-800 hover:bg-white rounded-sm outline outline-2 outline-transparent hover:outline-white border-spacing-4 border-[1px] border-white hover:border-sky-800 font-bold cursor-pointer"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          {isSmallScr ? (toggleNav ? "Glis Games" : "GG") : "Glis Games"}
        </Link>

        {(!isSmallScr || toggleNav) && (
          <ul
            className={`flex items-center text-base xl:gap-1 md:gap-0.5 max-sm:absolute max-sm:w-48 max-sm:flex-col max-sm:gap-4 max-sm:left-4.5 ${
              !scrollTop ? "max-sm:top-[9px]" : "max-sm:top-[25px]"
            } max-sm:bg-black/75 max-sm:backdrop-blur-sm max-sm:px-2 max-sm:pt-14 max-sm:pb-4 max-sm:border-2 max-sm:border-cyan-400 max-sm:rounded max-sm:-z-10 transition-all ease-out`}
          >
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative w-full h-full px-4 py-1 rounded-full border-transparent ${
                  link.path === pathName
                    ? "cursor-default text-subBgColor"
                    : "text-white hover:text-amber-400"
                } group`}
                onClick={() => {
                  setToggleNav(!toggleNav);
                }}
              >
                <span
                  className={`absolute labelPolygon w-full h-full rounded top-0 left-0 bg-white -z-10 ${
                    link.path === pathName ? "block" : "hidden"
                  }`}
                ></span>
                <span className="absolute labelPolygonDecor w-full h-full top-0 left-0 bg-amber-400 hidden group-hover:block"></span>
                <li className="font-medium">{link.name.toUpperCase()}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      <Button
        title="Contact"
        path="/contact"
        size="SM"
        hoverBorderColor="border-amber-400"
        hoverBgColor="bg-amber-400"
        titleColor="text-subBgColor"
      />
    </nav>
  );
};

export default NavBar;
