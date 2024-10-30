"use client";
import CurrentTech from "./components/CurrentTech";
import ProjectsSection from "@/app/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-5 pt-20 pb-12">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full cursor-pointer"
            src="/josuesalazaku.png"
            alt="Profile Picture"
            width={60}
            height={60}
          />
          <div>
            <p className="font-medium">Josué Salazaku</p>
            <p className="text-[#646464] dark:text-[#b3b1b1]">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <h1 className="font-bold dark:text-white">About me</h1>
          <p className="text-[#646464] dark:text-[#b3b1b1]">
            Based in Antwerp, Belgium, I focus on creating intuitive and
            visually stunning and highly functional web applications.
          </p>
        </div>
      </section>
      <CurrentTech />
      <ProjectsSection />
    </main>
  );
}
