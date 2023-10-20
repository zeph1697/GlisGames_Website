"use client";

import Image from "next/image";

import Hero from "@/components/Hero";
import Decor from "@/components/Decor";
import { HeroCarousels } from "@/constant";
import CompLayout from "@/components/CompLayout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
  return (
    <main className="relative flex w-full h-full min-h-screen flex-col items-center">
      <div className="absolute w-full h-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black -z-50"></div>
      <Hero />

      <CompLayout
        mainTitle="About Us"
        titleColor="text-amber-400"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus voluptates, hic impedit voluptas doloremque rerum eius itaque nemo, exercitationem eos, illum unde neque esse quo eum cum accusantium aliquam mollitia odit aspernatur officiis commodi debitis quisquam? Quasi corporis assumenda distinctio dolor cumque iure laudantium voluptas expedita ullam, harum consectetur. Mollitia placeat culpa quos amet vel eum quisquam. Eos, quos."
        childElement={
          <VerticalTimeline lineColor="#075985">
            {HeroCarousels.map((object) => (
              <VerticalTimelineElement
                key={object.title}
                // visible={true}
                contentStyle={{ background: "transparent" }}
                contentArrowStyle={{ borderRight: "7px solid #fbbf24" }}
              >
                <div className="grid grid-cols-[40%_60%]">
                  <Decor direction="LEFT" ringSize="w-8 h-8" />
                  <p className="text-lg font-medium text-center">
                    {object.title}
                  </p>
                </div>

                <p className="vertical-timeline-element-subtitle">
                  {object.content}
                </p>

                <Image
                  src={object.imgUrl}
                  width={480}
                  height={360}
                  alt="cover"
                  className="imgPolygon absolute max-w-full h-full object-cover -z-10"
                />
                <div className="absolute w-full h-full bg-black/25 backdrop-blur-[2px] -z-10 "></div>
                <span className="absolute"></span>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        }
      />
    </main>
  );
}
