import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 lg:max-w-[1280px] mb-4">
      <div className="shrink-0 sticky">
        <Image
          className="pl-4 pt-4 object-contain filter invert"
          src="/logo.svg"
          width={150}
          height={150}
          alt="Logo"
        />
      </div>
      <ul className="hidden md:flex gap-4 font-bold text-md space-x-4 items-center ">
        <li className="hover:scale-150 hover:text-green-500 transition-all duration-300 ease-out">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:scale-150 hover:text-green-500 transition-all duration-300 ease-out">
          <Link href="#tech">Tech</Link>
        </li>
        <li className="hover:scale-150 hover:text-white hover:animate-pulse transition-all duration-400 ease-out bg-green-500 px-4 py-2 rounded-full cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
