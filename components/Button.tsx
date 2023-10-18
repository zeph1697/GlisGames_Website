import Link from "next/link";
import React from "react";

type BtnType = {
  title: string;
  path?: string;
  mainBgColor?: string;
  titleColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;
  decorBgColor?: string;
  size?: "SM" | "LG";
  action?: void;
};

const Button = ({
  title,
  path,
  mainBgColor,
  titleColor,
  hoverBgColor,
  hoverBorderColor,
  decorBgColor,
  size,
  action,
}: BtnType) => {
  return (
    <button className="btnPolygon">
      <Link
        href={`${path ? path : ""}`}
        className={`relative inline-flex items-center justify-center rounded ${
          size ? (size === "SM" ? "px-4 py-2" : "px-8 py-4") : "px-6 py-3"
        } overflow-hidden transition-all ${
          mainBgColor ? mainBgColor : "bg-white"
        }  group`}
      >
        <span
          className={`absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 ${
            hoverBorderColor ? hoverBorderColor : "border-sky-800"
          } group-hover:w-full ease`}
        ></span>
        <span
          className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 ${
            hoverBorderColor ? hoverBorderColor : "border-sky-800"
          } group-hover:w-full ease`}
        ></span>
        <span
          className={`absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
            hoverBgColor ? hoverBgColor : "bg-sky-800"
          } group-hover:h-full ease`}
        ></span>
        <span
          className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
            hoverBgColor ? hoverBgColor : "bg-sky-800"
          } group-hover:h-full ease`}
        ></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-25"></span>
        <span
          className={`relative w-full text-center ${
            size
              ? size === "SM"
                ? "text-sm font-semibold"
                : "text-lg font-bold"
              : "font-semibold"
          } ${
            titleColor ? titleColor : "text-sky-800"
          } transition-colors duration-300 ease-in-out group-hover:text-white`}
        >
          {title}
        </span>
      </Link>
    </button>
  );
};

export default Button;
