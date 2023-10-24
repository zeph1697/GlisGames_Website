import Image from "next/image";
import React from "react";
import Decor from "./Decor";

type TypeCustomComp = {
  mainTitle: string;
  subTitle?: string;
  content?: string;
  titleColor?: string;
  decorColor?: string;
  ringColor?: string;

  childElement?: any;
};

const CompLayout = ({
  mainTitle,
  subTitle,
  content,
  titleColor,
  decorColor,
  ringColor,
  childElement,
}: TypeCustomComp) => {
  return (
    <div className="grid grid-cols-[10%_90%] w-full h-full mt-32 mb-8 px-16">
      <div className="relative flex justify-center mt-5">
        <span
          className={`absolute -rotate-90 self-center -translate-x-4 font-bebas tracking-[0.3em] text-xl text-cyan-400 whitespace-nowrap`}
        >
          {subTitle}
        </span>
        <Decor
          direction="TOP"
          color="bg-sky-800"
          ringBordColor="border-sky-800"
        />
      </div>

      <div className="flex flex-col justify-between gap-8 w-full h-full ">
        <h2
          className={`${
            titleColor ? titleColor : "text-white"
          } text-5xl font-bold cursor-default`}
        >
          {mainTitle}
        </h2>
        <p className="text-sky-800 text-justify">{content}</p>

        {/* SECTION CONTENT */}
        {childElement}
      </div>
    </div>
  );
};

export default CompLayout;
