import Image from "next/image";
import React from "react";

type TypeOfImgComp = {
  imgUrl: string;
  content?: any;
};

const ImgComp = ({ imgUrl, content }: TypeOfImgComp) => {
  return (
    <div className="relative flex items-center justify-center w-[480px] group">
      <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-[1px] border-b-[1px] border-white group-hover:border-amber-400"></span>
      <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white rounded-xl group-hover:bg-amber-400"></span>
      <div className="imgPolygon w-full h-full">
        <Image
          src={imgUrl}
          width={1920}
          height={1080}
          alt="cover"
          className="absolute max-w-full max-h-full object-cover -z-10"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black/50 to-black/5 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
      </div>
      <p className="absolute hidden group-hover:block">{content}</p>
    </div>
  );
};

export default ImgComp;
