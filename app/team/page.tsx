import ChildOfTeam from "@/components/ChildOfTeam";
import CompLayout from "@/components/CompLayout";
import { TeamConfig } from "@/constant/general-config";
import React from "react";

const Team = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-sky-950  to-gray-950 -z-50"></span> */}

      <CompLayout
        mainTitle="Our Team"
        subTitle="Who we are"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nisi ea cum explicabo nostrum odit?"
        childElement={<ChildOfTeam />}
      />
    </section>
  );
};

export default Team;
