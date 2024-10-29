"use client";
import React from "react";
import Image from "next/image";

function CurrentTech() {
  const techs = [
    { color: "#1C3345", image: "/Typescript.svg" },
    { color: "#0C4258", image: "/React.svg" },
    { color: "#262342", image: "/Next.svg" },
    { color: "#1C534A", image: "/TailwindCSS.svg" },
    { color: "#71271A", image: "/Git.svg" },
    { color: "#254B6E", image: "/PostgreSQL.svg" },
    { color: "#32642E", image: "/Express.svg" },
    { color: "#729129", image: "/Drizzle.svg" },
  ];

  return (
    <section className="flex flex-col pt-12 pb-12">
      <h1 className="font-bold text-4xl dark:text-white">
        Current Technologies
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        I’m proficient in a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </p>
      <div className="pt-8 flex flex-row gap-8">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded w-12 h-12 transition-all duration-300"
              style={{
                backgroundColor: tech.color,
                filter: "grayscale(100%)", 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "none"; 
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.filter = "none"; 
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)"; 
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.filter = "grayscale(100%)"; 
                }
              }}
            >
              <Image
                src={tech.image}
                alt="Current tech Logo"
                width={30}
                height={40}
                className=" transition-all duration-140"
                style={{
                  filter: "grayscale(100%)", 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CurrentTech;
