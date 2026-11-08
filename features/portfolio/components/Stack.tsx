import { stack } from "@/features/portfolio/data";
import { ICON } from "@/features/portfolio/icons";
import { SectionHead, SerifEm } from "@/features/portfolio/components/SectionHead";

export function Stack() {
  return (
    <section id="stack">
      <div className="portfolio-wrap">
        <SectionHead
          label="03 · Stack"
          title={<>Tools I <SerifEm>reach for</SerifEm>.</>}
          sub="Daily drivers across language, framework, data, and product delivery."
        />
        <div className="stack-grid" style={{ fontFamily: "var(--font-inter)" }}>
          {stack.map((item) => (
            <div className="tech" key={item.name}>
              <span aria-hidden="true" className="tech-icon" dangerouslySetInnerHTML={{ __html: ICON[item.icon] }} />
              <b>{item.name}</b>
              <span className="lvl" style={{ fontFamily: "var(--font-mono)" }}>{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
