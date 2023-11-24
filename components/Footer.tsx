"use client";

import { CTALinks, FooterTerms } from "@/constant/general-config";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";

const Footer = () => {
  return (
    <motion.footer
      key={"footer"}
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      exit="hidden"
      className="mx-auto mt-12 flex flex-col justify-center items-center px-8 py-6 xl:w-1/2 md:w-4/5 w-[90%] gap-5 border-t-[1px] border-cyan-400"
    >
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

      <motion.ul
        key={"footer-1"}
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
        className="flex max-sm:flex-col w-full max-sm:gap-2 justify-between"
      >
        {FooterTerms.map((term) => (
          <li
            key={term.title}
            className="flex w-full items-center justify-center text-center text-sm text-cyan-400 hover:text-white font-medium tracking-wide cursor-pointer border-r-[1px] md:border-white/50 border-transparent last:border-transparent"
          >
            {term.title}
          </li>
        ))}
      </motion.ul>

      <motion.ul
        key={"footer-2"}
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
        className="flex w-2/3 justify-between"
      >
        {CTALinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="flex items-center gap-2 text-cyan-400 hover:text-white"
          >
            <li className="flex items-center font-extralight group transition-all ease-out">
              <link.icon className="md:text-base text-xl" />
              <p className="md:flex hidden ml-2 text-sm">{link.name}</p>
            </li>
          </a>
        ))}
      </motion.ul>

      <p className="text-sky-800 text-xs mt-2">
        Copyright &copy; 2023 <span className="font-semibold">Glis Games</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
