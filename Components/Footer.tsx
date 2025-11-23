import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black p-[6%] ">
        <div className="flex flex-col items-center">
          <figure className="mb-14">
            <Image 
            width={100}
            height={100}
            className="filter invert" src="/logo.svg" alt="Logo" />
          </figure>
          <div className="flex text-lg mb-4 gap-4 font-bold">
            <Link className="text-white gap-4 hover:scale-125 transition-all duration-300 ease-out hover:text-green-500" href="/">About</Link>
            <Link className="text-white gap-4 hover:scale-125 transition-all duration-300 ease-out hover:text-green-500" href="https://github.com/Guillermotrejo1">GitHub</Link>
            <Link className="text-white gap-4 hover:scale-125 transition-all duration-300 ease-out hover:text-green-500" href="https://www.linkedin.com/in/guillermo-trejo-8a5797318">LinkedIn</Link>
            <Link className="text-white gap-4 hover:scale-125 transition-all duration-300 ease-out hover:text-green-500" href="https://docs.google.com/document/d/1kL50Jt0I6c4yjiWplSOFyXCfCZph5x9I/edit?usp=sharing&ouid=117883606353969352178&rtpof=true&sd=true">Resume</Link>
          </div>
          <div className="text-white text-sm">Copyright © {new Date().getFullYear()} Guillermo Trejo All Rights Reserved</div>
        </div>
    </footer>
  )
}
