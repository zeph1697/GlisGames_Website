import Image from "next/image";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between ">
      <Hero />
    </main>
  );
}
