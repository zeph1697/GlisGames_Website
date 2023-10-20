import { FooterLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute grid grid-cols-[40%_60%] px-8 py-6 w-full h-max bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex flex-col items-start justify-between">
        <h2 className="w-fit h-fit text-3xl font-bold text-sky-800 border-[1px] border-sky-800 rounded px-2 ">
          GG
        </h2>

        <p className="text-sky-800 text-xs">
          Copyright &copy; 2023{" "}
          <span className="font-semibold">Glis Games</span>
        </p>
      </div>

      <ul>
        {FooterLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="w-fit flex items-center gap-2 hover:text-black"
          >
            <link.icon className="text-sky-800" />
            <li className="text-sky-800">{link.name}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
