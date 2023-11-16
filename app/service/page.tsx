import ChildOfService from "@/components/ChildOfService";
import CompLayout from "@/components/CompLayout";
import { ServiceTags } from "@/constant/general-config";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Services - Glis Games",
  description: "Glis Games Company Website",
};

const Service = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-950 via-gray-900 to-black -z-50"></span> */}

      <CompLayout
        mainTitle="Services"
        subTitle="What can we offer"
        content="Blazing solution for your game!"
        childElement={<ChildOfService />}
      />
    </section>
  );
};

export default Service;
