"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/legacy/image";
import Decor from "./Decor";
import { ServiceCarousels } from "@/constant/general-config";

import { motion } from "framer-motion";
import { fadeIn } from "@/constant/motion-config";

const Hero = () => {
  const [mainBtnHover, setMainBtnHover] = useState(false);

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", () => {
        document.getElementById("hero-decor")
          ? (document.getElementById("hero-decor")!.style.left =
              window.screen.availWidth / 2 + window.scrollY * 2 + "px")
          : false;
      });
    };
  }, []);

  return (
    <header className="relative w-screen h-full flex flex-col items-center justify-between min-h-screen overflow-hidden">
      <span
        id="hero-decor"
        className={`absolute top-[40%] xl:top-[30%] left-1/2 -translate-x-1/2 text-transparent tracking-[0.2em] font-bebas font-outline-4 opacity-20 text-[80px] md:text-[160px] xl:text-[320px] cursor-default -z-40 whitespace-nowrap`}
      >
        GLIS GAMES - GLIS GAMES - GLIS GAMES - GLIS GAMES - GLIS GAMES
      </span>

      <div className="flex flex-col w-full h-full mt-32 xl:px-8 md:px-4 px-2 py-6">
        {/* HERO TITLE */}
        <div className="flex flex-col items-center self-center">
          <motion.h1
            id="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`${
              mainBtnHover ? "glitch text-amber-400" : ""
            } md:text-7xl text-5xl text-center font-bold xl:my-6 my-8 cursor-default`}
            content="LET'S DISCOVER"
          >
            {mainBtnHover ? "LET'S DISCOVER" : "FORGING MOUSE-TERPIECES"}
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-cyan-400 text-sm font-light"
          >
            Not just gaming, we're 'rodent'-ing the way to entertainment
            greatness!
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:h-20 h-16 mt-4"
          >
            <Decor
              direction="BOTTOM"
              ringBordColor="border-amber-400"
              isAnimate={true}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-12"
            onMouseEnter={() => {
              setMainBtnHover(true);
            }}
            onMouseLeave={() => {
              setMainBtnHover(false);
            }}
          >
            <Button
              title="EXPLORE"
              path="/product"
              size="LG"
              mainBgColor="bg-amber-400"
              highlightColor="bg-black"
            />
          </motion.div>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 my-auto xl:gap-8">
        {ServiceCarousels.map((object) => (
          <motion.div
            key={object.index}
            variants={fadeIn("up", 0.8 + 0.3 * object.index)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative grid xl:w-[480px] md:w-[640px] w-[360px] xl:h-40 md:h-44 h-48 group"
          >
            <div className="flex justify-between">
              <div className="md:w-[80%] w-[75%] grid xl:grid-cols-2 md:grid-cols-[35%_65%] grid-cols-[60%_40%] md:gap-8 gap-2">
                <p className="md:text-lg text-base text-white place-self-center justify-self-start font-medium group-hover:text-amber-400 cursor-default">
                  {object.title}
                </p>
                <Decor direction="RIGHT" ringSize="md:w-8 w-6 md:h-8 h-6" />
              </div>

              <div className="self-center justify-self-end opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all ease-out duration-300">
                <Button title="More" size="SM" path="/service" />
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-[1px] border-b-[1px] border-white hidden group-hover:block"></span>
              <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white rounded-xl hidden group-hover:block"></span>
              <div className="imgPolygon w-full h-full">
                <Image
                  src={object.imgUrl}
                  width={640}
                  height={360}
                  alt="cover"
                  className="absolute max-w-full h-full object-cover -z-10"
                />
                <div className="absolute w-full h-full bg-black/50 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
              </div>
              <p className="absolute text-sm px-4 text-center hidden group-hover:block cursor-default">
                {object.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
