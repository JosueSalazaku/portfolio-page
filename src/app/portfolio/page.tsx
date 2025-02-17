import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-5 pt-20 pb-12">
      <h1 className="pb-4 text-2xl font-bold dark:text-white">My Portfolio</h1>
      <h1 className=" text-gray-lightmode">Latest ongoing projects</h1>
      {/* Portfolio Grid */}
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Project Card */}
        <Link href="portfolio/unreadpiles">
          <div className="relative bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/piles.png"
              alt="Journo Project"
              width={940}
              height={50}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-gray-900 h-3/4">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-lg font-bold text-white">Unread Piles</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                    Next.js
                  </span>
                  <span className="px-2 py-1 text-xs rounded text-cyan-500 bg-gray-dark">
                    TailwindCSS
                  </span>
                  <span className="px-2 py-1 text-xs text-white rounded bg-gray-dark">
                    Postgress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Project Card */}
        <Link href="portfolio/keanino">
          <div className="relative bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/keanino.jpeg"
              alt="Journo Project"
              width={840}
              height={40}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-gray-900 h-3/4">
              <div className="absolute bottom-0 left-0 right-0 p-4">
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
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-gray-900 h-3/4">
            <div className="absolute bottom-0 left-0 right-0 p-4">
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
          </div>
        </Link>
      </div>
    </div>
  );
}