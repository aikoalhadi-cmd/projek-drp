import React from 'react';
import { TimeDilationExplorer } from '../components/TimeDilationExplorer';
import { MarsEnvironmentExplorer } from '../components/MarsEnvironmentExplorer';
import { FlaskConical, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (route: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const PhysicsLabPage: React.FC<Props> = ({ onSelectArticle }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 min-h-screen relative z-10">
      {/* Page Header Card */}
      <div className="max-w-3xl space-y-4 p-6 sm:p-8 rounded-3xl bg-[#040c1e]/92 border border-[#1e3461]/80 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071d49]/80 border border-[#38bdf8]/40 text-xs font-serif-display text-[#38bdf8] backdrop-blur-md">
          <FlaskConical className="w-3.5 h-3.5 text-[#fbbf24]" />
          <span>LABORATORIUM SAINS INTERAKTIF · DUA SIMULASI KONSEPTUAL</span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-[0.16em]">
          PHYSICS LAB.
        </h1>

        <p className="text-sm sm:text-base font-editorial italic text-[#e2e8f0] leading-relaxed">
          Ubah variabel, amati reaksi model, dan pahami batasan hukum alam. Dua simulasi interaktif berbasis persamaan deterministik dan data empiris badan antariksa resmi.
        </p>
      </div>

      {/* Experiment 01: Special Relativity Time Dilation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-serif-display text-[#38bdf8] tracking-wider">
            <span>KOLABORASI SAINS: INTERSTELLAR</span>
          </div>
          <button
            onClick={() => onSelectArticle('interstellar-time-dilation')}
            className="text-xs font-sans text-[#fbbf24] hover:text-white flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
          >
            <span>Baca investigasi lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <TimeDilationExplorer />
      </section>

      {/* Experiment 02: Mars Environment Comparison */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-serif-display text-[#a855f7] tracking-wider">
            <span>KOLABORASI SAINS: THE MARTIAN</span>
          </div>
          <button
            onClick={() => onSelectArticle('the-martian-survival-on-mars')}
            className="text-xs font-sans text-[#fbbf24] hover:text-white flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
          >
            <span>Baca investigasi lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <MarsEnvironmentExplorer />
      </section>

      {/* Lab Methodology Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#050f24]/85 backdrop-blur-md border border-[#1e40af]/30 space-y-3 shadow-xl">
        <h3 className="font-serif-display text-lg font-bold text-white tracking-wider">
          Prinsip Eksperimen Physics Lab
        </h3>
        <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-sans">
          Semua simulasi di Physics Lab dirancang dengan prinsip deterministik: rumus eksplisit, input terkontrol, output numerik transparan, dan batasan model yang dinyatakan secara terbuka. Kami tidak menggunakan model bahasa (LLM) untuk komputasi matematika agar hasil selalu presisi dan dapat diverifikasi secara ilmiah.
        </p>
      </div>
    </div>
  );
};
