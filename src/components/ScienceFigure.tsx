import React from 'react';
import { ScienceDiagram } from '../types';
import { Network, Sparkles, Layers } from 'lucide-react';

interface Props {
  diagram: ScienceDiagram;
}

export const ScienceFigure: React.FC<Props> = ({ diagram }) => {
  return (
    <figure className="my-8 rounded-2xl bg-[#0d1522] border border-[#1e2d42] overflow-hidden shadow-xl">
      <div className="px-5 py-3 border-b border-[#1e2d42] bg-[#111C2B] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#72DDFB] font-mono font-medium">
          <Layers className="w-4 h-4" />
          <span>TECHNICAL SCHEMATIC: {diagram.title}</span>
        </div>
        <span className="font-mono text-[11px] text-[#AAB8CB]">Figure 2.1</span>
      </div>

      <div className="p-4 sm:p-6 bg-[#080D16] flex flex-col items-center justify-center">
        {/* Render based on diagram type */}
        {diagram.type === 'meissner_levitation' && (
          <div className="w-full max-w-lg aspect-[16/9] relative bg-gradient-to-b from-[#0a101b] to-[#060a12] rounded-xl border border-[#1e2d42] p-4 flex flex-col items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 500 260">
              <defs>
                <linearGradient id="fluxGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#72DDFB" stopOpacity="0.8" />
                  <stop offset="1%" stopColor="#A99BFF" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="rockGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2a3f5a" />
                  <stop offset="1%" stopColor="#141e2c" />
                </linearGradient>
              </defs>

              {/* Magnetic field lines bending around the rock (Meissner effect) */}
              <path d="M 50 240 Q 150 180 200 70 Q 250 50 300 70 Q 350 180 450 240" fill="none" stroke="url(#fluxGrad)" strokeWidth="2.5" strokeDasharray="4 2" />
              <path d="M 80 240 Q 180 195 210 90 Q 250 75 290 90 Q 320 195 420 240" fill="none" stroke="url(#fluxGrad)" strokeWidth="2" />
              <path d="M 120 240 Q 200 210 225 110 Q 250 95 275 110 Q 300 210 380 240" fill="none" stroke="url(#fluxGrad)" strokeWidth="1.5" />

              {/* Floating Mountain Rock body */}
              <polygon points="210,120 290,115 320,150 280,185 220,180 190,145" fill="url(#rockGrad)" stroke="#72DDFB" strokeWidth="2" filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.8))" />
              
              {/* Quantized Flux Pinning Vortices inside rock */}
              <line x1="240" y1="120" x2="240" y2="180" stroke="#72DDFB" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="260" y1="117" x2="260" y2="183" stroke="#72DDFB" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="280" y1="120" x2="280" y2="180" stroke="#72DDFB" strokeWidth="2" strokeDasharray="2 2" />

              {/* Force Vectors */}
              {/* Upward magnetic force */}
              <line x1="250" y1="110" x2="250" y2="60" stroke="#72DDFB" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="260" y="75" fill="#72DDFB" fontSize="12" fontFamily="monospace" fontWeight="bold">F_mag = -∇(m·B)</text>
              
              {/* Downward gravity */}
              <line x1="250" y1="190" x2="250" y2="235" stroke="#ef4444" strokeWidth="3" />
              <text x="260" y="225" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold">W = M · g</text>

              {/* Labels */}
              <text x="20" y="40" fill="#AAB8CB" fontSize="11" fontFamily="sans-serif">Type-II Flux Pinning (Meissner State)</text>
              <text x="20" y="60" fill="#72DDFB" fontSize="11" fontFamily="monospace">Stable 3D Equilibrium Point</text>
            </svg>
          </div>
        )}

        {diagram.type === 'spacetime_curvature' && (
          <div className="w-full max-w-lg aspect-[16/9] relative bg-gradient-to-b from-[#0a101b] to-[#060a12] rounded-xl border border-[#1e2d42] p-4 flex flex-col items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 500 260">
              <defs>
                <radialGradient id="holeGrad" cx="70%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" />
                  <stop offset="70%" stopColor="#080D16" />
                  <stop offset="100%" stopColor="#72DDFB" stopOpacity="0.4" />
                </radialGradient>
              </defs>

              {/* Curved spacetime mesh lines */}
              <path d="M 20 50 Q 200 55 350 140" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
              <path d="M 20 100 Q 200 110 350 150" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
              <path d="M 20 150 Q 200 165 350 170" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
              <path d="M 20 200 Q 200 210 350 200" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />

              {/* Gargantua Event Horizon circle */}
              <circle cx="380" cy="130" r="65" fill="#000000" stroke="#72DDFB" strokeWidth="2.5" />
              <circle cx="380" cy="130" r="75" fill="none" stroke="#A99BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

              {/* Miller's Planet orbit point */}
              <circle cx="280" cy="130" r="7" fill="#72DDFB" />
              <text x="240" y="115" fill="#72DDFB" fontSize="11" fontFamily="monospace" fontWeight="bold">Miller's Planet</text>
              <text x="235" y="150" fill="#AAB8CB" fontSize="10" fontFamily="sans-serif">1 hr = 7 Earth yrs</text>

              {/* Endurance at flat space */}
              <circle cx="60" cy="70" r="5" fill="#F3F6FC" />
              <text x="75" y="65" fill="#F3F6FC" fontSize="11" fontFamily="monospace">Endurance (Mothercraft)</text>
              <text x="75" y="80" fill="#AAB8CB" fontSize="10" fontFamily="sans-serif">Coordinate Time (Δt)</text>

              {/* Labels */}
              <text x="350" y="40" fill="#A99BFF" fontSize="11" fontFamily="monospace">Gargantua (Kerr Metric)</text>
              <text x="350" y="235" fill="#AAB8CB" fontSize="10" fontFamily="sans-serif">Extreme Frame-Dragging</text>
            </svg>
          </div>
        )}

        {diagram.type === 'aeolian_saltation' && (
          <div className="w-full max-w-lg aspect-[16/9] relative bg-gradient-to-b from-[#16120b] to-[#080D16] rounded-xl border border-[#1e2d42] p-4 flex flex-col items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 500 260">
              {/* Dune profile */}
              <path d="M 20 230 Q 180 210 280 120 L 350 230 L 480 230" fill="#2d1c0b" stroke="#e08a3c" strokeWidth="2" />
              
              {/* Wind streamlines */}
              <path d="M 40 70 C 140 60, 220 50, 320 40" fill="none" stroke="#72DDFB" strokeWidth="2" strokeDasharray="6 3" />
              <path d="M 60 100 C 160 90, 240 80, 340 70" fill="none" stroke="#72DDFB" strokeWidth="1.5" strokeDasharray="6 3" />
              <text x="50" y="55" fill="#72DDFB" fontSize="11" fontFamily="monospace">Wind Stream u* (Shear Velocity)</text>

              {/* Saltating Grain parabolic bounce trajectory */}
              <path d="M 100 220 Q 130 140 160 205 Q 190 125 220 185 Q 250 95 275 125" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
              <circle cx="160" cy="205" r="3" fill="#fbbf24" />
              <circle cx="220" cy="185" r="3" fill="#fbbf24" />
              <text x="130" y="130" fill="#fbbf24" fontSize="10" fontFamily="monospace">Saltation trajectory</text>

              {/* Angle of repose label on slip face */}
              <line x1="280" y1="120" x2="350" y2="230" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="310" y="165" fill="#f87171" fontSize="10" fontFamily="monospace">Angle of Repose (34°)</text>
              <text x="340" y="180" fill="#AAB8CB" fontSize="9" fontFamily="sans-serif">Gravity Avalanching</text>

              {/* Stoss side label */}
              <text x="140" y="245" fill="#AAB8CB" fontSize="10" fontFamily="sans-serif">Stoss Slope (Sediment Creep)</text>
            </svg>
          </div>
        )}

        {diagram.type === 'mars_pressure_gradient' && (
          <div className="w-full max-w-lg aspect-[16/9] relative bg-gradient-to-b from-[#110c14] to-[#080D16] rounded-xl border border-[#1e2d42] p-4 flex flex-col items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 500 260">
              {/* Pressure axis */}
              <line x1="80" y1="30" x2="80" y2="230" stroke="#1e2d42" strokeWidth="2" />
              <line x1="75" y1="50" x2="85" y2="50" stroke="#72DDFB" strokeWidth="2" />
              <line x1="75" y1="140" x2="85" y2="140" stroke="#fbbf24" strokeWidth="2" />
              <line x1="75" y1="210" x2="85" y2="210" stroke="#f43f5e" strokeWidth="2" />

              {/* Horizontal comparative bars */}
              {/* Earth */}
              <rect x="90" y="40" width="370" height="24" rx="4" fill="#0e3a47" stroke="#72DDFB" strokeWidth="1" />
              <text x="100" y="56" fill="#F3F6FC" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Earth Sea Level (1,013 mbar)</text>
              <text x="340" y="56" fill="#72DDFB" fontSize="11" fontFamily="monospace">1.00 atm</text>

              {/* Armstrong limit */}
              <line x1="90" y1="140" x2="460" y2="140" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 3" />
              <text x="95" y="132" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">Armstrong Limit (63 mbar)</text>
              <text x="95" y="156" fill="#AAB8CB" fontSize="10" fontFamily="sans-serif">Critical Threshold: Water & Blood boil at 37°C</text>

              {/* Mars */}
              <rect x="90" y="200" width="12" height="24" rx="2" fill="#881337" stroke="#f43f5e" strokeWidth="1" />
              <text x="115" y="216" fill="#f43f5e" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Mars Surface Mean (6.36 mbar)</text>
              <text x="340" y="216" fill="#AAB8CB" fontSize="11" fontFamily="monospace">0.006 atm (0.6%)</text>
            </svg>
          </div>
        )}
      </div>

      {/* Caption & Attribution */}
      <figcaption className="p-4 sm:p-5 bg-[#0b1320] border-t border-[#1e2d42] space-y-1">
        <p className="text-xs sm:text-sm text-[#F3F6FC] leading-relaxed">
          {diagram.caption}
        </p>
        <p className="text-[11px] font-mono text-[#AAB8CB]/80">
          Source: {diagram.credit}
        </p>
      </figcaption>
    </figure>
  );
};
