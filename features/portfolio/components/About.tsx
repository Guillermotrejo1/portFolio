const stats = [
  { value: "98%", label: "Skin condition detection accuracy in production" },
  { value: "60%", label: "Lift in user engagement with recommendations" },
  { value: "<2s", label: "Analysis processing time after optimization" },
  { value: "26", label: "CNAs led with #1 Texas documentation rank" },
];

export function About() {
  return (
    <section id="about">
      <div className="portfolio-wrap">
        <div className="label" style={{ fontFamily: "var(--font-mono)" }}>01 · About</div>
        <div className="about-grid">
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(34px,4.5vw,52px)", letterSpacing: "-.025em", margin: 0, lineHeight: 1.05 }}>
            Frontend that <em className="serif" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>moves the metric</em>.
          </h2>
          <div>
            <p style={{ fontFamily: "var(--font-inter)" }}>
              I build AI-powered web applications that ship to production. At Skinstric AI, I architected a real-time skin analysis platform on Next.js and OpenAI Vision API to deliver measurable outcomes.
            </p>
            <p style={{ fontFamily: "var(--font-inter)" }}>
              Before code, I managed a 26-person CNA team. I bring that operator mindset to engineering: understand workflow, handle edge cases, and ship what users need.
            </p>
            <div className="stats" style={{ fontFamily: "var(--font-inter)" }}>
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="v" style={{ fontFamily: "var(--font-serif)" }}>{stat.value}</div>
                  <div className="k">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
