import React from 'react';
import { ScientificStatus } from '../types';
import { CheckCircle2, Binary, Sparkles, BookOpen } from 'lucide-react';

interface Props {
  status: ScientificStatus;
  claimScope?: string;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
}

export const STATUS_CONFIG: Record<
  ScientificStatus, 
  { 
    label: string; 
    shortDesc: string; 
    bg: string; 
    border: string; 
    text: string; 
    icon: React.ComponentType<{ className?: string }> 
  }
> = {
  established_physics: {
    label: 'Fisika Mapan',
    shortDesc: 'Didukung oleh teori mapan dan bukti eksperimen atau observasi empiris.',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-500/40',
    text: 'text-emerald-300',
    icon: CheckCircle2,
  },
  theoretical_possibility: {
    label: 'Kemungkinan Teoretis',
    shortDesc: 'Konsisten secara matematis dengan model fisika, tetapi belum teramati langsung di alam.',
    bg: 'bg-cyan-950/30',
    border: 'border-[#72DDFB]/40',
    text: 'text-[#72DDFB]',
    icon: Binary,
  },
  speculative_science: {
    label: 'Sains Spekulatif',
    shortDesc: 'Memerlukan asumsi atau mekanisme hipotetis yang belum terverifikasi secara empiris.',
    bg: 'bg-purple-950/30',
    border: 'border-[#A99BFF]/40',
    text: 'text-[#A99BFF]',
    icon: Sparkles,
  },
  fiction: {
    label: 'Fiksi Sinematik',
    shortDesc: 'Elemen naratif atau perangkat alur cerita yang tidak mewakili realitas hukum alam.',
    bg: 'bg-rose-950/30',
    border: 'border-rose-500/40',
    text: 'text-rose-300',
    icon: BookOpen,
  },
};

export const ScienceStatusBadge: React.FC<Props> = ({ 
  status, 
  claimScope, 
  size = 'md',
  showDescription = false 
}) => {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-2',
    lg: 'text-sm px-3.5 py-1.5 gap-2.5',
  }[size];

  return (
    <div className="inline-flex flex-col">
      <span 
        className={`inline-flex items-center font-medium rounded-md border backdrop-blur-sm transition-all ${config.bg} ${config.border} ${config.text} ${sizeClasses}`}
        title={config.shortDesc}
      >
        <Icon className={size === 'sm' ? 'w-3 h-3 shrink-0' : 'w-3.5 h-3.5 shrink-0'} />
        <span>{config.label}</span>
        {claimScope && (
          <span className="opacity-70 border-l border-current/30 pl-1.5 ml-0.5 text-[10px] uppercase tracking-wider">
            {claimScope}
          </span>
        )}
      </span>
      {showDescription && (
        <p className="mt-1 text-[11px] text-[#AAB8CB] leading-tight max-w-xs">
          {config.shortDesc}
        </p>
      )}
    </div>
  );
};
