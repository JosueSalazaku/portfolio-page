import { useEffect, useState } from "react";

function Contact() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-row justify-center items-center scroll-smooth">
      <h1 className={`text-9xl py-32 transition-opacity duration-1000 ease-in-out ${showTitle ? "opacity-100" : "opacity-0"}`}>Let's connect</h1>
    </main>
  );
}

export default Contact