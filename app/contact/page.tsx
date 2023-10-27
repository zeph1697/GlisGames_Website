import ChildOfContact from "@/components/ChildOfContact";
import CompLayout from "@/components/CompLayout";
import { ContactConfig } from "@/constant/general-config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - Glis Games",
  description: "Glis Games Company Website",
};

const Contact = () => {
  return (
    <section className="relative flex w-full h-full min-h-screen flex-col items-center">
      {/* <span className="fixed w-full h-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-950 via-gray-950 to-gray-950 -z-50"></span> */}

      <CompLayout
        mainTitle="Contact Us"
        subTitle="Get in touch"
        content="If you have any inquiry or question, feel free to contact us via email. Our team will respond to you within 12 hours."
        childElement={<ChildOfContact />}
      />
    </section>
  );
};

export default Contact;
