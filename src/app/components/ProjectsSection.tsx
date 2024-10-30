import React from 'react';

function ProjectsSection() {
  return (
    <section className="flex flex-col pt-12">
      <h1 className="pb-12 font-bold dark:text-white">
        My Portfolio
      </h1>
      <button className='w-24 p-2 rounded-lg bg-zinc-800 borer'>All works</button>
      
      <div className="flex flex-col w-full max-w-screen-lg gap-6 md:flex-row md:gap-6">
        {/* Left Column */}
        <div className="flex flex-col flex-grow gap-6">
          <div className="border rounded-lg w-full aspect-[4/3] flex-grow"></div>
          <div className="border rounded-lg w-full aspect-[4/3] flex-grow"></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-grow gap-6">
          <div className="border rounded-lg w-full aspect-[4/3] flex-grow"></div>
          <div className="border rounded-lg w-full aspect-[4/3] flex-grow"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
