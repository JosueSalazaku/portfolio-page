"use client"
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export default function Nav() {
  return (
    <nav className="mx-auto h-[50px] flex flex-col justify-center items-center rounded border-white fixed bottom-20 left-0 right-0 z-50">
      <div className="w-[250px] h-[50px] flex items-center px-10 justify-between rounded-lg border 
        border-gray-lightest dark:border-gray-medium 
        bg-zinc-100 dark:bg-[#111111]
        backdrop-blur-md opacity-90 shadow-[0_0_15px_5px_rgba(200,200,200,0.4)] dark:shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]">
        <ul className="flex flex-row items-center justify-between w-full">
          <Link href="/" passHref>
            <button className="px-2 text-lg font-semibold transition-colors duration-300 rounded-md focus:bg-gray-light dark:focus:bg-gray-medium dark:font-light dark:text-white hover:bg-blue-600">
              H
            </button> 
          </Link>
          <Link href="/works" passHref>
            <button className="px-2 text-lg font-semibold transition-colors duration-300 rounded-md focus:bg-gray-light dark:focus:bg-gray-medium dark:font-light dark:text-white hover:bg-red-600">
              W
            </button>
          </Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  )
}