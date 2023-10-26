import CompLayout from "@/components/CompLayout";
import { ContactConfig } from "@/constant/general-config";
import React from "react";

const Contact = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-950 via-gray-950 to-gray-950 -z-50"></span> */}

      <CompLayout
        mainTitle="Contact Us"
        subTitle="Get in touch"
        content="If you have any inquiry or question, feel free to contact us via email. Our team will respond to you within 12 hours."
        childElement={
          <ul className="flex justify-between mt-20">
            {ContactConfig.map((cta) => (
              <li className="flex flex-col gap-2 w-72 font-medium">
                <h3 className="text-3xl font-bold mb-4">{cta.title}</h3>
                <p className="text-cyan-400">{cta.subtitle}</p>
                <a
                  href={cta.url}
                  target="_blank"
                  className="text-lg hover:text-amber-400"
                >
                  {cta.path}
                </a>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
};

export default Contact;
