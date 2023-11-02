"use client";

import { TeamConfig } from "@/constant/general-config";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";

const ChildOfTeam = () => {
  return (
    <ul className="flex flex-col justify-between gap-12 mt-4">
      {TeamConfig.map((emp) => (
        <li key={emp.id} className="relative">
          <motion.span
            variants={fadeIn("right", 0.2 + 0.3 * emp.id)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute md:-left-8 -left-5 top-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-amber-500 border-b-[5px] border-b-transparent"
          ></motion.span>

          <motion.h3
            variants={fadeIn("right", 0.5 + 0.3 * emp.id)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="labelPolygon absolute w-fit font-bebas text-xl text-sky-800 bg-white rounded-sm px-3 z-10 -top-4 left-10"
          >
            {emp.title}
          </motion.h3>
          <motion.div
            variants={fadeIn("left", 0.2 + 0.3 * emp.id)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="imgPolygon w-full bg-gradient-to-r from-sky-900 via-sky-800 to-transparent grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-8 justify-between pt-6 pb-4 px-12"
          >
            {emp.guys.map((guy) => (
              <div key={guy.name} className="grid grid-cols-[35%_65%] group">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <span className="absolute labelPolygon rounded-sm w-full h-full shadow-inner shadow-sky-950 border-l-2 border-white group-hover:border-amber-400"></span>
                  <span className="absolute labelPolygonDecor w-full h-full bg-transparent group-hover:bg-amber-400"></span>
                  <guy.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="self-center flex flex-col">
                  <p className="group-hover:text-amber-400">{guy.name}</p>
                  <p className="text-sm text-cyan-400 font-medium">
                    {guy.position}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default ChildOfTeam;
