import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectsSection() {
  return (
    <section className="flex flex-col pt-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="pb-6 text-2xl font-bold dark:text-white">
          My Portfolio
        </h1>
        <Link
          href="/portfolio"
          className="block w-24 p-2 mb-4 text-center transition duration-300 ease-in-out border rounded-lg dark:bg-gray-dark hover:border-gray-lightmode dark:hover:border-gray-darkmode border-gray-light dark:border-gray-medium"
        >
          All works
        </Link>
      </div>

      <h1 className="py-4 text-gray-lightmode">Latest ongoing projects</h1>
      {/* Portfolio Grid */}
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Project Card */}
        <Link
          href="portfolio/unreadpiles"
        >
          <div className="relative bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/piles.png"
              alt="Journo Project"
              width={840}
              height={40}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-lg font-bold text-white">Unread Piles</h2>
              <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
            Next.js
          </span>
          <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
            TailwindCSS
          </span>
          <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
            Postgress
          </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Project Card */}
        <Link
          href="portfolio/keanino"
        >
          <div className="relative bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/keanino.jpeg"
              alt="Journo Project"
              width={840}
              height={40}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-lg font-bold text-white">Keanino</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                  TailwindCSS
                </span>
                <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                  Drizzle
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Project Card */}
        <Link
          href="portfolio/linkup"

          className="relative bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg overflow-hidden aspect-[4/3]"
        >
          <Image
            src="/linkup.jpeg"
            alt="LinkUp Project"
            width={840}
            height={140}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h2 className="text-lg font-bold text-white">LinkUp</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                React
              </span>
              <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                TypeScript
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProjectsSection;
