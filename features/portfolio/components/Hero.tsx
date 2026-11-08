import Image from "next/image";

export function Hero() {
  return (
    <header className="hero">
      <div className="notes" aria-hidden="true">
        <span className="note" style={{ top: "18%", left: "8%" }}>♪</span>
        <span className="note" style={{ top: "65%", left: "14%" }}>♫</span>
        <span className="note" style={{ top: "30%", right: "8%" }}>♩</span>
        <span className="note" style={{ top: "80%", right: "14%" }}>♬</span>
        <span className="note" style={{ top: "5%", left: "48%" }}>♪</span>
      </div>
      <div className="portfolio-wrap hero-grid">
        <div>
          <div className="eyebrow" style={{ fontFamily: "var(--font-mono)" }}><span className="dot" /> Available · Open to frontend roles</div>
          <h1 className="display" style={{ fontFamily: "var(--font-inter)" }}>
            Hey, <em style={{ fontFamily: "var(--font-serif)" }}>I&apos;m</em>
            <br />
            <span className="green">Guillermo.</span>
          </h1>
          <p className="lede" style={{ fontFamily: "var(--font-inter)" }}>
            I&apos;m a <b>Frontend Engineer</b> shipping AI-powered web apps with <b>React, Next.js,</b> and <b>TypeScript</b> including a <b>skin analysis platform</b> that hit <b>98% detection accuracy</b> in production.
          </p>
          <div className="meta-row" style={{ fontFamily: "var(--font-inter)" }}>
            <span>San Marcos, TX</span>
            <span>Full-time / contract</span>
            <span>US-authorized</span>
          </div>
          <div className="cta-row" style={{ fontFamily: "var(--font-inter)" }}>
            <a href="#work" className="btn primary">See selected work</a>
            <a href="#contact" className="btn ghost">Get in touch</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-glow" />
          <div className="portrait">
            <Image src="/profile4.png" alt="Guillermo Trejo portrait" width={800} height={800} priority />
          </div>
          <div className="badge-float badge-1"><span className="num">98%</span> detection accuracy</div>
          <div className="badge-float badge-2"><span className="num">+60%</span> engagement lift</div>
        </div>
      </div>
    </header>
  );
}
