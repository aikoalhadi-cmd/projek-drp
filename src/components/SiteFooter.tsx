import React from 'react';
import { Orbit, ShieldCheck, Compass, FlaskConical, BookOpen } from 'lucide-react';

interface Props {
  onNavigate: (route: string) => void;
}

export const SiteFooter: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#1e40af]/30 bg-[#020718]/85 backdrop-blur-md text-[#cbd5e1] pt-16 pb-12 mt-20 relative overflow-hidden z-20">
      {/* Subtle light ribbon at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#071d49] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
                <Orbit className="w-4 h-4" />
              </div>
              <span className="font-serif-display font-bold text-lg text-white tracking-[0.2em]">
                BEYOND THE FRAME
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md leading-relaxed font-sans">
              Publikasi edukasi sains populer yang membedah fisika di balik film fiksi ilmiah. Menghubungkan adegan sinematik dengan hukum relativitas, mekanika fluida, dan batas pengetahuan manusia.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-sans">
              <ShieldCheck className="w-4 h-4 text-[#fbbf24]" />
              <span>Berbasis Bukti Ilmiah · Rujukan Terverifikasi · Tanpa Halusinasi</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-serif-display tracking-[0.2em] uppercase text-white font-semibold mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <button 
                  onClick={() => onNavigate('/explore')}
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 text-left text-[#cbd5e1] cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 opacity-60 text-[#38bdf8]" />
                  Jelajahi Arsip
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/physics-lab')}
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 text-left text-[#cbd5e1] cursor-pointer"
                >
                  <FlaskConical className="w-3.5 h-3.5 opacity-60 text-[#38bdf8]" />
                  Physics Lab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 text-left text-[#cbd5e1] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 opacity-60 text-[#38bdf8]" />
                  Tentang dan Metode
                </button>
              </li>
            </ul>
          </div>

          {/* Scientific Standards */}
          <div>
            <h4 className="text-xs font-serif-display tracking-[0.2em] uppercase text-white font-semibold mb-4">
              Standar Editorial
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#94a3b8]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Fisika mapan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                <span>Kemungkinan teoretis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"></span>
                <span>Sains spekulatif</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>Fiksi sinematik</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal horizontal bottom bar */}
        <div className="pt-8 border-t border-[#1e40af]/20 text-xs font-sans text-[#94a3b8] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>Kelompok 1</span>
            <span>·</span>
            <span>The Physics Behind Fiction</span>
            <span>·</span>
            <span>© 2026 Beyond the Frame</span>
          </div>
          <div className="text-white font-serif-display font-semibold tracking-[0.2em] text-xs">
            BEYOND THE FRAME
          </div>
        </div>
      </div>
    </footer>
  );
};
