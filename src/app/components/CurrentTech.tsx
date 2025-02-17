"use client";
import React from "react";
import Image from "next/image";

function CurrentTech() {
  const techs = [
    { color: "#0E1A22", alt: "Typescript", image: "/typescript.svg" },
    { color: "#06212C", alt: "React", image: "/react.svg" },
    { color: "#17152A", alt: "Next.js", image: "/Next.svg" },
    { color: "#0D2A26", alt: "Tailwind", image: "/TailwindCSS.svg" },
    { color: "#3A130D", alt: "Git", image: "/git.svg" },
    { color: "#12283A", alt: "Postgres", image: "/PostgreSQL.svg" },
    { color: "#1A3618", alt: "Express", image: "/Express.svg" },
    { color: "#394C14", alt: "Drizzle", image: "/drizzle.svg" },
  ];

  return (
    <section className="flex flex-col pt-12 pb-12 ">
      <h1 className="font-bold dark:text-white">Current Technologies</h1>
      <p className="mt-4 text-gray-lightmode dark:text-gray-darkmode">
        Curious about what I can build? 🚀 Here are the key tools and
        technologies I use to bring ideas to life—powerful frameworks,
        libraries, and everything in between. See them in action! Explore my
        portfolio and check out the projects I’ve worked on:
        <a
          href="/portfolio"
          className="pl-2 font-semibold text-blue-500 transition-colors hover:underline hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View My Portfolio
        </a>
      </p>
      <p className="mt-2 text-gray-lightmode dark:text-gray-darkmode"></p>
      <div
        id="logo"
        className="flex flex-row gap-[11px] pt-8 md:gap-9 lg:gap-[38px]"
      >
        {techs.map((tech, index) => (
          <div
            key={index}
            title={tech.alt}
            className="flex flex-col items-center"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded"
              style={{ backgroundColor: tech.color }}
            >
              <Image src={tech.image} alt={tech.alt} width={20} height={20} />
            </div>
            <p className="mt-2 text-xs dark:text-gray-lightmode">{tech.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CurrentTech;
