import React, { useEffect, useState } from 'react';

interface Note {
  id: number;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  scale: number;
  type: number;
}

export const MusicNotesBackground: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [landingY, setLandingY] = useState<number | null>(null);
  const [projectsBottomY, setProjectsBottomY] = useState<number | null>(null);

  useEffect(() => {
    // Helper to compute landing position near the bottom of the tech section
    const computeLanding = (): number | null => {
      const tech = document.getElementById('tech');
      if (!tech) return null;
      const rect = tech.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      return rect.top + scrollTop + rect.height - 120; // land a bit above bottom
    };

    const computeProjectsBottom = (): number | null => {
      const projects = document.getElementById('projects');
      if (!projects) return null;
      const rect = projects.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      return rect.top + scrollTop + rect.height;
    };

    // Generate random notes (start above viewport, spread horizontally)
    const generatedNotes: Note[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      // start above the screen up to one viewport height
      y: -Math.random() * (window.innerHeight + 200),
      speed: 0.2 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      scale: 1 + Math.random() * 1.5,
      type: Math.floor(Math.random() * 5), // 5 types (bass removed)
    }));
    setNotes(generatedNotes);

    // Initial landing Y and projects bottom and on-resize updates
    const initialLanding = computeLanding();
    setLandingY(initialLanding);
    const initialProjectsBottom = computeProjectsBottom();
    setProjectsBottomY(initialProjectsBottom);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setLandingY(computeLanding());
      setProjectsBottomY(computeProjectsBottom());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const musicNotesSVG = [
    // Single eighth note (stem + flag)
    <svg key="note1" viewBox="0 0 120 120" fill="currentColor">
      <ellipse cx="40" cy="90" rx="18" ry="14" transform="rotate(-20 40 90)" />
      <rect x="56" y="25" width="6" height="65" />
      <path d="M62 25 Q90 22, 86 40 Q82 52, 70 55 L70 48 Q78 46, 80 38 Q82 30, 62 30 Z" />
    </svg>,
    // Beamed pair of eighth notes
    <svg key="note2" viewBox="0 0 140 120" fill="currentColor">
      <ellipse cx="40" cy="95" rx="18" ry="14" transform="rotate(-20 40 95)" />
      <rect x="58" y="40" width="6" height="55" />
      <ellipse cx="95" cy="80" rx="18" ry="14" transform="rotate(-20 95 80)" />
      <rect x="113" y="25" width="6" height="55" />
      <path d="M64 40 L119 25 L119 34 L64 49 Z" />
    </svg>,
    // Treble clef (G clef simplified spiral)
    <svg key="treble" viewBox="0 0 120 120" fill="currentColor">
      <path d="M65 15 C52 10 40 18 40 32 C40 54 78 50 78 72 C78 87 66 96 53 94 C40 92 32 82 34 70 C36 58 46 52 56 54 C66 56 72 66 68 74 C64 82 54 83 49 78 C44 73 46 64 52 62 C58 60 63 66 61 71 C59 75 53 76 51 72" stroke="currentColor" strokeWidth="5" fill="none" />
      <circle cx="60" cy="32" r="8" />
      <path d="M60 10 L60 115" stroke="currentColor" strokeWidth="4" />
    </svg>,
    // Quarter note
    <svg key="quarter" viewBox="0 0 120 120" fill="currentColor">
      <ellipse cx="50" cy="85" rx="20" ry="15" transform="rotate(-25 50 85)" />
      <rect x="68" y="20" width="7" height="65" />
    </svg>,
    // Sixteenth note (double flag)
    <svg key="sixteenth" viewBox="0 0 140 120" fill="currentColor">
      <ellipse cx="40" cy="95" rx="18" ry="14" transform="rotate(-20 40 95)" />
      <rect x="58" y="25" width="6" height="70" />
      <path d="M64 25 Q90 22, 86 40 Q82 52, 70 55 L70 48 Q78 46, 80 38 Q82 30, 64 30 Z" />
      <path d="M64 40 Q92 38, 88 52 Q84 62, 72 65 L72 58 Q80 56, 82 50 Q84 44, 64 44 Z" />
    </svg>
  ];

  // easing for deceleration near landing (easeOutCubic)
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {notes.map((note) => {
        // If we don't have a landing target yet, fall linearly with scroll
        let yPx: number;
        if (landingY == null) {
          yPx = note.y + scrollY * note.speed;
        } else {
          const target = landingY - 40; // small margin above ground
          const travel = Math.max(100, target - note.y);
          const linear = clamp((scrollY * note.speed) / travel, 0, 1);
          const eased = easeOut(linear);
          yPx = note.y + eased * travel;
          // prevent crossing the landing target
          if (yPx > target) yPx = target;
        }

        // Smoothly fade out approaching the end of Projects
        let opacity = 1;
        if (projectsBottomY != null) {
          const offset = 100; // start fade a bit early
          const fadeRange = 200; // px over which to fade to 0
          const fadeStart = projectsBottomY - offset - fadeRange;
          const t = clamp((scrollY - fadeStart) / fadeRange, 0, 1);
          opacity = 1 - t;
        }

        // As notes approach the Tech Stack landing target, reduce visibility further
        if (landingY != null) {
          const fadeEnd = landingY - 40; // where notes should be fully faded
          const fadeStart = fadeEnd - 250; // start fading 250px above landing
          const t = clamp((yPx - fadeStart) / (fadeEnd - fadeStart), 0, 1);
          // Fade from fully visible to invisible before landing
          const nearOpacity = 1 - t;
          opacity = Math.min(opacity, nearOpacity);
        }
        // gentle horizontal drift based on scroll + note id
        const driftAmp = 12 + note.scale * 10; // px
        const driftPhase = (scrollY * note.speed) / 50 + note.id * 0.7;
        const driftPx = Math.sin(driftPhase) * driftAmp;

        return (
          <div
            key={note.id}
            className="absolute text-green-500"
            style={{
              left: `${note.x}%`,
              top: `${yPx}px`,
              transform: `translateX(${driftPx}px) rotate(${note.rotation}deg) scale(${note.scale})`,
              width: '60px',
              height: '60px',
              transition: 'top 0.1s ease-out',
              opacity,
              willChange: 'top, opacity, transform',
            }}
          >
            {musicNotesSVG[note.type]}
          </div>
        );
      })}
    </div>
  );
};
