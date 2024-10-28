import React from 'react'

function ProjectsSection() {
  return (
    <section className="flex flex-col justify-normal pt-12">
    <h1 className="font-medium text-4xl text-black dark:text-white pb-12">
      My portfolio
    </h1>
    <div className="flex flex-row gap-12">
      <div className="border rounded-lg w-[350px] h-[350px]"></div>
      <div className="border rounded-lg w-[350px] h-[350px]"></div>
    </div>
  </section>
  )
}

export default ProjectsSection