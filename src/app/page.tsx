"use client";
import CurrentTech from "@/Components/CurrentTech";
import ProjectsSection from "@/Components/ProjectsSection";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="pt-20 pb-12 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <Image
            className="rounded-full cursor-pointer"
            src="/josuesalazaku.png"
            alt="Profile Picture"
            width={60}
            height={60}
          />
          <div>
            <p className="font-medium text-black dark:text-white">
              Josué Salazaku
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Frontend Developer
            </p>
            <div className="flex flex-row gap-5">
              <a
                href="https://github.com/josuesalazaku"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={24} className="text-black dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/josu%C3%A9-salazaku-a0114b294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <h1 className="font-medium text-black dark:text-white">About me</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Based in Antwerp, Belgium, I focus on creating great web experiences
            by blending creativity with practicality. With attention to detail
            and user-centric design, my goal is to deliver websites that are
            both intuitive and enjoyable to use.
          </p>
        </div>
      </section>
      <CurrentTech />
      <ProjectsSection />
    </main>
  );
}
