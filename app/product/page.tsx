import Button from "@/components/Button";
import ChildOfProduct from "@/components/ChildOfProduct";
import CompLayout from "@/components/CompLayout";
import ImgComp from "@/components/ImgComp";
import { GameList } from "@/constant/game-list-config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Explore Games - Glis Games",
  description: "Glis Games Company Website",
};

const Product = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-950 via-gray-900 to-black -z-50"></span> */}

      <CompLayout
        mainTitle="Our Games"
        subTitle="What we do"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eveniet quaerat iure eos placeat quisquam in. Hic placeat odit dolores laudantium! Distinctio modi atque ipsa voluptates, fuga sed eaque cumque!"
        childElement={<ChildOfProduct />}
      />
    </section>
  );
};

export default Product;
