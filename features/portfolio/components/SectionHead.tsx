import type { ReactNode } from "react";

type SectionHeadProps = {
  label: string;
  title: ReactNode;
  sub: string;
};

export function SectionHead({ label, title, sub }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div>
        <div className="label" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
        <h2 style={{ fontFamily: "var(--font-inter)" }}>{title}</h2>
      </div>
      <div className="sub" style={{ fontFamily: "var(--font-inter)" }}>{sub}</div>
    </div>
  );
}

export function SerifEm({ children }: { children: ReactNode }) {
  return <em className="serif" style={{ fontFamily: "var(--font-serif)" }}>{children}</em>;
}
