"use client";

import { ContactConfig } from "@/constant/general-config";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";
import { TbExternalLink } from "react-icons/tb";

const ChildOfContact = () => {
  return (
    <ul className="flex flex-wrap gap-12 justify-between mt-20">
      {ContactConfig.map((cta) => (
        <motion.li
          key={cta.index}
          variants={fadeIn("up", 0.5 + 0.2 * cta.index)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-2 w-72 font-medium"
        >
          <h3 className="text-3xl font-bold mb-4">{cta.title}</h3>
          <p className="text-cyan-400">{cta.subtitle}</p>
          <a
            href={cta.url}
            target="_blank"
            className="flex items-center gap-2 text-lg hover:text-amber-400"
          >
            {cta.path}
            {cta.path && <TbExternalLink />}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default ChildOfContact;
