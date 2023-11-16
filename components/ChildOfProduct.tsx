"use client";

import { GameList } from "@/constant/game-list-config";
import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";
import ImgComp from "./ImgComp";
import { fadeIn } from "@/constant/motion-config";

const ChildOfProduct = () => {
  return (
    <ul className="grid xl:grid-cols-2 grid-cols-1 gap-8">
      {GameList.map((game) => (
        <motion.li
          key={game.id}
          variants={fadeIn("left", 0.1 * game.id)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="relative flex h-48 group"
        >
          <ImgComp imgUrl={game.imgUrl} />

          <div className="flex flex-col justify-between w-1/2 max-sm:w-full ml-5">
            <h3 className="font-bebas tracking-wider text-2xl text-cyan-400 group-hover:text-amber-400 cursor-default">
              {game.name}
            </h3>

            <p className="md:text-sm text-xs text-white/80">
              {game.description}
            </p>

            <div className="">
              <Button
                title="DEMO PLAY"
                path={game.gameUrl}
                hoverBgColor="bg-amber-400"
                hoverBorderColor="border-amber-400"
                newTab={true}
                size="SM"
              />
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ChildOfProduct;
