import Button from "@/components/Button";
import CompLayout from "@/components/CompLayout";
import ImgComp from "@/components/ImgComp";
import { GameList } from "@/constant/game-list-config";
import React from "react";

const Product = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      <span className="absolute w-full h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-500 to-blue-800 -z-50"></span>

      <CompLayout
        mainTitle="Our Games"
        subTitle="What we do"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eveniet quaerat iure eos placeat quisquam in. Hic placeat odit dolores laudantium! Distinctio modi atque ipsa voluptates, fuga sed eaque cumque!"
        childElement={
          <ul className="grid grid-cols-2 gap-4">
            {GameList.map((game) => (
              <li className="relative flex h-48 mb-6 group">
                <ImgComp imgUrl="/imgLogo.png" />

                <div className="flex flex-col justify-between w-1/2 ml-5">
                  <h3 className="font-bebas tracking-wider text-2xl text-white group-hover:text-amber-400 cursor-default">
                    {game.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint corporis ipsum accusantium explicabo. Quia, omnis!
                  </p>

                  <div className="">
                    <Button
                      title="Live"
                      path={game.gameUrl}
                      hoverBgColor="bg-amber-400"
                      hoverBorderColor="border-amber-400"
                      newTab={true}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
};

export default Product;
