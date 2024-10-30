import React from 'react';
import Link from 'next/link';

function ProjectsSection() {
  return (
    <section className="flex flex-col pt-12">
      <div className='flex flex-col md:flex-row md:items-center md:gap-[412px] lg:flex-row lg:gap-[412px]'>
      <h1 className="pb-6 font-bold dark:text-white">
        My Portfolio
      </h1>
      <Link href="/works" passHref>  
      <button className="w-24 p-2 mb-4 border rounded-lg dark:bg-gray-dark border-gray-light dark:border-gray-medium">
        All works
      </button>
      </Link>
      </div>
      <div className="flex flex-col w-full max-w-screen-lg gap-6 md:flex-row md:gap-6">
        {/* Left Column */}
        <div className="flex flex-col flex-grow gap-6">
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow"></div>
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow"></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-grow gap-6">
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow"></div>
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
