import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

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
      <button
        className="text-5xl absolute right-6  lg:hidden"
        onClick={handleOpen}
      >
        <RxHamburgerMenu />
      </button>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          onClick={handleClose}
        >
          <button
            className="absolute text-5xl top-10 right-4"
            onClick={handleClose}
          >
            <IoMdClose />
          </button>
          <ul
            className={`flex flex-col gap-10 md:gap-4 font-bold text-5xl md:text-md space-x-4 items-center lg:flex-row ${
              isModalOpen ? "flex" : "hidden"
            } md:flex`}
          >
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
        </div>
      )}
      <ul className="hidden md:flex flex-col gap-10 md:gap-4 font-bold md:text-md space-x-4 items-center lg:flex-row">
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
