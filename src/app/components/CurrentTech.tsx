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
        Here are some of the main tools and tech I use to build awesome stuff. From frameworks to libraries, these are the go-to technologies that help bring my ideas to life.
      </p>
      <div id="logo" className="flex flex-row gap-[11px] pt-8 md:gap-9 lg:gap-[38px]">
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
