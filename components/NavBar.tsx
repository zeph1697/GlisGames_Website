"use client";

import { NavLinks } from "@/constant";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(true);

  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScrollTop(false) : setScrollTop(true);
  });
  return (
    <nav
      className={`fixed flex justify-between items-center px-8 w-full z-40 transition-all ease-out ${
        scrollTop ? "bg-transparent h-24" : "bg-subBgColor h-16 drop-shadow"
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
              className="w-full h-full px-4 py-1 rounded-full border-transparent border-[1px] hover:border-white"
            >
              <li className="">{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <Button title="Contact" path="/contact" size="SM" />
    </nav>
  );
};

export default NavBar;
