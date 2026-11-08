import { FiMoon, FiSun } from "react-icons/fi";
import type { Theme } from "@/features/portfolio/PortfolioPage";

type NavProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
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
          <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}
