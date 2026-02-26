import Image from "next/image";
import Link from "next/link";
import { FaFilePdf, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section id="home" className="relative z-10 py-5 h-screen">
      <div className="w-full flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-row mb-6">
        <div className="flex flex-col items-center sm:flex sm:flex-col sm:items-center mb-14 lg:mb-0 lg:w-1/2 lg:block">
          <h1
            className="max-w-xl text-[2.9rem] lg:text-[6rem] xl:text-[8rem] leading-none text-white dark:text-black font-extrabold text-center
         lg:text-left lg:leading-tight mb-5"
          >
            <span className="text-green-500">Hey,</span> I&apos;m Guillermo
          </h1>
          <p className="px-4 md:px-0 text-sm max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md lg:text-2xl mb-4">
            Im a{" "}
            <span className="text-green-500">Frontend Software Engineer</span>{" "}
            with a strong passion for building web applications with great user
            experiences. Here&apos;s a bit more
            <span className="text-green-500"> about me</span>.
          </p>
          <div className="flex text-xl gap-4 text-white">
            <Link
              className="bg-green-500 p-2 rounded-lg"
              href="https://github.com/Guillermotrejo1"
            >
              <FaGithub />
            </Link>
            <Link
              className="bg-green-500 p-2 rounded-lg"
              href="https://www.linkedin.com/in/guillermo-trejo-8a5797318"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="bg-green-500 p-2 rounded-lg"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
            >
              <FaFilePdf />
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="relative group">
            <Image
              className="lg:ml-4 rounded-full aspect-square w-80 h-80 lg:w-[500px] lg:h-[500px] mx-auto border-2 border-green-500/60 relative z-10 shadow-[0_8px_32px_rgba(34,197,94,0.25)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.35)] hover:scale-[1.02] transition-all duration-300 ease-out ring-4 ring-green-500/10 hover:ring-green-500/20"
              src="/introPic.png"
              alt="Me"
              width={4377}
              height={6400}
            />
            {/* Subtle gradient backdrop */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
