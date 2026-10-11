import React, { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  isGlitter: boolean;
  color: string;
}

export const GalaxyBackground: React.FC = () => {
  // Pre-generate deterministic sparkling stars scattered across the sky
  const stars = useMemo<Star[]>(() => {
    const list: Star[] = [];
    const colors = ['#ffffff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#dbeafe'];
    
    // 55 tiny sparkling stars
    for (let i = 0; i < 55; i++) {
      // Deterministic pseudorandom distribution
      const x = Math.round(((i * 37 + 19) % 100) * 10) / 10;
      const y = Math.round(((i * 53 + 11) % 100) * 10) / 10;
      const size = (i % 5 === 0) ? 2.5 : (i % 3 === 0) ? 2 : 1.5;
      const duration = 2.5 + ((i % 7) * 0.5); // 2.5s to 5.5s
      const delay = (i % 9) * 0.4; // 0s to 3.2s
      const isGlitter = i % 8 === 0; // occasional 4-point sparkle
      const color = colors[i % colors.length];

      list.push({ id: i, x, y, size, duration, delay, isGlitter, color });
    }
    return list;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base photographic deep blue-black galaxy night sky */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 scale-105"
        style={{
          backgroundImage: `url('/images/galaxy-night-sky.jpg')`,
        }}
      />

      {/* 2. Delicate animated sparkling stars (kilauan bintang-bintang kecil) */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => {
          if (star.isGlitter) {
            return (
              <div
                key={star.id}
                className="absolute animate-star-shimmer"
                style={{
                  top: `${star.y}%`,
                  left: `${star.x}%`,
                  color: star.color,
                  '--twinkle-duration': `${star.duration}s`,
                  '--twinkle-delay': `${star.delay}s`,
                } as React.CSSProperties}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-80 drop-shadow-[0_0_6px_rgba(125,211,252,0.8)]"
                >
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            );
          }

          return (
            <div
              key={star.id}
              className="absolute rounded-full animate-star-twinkle"
              style={{
                top: `${star.y}%`,
                left: `${star.x}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                '--twinkle-duration': `${star.duration}s`,
                '--twinkle-delay': `${star.delay}s`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* 3. Contrast Shield & Scrim: Prevents background from clashing with article text */}
      {/* Deep blue-black vignette and tone-mapping so the galaxy remains atmospheric while text stays 100% crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/45 via-[#020617]/65 to-[#020617]/85" />
      
      {/* 4. Radial center ambient dark mask so center text columns have optimal dark contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#020617_90%)] opacity-70" />
    </div>
  );
};
