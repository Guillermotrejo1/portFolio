import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section id="projects" className="relative z-10">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h1 className="text-center text-3xl mb-6">
            Here are some of my <span className="text-green-500">projects</span>
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 mb-10 p-6 rounded-3xl">
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Lingo
                  </h3>
                  <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-[10px] md:text-sm pr-2">
                    This responsive SaaS language learning platform offers
                    interactive lessons with AI voices, a dynamic heart and
                    point system, gamification features like a leaderboard, and
                    a premium tier for unlimited hearts via Stripe. It also
                    includes a comprehensive admin dashboard for content
                    management.
                  </p>
                  <div className="absolute flex text-white">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://lingo-lemon.vercel.app/"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Creations
                  </h3>
                  <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-xs md:text-sm">
                    Unleash the party magic! JEM Creations offers custom
                    pinatas, balloon garlands, party favors, decorations, and
                    personalized shirts to make your celebration unforgettable.
                  </p>
                  <div className="absolute flex text-white/90">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://liss-party.vercel.app/"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Internship
                  </h3>
                  <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-[10px] pr-2 md:text-sm">
                    Elevated user experience by transforming a static React web
                    app into an interactive website with animations,
                    transitions, and carousels, enhancing user engagement.
                    Facilitated dynamic data representation from a cloud server
                    by processing API requests with Axios, implementing skeleton
                    loading states, pagination, and dynamic routing, improving
                    application responsiveness. zones
                  </p>
                  <div className="absolute flex text-white/90">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://guillermo-internship.vercel.app/"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Netflix
                  </h3>
                  <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-[10px] pr-2 md:text-sm">
                    Experience the ultimate streaming platform, inspired by
                    Netflix. This responsive web application showcases a vast
                    library of movies and TV shows, complete with video previews
                    and personalized recommendations. Users can create profiles
                    and subscribe to plans seamlessly via Stripe, enjoying
                    uninterrupted access to their favorite content across
                    devices.
                  </p>
                  <div className="absolute flex text-white/90">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://netflix-clone-snowy-five.vercel.app/"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Summarist
                  </h3>
                  <h4 className="text-white/90 font-bold text-[10px] md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-xs md:text-sm">
                    Unlock the essence of bestselling books with audio
                    summaries. Browse our vast library, log in to access
                    exclusive content, and subscribe via Stripe for unlimited
                    learning.
                  </p>
                  <div className="absolute flex text-white/90">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://summarist-mauve.vercel.app/"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group transition duration-300 ease-in-out">
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
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
                  <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
                    Skinstric
                  </h3>
                  <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-white/90 font-bold mb-2 text-[10px] pr-2 md:text-sm">
                    Built a real-time skin analysis platform leveraging OpenAI
                    Vision API and Next.js, delivering 98% detection accuracy
                    across diverse skin conditions. Crafted a responsive UI with
                    TailwindCSS, driving 60% higher engagement and 40% boost in
                    user retention through seamless and intuitive user
                    experience.
                  </p>
                  <div className="absolute flex text-white/90">
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://github.com/Guillermotrejo1"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="mr-4 hover:text-green-500"
                      href="https://skinstric-puce.vercel.app/"
                    >
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
