"use client";

import { GameList } from "@/constant/game-list-config";
import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";
import ImgComp from "./ImgComp";
import { fadeIn } from "@/motionConfig";

const ChildOfProduct = () => {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {GameList.map((game) => (
        <motion.li
          key={game.id}
          variants={fadeIn("left", 0.1 * game.id)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="relative flex h-48 mb-6 group"
        >
          <ImgComp imgUrl="/imgLogo.png" />

          <div className="flex flex-col justify-between w-1/2 ml-5">
            <h3 className="font-bebas tracking-wider text-2xl text-cyan-400 group-hover:text-amber-400 cursor-default">
              {game.name}
            </h3>

            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              corporis ipsum accusantium explicabo. Quia, omnis!
            </p>

            <div className="">
              <Button
                title="Live"
                path={game.gameUrl}
                hoverBgColor="bg-amber-400"
                hoverBorderColor="border-amber-400"
                newTab={true}
              />
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ChildOfProduct;
