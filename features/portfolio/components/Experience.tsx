import { experience } from "@/features/portfolio/data";
import { SectionHead, SerifEm } from "@/features/portfolio/components/SectionHead";

export function Experience() {
  return (
    <section id="experience">
      <div className="portfolio-wrap">
        <SectionHead
          label="04 · Experience"
          title={<>The <SerifEm>track record</SerifEm>.</>}
          sub="Two careers, one operator mindset for product impact and delivery."
        />
        <div className="xp-list" style={{ fontFamily: "var(--font-inter)" }}>
          {experience.map((item) => (
            <div className="xp" key={`${item.company}-${item.period}`}>
              <div className="when" style={{ fontFamily: "var(--font-mono)" }}>{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <div className="where">{item.company}{item.location ? ` · ${item.location}` : ""}</div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span
                        aria-hidden="true"
                        style={{ width: 5, height: 5, borderRadius: 9999, background: "var(--accent)", marginTop: 9, flexShrink: 0 }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
