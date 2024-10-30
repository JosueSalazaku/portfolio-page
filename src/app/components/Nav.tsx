"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <nav className="mx-auto h-[50px] flex flex-col justify-center items-center rounded border-white fixed bottom-20 left-0 right-0 z-50">
      <div
        className="w-[250px] h-[50px] flex items-center px-10 justify-between rounded-lg border 
        border-gray-lightest dark:border-gray-medium 
        bg-zinc-100 dark:bg-[#111111]
        backdrop-blur-md shadow-[0_0_15px_5px_rgba(200,200,200,0.4)] dark:shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]"
      >
        <ul className="flex flex-row items-center justify-between w-full">
          <Link href="/" passHref>
            <button className="flex items-center justify-center px-2 text-lg font-semibold transition-colors duration-300 rounded-lg h-9 w-9 hover:bg-gray-light focus:bg-gray-light dark:focus:bg-gray-medium dark:hover:bg-gray-medium dark:font-light dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>
          </Link>
          <Link href="/works" passHref>
            <button className="flex items-center justify-center px-2 text-lg font-semibold transition-colors duration-300 rounded-lg h-9 w-9 hover:bg-gray-light focus:bg-gray-light dark:focus:bg-gray-medium dark:hover:bg-gray-medium dark:font-light dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-briefcase"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </button>
          </Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
}
