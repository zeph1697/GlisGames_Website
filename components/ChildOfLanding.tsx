"use client";

import { Timeline } from "@/constant/general-config";
import React from "react";
import Decor from "./Decor";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";

const ChildOfLanding = () => {
  return (
    <ul className="w-full h-full flex flex-col items-center justify-between gap-4">
      {Timeline.map((node) => (
        <li
          key={node.date}
          className="relative grid xl:grid-cols-[50%_40%] md:grid-cols-[40%_50%] grid-cols-1 gap-[10%] w-full xl:h-40 md:h-60 h-80"
        >
          <motion.span
            variants={fadeIn("right", 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="absolute md:-left-8 -left-5 top-1/2 border-t-[5px] border-t-transparent border-l-[8px] border-l-amber-500 border-b-[5px] border-b-transparent"
          ></motion.span>

          <motion.div
            variants={fadeIn("left", 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="grid grid-cols-[40%_60%] w-full mt-6"
          >
            <div className="flex flex-col xl:text-2xl md:text-xl text-lg self-center justify-self-start">
              <p className="font-bebas">{node.date}</p>
              <span className="font-medium text-base text-cyan-400">
                {node.note}
              </span>
            </div>
            <Decor direction="LEFT" ringSize="md:w-8 w-6 md:h-8 h-6" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2 + 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="relative flex items-center justify-center w-full group"
          >
            <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-[1px] border-b-[1px] border-white hidden group-hover:block"></span>
            <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white rounded-xl hidden group-hover:block"></span>
            <div className="imgPolygon w-full h-full bg-sky-950">
              <div className="absolute w-full h-full bg-gradient-to-t from-amber-400/75 to-amber-400/25 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
              <p className="flex w-full h-full items-center px-4 py-6 text-justify indent-4">
                {node.detail}
              </p>
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default ChildOfLanding;
