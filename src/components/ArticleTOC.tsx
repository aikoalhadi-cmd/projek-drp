import React, { useState } from 'react';
import { ListFilter, ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  index: string;
  title: string;
}

interface Props {
  sections: TOCItem[];
  activeId: string;
}

export const ArticleTOC: React.FC<Props> = ({ sections, activeId }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileExpanded(false);
    }
  };

  return (
    <>
      {/* Mobile Floating Drawer Header */}
      <div className="lg:hidden my-6 bg-[#111C2B] border border-[#1e2d42] rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono font-medium text-[#72DDFB] hover:bg-[#152336] transition-colors"
          aria-expanded={mobileExpanded}
        >
          <div className="flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-[#72DDFB]" />
            <span>IN THIS ARTICLE (TABLE OF CONTENTS)</span>
          </div>
          {mobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {mobileExpanded && (
          <nav className="p-3 bg-[#080D16] border-t border-[#1e2d42] space-y-1">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                  activeId === item.id
                    ? 'bg-[#111C2B] text-[#72DDFB] font-semibold'
                    : 'text-[#AAB8CB] hover:text-[#F3F6FC] hover:bg-[#111C2B]/50'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">{item.index}.</span>
                <span className="truncate">{item.title}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block sticky top-28 self-start w-64 shrink-0 space-y-4">
        <div className="bg-[#111C2B] rounded-xl border border-[#1e2d42] p-5 shadow-xl">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#72DDFB] font-bold mb-4 flex items-center gap-2">
            <ListFilter className="w-3.5 h-3.5" />
            <span>IN THIS ARTICLE</span>
          </div>

          <nav className="space-y-1.5" aria-label="Table of Contents">
            {sections.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all flex items-baseline gap-2 ${
                    isActive
                      ? 'bg-[#080D16] text-[#72DDFB] font-semibold border-l-2 border-[#72DDFB] shadow-inner'
                      : 'text-[#AAB8CB] hover:text-[#F3F6FC] hover:bg-[#080D16]/50'
                  }`}
                >
                  <span className="font-mono text-[10px] shrink-0 opacity-70">{item.index}</span>
                  <span className="leading-snug">{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 rounded-xl bg-[#080D16] border border-[#1e2d42] text-[11px] text-[#AAB8CB] space-y-1">
          <span className="font-mono text-[#72DDFB] block font-semibold">Verified Citations</span>
          <p className="leading-relaxed">
            Semua persamaan dan klaim diverifikasi terhadap literatur fisika dan data badan antariksa resmi.
          </p>
        </div>
      </aside>
    </>
  );
};
