import React from "react";

function Page() {
  return (
    <div className="flex flex-col max-w-3xl gap-5 pt-20 pb-12 mx-auto">
      <p className="font-bold dark:text-white">Experience</p>

      <div className="pt-8 space-y-3">
        <h1 className="font-bold dark:text-white">
          BeCode Gent (Traineeship/Bootcamp)
        </h1>
        <h1 className="text-gray-400">October 2023 - April 2024</h1>
        <p className="text-gray-lightmode dark:text-gray-darkmode">
          Completed an intensive full-stack web development bootcamp, learning
          the fundamentals and advanced concepts of JavaScript, HTML, CSS,
          MySQL, Database Management, PHP, Laravel, and Node.js.
        </p>
      </div>

      <div className="pt-8 space-y-3">
        <h1 className="font-bold dark:text-white">Wobby.ai (Internship)</h1>
        <h1 className="text-gray-400">April 2024 - July 2024</h1>
        <p className="text-gray-lightmode dark:text-gray-darkmode">
          Wobby.ai specializes in AI-driven data visualization, allowing users
          to generate insights through interactive charts and analytics.
        </p>
        <p className="text-gray-lightmode dark:text-gray-darkmode">
          Wobby.ai specializes in AI-driven data visualization, enabling users
          to gain insights through interactive charts and analytics. During my
          internship, I focused on front-end development using TypeScript, Vue,
          and Nuxt with SSR, enhancing the UI to create a more seamless and
          customizable user experience. I implemented new features with Tailwind
          CSS to allow users to modify font sizes, colors, background themes,
          and chart styles. Additionally, I worked with NestJS to support
          backend functionality, enabling users to create and save personalized
          themes for a more tailored experience.
        </p>
      </div>
    </div>
  );
}

export default Page;
