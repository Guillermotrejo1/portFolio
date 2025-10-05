import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h1 className="text-center text-3xl mb-6">
            Here are some of my <span className="text-green-500">projects</span>
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 mb-10 p-6 rounded-3xl">
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/lingo1.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 transition duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Lingo
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-white">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://lingo-lemon.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/creation.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Creations
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-white/90">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://liss-party.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/ultraverse.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Internship
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-white/90">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://guillermo-internship.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/netflix1.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Netflix
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-white/90">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://netflix-clone-snowy-five.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/summarist.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Summarist
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe,</div>
                  <div className="absolute flex text-white/90">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://summarist-mauve.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[1000px] rounded-3xl group transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
                <Image
                  src="/skinstric.png"
                  className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 duration-300"
                  alt="Lingo"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                <div className="text-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm lg:text-[120px] text-white/90">
                    Skinstric
                  </h3>
                  <h4 className="text-white/90 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-white/90">
                    <Link className="mr-4 hover:text-green-500" href="https://github.com/Guillermotrejo1">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4 hover:text-green-500" href="https://skinstric-puce.vercel.app/">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
