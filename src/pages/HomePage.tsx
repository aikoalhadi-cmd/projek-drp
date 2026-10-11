import React from 'react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { ScienceStatusBadge } from '../components/ScienceStatusBadge';
import { 
  ArrowRight, 
  FlaskConical, 
  Sparkles, 
  Binary, 
  Scale, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Orbit 
} from 'lucide-react';

interface Props {
  articles: Article[];
  onNavigate: (route: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const HomePage: React.FC<Props> = ({ 
  articles, 
  onNavigate, 
  onSelectArticle 
}) => {
  return (
    <div className="min-h-screen text-[#F3F6FC] relative">
      {/* 01 Hero Section: Galaxy Expanse & Editorial Intro */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 text-center px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[88vh] flex flex-col justify-center items-center">
        {/* Very light gradient scrim so the galaxy stars and galactic dust are clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/15 to-[#030712]/60 pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Subtle category label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07132c]/75 border border-[#38bdf8]/40 text-xs font-serif-display tracking-widest text-[#38bdf8] backdrop-blur-md shadow-lg">
            <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '24s' }} />
            <span>THE PHYSICS BEHIND FICTION</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.18em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            BEYOND THE FRAME
          </h1>

          {/* Subtitle in natural, refined Indonesian */}
          <p className="text-base sm:text-xl font-editorial italic text-[#e2e8f0] max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-lg">
            Membedah fenomena fisika di balik film fiksi ilmiah populer: menghubungkan adegan spektakuler dengan teori teruji, model matematika, dan batasan pengetahuan manusia.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('/explore')}
              className="px-8 py-3 rounded-full bg-[#38bdf8] hover:bg-white text-[#030712] font-semibold text-xs font-serif-display tracking-widest uppercase transition-all shadow-[0_0_24px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] flex items-center gap-2 group cursor-pointer"
            >
              <span>Jelajahi Arsip Sains</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/physics-lab')}
              className="px-8 py-3 rounded-full bg-[#09152b]/80 hover:bg-[#122549] text-white border border-[#38bdf8]/50 hover:border-[#38bdf8] text-xs font-serif-display tracking-widest uppercase transition-all backdrop-blur-md shadow-lg cursor-pointer"
            >
              Uji di Physics Lab
            </button>
          </div>
        </div>

        {/* Info label on left */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 text-left hidden sm:block z-20">
          <span className="text-[10px] font-serif-display tracking-[0.25em] text-[#38bdf8] uppercase block mb-1 opacity-90">
            KARYA KELOMPOK 1
          </span>
          <div className="flex items-center gap-2 text-xs text-[#cbd5e1] font-sans">
            <span className="font-medium text-white">Edukasi Sains Sinematik</span>
            <span>·</span>
            <span className="text-[#38bdf8] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
              Data Resmi NASA dan Jurnal Terverifikasi
            </span>
          </div>
        </div>
      </section>

      {/* 02 Empat Investigasi Utama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold tracking-[0.18em] text-white uppercase drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            EMPAT INVESTIGASI UTAMA
          </h2>
          <p className="text-sm font-editorial italic text-[#cbd5e1] max-w-xl mx-auto">
            Empat film fiksi ilmiah klasik dan analisis fenomena fisika yang mendasarinya.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="standard"
              onSelect={onSelectArticle}
            />
          ))}
        </div>

        {/* Subtle navigation pagination */}
        <div className="flex items-center justify-center gap-3 pt-10 text-[#38bdf8]">
          <button 
            onClick={() => onNavigate('/explore')}
            className="p-1 rounded-full hover:bg-[#0c1a36] transition-colors cursor-pointer"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/40" />
          </div>
          <button 
            onClick={() => onNavigate('/explore')}
            className="p-1 rounded-full hover:bg-[#0c1a36] transition-colors cursor-pointer"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 03 Mengapa Membedah Fisika di Balik Fiksi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="bg-[#040c1e]/95 border border-[#1e3461] rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold tracking-[0.16em] text-white uppercase leading-snug">
              MENGAPA MEMBEDAH FISIKA DI BALIK FIKSI?
            </h2>
            <p className="text-sm sm:text-base font-editorial italic text-[#93c5fd]">
              Tontonan di layar perak adalah fiksi, namun pertanyaan ilmiah yang lahir darinya adalah nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left description column */}
            <div className="lg:col-span-7 space-y-6 text-sm text-[#cbd5e1] font-sans leading-relaxed">
              <p>
                Materi sains sering kali terasa abstrak ketika disajikan hanya melalui rumus di atas kertas. Film fiksi ilmiah menyajikan konsep seperti kelengkungan ruang waktu, gravitasi ekstrem, dan atmosfer eksoplanet dalam wujud visual yang menggugah rasa ingin tahu.
              </p>
              <p>
                Beyond the Frame hadir bukan untuk mereduksi keindahan cerita dengan penghakiman kaku. Kami menguraikan mekanisme ilmiah di baliknya, memisahkan kenyataan eksperimental dari spekulasi artistik, dan mengajak pembaca memeriksa rujukan ilmiah primer secara terbuka.
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1e3461]/70">
                <div className="space-y-1.5 bg-[#030919]/80 p-4 rounded-xl border border-[#16274a] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[#38bdf8] font-serif-display text-xs font-bold tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CURIOSITY</span>
                  </div>
                  <p className="text-xs text-[#94a3b8]">Mengangkat adegan sinematik sebagai titik tolak pertanyaan ilmiah.</p>
                </div>

                <div className="space-y-1.5 bg-[#030919]/80 p-4 rounded-xl border border-[#16274a] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[#38bdf8] font-serif-display text-xs font-bold tracking-wider">
                    <Scale className="w-3.5 h-3.5" />
                    <span>EVIDENCE</span>
                  </div>
                  <p className="text-xs text-[#94a3b8]">Menguji klaim dengan persamaan fisika dan data empiris terpercaya.</p>
                </div>

                <div className="space-y-1.5 bg-[#030919]/80 p-4 rounded-xl border border-[#a855f7] font-serif-display text-xs font-bold tracking-wider">
                  <div className="flex items-center gap-2 text-[#a855f7] font-serif-display text-xs font-bold tracking-wider">
                    <Binary className="w-3.5 h-3.5" />
                    <span>IMAGINATION</span>
                  </div>
                  <p className="text-xs text-[#94a3b8]">Menghormati imajinasi pembuat film tanpa mengaburkan hukum alam.</p>
                </div>
              </div>
            </div>

            {/* Right Card with Physics Lab CTA */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-[#040c1d]/85 border border-[#1f3768] text-center space-y-4 shadow-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-[#081735] border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-lg font-bold text-white tracking-wider">
                Eksplorasi di Physics Lab
              </h3>
              <p className="text-xs text-[#cbd5e1] font-sans max-w-xs leading-relaxed">
                Uji langsung persamaan dilatasi waktu relativitas khusus atau bandingkan atmosfer dan gravitasi Mars dengan Bumi secara interaktif.
              </p>
              <button
                onClick={() => onNavigate('/physics-lab')}
                className="px-6 py-2.5 rounded-full bg-[#38bdf8] hover:bg-white text-[#030712] font-semibold text-xs font-serif-display tracking-widest uppercase transition-all shadow-md cursor-pointer"
              >
                Mulai Eksperimen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Empat Klasifikasi Kepastian Ilmiah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 relative z-20">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-serif-display tracking-[0.2em] text-[#38bdf8] uppercase">
            STANDAR INTEGRITAS ILMIAH
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
            EMPAT KLASIFIKASI KEPASTIAN
          </h2>
          <p className="text-xs sm:text-sm text-[#cbd5e1] font-sans">
            Setiap klaim diklasifikasikan secara terbuka agar pembaca mengetahui batasan antara sains mapan dan fiksi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#040c1e]/95 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/40 space-y-2.5 shadow-xl">
            <ScienceStatusBadge status="established_physics" size="md" />
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed pt-1">
              Didukung oleh teori mapan dan bukti eksperimen atau observasi empiris yang teruji.
            </p>
          </div>

          <div className="bg-[#040c1e]/95 backdrop-blur-xl p-6 rounded-2xl border border-[#38bdf8]/40 space-y-2.5 shadow-xl">
            <ScienceStatusBadge status="theoretical_possibility" size="md" />
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed pt-1">
              Konsisten secara matematis dengan model fisika, meskipun belum teramati langsung di alam.
            </p>
          </div>

          <div className="bg-[#040c1e]/95 backdrop-blur-xl p-6 rounded-2xl border border-[#a855f7]/40 space-y-2.5 shadow-xl">
            <ScienceStatusBadge status="speculative_science" size="md" />
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed pt-1">
              Gagasan yang memerlukan asumsi atau mekanisme hipotetis yang belum terverifikasi secara memadai.
            </p>
          </div>

          <div className="bg-[#040c1e]/95 backdrop-blur-xl p-6 rounded-2xl border border-rose-500/40 space-y-2.5 shadow-xl">
            <ScienceStatusBadge status="fiction" size="md" />
            <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed pt-1">
              Elemen naratif atau perangkat alur cerita yang tidak mewakili realitas hukum alam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
