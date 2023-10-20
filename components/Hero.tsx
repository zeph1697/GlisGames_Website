"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Decor from "./Decor";
import { HeroCarousels } from "@/constant";

const Hero = () => {
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
    <header className="relative w-full h-full min-h-screen overflow-hidden">
      <span
        id="hero-decor"
        className={`absolute top-[40%] xl:top-[30%] left-1/2 -translate-x-1/2 text-transparent tracking-[0.2em] font-bebas font-outline-4 opacity-20 text-[80px] md:text-[160px] xl:text-[320px] cursor-default -z-40 whitespace-nowrap`}
      >
        GLIS GAMES - GLIS GAMES - GLIS GAMES -GLIS GAMES - GLIS GAMES
      </span>

      <div className="flex flex-col w-full h-full mt-32 px-8 py-6">
        {/* HERO TITLE */}
        <div className="flex flex-col items-center self-center">
          <h1 className="text-8xl font-bold my-6 cursor-default">
            Here's the Big Title
          </h1>

          <p className="text-sky-500 text-sm font-light">
            Some joeking arounds in here
          </p>

          <div className="flex h-20 mt-4">
            <Decor
              direction="BOTTOM"
              ringBordColor="border-amber-400"
              isAnimate={true}
            />
          </div>

          <div className="mt-12">
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
    </header>
  );
};

export default Hero;
