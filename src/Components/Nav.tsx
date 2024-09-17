"use client"
import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
      <nav className='mx-auto h-[50px] flex flex-col justify-center items-center rounded border-white'>
          <div>
            <ul className='w-[250px] h-[50px] flex flex-row items-center px-10 justify-between rounded-md bg-slate-900'>
              <Link href="/"><li>H</li></Link>
              <Link href="/works"><li>W</li></Link>
              <li>T</li>
            </ul>
          </div>
    </nav>
  )
}

