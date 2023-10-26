"use client";

import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import PageSwap from "@/components/PageSwap";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative w-screen h-full text-white m-0 p-0 overflow-x-hidden overflow-y-auto`}
      >
        <NavBar />
        <AnimatePresence mode="wait" key="modal">
          <PageSwap />
          <span
            className={`fixed w-full h-full ${
              path === "/" || path === ""
                ? "bg-gradient-to-tl"
                : path === "/service"
                ? "bg-gradient-to-tr"
                : path === "/product"
                ? "bg-gradient-to-br"
                : "bg-gradient-to-bl"
            } from-sky-950 via-gray-900 to-black -z-50`}
          />
          {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
