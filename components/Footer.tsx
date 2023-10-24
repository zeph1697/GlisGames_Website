"use client";

import { FooterCTALinks, FooterTerms } from "@/constant/general-config";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto mt-12 flex flex-col justify-center items-center px-8 py-6 w-1/2 gap-5 border-t-[1px] border-cyan-400">
      <Link
        href=""
        scroll={false}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-fit h-fit text-3xl font-bold text-white hover:text-sky-800 border-[1px] border-white hover:border-sky-800 outline outline-2 outline-transparent hover:outline-white border-spacing-4 bg-transparent hover:bg-white rounded px-2 mb-8 cursor-pointer"
      >
        GG
      </Link>

      <ul className="flex w-full justify-between">
        {FooterTerms.map((term) => (
          <li
            key={term.title}
            className="flex w-full items-center justify-center text-sm text-cyan-400 hover:text-white font-medium tracking-wide cursor-pointer border-r-[1px] border-white/50 last:border-transparent"
          >
            {term.title}
          </li>
        ))}
      </ul>

      <ul className="flex w-2/3 justify-between">
        {FooterCTALinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="flex items-center gap-2 text-cyan-400 hover:text-white"
          >
            <link.icon className="" />
            <li className="font-extralight">{link.name}</li>
          </Link>
        ))}
      </ul>

      <p className="text-sky-800 text-xs mt-2">
        Copyright &copy; 2023 <span className="font-semibold">Glis Games</span>
      </p>
    </footer>
  );
};

export default Footer;
