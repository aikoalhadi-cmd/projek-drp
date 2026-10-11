import React from 'react';
import { ScienceCalloutData } from '../types';
import { Info, AlertTriangle, Sparkles, BookOpen, FileCheck } from 'lucide-react';

interface Props {
  callout: ScienceCalloutData;
}

export const ScienceCallout: React.FC<Props> = ({ callout }) => {
  const configs = {
    established: {
      border: 'border-emerald-500/50',
      bg: 'bg-[#04121c] border-emerald-500/50 shadow-md',
      badgeBg: 'bg-emerald-500/25',
      text: 'text-emerald-300',
      icon: FileCheck,
      badgeText: 'ESTABLISHED PRINCIPLE',
    },
    theoretical: {
      border: 'border-[#38bdf8]/50',
      bg: 'bg-[#041224] border-[#38bdf8]/50 shadow-md',
      badgeBg: 'bg-[#38bdf8]/25',
      text: 'text-[#38bdf8]',
      icon: Info,
      badgeText: 'THEORETICAL FORMULATION',
    },
    speculative: {
      border: 'border-[#a855f7]/50',
      bg: 'bg-[#0e0724] border-[#a855f7]/50 shadow-md',
      badgeBg: 'bg-[#a855f7]/25',
      text: 'text-[#c084fc]',
      icon: Sparkles,
      badgeText: 'SPECULATIVE HYPOTHESIS',
    },
    fiction: {
      border: 'border-rose-500/50',
      bg: 'bg-[#180511] border-rose-500/50 shadow-md',
      badgeBg: 'bg-rose-500/25',
      text: 'text-rose-300',
      icon: BookOpen,
      badgeText: 'CINEMATIC FICTION / LORE',
    },
    methodology: {
      border: 'border-amber-500/50',
      bg: 'bg-[#180f03] border-amber-500/50 shadow-md',
      badgeBg: 'bg-amber-500/25',
      text: 'text-amber-300',
      icon: AlertTriangle,
      badgeText: 'METHODOLOGICAL NOTE',
    },
  };

  const c = configs[callout.type] || configs.methodology;
  const Icon = c.icon;

  return (
    <div className={`my-6 rounded-xl border ${c.border} ${c.bg} p-5 sm:p-6 shadow-sm`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${c.badgeBg} ${c.text}`}>
          <Icon className="w-3 h-3" />
          {c.badgeText}
        </span>
      </div>
      <h4 className="text-base font-semibold text-[#F3F6FC] mb-1.5 font-display">
        {callout.title}
      </h4>
      <p className="text-xs sm:text-sm text-[#AAB8CB] leading-relaxed">
        {callout.content}
      </p>
    </div>
  );
};
