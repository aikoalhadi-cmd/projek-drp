import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Binary, 
  FileCheck, 
  BookOpen, 
  GraduationCap, 
  Building2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 min-h-screen relative z-10">
      {/* Header & Mission Card */}
      <div className="max-w-3xl space-y-5 p-6 sm:p-8 rounded-3xl bg-[#040c1e]/92 border border-[#1e3461]/80 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071d49]/80 border border-[#38bdf8]/40 text-xs font-serif-display text-[#38bdf8] backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#fbbf24]" />
          <span>MISI DAN STANDAR EDITORIAL</span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-[0.16em]">
          CURIOSITY DESERVES EVIDENCE.
        </h1>

        <p className="text-base sm:text-xl font-editorial italic text-[#e2e8f0] leading-relaxed">
          Kami membedah ilmu pengetahuan di balik dunia fiksi ilmiah, bukan untuk mengurangi keindahan fiksi, melainkan untuk memperdalam pemahaman kita tentang realitas semesta.
        </p>
      </div>

      {/* Editorial Method: 3 Pillars */}
      <section className="bg-[#050f24]/85 rounded-3xl border border-[#2563eb]/30 p-8 sm:p-12 space-y-8 shadow-2xl backdrop-blur-md">
        <div className="border-b border-[#1e40af]/30 pb-4">
          <span className="text-xs font-serif-display text-[#38bdf8] uppercase tracking-[0.25em]">
            TIGA PILAR METODOLOGI
          </span>
          <h2 className="font-serif-display text-xl sm:text-3xl font-bold text-white mt-1 tracking-wider">
            METODE EDITORIAL KAMI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#030e2b]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-[#071d49] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base font-bold text-white tracking-wider">01. Amati</h3>
            <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
              Identifikasi fenomena yang benar-benar ditampilkan pembuat film di layar perak tanpa spekulasi liar atau melebih-lebihkan adegan.
            </p>
          </div>

          <div className="bg-[#030e2b]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-[#071d49] border border-[#a855f7]/40 flex items-center justify-center text-[#a855f7]">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base font-bold text-white tracking-wider">02. Jelaskan</h3>
            <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
              Hubungkan fenomena visual dengan teori fisika, model persamaan, dan pengukuran empiris yang relevan di laboratorium.
            </p>
          </div>

          <div className="bg-[#030e2b]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-[#071d49] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base font-bold text-white tracking-wider">03. Verifikasi</h3>
            <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
              Cantumkan sumber literatur akademik primer yang dapat diverifikasi publik dan nyatakan batas ketidakpastian secara transparan.
            </p>
          </div>
        </div>
      </section>

      {/* Source Hierarchy */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-serif-display text-[#38bdf8] uppercase tracking-[0.25em]">
            KEBIJAKAN VERIFIKASI
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wider">
            HIERARKI SUMBER ILMIAH
          </h2>
          <p className="text-xs sm:text-sm text-[#cbd5e1] font-sans">
            Setiap klaim sentral dalam artikel kami wajib memiliki rujukan dari tingkatan sumber berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-[#050f24]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#38bdf8] font-serif-display text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-[#fbbf24]" />
              <span>LEVEL 01 · RUJUKAN PRIMER</span>
            </div>
            <h4 className="font-serif-display font-semibold text-sm text-white tracking-wide">
              Jurnal Ilmiah Telaah Sejawat
            </h4>
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed">
              Artikel penelitian orisinal yang diterbitkan di jurnal fisika bereputasi (Physical Review, Nature, Classical and Quantum Gravity).
            </p>
          </div>

          <div className="bg-[#050f24]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 font-serif-display text-xs font-semibold">
              <Building2 className="w-4 h-4" />
              <span>LEVEL 02 · BADAN ANTARIKSA</span>
            </div>
            <h4 className="font-serif-display font-semibold text-sm text-white tracking-wide">
              NASA, ESA, NIST dan Laboratorium
            </h4>
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed">
              Data instrumen wahana antariksa, laporan teknis, dan arsip planetary science terverifikasi.
            </p>
          </div>

          <div className="bg-[#050f24]/80 p-6 rounded-2xl border border-[#1e40af]/30 space-y-2.5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#a855f7] font-serif-display text-xs font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>LEVEL 03 · TEKS KANONIKAL</span>
            </div>
            <h4 className="font-serif-display font-semibold text-sm text-white tracking-wide">
              Buku Teks Akademik Resmi
            </h4>
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed">
              Buku teks universitas untuk teori mapan (seperti Tinkham Superconductivity, Bagnold Sand Dunes, Kip Thorne).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
