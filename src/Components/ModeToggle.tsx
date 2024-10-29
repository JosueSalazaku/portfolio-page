"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/Components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 text-black" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300 text-white" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
