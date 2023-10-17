import React from "react";
import Button from "./Button";
import Image from "next/image";
import Decor from "./Decor";

const Hero = () => {
  return (
    <header className="relative w-full h-full min-h-screen">
      <div className="">
        <Image
          src="/img-web-01.jpg"
          width={1920}
          height={1080}
          alt="cover"
          className="absolute max-w-full h-full object-cover -z-50"
        />
        <div className="absolute w-full h-full bg-black/50 backdrop-blur-sm -z-40"></div>
      </div>

      <div className="w-full h-full mt-32 px-8 py-6">
        <h1 className="text-8xl font-bold my-8">Here's the Big Title</h1>

        {/* HERO SECTION DECORATION */}
        <Decor />

        <div className="right-0 w-[40%] h-40 flex items-center justify-end mt-32 px-16 bg-subBgColor rounded bgcl">
          <Button title="EXPLORE" size="LG" hoverBgColor="yellow-500" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
