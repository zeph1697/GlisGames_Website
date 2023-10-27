"use client";

import { NavLinks } from "@/constant/general-config";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(true);
  const pathName = usePathname();

  document.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScrollTop(false) : setScrollTop(true);
  });

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <nav
      className={`fixed flex justify-between items-center px-8 w-full z-40 transition-all ease-out ${
        scrollTop ? "bg-transparent h-24" : "bg-subBgColor h-16"
      }`}
    >
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="px-2 text-4xl text-white hover:text-sky-800 hover:bg-white rounded-sm outline outline-2 outline-transparent hover:outline-white border-spacing-4 border-[1px] border-white hover:border-sky-800 font-bold cursor-pointer"
        >
          {scrollTop ? "Glis Games" : "Glis Games"}
        </Link>
        <ul className="flex items-center text-base gap-1">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative w-full h-full px-4 py-1 rounded-full border-transparent ${
                link.path === pathName
                  ? "cursor-default text-subBgColor"
                  : "text-white hover:text-amber-400"
              } group`}
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
