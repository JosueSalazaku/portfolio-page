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
      <div className="p-2 transition-all duration-300 bg-white border rounded-sm dark:border-gray-600 dark:bg-black">
        <Sun className="w-5 h-5 text-gray-400" /> 
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-all duration-300 bg-white border border-gray-light dark:border-gray-medium rounded-xl dark:bg-black"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="w-5 h-5 text-black" />
      ) : (
        <Moon className="w-5 h-5 text-white" />
      )}
    </button>
  );
}
