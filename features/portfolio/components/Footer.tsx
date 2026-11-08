export function Footer() {
  return (
    <footer>
      <div className="portfolio-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="mark" style={{ fontFamily: "var(--font-serif)" }}>GT</span>
          <span style={{ fontFamily: "var(--font-inter)" }}>Guillermo Trejo · 2026</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>&quot;Composition over inheritance.&quot; · Built with Next.js care.</div>
      </div>
    </footer>
  );
}
