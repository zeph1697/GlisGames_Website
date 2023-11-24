import Image from "next/legacy/image";

import Hero from "@/components/Hero";
import Decor from "@/components/Decor";
import { ServiceCarousels, Timeline } from "@/constant/general-config";
import CompLayout from "@/components/CompLayout";
import { Metadata } from "next";
import ChildOfLanding from "@/components/ChildOfLanding";

export const metadata: Metadata = {
  title: "Glis Games: Casino Counselling & Development",
  description: "Glis Games Company Website",
};

export default function Home() {
  return (
    <main className="relative flex w-full h-full min-h-screen flex-col items-center">
      <Hero />

      <CompLayout
        mainTitle="About Us"
        subTitle="Why we're here"
        content="In the vast landscape of the gaming industry, where mighty dinosaurs roam, there emerged a small yet resilient creature called Glis. Much like the chubby dormouse it was named after, Glis Games scurried into existence among the giants of the gaming world."
        childElement={<ChildOfLanding />}
      />
    </main>
  );
}
