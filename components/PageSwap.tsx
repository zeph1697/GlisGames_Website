"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const PageSwap = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-black/25 backdrop-blur-sm z-50"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="fixed flex flex-col items-center justify-center top-0 bottom-0 right-full w-screen h-screen bg-black/25 backdrop-blur-sm z-50"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      />
    </>
  );
};

export default PageSwap;
