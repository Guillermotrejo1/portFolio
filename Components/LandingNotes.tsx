import React from 'react';

// A stationary cluster of notes that sit at the bottom of the tech stack section
export const LandingNotes: React.FC = () => {
  const cluster = Array.from({ length: 44 }, (_, i) => ({
    id: i,
    x: Math.random() * 200 - 50, // max overscan for ultra-wide spread (-50%..150%)
    y: Math.random() * 30, // slightly tighter vertical spread
    scale: 0.4 + Math.random() * 1.4, // wider size variety for depth
    rotate: Math.random() * 50 - 25,
    type: i % 5, // reuse indices from background (0-4) bass removed
    z: 5 + Math.floor(Math.random() * 6), // z-index layering 5..10
  }));

  // Simple reuse of shapes (keep consistent visual language)
  const symbols = [
    <svg key="c1" viewBox="0 0 120 120" fill="currentColor"><ellipse cx="40" cy="90" rx="18" ry="14" transform="rotate(-20 40 90)" /><rect x="56" y="25" width="6" height="65" /><path d="M62 25 Q90 22, 86 40 Q82 52, 70 55 L70 48 Q78 46, 80 38 Q82 30, 62 30 Z" /></svg>,
    <svg key="c2" viewBox="0 0 140 120" fill="currentColor"><ellipse cx="40" cy="95" rx="18" ry="14" transform="rotate(-20 40 95)" /><rect x="58" y="40" width="6" height="55" /><ellipse cx="95" cy="80" rx="18" ry="14" transform="rotate(-20 95 80)" /><rect x="113" y="25" width="6" height="55" /><path d="M64 40 L119 25 L119 34 L64 49 Z" /></svg>,
    <svg key="c3" viewBox="0 0 120 120" fill="currentColor"><path d="M65 15 C52 10 40 18 40 32 C40 54 78 50 78 72 C78 87 66 96 53 94 C40 92 32 82 34 70 C36 58 46 52 56 54 C66 56 72 66 68 74 C64 82 54 83 49 78 C44 73 46 64 52 62 C58 60 63 66 61 71 C59 75 53 76 51 72" stroke="currentColor" strokeWidth="5" fill="none" /><circle cx="60" cy="32" r="8" /><path d="M60 10 L60 115" stroke="currentColor" strokeWidth="4" /></svg>,
    <svg key="c4" viewBox="0 0 120 120" fill="currentColor"><ellipse cx="50" cy="85" rx="20" ry="15" transform="rotate(-25 50 85)" /><rect x="68" y="20" width="7" height="65" /></svg>,
    <svg key="c5" viewBox="0 0 140 120" fill="currentColor"><ellipse cx="40" cy="95" rx="18" ry="14" transform="rotate(-20 40 95)" /><rect x="58" y="25" width="6" height="70" /><path d="M64 25 Q90 22, 86 40 Q82 52, 70 55 L70 48 Q78 46, 80 38 Q82 30, 64 30 Z" /><path d="M64 40 Q92 38, 88 52 Q84 62, 72 65 L72 58 Q80 56, 82 50 Q84 44, 64 44 Z" /></svg>
  ];

  return (
    <div className="relative w-full mt-10">
      <div className="relative h-64 w-full overflow-visible" style={{ height: 'calc(16rem - 75px)' }}>
        {cluster.map(n => (
          <div
            key={n.id}
            className="absolute text-green-500 animate-float-pulse pointer-events-none"
            style={{
              left: `${n.x}%`,
              bottom: `${n.y}%`,
              width: '50px',
              height: '50px',
              animationDelay: `${n.id * 120}ms`,
              zIndex: n.z
            }}
          >
            <div
              style={{
                transform: `rotate(${n.rotate}deg) scale(${n.scale})`,
                width: '100%',
                height: '100%'
              }}
            >
              {symbols[n.type]}
            </div>
          </div>
        ))}
        {/* Ground line removed per request */}
      </div>
    </div>
  );
};
