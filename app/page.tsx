import Image from "next/image";

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
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus voluptates, hic impedit voluptas doloremque rerum eius itaque nemo, exercitationem eos, illum unde neque esse quo eum cum accusantium aliquam mollitia odit aspernatur officiis commodi debitis quisquam? Quasi corporis assumenda distinctio dolor cumque iure laudantium voluptas expedita ullam, harum consectetur. Mollitia placeat culpa quos amet vel eum quisquam. Eos, quos."
        childElement={<ChildOfLanding />}
      />
    </main>
  );
}
