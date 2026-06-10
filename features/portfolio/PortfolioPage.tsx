import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiMail, FiMoon, FiSun, FiX } from "react-icons/fi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { experience, projects, stack } from "@/features/portfolio/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const ICON = {
  react: `<svg viewBox="-11.5 -10.23174 23 20.46348" fill="none"><circle r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  next: `<svg viewBox="0 0 256 256" fill="none"><rect width="256" height="256" rx="48" fill="#000"/><path fill="#fff" d="M76 72h34l72 110V72h28v112h-34L104 74v110H76z"/><circle cx="188" cy="184" r="8" fill="#fff"/></svg>`,
  ts: `<svg viewBox="0 0 256 256"><rect width="256" height="256" rx="20" fill="#3178c6"/><path fill="#fff" d="M150 200v-22h-26v-79h-29v79H68v22zm12-26q5 9 16 14t26 5q14 0 24-4t15-12 5-18q0-9-4-15t-12-10-21-9q-12-4-17-7t-5-9q0-5 4-8t12-3q15 0 26 8l8-19q-7-5-15-7t-19-2q-12 0-21 3t-15 11-5 17q0 13 8 20t24 11q12 4 17 7t5 9q0 5-4 8t-13 3q-9 0-17-3t-15-9z"/></svg>`,
  js: `<svg viewBox="0 0 256 256"><rect width="256" height="256" rx="20" fill="#f7df1e"/><path d="M67 213l20-12q6 11 17 11 11 0 11-15v-95h24v96q0 22-12 33t-32 11q-21 0-29-29zm75-2l20-12q9 14 24 14 9 0 14-4t5-9q0-7-5-10t-19-9q-19-7-26-15t-7-22q0-13 9-21t24-9q22 0 32 18l-19 12q-6-9-15-9-7 0-11 3t-4 8q0 5 4 8t17 8q22 8 30 17t8 24q0 17-11 26t-31 9q-29 0-39-19z" fill="#000"/></svg>`,
  tailwind: `<svg viewBox="0 0 32 32"><path fill="#38bdf8" d="M16 6q-6.4 0-8 6.4 2.4-3.2 5.6-2.4 1.83.46 2.6 1.6.94 1.4 3 1.6 6.4 0 8-6.4-2.4 3.2-5.6 2.4-1.83-.46-2.6-1.6Q18.06 6 16 6zM8 16q-6.4 0-8 6.4 2.4-3.2 5.6-2.4 1.83.46 2.6 1.6.94 1.4 3 1.6 6.4 0 8-6.4-2.4 3.2-5.6 2.4-1.83-.46-2.6-1.6Q10.06 16 8 16z"/></svg>`,
  html: `<svg viewBox="0 0 32 32"><path fill="#e44d26" d="M2 2l2.5 27.5L16 32l11.5-2.5L30 2z"/><path fill="#f16529" d="M16 29.4V4.5h12.5L26.4 26.7z"/><path fill="#fff" d="M9 10h14l-.4 4H13l.3 3.5h9.3l-1.1 11-5.5 1.5-5.5-1.5-.4-4h2.7l.2 2 3 1 3-1 .4-4H9.7zm0 0"/></svg>`,
  css: `<svg viewBox="0 0 32 32"><path fill="#1572b6" d="M2 2l2.5 27.5L16 32l11.5-2.5L30 2z"/><path fill="#33a9dc" d="M16 29.4V4.5h12.5L26.4 26.7z"/><path fill="#fff" d="M22.6 14H10l.3 3.5h12zM10.7 10h12.6l.3-3.5H10.4zM16 24l-5-1.4-.3-3.6h-3l.5 6 7.8 2.2zm0-12.5h6.4l-.4 4-6 .2v3.4l5.5-.2-.5 5.6L16 24v3.7l8-2.2 1-13z"/></svg>`,
  node: `<svg viewBox="0 0 32 32"><path fill="#83cd29" d="M16 30q-.6 0-1.1-.3l-3.4-2c-.5-.3-.3-.4-.1-.5.7-.2.8-.3 1.5-.7.1 0 .2 0 .3.1l2.6 1.6c.1 0 .2 0 .3 0l10.2-5.9c.1 0 .2-.2.2-.3V10.2c0-.1 0-.2-.2-.3l-10.2-5.9c-.1 0-.2 0-.3 0L5.6 9.9c-.1 0-.2.2-.2.3v11.8c0 .1 0 .2.2.3l2.8 1.6c1.5.8 2.5-.1 2.5-1V10.6c0-.2.1-.3.3-.3h1.3c.2 0 .3.1.3.3v12.3c0 2-1.1 3.2-3 3.2-.6 0-1 0-2.3-.6L4.5 24c-.7-.4-1.1-1.2-1.1-2V10.2c0-.8.4-1.6 1.1-2L14.7 2.3c.7-.4 1.6-.4 2.3 0L27.2 8.2c.7.4 1.1 1.2 1.1 2v11.8c0 .8-.4 1.6-1.1 2l-10.2 5.9c-.3.2-.7.3-1.1.3z"/></svg>`,
  firebase: `<svg viewBox="0 0 32 32"><path fill="#ffa000" d="M5.8 24.6L9 5.4 12.2 11l-6.4 13.6z"/><path fill="#f57c00" d="M5.8 24.6L16 32l10.2-7.4L20 13l-14.2 11.6z"/><path fill="#ffca28" d="M16 32l10.2-7.4L24 11.5l-7.5-1L11 23 16 32z"/><path fill="#fff" opacity=".2" d="M5.8 24.6L9 5.4 12.2 11l-6.4 13.6z"/></svg>`,
  stripe: `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#635bff"/><path fill="#fff" d="M14.7 12.5c0-1 .8-1.4 2.1-1.4 1.9 0 4.4.6 6.3 1.6V7q-3-1.2-6.3-1.2c-5.1 0-8.5 2.7-8.5 7.2 0 7 9.5 5.9 9.5 8.9 0 1.2-1 1.6-2.5 1.6-2.1 0-4.8-.9-7-2v5.7q3.5 1.6 7 1.6c5.2 0 8.8-2.6 8.8-7.2 0-7.5-9.4-6.2-9.4-9.1z"/></svg>`,
  git: `<svg viewBox="0 0 32 32"><path fill="#f05133" d="M31.5 14.5L17.5.5c-.8-.8-2.1-.8-2.9 0l-2.9 2.9 3.7 3.7q1.3-.4 2.3.6 1 1 .6 2.4l3.5 3.5q1.4-.4 2.4.6 1.4 1.4 0 2.8-1.4 1.4-2.8 0-1-1-.6-2.4l-3.3-3.3v8.7q.4.2.7.5 1.4 1.4 0 2.8-1.4 1.4-2.8 0-1.4-1.4 0-2.8.4-.4.9-.6V11q-.5-.2-.9-.6-1-1-.6-2.4L11 4.4.5 14.9c-.8.8-.8 2.1 0 2.9l14 14c.8.8 2.1.8 2.9 0L31.5 17.4c.8-.8.8-2.1 0-2.9z"/></svg>`,
  figma: `<svg viewBox="0 0 32 32"><path fill="#0acf83" d="M11 32a5 5 0 0 0 5-5v-5h-5a5 5 0 0 0 0 10z"/><path fill="#a259ff" d="M6 16a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z"/><path fill="#f24e1e" d="M6 6a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z"/><path fill="#ff7262" d="M16 1h5a5 5 0 0 1 0 10h-5z"/><path fill="#1abcfe" d="M26 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/></svg>`
} as const;

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export function PortfolioPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "fail"; msg: string } | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    const saved = (localStorage.getItem("gt-theme") as "light" | "dark" | null) ?? "light";
    setTheme(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }
    localStorage.setItem("gt-theme", theme);
  }, [theme, ready]);

  const fontVars = useMemo(() => `${inter.variable} ${serif.variable} ${mono.variable}`, []);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);

    const values = Object.values(form).map((value) => value.trim());
    const emailValid = /\S+@\S+\.\S+/.test(form.email.trim());
    if (values.some((value) => !value) || !emailValid) {
      setToast({ type: "fail", msg: "Please fill in all fields correctly." });
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setForm(initialForm);
      setToast({ type: "ok", msg: "Message sent. Guillermo will be in touch soon." });
    } catch {
      setToast({ type: "fail", msg: "Send failed. Please email guillermotrejo.dev@gmail.com directly." });
    } finally {
      setSending(false);
    }
  };

  if (!ready) {
    return null;
  }

  return (
    <div className={`portfolio-site ${fontVars}`} data-theme={theme}>
      <nav className="nav">
        <div className="portfolio-wrap nav-inner">
          <a href="#" className="logo" aria-label="Go to top">
            <span className="mark" style={{ fontFamily: "var(--font-serif)" }}>GT</span>
            <span style={{ fontFamily: "var(--font-inter)" }}>Guillermo Trejo</span>
          </a>
          <div className="nav-links" style={{ fontFamily: "var(--font-inter)" }}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="pill">Contact</a>
            <button className="theme-btn" onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))} aria-label="Toggle theme">
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </div>
      </nav>

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
                <div className="stat"><div className="v" style={{ fontFamily: "var(--font-serif)" }}>98%</div><div className="k">Skin condition detection accuracy in production</div></div>
                <div className="stat"><div className="v" style={{ fontFamily: "var(--font-serif)" }}>60%</div><div className="k">Lift in user engagement with recommendations</div></div>
                <div className="stat"><div className="v" style={{ fontFamily: "var(--font-serif)" }}>&lt;2s</div><div className="k">Analysis processing time after optimization</div></div>
                <div className="stat"><div className="v" style={{ fontFamily: "var(--font-serif)" }}>26</div><div className="k">CNAs led with #1 Texas documentation rank</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="portfolio-wrap">
          <div className="section-head">
            <div>
              <div className="label" style={{ fontFamily: "var(--font-mono)" }}>02 · Selected work</div>
              <h2 style={{ fontFamily: "var(--font-inter)" }}>Things I&apos;ve <em className="serif" style={{ fontFamily: "var(--font-serif)" }}>built</em>.</h2>
            </div>
            <div className="sub" style={{ fontFamily: "var(--font-inter)" }}>Production apps and full-stack projects built with TypeScript-first Next.js and AI integrations.</div>
          </div>

          <div className="work-list" style={{ fontFamily: "var(--font-inter)" }}>
            {projects.map((project) => (
              <article className="project" key={project.id}>
                <div className="preview">
                  <div className={`frame ${project.frameClass}`}>
                    {project.id === "01" ? (
                      <div className="mock skinstric-mock">
                        <div className="mock-bar"><span></span><span></span><span></span></div>
                        <div className="mock-body">
                          <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}>SKINSTRIC AI</div>
                          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Live analysis</div>
                          <div className="face-circ"><div className="scan"></div></div>
                          <div className="pill-row"><b className="green">Hydration · 92%</b><b>Texture · 87%</b><b>Tone · 94%</b></div>
                          <div className="row"><span>Confidence</span><b>98.4%</b></div>
                          <div className="meter"><i style={{ width: "98%" }}></i></div>
                        </div>
                      </div>
                    ) : project.id === "02" ? (
                      <div className="mock clinical-mock">
                        <div className="mock-bar"><span></span><span></span><span></span></div>
                        <div className="mock-body">
                          <div className="topline"><h4>Floor 3 · East Wing</h4><span className="day">SHIFT 07:42</span></div>
                          <div className="kpi-grid">
                            <div className="kpi"><div className="v">94%</div><div className="k">Occupancy</div></div>
                            <div className="kpi"><div className="v">12</div><div className="k">Open alerts</div></div>
                            <div className="kpi"><div className="v">3.2h</div><div className="k">Avg. response</div></div>
                          </div>
                          <div className="chart"><svg viewBox="0 0 200 50" preserveAspectRatio="none"><polyline fill="none" stroke="#28e07d" strokeWidth="1.8" points="0,38 16,30 32,34 48,22 64,28 80,18 96,24 112,12 128,18 144,10 160,16 176,8 192,14 200,10" /><polyline fill="rgba(40,224,125,.15)" stroke="none" points="0,38 16,30 32,34 48,22 64,28 80,18 96,24 112,12 128,18 144,10 160,16 176,8 192,14 200,10 200,50 0,50" /></svg></div>
                          <div className="alerts">
                            <div className="alert">Room 312 · Vitals stable<span style={{ color: "#7a8aa6" }}>2m</span></div>
                            <div className="alert amber">Room 318 · BP elevated<span style={{ color: "#f5b840" }}>8m</span></div>
                            <div className="alert red">Room 321 · O₂ &lt; 92%<span style={{ color: "#ef5b5b" }}>now</span></div>
                          </div>
                        </div>
                      </div>
                    ) : project.id === "03" ? (
                      <div className="mock summarist-mock">
                        <div className="mock-bar"><span></span><span></span><span></span></div>
                        <div className="mock-body">
                          <div className="head"><h4>Summarist</h4><span>PREMIUM</span></div>
                          <div className="book">
                            <div className="cover"></div>
                            <div className="b-info"><b>Atomic Habits</b><span>James Clear · 12 min</span><span className="play">▶ Listen now</span></div>
                          </div>
                          <div className="book">
                            <div className="cover b2"></div>
                            <div className="b-info"><b>Deep Work</b><span>Cal Newport · 15 min</span><span className="play">▶ Listen now</span></div>
                          </div>
                          <div className="book">
                            <div className="cover b3"></div>
                            <div className="b-info"><b>Range</b><span>David Epstein · 14 min</span><span className="play">▶ Listen now</span></div>
                          </div>
                        </div>
                      </div>
                    ) : project.id === "04" ? (
                      <div className="mock lingo-mock">
                        <div className="mock-bar"><span></span><span></span><span></span></div>
                        <div className="mock-body">
                          <div className="head"><h4>Spanish · Unit 2</h4><span className="streak">🔥 12 day</span></div>
                          <div className="lesson"><b>Greetings</b><div className="check">✓</div></div>
                          <div className="lesson"><b>Numbers 1–20</b><div className="check">✓</div></div>
                          <div className="lesson active"><b>Food &amp; ordering</b><div style={{ fontSize: 10, color: "#10b981", fontWeight: 700 }}>62%</div></div>
                          <div className="lesson locked"><b>Past tense</b><div style={{ color: "#999" }}>🔒</div></div>
                          <div className="progress"><i></i></div>
                          <div style={{ fontSize: 10, color: "#666", marginTop: 6, textAlign: "right" }}>XP this week · 480 / 700</div>
                        </div>
                      </div>
                    ) : (
                      <div className="mock">
                        <div className="mock-bar"><span /><span /><span /></div>
                        <div className="mock-body">
                          <strong>{project.title}</strong>
                          <p style={{ marginTop: 8, fontSize: 12 }}>{project.description.slice(0, 110)}...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="body">
                  <div>
                    <div className="num" style={{ fontFamily: "var(--font-mono)" }}>{project.id} / {project.period}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags" style={{ fontFamily: "var(--font-mono)" }}>
                      {project.tags.map((tag) => (
                        <span className="tag" key={`${project.id}-${tag}`}>{tag}</span>
                      ))}
                    </div>
                    {project.metrics ? (
                      <div className="metric-row">
                        {project.metrics.map((metric) => (
                          <div className="m" key={`${project.id}-${metric.label}`}>
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
            ))}
          </div>
        </div>
      </section>

      <section id="stack">
        <div className="portfolio-wrap">
          <div className="section-head">
            <div>
              <div className="label" style={{ fontFamily: "var(--font-mono)" }}>03 · Stack</div>
              <h2 style={{ fontFamily: "var(--font-inter)" }}>Tools I <em className="serif" style={{ fontFamily: "var(--font-serif)" }}>reach for</em>.</h2>
            </div>
            <div className="sub" style={{ fontFamily: "var(--font-inter)" }}>Daily drivers across language, framework, data, and product delivery.</div>
          </div>
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

      <section id="experience">
        <div className="portfolio-wrap">
          <div className="section-head">
            <div>
              <div className="label" style={{ fontFamily: "var(--font-mono)" }}>04 · Experience</div>
              <h2 style={{ fontFamily: "var(--font-inter)" }}>The <em className="serif" style={{ fontFamily: "var(--font-serif)" }}>track record</em>.</h2>
            </div>
            <div className="sub" style={{ fontFamily: "var(--font-inter)" }}>Two careers, one operator mindset for product impact and delivery.</div>
          </div>
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
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: 9999,
                            background: "var(--accent)",
                            marginTop: 9,
                            flexShrink: 0,
                          }}
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

      <section id="contact" className="contact">
        <div className="contact-notes" aria-hidden="true">
          <span className="note" style={{ top: "14%", left: "6%" }}>♪</span>
          <span className="note" style={{ top: "62%", left: "10%" }}>♫</span>
          <span className="note" style={{ top: "20%", right: "8%" }}>♩</span>
          <span className="note" style={{ top: "72%", right: "12%" }}>♬</span>
          <span className="note" style={{ top: "48%", left: "50%" }}>♪</span>
        </div>
        <div className="portfolio-wrap contact-content">
          <div className="label" style={{ justifyContent: "center", fontFamily: "var(--font-mono)" }}>05 · Contact</div>
          <h2 style={{ fontFamily: "var(--font-inter)" }}>Let&apos;s build <em className="serif" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>together</em>.</h2>
          <p style={{ fontFamily: "var(--font-inter)" }}>Open to full-time and contract frontend roles. Based in San Marcos, TX and available across the US.</p>
          <div className="contact-grid" style={{ fontFamily: "var(--font-inter)" }}>
            <button type="button" className="contact-card contact-card-btn" onClick={() => setModalOpen(true)}>
              <div className="ic"><FiMail /></div>
              <div><div className="lab" style={{ fontFamily: "var(--font-mono)" }}>Email</div><div className="val">guillermotrejo.dev@gmail.com</div></div>
            </button>
            <Link href="https://github.com/Guillermotrejo1" className="contact-card" target="_blank" rel="noopener noreferrer">
              <div className="ic"><IoLogoGithub /></div>
              <div><div className="lab" style={{ fontFamily: "var(--font-mono)" }}>GitHub</div><div className="val">@Guillermotrejo1</div></div>
            </Link>
            <Link href="https://linkedin.com/in/guillermo-trejo-8a5797318" className="contact-card" target="_blank" rel="noopener noreferrer">
              <div className="ic"><IoLogoLinkedin /></div>
              <div><div className="lab" style={{ fontFamily: "var(--font-mono)" }}>LinkedIn</div><div className="val">guillermo-trejo</div></div>
            </Link>
          </div>
          <div style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>(737) 212-2547 · San Marcos, TX</div>
        </div>
      </section>

      <footer>
        <div className="portfolio-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="mark" style={{ fontFamily: "var(--font-serif)" }}>GT</span>
            <span style={{ fontFamily: "var(--font-inter)" }}>Guillermo Trejo · 2026</span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>&quot;Composition over inheritance.&quot; · Built with Next.js care.</div>
        </div>
      </footer>

      <div className={`modal-shell ${modalOpen ? "open" : ""}`} aria-hidden={!modalOpen}>
        <div className="modal-backdrop" onClick={() => setModalOpen(false)} />
        <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="emailModalTitle" style={{ fontFamily: "var(--font-inter)" }}>
          <button type="button" className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close contact form"><FiX /></button>
          <h3 className="modal-title" id="emailModalTitle">Start the <em className="serif" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>conversation.</em></h3>
          <p className="modal-sub">Send a message directly. Guillermo typically responds within one business day.</p>

          <form onSubmit={submitContact}>
            <div className="modal-fields-row">
              <div className="modal-field">
                <label htmlFor="f-name" style={{ fontFamily: "var(--font-mono)" }}>Your name</label>
                <input id="f-name" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Jane Smith" />
              </div>
              <div className="modal-field">
                <label htmlFor="f-email" style={{ fontFamily: "var(--font-mono)" }}>Your email</label>
                <input id="f-email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="jane@company.com" />
              </div>
            </div>

            <div className="modal-field">
              <label htmlFor="f-subject" style={{ fontFamily: "var(--font-mono)" }}>Subject</label>
              <input id="f-subject" value={form.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder="Frontend opportunity at Acme Co." />
            </div>

            <div className="modal-field">
              <label htmlFor="f-message" style={{ fontFamily: "var(--font-mono)" }}>Message</label>
              <textarea id="f-message" value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Hi Guillermo, I came across your portfolio..." />
            </div>

            <div className="modal-actions">
              <button type="submit" className="modal-btn primary" disabled={sending}>{sending ? "Sending..." : "Send message"}</button>
              <button type="button" className="modal-btn secondary" onClick={() => setModalOpen(false)}>Maybe later</button>
            </div>
            {toast ? <div className={`modal-toast ${toast.type}`}>{toast.msg}</div> : <div className="modal-toast" />}
          </form>
        </div>
      </div>
    </div>
  );
}
