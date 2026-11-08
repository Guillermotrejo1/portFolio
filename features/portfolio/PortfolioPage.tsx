import { useEffect, useState } from "react";
import { fontVars } from "@/features/portfolio/fonts";
import { Nav } from "@/features/portfolio/components/Nav";
import { Hero } from "@/features/portfolio/components/Hero";
import { About } from "@/features/portfolio/components/About";
import { Work } from "@/features/portfolio/components/Work";
import { Stack } from "@/features/portfolio/components/Stack";
import { Experience } from "@/features/portfolio/components/Experience";
import { Contact } from "@/features/portfolio/components/Contact";
import { Footer } from "@/features/portfolio/components/Footer";
import { ContactModal } from "@/features/portfolio/components/ContactModal";

export type Theme = "light" | "dark";

export function PortfolioPage() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("gt-theme") as Theme | null) ?? "light";
    setTheme(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("gt-theme", theme);
  }, [theme, ready]);

  if (!ready) return null;

  return (
    <div className={`portfolio-site ${fontVars}`} data-theme={theme}>
      <Nav theme={theme} onToggleTheme={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))} />
      <Hero />
      <About />
      <Work />
      <Stack />
      <Experience />
      <Contact onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
