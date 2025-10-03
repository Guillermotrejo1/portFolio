import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 lg:max-w-[1280px] mb-4">
      <div className='shrink-0 sticky'>
      <Image
        className='pl-4 pt-4 object-contain'
         src="/logo.svg"
         width={150}
         height={150}
          alt='Logo'/>
      </div>
      <ul className='flex gap-4 font-bold text-md space-x-4'>
      <li className=' hover:scale-150 transition-all duration-300 ease-out'>
        <Link href="/">
        About
        </Link>
        </li>
      <li className=' hover:scale-150 transition-all duration-300 ease-out'>
        <Link href="/">
        Projects
        </Link>
        </li>
      <li className=' hover:scale-150 transition-all duration-300 ease-out'>
        <Link href="/">
        Tech
        </Link>
        </li>
      <li className=' hover:scale-150 transition-all duration-300 ease-out'>
        <Link href="/">
        Contact
        </Link>
        </li>
      </ul>
    </nav>
  )
}
