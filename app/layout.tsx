import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glis Games: Casino Counselling & Development",
  description: "Glis Games Company Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative w-screen h-full m-0 p-0 overflow-x-hidden overflow-y-auto`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
