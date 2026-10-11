import React from 'react';
import { Article } from '../types';
import { ScienceStatusBadge } from './ScienceStatusBadge';
import { Clock, ArrowRight, Film } from 'lucide-react';

interface Props {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact';
  onSelect: (slug: string) => void;
}

export const ArticleCard: React.FC<Props> = ({ 
  article, 
  variant = 'standard', 
  onSelect 
}) => {
  const isFeatured = variant === 'featured';

  if (isFeatured) {
    return (
      <div 
        onClick={() => onSelect(article.slug)}
        className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#040c1e]/95 backdrop-blur-xl border border-[#1e3461] hover:border-[#38bdf8]/80 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] grid grid-cols-1 lg:grid-cols-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(article.slug);
          }
        }}
        role="button"
        aria-label={`Baca artikel: ${article.title}`}
      >
        {/* Image col */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden bg-[#030712]">
          <img 
            src={article.heroImage.src} 
            alt={article.heroImage.alt}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060f22] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#060f22]" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-serif-display tracking-widest bg-[#030712]/80 backdrop-blur-md text-[#38bdf8] border border-[#38bdf8]/40 flex items-center gap-1.5 shadow-lg">
              <Film className="w-3.5 h-3.5 text-[#38bdf8]" />
              {article.film} ({article.filmYear})
            </span>
          </div>

          <div className="absolute bottom-3 left-4 text-[10px] font-mono tracking-widest text-[#94a3b8] bg-[#030712]/80 px-2.5 py-1 rounded-full border border-[#1e3461] backdrop-blur-sm hidden sm:block">
            {article.fieldNoteNumber} {article.category.toUpperCase()}
          </div>
        </div>

        {/* Content col */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-serif-display text-[#38bdf8] tracking-widest">
              <span className="uppercase">{article.category}</span>
              <span className="flex items-center gap-1 text-[#94a3b8] font-sans text-xs">
                <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                {article.readTimeMinutes} menit baca
              </span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug tracking-wide">
              {article.title}
            </h3>

            <p className="text-sm text-[#cbd5e1] font-sans leading-relaxed line-clamp-3">
              {article.subtitle}
            </p>

            {/* Status tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {article.primaryStatusBadges.map((status) => (
                <ScienceStatusBadge key={status} status={status} size="sm" />
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#1e3461] flex items-center justify-between">
            <span className="text-xs text-[#94a3b8] font-sans">
              Kelompok 1
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-serif-display tracking-wider font-bold text-[#38bdf8] group-hover:text-white transition-colors">
              <span>BACA ARTIKEL</span>
              <div className="w-8 h-8 rounded-full bg-[#38bdf8] text-[#030712] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard vertical card
  return (
    <div 
      onClick={() => onSelect(article.slug)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-[#040c1e]/95 backdrop-blur-xl border border-[#1e3461] hover:border-[#38bdf8]/80 transition-all duration-300 shadow-xl hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] flex flex-col justify-between h-full relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(article.slug);
        }
      }}
      role="button"
      aria-label={`Baca artikel: ${article.title}`}
    >
      <div>
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#030712] p-3">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src={article.heroImage.src} 
              alt={article.heroImage.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f22] via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-serif-display tracking-wider bg-[#030712]/80 backdrop-blur-md text-[#38bdf8] border border-[#38bdf8]/30">
                {article.film}
              </span>
            </div>

            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/90 flex items-center gap-1 bg-[#030712]/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#1e3461]">
              <Clock className="w-3 h-3 text-[#38bdf8]" />
              {article.readTimeMinutes} menit
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 pt-2 pb-4 space-y-2.5">
          <div className="text-[10px] font-serif-display tracking-[0.2em] uppercase text-[#38bdf8]">
            {article.fieldNoteNumber} · {article.category}
          </div>

          <h3 className="font-serif-display text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug tracking-wide">
            {article.title}
          </h3>

          <p className="text-xs text-[#cbd5e1] font-sans line-clamp-2 leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {article.primaryStatusBadges.map((status) => (
              <ScienceStatusBadge key={status} status={status} size="sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-[#1e3461] flex items-center justify-between text-xs text-[#94a3b8]">
        <span className="font-serif-display text-[11px] tracking-wider uppercase text-[#e2e8f0]">
          Kelompok 1
        </span>
        <div className="w-7 h-7 rounded-full bg-[#38bdf8] text-[#030712] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-md">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
