"use client";

import Image from "next/image";
import React from "react";
import Decor from "./Decor";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";

type TypeCustomComp = {
  mainTitle: string;
  subTitle?: string;
  content?: string;
  titleColor?: string;
  subTitleColor?: string;
  contentColor?: string;
  decorColor?: string;
  ringColor?: string;

  childElement?: any;
};

const CompLayout = ({
  mainTitle,
  subTitle,
  content,
  titleColor,
  subTitleColor,
  contentColor,
  decorColor,
  ringColor,
  childElement,
}: TypeCustomComp) => {
  return (
    <div className="grid xl:grid-cols-[10%_90%] grid-cols-[15%_85%] w-full h-full mt-32 mb-8 xl:px-16 md:px-10 px-4 overflow-x-clip">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
        className="relative flex justify-center mt-5"
      >
        <span
          className={`absolute -rotate-90 self-start -translate-x-4 top-36 font-bebas tracking-[0.3em] text-xl text-cyan-400 whitespace-nowrap`}
        >
          {subTitle}
        </span>
        <Decor
          direction="TOP"
          color="bg-sky-800"
          ringBordColor="border-sky-800"
        />
      </motion.div>

      <div className="flex flex-col justify-between gap-8 w-full h-full ">
        <motion.h2
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className={`${
            titleColor ? titleColor : "text-amber-400"
          } md:text-5xl text-4xl font-bold cursor-default`}
        >
          {mainTitle}
        </motion.h2>
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className={`${
            contentColor ? contentColor : "text-cyan-600"
          } font-medium text-base text-justify`}
        >
          {content}
        </motion.p>

        {/* SECTION CONTENT */}
        {childElement}
      </div>
    </div>
  );
};

export default CompLayout;
