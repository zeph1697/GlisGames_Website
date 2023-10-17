import React from "react";

type DecorType = {
  color?: string;
  direction?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
  length?: any;
};

const Decor = ({ color, direction, length }: DecorType) => {
  return (
    <div className="relative flex items-center">
      <span
        className={`absolute ${
          length ? `w-[${length}%]` : "w-[25%]"
        } h-0.5 bg-white `}
      ></span>
      <span
        className={`absolute w-2 h-2 bg-white rounded-full ${
          length ? `left-[${length}%]` : "left-[25%]"
        } -translate-x-1/2`}
      ></span>
      <span
        className={`absolute w-16 h-16 rounded-full border-[1px] border-white opacity-75 ${
          length ? `left-[${length}%]` : "left-[25%]"
        } -translate-x-1/2 `}
      ></span>
    </div>
  );
};

export default Decor;
