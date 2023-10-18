import React from "react";
import Button from "./Button";
import Image from "next/image";
import Decor from "./Decor";

const Hero = () => {
  return (
    <header className="relative w-full h-full">
      <div className="absolute w-full min-h-screen bg-gradient-to-tl from-gray-700 via-gray-900 to-black -z-50"></div>

      <div className="flex flex-col w-full h-full mt-32 px-8 py-6">
        <h1 className="text-8xl font-bold my-8 self-center cursor-default">
          Here's the Big Title
        </h1>

        {/* HERO SECTION DECORATION */}
        <Decor />

        <div className="labelPolygon relative self-end w-[40%] h-72 flex bg-white/50 backdrop-blur rounded hover:bg-subBgColor">
          <Image
            src="/img-web-01.jpg"
            width={1920}
            height={1080}
            alt="cover"
            className="absolute max-w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black/25 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute bottom-24 right-28">
          <Button title="EXPLORE" size="LG" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
