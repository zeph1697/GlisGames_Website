"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Decor from "./Decor";
import { ServiceCarousels } from "@/constant/general-config";

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
    <header className="relative w-full h-full flex flex-col items-center justify-between min-h-screen overflow-hidden">
      <span
        id="hero-decor"
        className={`absolute top-[40%] xl:top-[30%] left-1/2 -translate-x-1/2 text-transparent tracking-[0.2em] font-bebas font-outline-4 opacity-20 text-[80px] md:text-[160px] xl:text-[320px] cursor-default -z-40 whitespace-nowrap`}
      >
        GLIS GAMES - GLIS GAMES - GLIS GAMES - GLIS GAMES - GLIS GAMES
      </span>

      <div className="flex flex-col w-full h-full mt-32 px-8 py-6">
        {/* HERO TITLE */}
        <div className="flex flex-col items-center self-center">
          <h1
            id="h1"
            className={`${
              mainBtnHover ? "glitch text-amber-400" : ""
            } text-7xl font-bold my-6 cursor-default`}
            content="LET'S DISCOVER"
          >
            {mainBtnHover ? "LET'S DISCOVER" : "HERE'S THE BIG TITLE"}
          </h1>

          <p className="text-cyan-400 text-sm font-light">
            Some joeking arounds in here
          </p>

          <div className="flex h-20 mt-4">
            <Decor
              direction="BOTTOM"
              ringBordColor="border-amber-400"
              isAnimate={true}
            />
          </div>

          <div
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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 my-auto gap-8">
        {ServiceCarousels.map((object) => (
          <div
            key={object.title}
            className="relative grid w-[480px] h-40 group"
          >
            <div className="flex justify-between">
              <div className="grid grid-cols-2 gap-8">
                <p className="text-lg text-white place-self-center justify-self-start font-medium group-hover:text-amber-400 cursor-default">
                  {object.title}
                </p>
                <Decor direction="RIGHT" ringSize="w-8 h-8" />
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
                  width={480}
                  height={360}
                  alt="cover"
                  className="absolute max-w-full h-full object-cover -z-10"
                />
                <div className="absolute w-full h-full bg-black/50 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
              </div>
              <p className="absolute text-sm hidden group-hover:block cursor-default">
                {object.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
