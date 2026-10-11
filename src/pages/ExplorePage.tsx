import React, { useState, useMemo } from 'react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { Search, RotateCcw, Compass } from 'lucide-react';

interface Props {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
}

export const ExplorePage: React.FC<Props> = ({ articles, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Magnetism', 'Relativity', 'Planetary Science'];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // Category filter
      const matchesCategory = 
        selectedCategory === 'All' || 
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.film.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.director.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen relative z-10">
      {/* Page Header Card */}
      <div className="space-y-4 max-w-3xl p-6 sm:p-8 rounded-3xl bg-[#040c1e]/92 border border-[#1e3461]/80 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071d49]/80 border border-[#38bdf8]/40 text-xs font-serif-display text-[#38bdf8] backdrop-blur-md">
          <Compass className="w-3.5 h-3.5" />
          <span>ARSIP INVESTIGASI SAINS</span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-[0.16em]">
          EXPLORE THE UNKNOWN.
        </h1>

        <p className="text-sm sm:text-base text-[#e2e8f0] font-editorial italic leading-relaxed">
          Empat film. Empat dekonstruksi ilmiah. Telusuri relativitas ruang waktu, superkonduktivitas levitasi, termodinamika gurun, dan rekayasa bertahan hidup di Mars.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-[#040c1e]/95 p-4 sm:p-5 rounded-2xl border border-[#1e3461] shadow-2xl backdrop-blur-xl space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik, film, atau konsep fisika (misal: Interstellar, black hole, gravitasi, Dune)..."
            className="w-full bg-[#030e2b]/90 text-[#F3F6FC] placeholder-[#94a3b8]/60 text-xs sm:text-sm pl-11 pr-4 py-3 rounded-xl border border-[#1e40af]/30 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all font-sans"
            aria-label="Cari artikel investigasi"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans text-[#cbd5e1] hover:text-white cursor-pointer"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Category Buttons with Golden Active State */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#d97706] to-[#fbbf24] text-[#03091e] font-bold shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                    : 'bg-[#030e2b]/80 text-[#cbd5e1] hover:text-white hover:bg-[#0c2a6b] border border-[#1e40af]/30'
                }`}
              >
                {cat === 'All' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-sans text-[#94a3b8]">
            Menampilkan <strong className="text-[#38bdf8]">{filteredArticles.length}</strong> dari {articles.length} investigasi
          </div>
        </div>
      </div>

      {/* Grid of Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="standard"
              onSelect={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-[#050f24]/80 rounded-2xl border border-[#1e40af]/30 p-8 max-w-xl mx-auto space-y-4 backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-[#030e2b] border border-[#1e40af]/40 flex items-center justify-center mx-auto text-[#94a3b8]">
            <Search className="w-6 h-6 opacity-60" />
          </div>
          <h3 className="font-serif-display text-xl font-bold text-white">
            Tidak ada investigasi ditemukan
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-md mx-auto">
            Tidak ada artikel yang cocok dengan kata kunci "{searchQuery}" pada kategori {selectedCategory}.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full bg-[#38bdf8] text-[#030712] hover:bg-white transition-all cursor-pointer shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filter</span>
          </button>
        </div>
      )}
    </div>
  );
};
