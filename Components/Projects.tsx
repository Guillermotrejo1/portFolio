import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

type Projects = {
  title: string;
  image: string;
  tech: string;
  description: string;
  github: string;
  live: string;
};

const projects: Projects[] = [
  {
    title: "Skinstric",
    image: "/skinstric.png",
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    description:
      "Built a real-time skin analysis platform leveraging OpenAI Vision API and Next.js, delivering 98% detection accuracy across diverse skin conditions. Crafted a responsive UI with TailwindCSS, driving 60% higher engagement and 40% boost in user retention through seamless and intuitive user experience.",
    github: "https://github.com/Guillermotrejo1",
    live: "https://skinstric-puce.vercel.app/",
  },
  {
    title: "Summarist",
    image: "/summarist.png",
    tech: "Next.js, React, TypeScript, Tailwind CSS, Material UI, Redux Toolkit, Firebase, Stripe",
    description:
      "Unlock the essence of bestselling books with audio summaries. Browse our vast library, log in to access exclusive content, and subscribe via Stripe for unlimited learning.",
    github: "https://github.com/Guillermotrejo1",
    live: "https://summarist-mauve.vercel.app/",
  },
  {
    title: "Ultraverse",
    image: "/ultraverse.png",
    tech: "React, Firebase, Axios",
    description:
      "Elevated user experience by transforming a static React web app into an interactive website with animations, transitions, and carousels, enhancing user engagement. Facilitated dynamic data representation from a cloud server by processing API requests with Axios, implementing skeleton loading states, pagination, and dynamic routing, improving application responsiveness. zones",
    github: "https://github.com/Guillermotrejo1",
    live: "https://guillermo-internship.vercel.app/",
  },
  {
    title: "Creations",
    image: "/creation.png",
    tech: "React, Three.js, Redux Toolkit, Firebase, EmailJS, AOS",
    description:
      "Unleash the party magic! JEM Creations offers custom pinatas, balloon garlands, party favors, decorations, and personalized shirts to make your celebration unforgettable.",
    github: "https://github.com/Guillermotrejo1",
    live: "https://www.jemcreations.com/",
  },
  {
    title: "Lingo",
    image: "/lingo1.png",
    tech: "Nextjs, React, Drizzle, Stripe, NeonDb",
    description:
      "This responsive SaaS language learning platform offers interactive lessons with AI voices, a dynamic heart and point system, gamification features like a leaderboard, and a premium tier for unlimited hearts via Stripe. It also includes a comprehensive admin dashboard for content management",
    github: "https://github.com/Guillermotrejo1",
    live: "https://lingo-lemon.vercel.app/",
  },
  {
    title: "Netflix",
    image: "/netflix1.png",
    tech: "Next.js, React, TypeScript, Tailwind CSS, Firebase, Stripe, Recoil",
    description:
      "Experience the ultimate streaming platform, inspired by Netflix. This responsive web application showcases a vast library of movies and TV shows, complete with video previews and personalized recommendations. Users can create profiles and subscribe to plans seamlessly via Stripe, enjoying uninterrupted access to their favorite content across devices",
    github: "https://github.com/Guillermotrejo1",
    live: "https://netflix-clone-snowy-five.vercel.app/",
  },
];

const ProjectCard = ({ title, image, tech, description, github, live, }: Projects) => {
  return (
    <li className="relative lg:mb-4 top-0 left-0 lg:w-[600px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
      <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full overflow-hidden">
        <Image
          src={image}
          className="w-full h-full rounded-3xl group-hover:blur-sm group-hover:scale-110 transition duration-300"
          alt="project"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:animate-flip-up ml-11">
          <h3 className="font-extrabold text-sm md:text-[90px] text-white/90 md:mb-16">
            {title}
          </h3>
          <h4 className="text-white/90 font-bold text-sm md:text-lg mb-1">
            {tech}
          </h4>
          <p className="text-white/90 font-bold mb-2 text-[10px] md:text-sm pr-2">
            {description}
          </p>
          <div className="absolute flex text-white">
            <Link className="mr-4 hover:text-green-500" href={github}>
              <FaGithub />
            </Link>
            <Link className="mr-4 hover:text-green-500" href={live}>
              <FaLink />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative z-10">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h1 className="text-center text-3xl mb-6">
            Here are some of my <span className="text-green-500">projects</span>
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 mb-10 p-6 rounded-3xl">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
