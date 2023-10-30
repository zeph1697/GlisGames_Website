import React from "react";

type DecorType = {
  direction: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
  color?: string;
  ringBordColor?: string;
  ringSize?: string;
  isAnimate?: boolean;
};

const Decor = ({
  color,
  ringBordColor,
  direction,
  ringSize,
  isAnimate,
}: DecorType) => {
  return (
    <div className="relative flex items-center">
      <span
        className={`absolute rounded-full border-[1px] ${
          ringSize ? ringSize : "md:w-16 w-12 md:h-16 h-12"
        } ${isAnimate ? "animate-water-drop" : ""} ${
          ringBordColor ? ringBordColor : "border-white"
        } opacity-75 ${
          direction === "LEFT"
            ? "left-full"
            : direction === "TOP"
            ? "top-0 -translate-y-1/2"
            : direction === "RIGHT"
            ? "left-0 -translate-x-1/2"
            : "top-full -translate-y-1/2"
        } -translate-x-1/2`}
      ></span>
      <span
        className={`absolute ${
          direction === "LEFT" || direction === "RIGHT"
            ? "w-full h-0.5"
            : "h-full w-0.5 -translate-x-1/2"
        } ${color ? color : "bg-white"} `}
      ></span>
      <span
        className={`absolute w-2 h-2 ${
          color ? color : "bg-white"
        } rounded-full ${
          direction === "LEFT"
            ? "left-full "
            : direction === "TOP"
            ? "top-0 -translate-y-1/2"
            : direction === "RIGHT"
            ? "left-0 "
            : "top-full -translate-y-1/2"
        } -translate-x-1/2`}
      ></span>
    </div>
  );
};

export default Decor;
