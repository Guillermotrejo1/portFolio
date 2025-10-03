import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-black p-[6%] ">
        <div className="flex flex-col items-center">
          <figure className="mb-14">
            <Image 
            width={100}
            height={100}
            className="filter invert" src="/logo.svg" alt="Logo" />
          </figure>
          <div className="flex text-lg mb-4 gap-4">
            <Link className="text-white gap-4" href="https://github.com/Guillermotrejo1">GitHub</Link>
            <Link className="text-white gap-4" href="https://www.linkedin.com/in/guillermo-trejo-8a5797318">LinkedIn</Link>
            <Link className="text-white gap-4" href="/">Contact</Link>
            <Link className="text-white gap-4" href="/">Resume</Link>
          </div>
          <div className="text-white text-sm">Copyright © 2024 Guillermo Trejo</div>
        </div>
    </footer>
  )
}
