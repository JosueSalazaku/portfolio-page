"use client"
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export default function Nav() {
  return (
    <nav className='mx-auto h-[50px] flex flex-col justify-center items-center rounded border-white fixed bottom-20 left-0 right-0 z-50'>
      <div className="w-[250px] h-[50px] flex items-center px-10 justify-between rounded-lg border 
  border-zinc-300 dark:border-zinc-800 
  bg-zinc-200 dark:bg-zinc-800
  backdrop-blur-lg shadow-md dark:shadow-lg">

        <ul className='flex flex-row items-center justify-between w-full'>
          <Link href="/">
            <li className="px-2 text-lg font-semibold rounded-md dark:font-light dark:text-white hover:bg-blue-600">H</li> 
          </Link>
          <Link href="/works">
            <li className="px-2 text-lg font-semibold rounded-md dark:font-light dark:text-white hover:bg-red-600">W</li>
          </Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  )
}
