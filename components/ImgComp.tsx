import Image from "next/legacy/image";
import React from "react";

type TypeOfImgComp = {
  imgUrl: string;
  content?: any;
};

const ImgComp = ({ imgUrl, content }: TypeOfImgComp) => {
  return (
    <div className="relative flex items-center justify-center w-[480px] max-sm:w-[240px] group">
      <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-2 border-b-2 border-white group-hover:border-amber-400"></span>
      <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white  group-hover:bg-amber-400"></span>
      <div className="imgPolygon w-full h-full">
        <Image
          src={imgUrl}
          alt="cover"
          layout="fill"
          className="absolute object-cover -z-10"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black/50 to-black/5 backdrop-blur-[2px] -z-10 hidden group-hover:block"></div>
      </div>
      <p className="absolute hidden group-hover:block">{content}</p>
    </div>
  );
};

export default ImgComp;
