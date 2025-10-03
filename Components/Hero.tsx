import Image from "next/image";
import Link from "next/link";
import { FaFilePdf, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section id="home" className="py-5 h-screen">
      <div className="container flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-row mb-6">
        <div className="flex px-4 flex-col items-center sm:flex sm:flex-col sm:items-center mb-14 lg:mb-0 lg:w-1/2 lg:block">
          <h1
            className="max-w-xl text-[2.9rem] lg:text-[8rem] leading-none text-white font-extrabold text-center lg:text-5xl
         lg:text-left lg:leading-tight mb-5"
          >
            <span className="text-green-500">Hey,</span> I&apos;m Guillermo
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md lg:text-2xl mb-4">
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
              href="https://docs.google.com/document/d/1kL50Jt0I6c4yjiWplSOFyXCfCZph5x9I/edit?usp=sharing&ouid=117883606353969352178&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
            >
              <FaFilePdf />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            className="ml-4 rounded-full aspect-square"
            src="/ME.jpg"
            alt="Me"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
