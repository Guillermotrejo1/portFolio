import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ContactModal } from "./ContactModal";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useTheme } from "next-themes";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  function toggleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  function openContact() {
    setIsContactOpen(true);
    setIsMenuOpen(false); // ensure menu closes if open
  }
  function closeContact() {
    setIsContactOpen(false);
  }

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-100 z-[9999] flex items-center justify-center"
        >
          <button
            className="absolute text-5xl text-white top-10 right-4 z-[10000]"
            onClick={closeMenu}
          >
            <IoMdClose />
          </button>
          <ul className="flex flex-col gap-10 font-bold text-5xl items-center text-white">
            <li className="hover:scale-110 hover:text-green-500 transition-all duration-300 ease-out">
              <Link href="#projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="hover:scale-110 hover:text-green-500 transition-all duration-300 ease-out">
              <Link href="#tech" onClick={closeMenu}>Tech</Link>
            </li>
            <li className="hover:scale-110 hover:text-white hover:animate-pulse transition-all duration-400 ease-out bg-green-500 px-4 py-2 rounded-full cursor-pointer">
              <button onClick={openContact}>Contact</button>
            </li>
            <button className="text-4xl text-white" onClick={() => { toggleDarkMode(); closeMenu(); }}>
              {theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </button>
          </ul>
        </div>
      )}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <nav className="relative z-10 flex justify-between items-center px-4 w-full mb-4">
      <div className="shrink-0 sticky">
        <Image
          className="pl-4 pt-4 object-contain filter invert dark:invert-0"
          src="/logo.svg"
          width={150}
          height={150}
          alt="Logo"
        />
      </div>
      <button
        className="text-5xl absolute right-6 lg:hidden"
        onClick={openMenu}
      >
        <RxHamburgerMenu />
      </button>
      <ul className="hidden lg:flex flex-col gap-10 md:gap-4 font-bold md:text-md space-x-4 items-center lg:flex-row mr-20">
        <li className="hover:scale-150 hover:text-green-500 transition-all duration-300 ease-out">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:scale-150 hover:text-green-500 transition-all duration-300 ease-out">
          <Link href="#tech">Tech</Link>
        </li>
        <li className="hover:scale-150 hover:text-white hover:animate-pulse transition-all duration-400 ease-out bg-green-500 px-4 py-2 rounded-full cursor-pointer">
          <button onClick={openContact}>Contact</button>
        </li>
        <button className="absolute right-10 text-4xl" onClick={toggleDarkMode}>
          {theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
      </ul>
    </nav>
    </>
  );
};
