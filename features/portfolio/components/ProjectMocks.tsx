import type { PortfolioProject } from "@/features/portfolio/data";

function MockBar() {
  return <div className="mock-bar"><span /><span /><span /></div>;
}

function SkinstricMock() {
  return (
    <div className="mock skinstric-mock">
      <MockBar />
      <div className="mock-body">
        <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}>SKINSTRIC AI</div>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Live analysis</div>
        <div className="face-circ"><div className="scan"></div></div>
        <div className="pill-row"><b className="green">Hydration · 92%</b><b>Texture · 87%</b><b>Tone · 94%</b></div>
        <div className="row"><span>Confidence</span><b>98.4%</b></div>
        <div className="meter"><i style={{ width: "98%" }}></i></div>
      </div>
    </div>
  );
}

function ClinicalMock() {
  const points = "0,38 16,30 32,34 48,22 64,28 80,18 96,24 112,12 128,18 144,10 160,16 176,8 192,14 200,10";
  return (
    <div className="mock clinical-mock">
      <MockBar />
      <div className="mock-body">
        <div className="topline"><h4>Floor 3 · East Wing</h4><span className="day">SHIFT 07:42</span></div>
        <div className="kpi-grid">
          <div className="kpi"><div className="v">94%</div><div className="k">Occupancy</div></div>
          <div className="kpi"><div className="v">12</div><div className="k">Open alerts</div></div>
          <div className="kpi"><div className="v">3.2h</div><div className="k">Avg. response</div></div>
        </div>
        <div className="chart">
          <svg viewBox="0 0 200 50" preserveAspectRatio="none">
            <polyline fill="none" stroke="#28e07d" strokeWidth="1.8" points={points} />
            <polyline fill="rgba(40,224,125,.15)" stroke="none" points={`${points} 200,50 0,50`} />
          </svg>
        </div>
        <div className="alerts">
          <div className="alert">Room 312 · Vitals stable<span style={{ color: "#7a8aa6" }}>2m</span></div>
          <div className="alert amber">Room 318 · BP elevated<span style={{ color: "#f5b840" }}>8m</span></div>
          <div className="alert red">Room 321 · O₂ &lt; 92%<span style={{ color: "#ef5b5b" }}>now</span></div>
        </div>
      </div>
    </div>
  );
}

const books = [
  { title: "Atomic Habits", meta: "James Clear · 12 min", cover: "cover" },
  { title: "Deep Work", meta: "Cal Newport · 15 min", cover: "cover b2" },
  { title: "Range", meta: "David Epstein · 14 min", cover: "cover b3" },
];

function SummaristMock() {
  return (
    <div className="mock summarist-mock">
      <MockBar />
      <div className="mock-body">
        <div className="head"><h4>Summarist</h4><span>PREMIUM</span></div>
        {books.map((book) => (
          <div className="book" key={book.title}>
            <div className={book.cover}></div>
            <div className="b-info"><b>{book.title}</b><span>{book.meta}</span><span className="play">▶ Listen now</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LingoMock() {
  return (
    <div className="mock lingo-mock">
      <MockBar />
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
  );
}

function GenericMock({ project }: { project: PortfolioProject }) {
  return (
    <div className="mock">
      <MockBar />
      <div className="mock-body">
        <strong>{project.title}</strong>
        <p style={{ marginTop: 8, fontSize: 12 }}>{project.description.slice(0, 110)}...</p>
      </div>
    </div>
  );
}

export function ProjectMock({ project }: { project: PortfolioProject }) {
  switch (project.frameClass) {
    case "skinstric":
      return <SkinstricMock />;
    case "clinical":
      return <ClinicalMock />;
    case "summarist":
      return <SummaristMock />;
    case "lingo":
      return <LingoMock />;
    default:
      return <GenericMock project={project} />;
  }
}
