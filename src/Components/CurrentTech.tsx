"use client";
import React from "react";
import Image from "next/image";

function CurrentTech() {
  const techs = [
    { color: "#1C3345", alt: "Typescript", image: "/Typescript.svg" },
    { color: "#0C4258", alt: "React", image: "/React.svg" },
    { color: "#262342", alt: "Next.js", image: "/Next.svg" },
    { color: "#1C534A", alt: "Tailwind CSS", image: "/TailwindCSS.svg" },
    { color: "#71271A", alt: "Git", image: "/Git.svg" },
    { color: "#254B6E", alt: "Postgres", image: "/PostgreSQL.svg" },
    { color: "#32642E", alt: "Express.js", image: "/Express.svg" },
    { color: "#729129", alt: "Drizzle ORM", image: "/Drizzle.svg" },
  ];

  return (
    <section className="flex flex-col pt-12 pb-12">
      <h1 className="font-bold dark:text-white">
        Current Technologies
      </h1>
      <p className="mt-4 text-[#646464] dark:text-[#b3b1b1]">
        I’m proficient in a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </p>
      <div className="flex flex-wrap gap-8 pt-8 sm:gap-12">
        <div className="flex flex-wrap gap-8 sm:flex-col sm:gap-4">
          {techs.slice(0, 4).map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-12 h-12 rounded"
                style={{ backgroundColor: tech.color }}
              >
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 sm:flex-col sm:gap-8">
          {techs.slice(4).map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-12 h-12 rounded"
                style={{ backgroundColor: tech.color }}
              >
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentTech;