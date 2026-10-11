import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ScienceStatusBadge } from '../components/ScienceStatusBadge';
import { ShortAnswer } from '../components/ShortAnswer';
import { EquationBlock } from '../components/EquationBlock';
import { ScienceFigure } from '../components/ScienceFigure';
import { ScienceCallout } from '../components/ScienceCallout';
import { ReferenceList } from '../components/ReferenceList';
import { ArticleTOC } from '../components/ArticleTOC';
import { 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  FlaskConical, 
  Share2, 
  Check, 
  Sparkles, 
  Calendar, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface Props {
  article: Article;
  allArticles: Article[];
  onNavigate: (route: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleDetailPage: React.FC<Props> = ({
  article,
  allArticles,
  onNavigate,
  onSelectArticle,
}) => {
  const [activeSectionId, setActiveSectionId] = useState('the-scene');
  const [copiedShare, setCopiedShare] = useState(false);

  // Scrollspy effect for active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = article.sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(article.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const tocItems = [
    ...article.sections.map((s) => ({
      id: s.id,
      index: s.index,
      title: s.title,
    })),
    { id: 'evidence-summary', index: '05', title: 'Fakta Empiris dan Batas Fiksi' },
    { id: 'references', index: '06', title: 'Daftar Rujukan dan Sitasi' },
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const relatedArticles = allArticles.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <article className="pt-28 sm:pt-36 pb-24 min-h-screen relative z-10">
      {/* Article Header & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#cbd5e1] mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/explore')}
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 font-serif-display tracking-wider cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>JELAJAHI</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className="text-[#38bdf8] uppercase font-serif-display tracking-wider">{article.film}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-mono text-xs">
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              {article.readTimeMinutes} MENIT BACA
            </span>
            <button
              onClick={handleShare}
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 bg-[#071d49]/80 px-3 py-1 rounded-full border border-[#1e40af]/30 font-sans text-xs cursor-pointer"
              title="Salin tautan"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedShare ? 'Tersalin' : 'Bagikan'}</span>
            </button>
          </div>
        </div>

        {/* Title & Metadata Card */}
        <div className="max-w-4xl space-y-4 p-6 sm:p-8 rounded-3xl bg-[#040c1e]/92 border border-[#1e3461]/80 backdrop-blur-xl shadow-2xl">
          <div className="text-xs font-serif-display font-bold tracking-[0.2em] uppercase text-[#38bdf8]">
            {article.fieldNoteNumber} · {article.category} DAN FISIKA SINEMATIK
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-wide leading-tight drop-shadow-md">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl font-editorial italic text-[#e2e8f0] leading-relaxed">
            {article.subtitle}
          </p>

          {/* Primary Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {article.primaryStatusBadges.map((badge) => (
              <ScienceStatusBadge key={badge} status={badge} size="md" />
            ))}
          </div>

          {/* Article metadata: strictly 'Diperbarui' and 'Kelompok 1' */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#94a3b8] pt-4 border-t border-[#1e3461]">
            <span className="flex items-center gap-1.5 text-white">
              <Calendar className="w-3.5 h-3.5 text-[#fbbf24]" />
              Diperbarui {article.updatedAt}
            </span>
            <span>·</span>
            <span className="text-[#fbbf24] font-semibold">Kelompok 1</span>
          </div>
        </div>

        {/* 16:9 Cinematic Hero Image */}
        <div className="my-10 rounded-2xl overflow-hidden border border-[#1e3461] bg-[#050f24]/90 shadow-2xl backdrop-blur-sm">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050f24] via-transparent to-transparent opacity-80" />
          </div>
          <div className="p-3 sm:p-4 bg-[#0a1836]/95 border-t border-[#1e3461] text-[11px] font-mono text-[#cbd5e1] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>Analisis Visual: {article.heroImage.alt}</span>
            <span className="italic">{article.heroImage.credit}</span>
          </div>
        </div>

        {/* Executive Summary: The Short Answer */}
        <ShortAnswer
          mainStatement={article.shortAnswer.mainStatement}
          qualifier={article.shortAnswer.qualifier}
        />

        {/* Main Content Layout: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-4">
          {/* Main Article Body Column - High-Contrast Dark Reading Sanctuary */}
          <div className="flex-1 max-w-[780px] bg-[#040c1e]/92 sm:bg-[#040c1e]/95 border border-[#1e3461]/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-16">
            {article.sections.map((section) => (
              <section 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-28 space-y-6"
              >
                <div className="space-y-2 border-b border-[#1e3461] pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#72DDFB] font-semibold">
                    BAGIAN {section.index}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                    {section.title}
                  </h2>
                </div>

                {/* Paragraphs with pristine contrast */}
                <div className="space-y-4 text-base sm:text-lg text-[#F1F5F9] font-normal leading-relaxed">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Key quote if present */}
                {section.keyQuote && (
                  <blockquote className="my-6 pl-4 border-l-2 border-[#72DDFB] text-lg sm:text-xl font-display font-medium text-[#72DDFB] italic bg-[#091736]/40 py-2 pr-4 rounded-r-lg">
                    {section.keyQuote}
                  </blockquote>
                )}

                {/* Callout box */}
                {section.callout && (
                  <ScienceCallout callout={section.callout} />
                )}

                {/* Equation Block */}
                {section.equation && (
                  <EquationBlock equation={section.equation} />
                )}

                {/* Technical Figure / Schematic */}
                {section.diagram && (
                  <ScienceFigure diagram={section.diagram} />
                )}

                {/* Film vs Science comparative cards */}
                {section.comparisonItems && section.comparisonItems.length > 0 && (
                  <div className="my-8 space-y-4">
                    <h3 className="font-display text-lg font-bold text-[#F3F6FC] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#72DDFB]" />
                      <span>Bedah Adegan: Gambaran Film versus Realitas Fisika</span>
                    </h3>

                    <div className="space-y-4">
                      {section.comparisonItems.map((item, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="bg-[#050f24]/80 backdrop-blur-md rounded-xl border border-[#1e3461] p-5 space-y-3 shadow-md"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e3461] pb-2.5">
                            <span className="text-xs font-mono text-[#cbd5e1] uppercase">
                              Klaim {cIdx + 1}
                            </span>
                            <ScienceStatusBadge status={item.verdict} size="sm" />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="bg-[#030919] p-3 rounded-lg border border-[#1e3461]/60">
                              <span className="text-[10px] font-mono uppercase text-amber-300 block mb-1">
                                Penggambaran Sinematik:
                              </span>
                              <p className="text-[#F3F6FC] leading-relaxed">
                                {item.cinematicDepiction}
                              </p>
                            </div>

                            <div className="bg-[#030919] p-3 rounded-lg border border-[#1e3461]/60">
                              <span className="text-[10px] font-mono uppercase text-[#72DDFB] block mb-1">
                                Realitas Ilmiah:
                              </span>
                              <p className="text-[#cbd5e1] leading-relaxed">
                                {item.scientificReality}
                              </p>
                            </div>
                          </div>

                          <p className="text-[11px] font-mono text-[#cbd5e1] bg-[#030919]/80 p-2.5 rounded border border-[#1e3461]/40">
                            <strong className="text-[#72DDFB]">Mekanisme Fisika:</strong> {item.physicsExplanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* What We Know vs What We Don't section */}
            <section id="evidence-summary" className="scroll-mt-28 space-y-6">
              <div className="space-y-2 border-b border-[#1e3461] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#72DDFB] font-semibold">
                  BAGIAN 05
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F6FC]">
                  Fakta Empiris dan Batas Fiksi Naratif
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* What We Know */}
                <div className="bg-[#050f24]/80 backdrop-blur-md rounded-xl border border-emerald-500/30 p-6 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <Check className="w-4 h-4" />
                    <span className="uppercase tracking-wider font-mono text-xs">Fakta Ilmiah Teruji</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F6FC]/90">
                    {article.whatWeKnowVsDont.whatWeKnow.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Don't */}
                <div className="bg-[#050f24]/80 backdrop-blur-md rounded-xl border border-rose-500/30 p-6 space-y-4">
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                    <HelpCircle className="w-4 h-4" />
                    <span className="uppercase tracking-wider font-mono text-xs">Batas Pengetahuan dan Fiksi</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                    {article.whatWeKnowVsDont.whatWeDont.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* References section */}
            <section id="references" className="scroll-mt-28">
              <ReferenceList references={article.references} />
            </section>

            {/* Interactive Lab Callout */}
            <div className="rounded-2xl bg-[#050f24]/85 backdrop-blur-md border border-[#72DDFB]/30 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#72DDFB]">
                  <FlaskConical className="w-4 h-4" />
                  <span>EKSPERIMEN DI PHYSICS LAB</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#F3F6FC]">
                  Ingin menguji persamaan ini secara interaktif?
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1]">
                  Jalankan simulasi relativitas khusus atau uji gravitasi dan atmosfer di Mars secara langsung.
                </p>
              </div>

              <button
                onClick={() => onNavigate('/physics-lab')}
                className="px-5 py-3 rounded-xl bg-[#72DDFB] text-[#030712] font-semibold text-xs font-mono hover:bg-white transition-all shrink-0 flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Buka Physics Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#1e3461]">
                <h3 className="font-display text-xl font-bold text-[#F3F6FC]">
                  Lanjutkan Penjelajahan
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectArticle(rel.slug)}
                      className="group cursor-pointer bg-[#050f24]/80 backdrop-blur-md rounded-xl border border-[#1e3461] hover:border-[#72DDFB]/50 p-5 space-y-2 transition-all"
                    >
                      <div className="text-[10px] font-mono text-[#72DDFB] uppercase">
                        {rel.film} · {rel.category}
                      </div>
                      <h4 className="font-display font-semibold text-sm text-[#F3F6FC] group-hover:text-[#72DDFB] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#cbd5e1] line-clamp-2">
                        {rel.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky TOC Column (Desktop) */}
          <div className="lg:w-64">
            <ArticleTOC sections={tocItems} activeId={activeSectionId} />
          </div>
        </div>
      </div>
    </article>
  );
};
