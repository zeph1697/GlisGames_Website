import CompLayout from "@/components/CompLayout";
import React from "react";

const Team = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      <span className="absolute w-full h-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-cyan-400 to-blue-700 -z-50"></span>

      <div className="mt-20">
        <CompLayout mainTitle="Our Team" />
      </div>
    </section>
  );
};

export default Team;
