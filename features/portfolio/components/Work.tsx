import { projects } from "@/features/portfolio/data";
import { ProjectCard } from "@/features/portfolio/components/ProjectCard";
import { SectionHead, SerifEm } from "@/features/portfolio/components/SectionHead";

export function Work() {
  return (
    <section id="work">
      <div className="portfolio-wrap">
        <SectionHead
          label="02 · Selected work"
          title={<>Things I&apos;ve <SerifEm>built</SerifEm>.</>}
          sub="Production apps and full-stack projects built with TypeScript-first Next.js and AI integrations."
        />
        <div className="work-list" style={{ fontFamily: "var(--font-inter)" }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
