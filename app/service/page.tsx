import CompLayout from "@/components/CompLayout";
import { ServiceTags } from "@/constant/general-config";
import React from "react";

const Service = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      <span className="absolute w-full h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 -z-50"></span>

      <CompLayout
        mainTitle="Services"
        subTitle="What can we offer"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eveniet quaerat iure eos placeat quisquam in. Hic placeat odit dolores laudantium! Distinctio modi atque ipsa voluptates, fuga sed eaque cumque!"
        childElement={
          <ul className="grid grid-flow-col w-full h-80 mt-12">
            {ServiceTags.map((tag) => (
              <li className="tagPolygon relative even:self-start odd:self-end justify-self-center w-[90%] bg-gradient-to-b from-cyan-400/75 via-transparent to-transparent px-6 pt-4 pb-16 rounded">
                <h3 className="absolute left-0 bottom-0 w-full text-center text-2xl font-bebas tracking-wide bg-white rounded-b text-sky-800 py-3">
                  {tag.title}
                </h3>
                <p className="text-center">{tag.content}</p>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
};

export default Service;
