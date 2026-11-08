import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { PortfolioProject } from "@/features/portfolio/data";
import { ProjectMock } from "@/features/portfolio/components/ProjectMocks";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project">
      <div className="preview">
        <div className={`frame ${project.frameClass}`}>
          <ProjectMock project={project} />
        </div>
      </div>
      <div className="body">
        <div>
          <div className="num" style={{ fontFamily: "var(--font-mono)" }}>{project.id} / {project.period}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags" style={{ fontFamily: "var(--font-mono)" }}>
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
          {project.metrics ? (
            <div className="metric-row">
              {project.metrics.map((metric) => (
                <div className="m" key={metric.label}>
                  <div className="v">{metric.value}</div>
                  <div className="k">{metric.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="links">
          <Link href={project.liveUrl ?? "#"}>Live demo <FiArrowUpRight /></Link>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></Link>
        </div>
      </div>
    </article>
  );
}
