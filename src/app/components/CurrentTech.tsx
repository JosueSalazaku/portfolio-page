"use client";
import React from "react";
import Image from "next/image";

function CurrentTech() {
  const techs = [
    { color: "#1C3345", alt: "Typescript", image: "/typescript.svg" },
    { color: "#0C4258", alt: "React", image: "/react.svg" },
    { color: "#262342", alt: "Next.js", image: "/Next.svg" },
    { color: "#1C534A", alt: "Tailwind CSS", image: "/TailwindCSS.svg" },
    { color: "#71271A", alt: "Git", image: "/git.svg" },
    { color: "#254B6E", alt: "Postgres", image: "/PostgreSQL.svg" },
    { color: "#32642E", alt: "Express.js", image: "/Express.svg" },
    { color: "#729129", alt: "Drizzle ORM", image: "/drizzle.svg" },
  ];

  return (
    <section className="flex flex-col pt-12 pb-12 ">
      <h1 className="font-bold dark:text-white">
        Current Technologies
      </h1>
      <p className="mt-4 text-gray-lightmode dark:text-gray-darkmode">
        Here are some of the main tools and tech I use to
        build awesome stuff. From frameworks to libraries,
        these are the go-to technologies that help bring my
        ideas to life.
      </p>
      <div id="logo" className="flex flex-row gap-[5.5px] pt-8  md:gap-9 lg:gap-[38px]">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded"
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
    </section>
  );
}

export default CurrentTech;