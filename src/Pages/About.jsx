import { useEffect, useState } from "react";

function About() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-row justify-center items-center scroll-smooth">
      <h1 className={`text-8xl py-32 transition-opacity duration-1000 ease-in-out md:text-9xl md: text-center ${showTitle ? "opacity-100" : "opacity-0"}`}>A little about me </h1>
    </main>
  );
}

export default About;
