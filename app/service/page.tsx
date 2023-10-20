import CompLayout from "@/components/CompLayout";
import React from "react";

const Service = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      <div className="absolute w-full h-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-indigo-100 via-slate-500 to-indigo-100 -z-50"></div>

      <div className="mt-20">
        <CompLayout mainTitle="Services" />
      </div>
    </section>
  );
};

export default Service;
