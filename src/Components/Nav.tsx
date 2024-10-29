"use client"
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export default function Nav() {
  return (
    <nav className='mx-auto h-[50px] flex flex-col justify-center items-center rounded border-white fixed bottom-20 left-0 right-0 z-50'>
      <div className='w-[250px] h-[50px] flex flex-row items-center px-10 justify-between rounded-md 
        dark:bg-white-900 shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.2)] 
        dark:shadow-[0_4px_8px_rgba(255,255,255,0.3),0_6px_12px_rgba(255,255,255,0.5)]'>

        <ul className='flex flex-row items-center justify-between w-full'>
          <Link href="/">
            <li className="text-lg px-2 font-semibold rounded-md dark:font-light dark:text-white hover:bg-blue-600">H</li> 
          </Link>
          <Link href="/works">
            <li className="text-lg px-2 font-semibold rounded-md dark:font-light dark:text-white hover:bg-red-600">W</li>
          </Link>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  )
}
