"use client";

import { Timeline } from "@/constant/general-config";
import React from "react";
import Decor from "./Decor";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motionConfig";

const ChildOfLanding = () => {
  return (
    <ul className="w-full h-full flex flex-col items-center justify-between gap-4">
      {Timeline.map((node) => (
        <li
          key={node.date}
          className="relative grid grid-cols-[50%_40%] gap-[10%] w-full h-40"
        >
          <motion.span
            variants={fadeIn("right", 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="absolute -left-8 top-1/2 translate-y-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-amber-500 border-b-[5px] border-b-transparent"
          ></motion.span>

          <motion.div
            variants={fadeIn("left", 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="grid grid-cols-[40%_60%] w-full mt-6"
          >
            <p className="text-lg place-self-center justify-self-start font-medium">
              {node.date}
            </p>
            <Decor direction="LEFT" ringSize="w-8 h-8" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2 + 0.3 * node.index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="relative flex items-center justify-center w-[480px] group"
          >
            <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-[1px] border-b-[1px] border-white hidden group-hover:block"></span>
            <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white rounded-xl hidden group-hover:block"></span>
            <div className="imgPolygon w-full h-full bg-sky-950">
              <div className="absolute w-full h-full bg-gradient-to-t from-amber-400/75 to-amber-400/25 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
            </div>
            <p className="absolute hidden group-hover:block">{node.detail}</p>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default ChildOfLanding;
