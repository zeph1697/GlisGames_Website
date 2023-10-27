"use client";

import { ServiceTags } from "@/constant/general-config";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motionConfig";

const ChildOfService = () => {
  return (
    <ul className="grid grid-flow-col w-full h-80 mt-12">
      {ServiceTags.map((tag) => (
        <motion.li
          variants={
            tag.index % 2 === 0
              ? fadeIn("up", 0.5 + 0.2 * tag.index)
              : fadeIn("down", 0.5 + 0.2 * tag.index)
          }
          initial="hidden"
          animate="show"
          exit="hidden"
          key={tag.index}
          className="tagPolygon relative even:self-start odd:self-end justify-self-center w-[90%] bg-gradient-to-b from-sky-800/75 via-transparent to-amber-400/25 hover:to-amber-400/50 px-6 pt-8 pb-20 rounded group"
        >
          <h3 className="absolute left-0 bottom-0 w-full text-center text-2xl font-bebas tracking-wide bg-amber-400 rounded-b text-sky-800 py-3 z-20">
            {tag.title}
          </h3>
          <div className="h-1/2 group-hover:-translate-y-full transition-all duration-300 ease-out">
            <p className="text-center">{tag.content}</p>
            <Image
              src="/imgLogo.png"
              width={1920}
              height={1080}
              className="absolute rotate-12 mt-8"
              alt="imgLogo"
            />
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ChildOfService;
