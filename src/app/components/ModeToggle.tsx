"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center w-20 h-20 p-2 transition-all duration-300 bg-white border rounded-full dark:border-gray-600 dark:bg-black">
        <Sun className="w-8 h-8 text-gray-400" /> 
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 transition-all duration-300 bg-white border rounded-lg h-9 w-9 border-gray-light hover:border-gray-medium dark:border-gray-medium dark:hover:border-gray-darkmode dark:bg-black"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="w-8 h-8 text-black" />
      ) : (
        <Moon className="w-8 h-8 text-white" />
      )}
    </button>
  );
}
