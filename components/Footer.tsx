import { FooterLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute flex flex-col px-8 py-6 w-full h-max bg-white">
      <div>
        <h2 className="text-3xl font-bold text-sky-800">GG</h2>
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

      <p className="text-sky-800 text-xs">
        Copyright &copy; 2023 <span className="font-semibold">Glis Games</span>
      </p>
    </footer>
  );
};

export default Footer;
