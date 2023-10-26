import CompLayout from "@/components/CompLayout";
import { ServiceTags } from "@/constant/general-config";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-950 via-gray-900 to-black -z-50"></span> */}

      <CompLayout
        mainTitle="Services"
        subTitle="What can we offer"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eveniet quaerat iure eos placeat quisquam in. Hic placeat odit dolores laudantium! Distinctio modi atque ipsa voluptates, fuga sed eaque cumque!"
        childElement={
          <ul className="grid grid-flow-col w-full h-80 mt-12">
            {ServiceTags.map((tag) => (
              <li className="tagPolygon relative even:self-start odd:self-end justify-self-center w-[90%] bg-gradient-to-b from-sky-800/75 via-transparent to-amber-400/25 hover:to-amber-400/50 px-6 pt-8 pb-20 rounded group">
                <h3 className="absolute left-0 bottom-0 w-full text-center text-2xl font-bebas tracking-wide bg-amber-400 rounded-b text-sky-800 py-3 z-20">
                  {tag.title}
                </h3>
                <div className="h-1/2 group-hover:-translate-y-full transition-all ease-out">
                  <p className="text-center">{tag.content}</p>
                  <Image
                    src="/imgLogo.png"
                    width={1920}
                    height={1080}
                    className="absolute rotate-12 mt-8"
                    alt="imgLogo"
                  />
                </div>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
};

export default Service;
