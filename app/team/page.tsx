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
        childElement={
          <ul className="flex flex-col justify-between gap-12 mt-4">
            {TeamConfig.map((emp) => (
              <li key={emp.id} className="relative">
                <span className="absolute -left-8 top-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-amber-500 border-b-[5px] border-b-transparent"></span>

                <h3 className="labelPolygon absolute w-fit font-bebas text-xl text-sky-800 bg-white rounded-sm px-3 z-10 -top-4 left-10">
                  {emp.id}
                </h3>
                <div className="imgPolygon w-full bg-gradient-to-r from-sky-900 via-sky-800 to-transparent grid grid-cols-4 gap-8 justify-between pt-6 pb-4 px-12">
                  {emp.guys.map((guy) => (
                    <div
                      key={guy.name}
                      className="grid grid-cols-[35%_65%] group"
                    >
                      <div className="relative flex items-center justify-center w-16 h-16">
                        <span className="absolute labelPolygon rounded-sm w-full h-full shadow-inner shadow-sky-950 border-l-2 border-white hover:border-amber-400"></span>
                        <span className="absolute labelPolygonDecor w-full h-full bg-transparent group-hover:bg-amber-400"></span>
                        <guy.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="self-center flex flex-col">
                        <p className="group-hover:text-amber-400">{guy.name}</p>
                        <p>{guy.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
};

export default Team;
