import React from 'react';
import { Reference } from '../types';
import { BookMarked, ExternalLink, GraduationCap, Building2, Library } from 'lucide-react';

interface Props {
  references: Reference[];
}

export const ReferenceList: React.FC<Props> = ({ references }) => {
  const getTypeBadge = (type: Reference['type']) => {
    switch (type) {
      case 'journal':
        return { label: 'Peer-Reviewed Journal', icon: GraduationCap, color: 'text-[#72DDFB] bg-cyan-950/40 border-[#72DDFB]/30' };
      case 'institutional':
        return { label: 'Space Agency / Research Org', icon: Building2, color: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30' };
      case 'book':
        return { label: 'Academic Physics Textbook', icon: Library, color: 'text-[#A99BFF] bg-purple-950/40 border-[#A99BFF]/30' };
      default:
        return { label: 'Archival Reference', icon: BookMarked, color: 'text-[#AAB8CB] bg-slate-900 border-slate-700' };
    }
  };

  return (
    <div className="my-10 rounded-2xl bg-[#0b1320] border border-[#1e2d42] p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between border-b border-[#1e2d42] pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <BookMarked className="w-5 h-5 text-[#72DDFB]" />
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#F3F6FC]">
              References & Further Reading
            </h3>
            <p className="text-xs text-[#AAB8CB]">
              Sumber primer, buku teks akademik, dan rujukan data terverifikasi.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono text-[#72DDFB] bg-[#111C2B] px-2.5 py-1 rounded border border-[#1e2d42]">
          {references.length} Sources
        </span>
      </div>

      <div className="space-y-4">
        {references.map((ref, idx) => {
          const badge = getTypeBadge(ref.type);
          const BadgeIcon = badge.icon;
          return (
            <div 
              key={ref.id || idx} 
              className="p-4 rounded-xl bg-[#080D16] border border-[#1e2d42]/70 hover:border-[#72DDFB]/40 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border ${badge.color}`}>
                    <BadgeIcon className="w-3 h-3" />
                    {badge.label}
                  </span>
                  <span className="text-xs font-mono text-[#AAB8CB]">
                    ({ref.year})
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-[#F3F6FC] hover:text-[#72DDFB] transition-colors">
                  {ref.title}
                </h4>

                <p className="text-xs text-[#AAB8CB]">
                  <strong className="text-[#F3F6FC]/90">{ref.authorOrInstitution}</strong> · <span className="italic">{ref.publication}</span>
                </p>

                {ref.citationNote && (
                  <p className="text-[11px] text-[#AAB8CB]/80 font-mono bg-[#111C2B]/50 p-2 rounded mt-2 border border-[#1e2d42]/40">
                    <span className="text-[#72DDFB]">Catatan editorial:</span> {ref.citationNote}
                  </p>
                )}
              </div>

              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#72DDFB] bg-[#111C2B] border border-[#72DDFB]/30 hover:bg-[#72DDFB] hover:text-black transition-all shrink-0"
                >
                  <span>Access DOI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
