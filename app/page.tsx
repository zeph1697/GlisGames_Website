import Image from "next/image";

import Hero from "@/components/Hero";
import Decor from "@/components/Decor";
import { ServiceCarousels } from "@/constant/general-config";
import CompLayout from "@/components/CompLayout";

export default function Home() {
  return (
    <main className="relative flex w-full h-full min-h-screen flex-col items-center">
      <Hero />

      <CompLayout
        mainTitle="About Us"
        titleColor="text-amber-400"
        subTitle="Why we're here"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus voluptates, hic impedit voluptas doloremque rerum eius itaque nemo, exercitationem eos, illum unde neque esse quo eum cum accusantium aliquam mollitia odit aspernatur officiis commodi debitis quisquam? Quasi corporis assumenda distinctio dolor cumque iure laudantium voluptas expedita ullam, harum consectetur. Mollitia placeat culpa quos amet vel eum quisquam. Eos, quos."
        childElement={
          <div className="w-full h-full flex flex-col items-center justify-between gap-4">
            {ServiceCarousels.map((object) => (
              <div
                key={object.title}
                className="relative grid grid-cols-[50%_40%] gap-[10%] w-full h-64"
              >
                <span className="absolute -left-8 top-1/2 translate-y-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-amber-500 border-b-[5px] border-b-transparent"></span>

                <div className="grid grid-cols-[40%_60%] w-full mt-6">
                  <p className="text-lg place-self-center justify-self-start font-medium">
                    {object.title}
                  </p>
                  <Decor direction="LEFT" ringSize="w-8 h-8" />
                </div>

                <div className="relative flex items-center justify-center w-[480px] group">
                  <span className="absolute imgPolygon w-full h-full top-2 left-2 border-r-[1px] border-b-[1px] border-white hidden group-hover:block"></span>
                  <span className="absolute imgPolygonDecor w-full h-full top-2 left-2 bg-white rounded-xl hidden group-hover:block"></span>
                  <div className="imgPolygon w-full h-full">
                    <Image
                      src={object.imgUrl}
                      width={480}
                      height={360}
                      alt="cover"
                      className="absolute max-w-full h-full object-cover -z-10"
                    />
                    <div className="absolute w-full h-full bg-black/25 backdrop-blur-[2px] -z-10 hidden group-hover:block "></div>
                  </div>
                  <p className="absolute hidden group-hover:block">
                    {object.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </main>
  );
}
