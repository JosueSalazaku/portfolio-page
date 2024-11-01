import React from 'react';
import Link from 'next/link';

function ProjectsSection() {
  return (
    <section className="flex flex-col pt-12">
      <div className='flex flex-col md:flex-row md:items-center md:gap-[412px] lg:flex-row lg:gap-[412px]'>
      <h1 className="pb-6 font-bold dark:text-white">
        My Portfolio
      </h1>
      <Link href="/works" className="block w-24 p-2 mb-4 text-center transition duration-300 ease-in-out border rounded-lg dark:bg-gray-dark hover:border-gray-lightmode dark:hover:border-gray-darkmode border-gray-light dark:border-gray-medium">
        All works
      </Link>
      </div>
      <div className="flex flex-col w-full max-w-screen-lg gap-6 md:flex-row md:gap-6">
        {/* Left Column */}
        <div className="flex flex-col flex-grow gap-6">
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow">
            <div className='border rounded-lg border-gray-light dark:border-gray-medium'></div>
          </div>
          <div className="bg-gray-lightest dark:bg-gray-dark border border-gray-light dark:border-gray-medium rounded-lg w-full aspect-[4/3] flex-grow">
            <div className='border rounded-lg border-gray-light dark:border-gray-medium'></div>
          </div>
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
