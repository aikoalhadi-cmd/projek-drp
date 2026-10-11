import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  mainStatement: string;
  qualifier: string;
}

export const ShortAnswer: React.FC<Props> = ({ mainStatement, qualifier }) => {
  return (
    <div className="my-8 rounded-2xl bg-[#040c1e]/95 border border-[#38bdf8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-[#38bdf8] uppercase mb-3">
        <HelpCircle className="w-4 h-4 text-[#38bdf8]" />
        <span>THE SHORT ANSWER</span>
      </div>

      <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-4">
        {mainStatement}
      </p>

      <div className="pt-4 border-t border-[#1e3461] flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
          <strong className="text-white">Kualifikasi Ilmiah:</strong> {qualifier}
        </p>
      </div>
    </div>
  );
};
