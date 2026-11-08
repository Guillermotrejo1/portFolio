import Link from "next/link";
import type { ReactNode } from "react";
import { FiFileText, FiMail } from "react-icons/fi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const links: { href: string; icon: ReactNode; label: string; value: string }[] = [
  { href: "/CV.pdf", icon: <FiFileText />, label: "Resume", value: "View Resume" },
  { href: "https://github.com/Guillermotrejo1", icon: <IoLogoGithub />, label: "GitHub", value: "@Guillermotrejo1" },
  { href: "https://linkedin.com/in/guillermo-trejo-8a5797318", icon: <IoLogoLinkedin />, label: "LinkedIn", value: "guillermo-trejo" },
];

function CardContent({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <>
      <div className="ic">{icon}</div>
      <div>
        <div className="lab" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
        <div className="val">{value}</div>
      </div>
    </>
  );
}

export function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  return (
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
        <h2 style={{ fontFamily: "var(--font-inter)" }}>
          Let&apos;s build <em className="serif" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>together</em>.
        </h2>
        <p style={{ fontFamily: "var(--font-inter)" }}>Open to full-time and contract frontend roles. Based in San Marcos, TX and available across the US.</p>
        <div className="contact-grid" style={{ fontFamily: "var(--font-inter)" }}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="contact-card" target="_blank" rel="noopener noreferrer">
              <CardContent icon={link.icon} label={link.label} value={link.value} />
            </Link>
          ))}
          <button type="button" className="contact-card contact-card-btn" onClick={onOpenModal} style={{ gridColumn: "1 / -1" }}>
            <CardContent icon={<FiMail />} label="Email" value="guillermotrejo.dev@gmail.com" />
          </button>
        </div>
        <div style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>(737) 212-2547 · San Marcos, TX</div>
      </div>
    </section>
  );
}
