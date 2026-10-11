import React, { useState } from 'react';
import { RotateCcw, AlertCircle, Info, Zap } from 'lucide-react';

export const TimeDilationExplorer: React.FC = () => {
  const DEFAULT_VELOCITY = 0.8;
  const [velocityFraction, setVelocityFraction] = useState<number>(DEFAULT_VELOCITY);
  const [observerYears, setObserverYears] = useState<number>(1);

  // Special relativity calculations
  const beta = Math.min(Math.max(velocityFraction, 0), 0.9999);
  const lorentzFactor = 1 / Math.sqrt(1 - beta * beta);
  const properTimeRatio = Math.sqrt(1 - beta * beta);
  const travelerYears = observerYears * properTimeRatio;

  // Convert to readable months/days
  const travelerMonths = travelerYears * 12;
  const travelerDays = travelerYears * 365.25;

  const handleReset = () => {
    setVelocityFraction(DEFAULT_VELOCITY);
    setObserverYears(1);
  };

  const presets = [
    { label: '0c (Rest)', val: 0 },
    { label: '0.5c', val: 0.5 },
    { label: '0.80c (Default)', val: 0.8 },
    { label: '0.99c', val: 0.99 },
    { label: '0.999c (Ultra-relativistic)', val: 0.999 },
  ];

  return (
    <div className="bg-[#050f24]/85 backdrop-blur-md rounded-2xl border border-[#1e3461] p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2d42] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#72DDFB] font-semibold">
              Experiment 01
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-[#72DDFB] border border-[#72DDFB]/30">
              Idealized Model
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3F6FC] mt-1">
            Time Dilation Explorer
          </h3>
          <p className="text-xs sm:text-sm text-[#AAB8CB] mt-1">
            Atur kecepatan relatif terhadap pengamat inersial. Asumsikan gerak lurus beraturan dengan kecepatan konstan, tanpa efek gravitasi.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#AAB8CB] hover:text-[#72DDFB] bg-[#080D16] border border-[#1e2d42] hover:border-[#72DDFB]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#72DDFB]"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to 0.80c</span>
        </button>
      </div>

      {/* Control section */}
      <div className="space-y-4 bg-[#080D16] p-5 rounded-xl border border-[#1e2d42]/70">
        <div className="flex items-center justify-between">
          <label htmlFor="v-slider" className="text-sm font-semibold text-[#F3F6FC] flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#72DDFB]" />
            Relative Velocity (<span className="font-mono text-[#72DDFB]">v / c</span>):
          </label>
          <span className="font-mono text-xl font-bold text-[#72DDFB] bg-[#111C2B] px-3 py-1 rounded border border-[#72DDFB]/30">
            {velocityFraction.toFixed(3)}c
          </span>
        </div>

        {/* Range slider */}
        <input
          id="v-slider"
          type="range"
          min="0"
          max="0.999"
          step="0.001"
          value={velocityFraction}
          onChange={(e) => setVelocityFraction(parseFloat(e.target.value))}
          className="w-full h-2.5 bg-[#111C2B] rounded-lg appearance-none cursor-pointer accent-[#72DDFB] focus:outline-none focus:ring-2 focus:ring-[#72DDFB]"
          aria-label="Relative velocity fraction of speed of light"
        />

        {/* Preset chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-mono text-[#AAB8CB] mr-1">Presets:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setVelocityFraction(p.val)}
              className={`text-xs font-mono px-2.5 py-1 rounded-md transition-all ${
                Math.abs(velocityFraction - p.val) < 0.005
                  ? 'bg-[#72DDFB] text-black font-semibold'
                  : 'bg-[#111C2B] text-[#AAB8CB] hover:text-[#F3F6FC] border border-[#1e2d42]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Numerical Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Lorentz Factor */}
        <div className="bg-[#080D16] border border-[#1e2d42] p-4 rounded-xl">
          <span className="text-xs font-mono text-[#AAB8CB] block uppercase tracking-wider">
            Lorentz Factor (γ = 1 / √(1 - v²/c²))
          </span>
          <div className="text-3xl font-display font-bold text-[#F3F6FC] mt-1 font-mono">
            {lorentzFactor.toFixed(3)}
          </div>
          <p className="text-xs text-[#AAB8CB] mt-1.5 leading-relaxed">
            Faktor peregangan koordinat relativistik. Pada 0.80c, energi relativistik partikel adalah 1.667x energi diamnya.
          </p>
        </div>

        {/* Proper Time Ratio */}
        <div className="bg-[#080D16] border border-[#1e2d42] p-4 rounded-xl">
          <span className="text-xs font-mono text-[#AAB8CB] block uppercase tracking-wider">
            Traveler Time / Observer Time (Δτ / Δt)
          </span>
          <div className="text-3xl font-display font-bold text-[#72DDFB] mt-1 font-mono">
            {properTimeRatio.toFixed(3)}
          </div>
          <p className="text-xs text-[#AAB8CB] mt-1.5 leading-relaxed">
            Rasio laju berdetak jam penjelajah dibanding pengamat stasioner di Bumi.
          </p>
        </div>
      </div>

      {/* Interactive Scenario Interpretation */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/20 to-purple-950/20 border border-[#72DDFB]/20 text-sm leading-relaxed text-[#F3F6FC]">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#72DDFB] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="font-medium text-[#F3F6FC]">
              Skenario Konkret: Perjalanan 1 Tahun Jam Bumi ({observerYears} Tahun Pengamat)
            </p>
            <p className="text-xs sm:text-sm text-[#AAB8CB]">
              Jika pengamat di Bumi mengukur waktu tempuh <strong className="text-[#F3F6FC]">1 tahun</strong>, jam yang dibawa astronot berkecepatan <strong className="text-[#72DDFB]">{velocityFraction.toFixed(2)}c</strong> hanya akan mencatat:
            </p>
            <div className="inline-flex items-baseline gap-2 bg-[#080D16] px-3.5 py-1.5 rounded-lg border border-[#1e2d42] font-mono text-sm">
              <span className="text-[#72DDFB] font-bold text-base">{travelerYears.toFixed(3)} tahun</span>
              <span className="text-[#AAB8CB] text-xs">
                (~{travelerMonths.toFixed(1)} bulan / {Math.round(travelerDays)} hari)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Relativistic Curve */}
      <div className="bg-[#080D16] p-4 rounded-xl border border-[#1e2d42]">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#AAB8CB]">
          <span>Kurva Relativistik: Faktor Lorentz γ terhadap v/c</span>
          <span className="text-[#72DDFB]">Asimtot pada v → c</span>
        </div>
        <div className="w-full h-28 relative">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="90" x2="400" y2="90" stroke="#1e2d42" strokeWidth="1" />
            <line x1="0" y1="50" x2="400" y2="50" stroke="#1e2d42" strokeDasharray="3 3" />
            <line x1="0" y1="10" x2="400" y2="10" stroke="#1e2d42" strokeDasharray="3 3" />
            
            {/* The gamma curve */}
            <path
              d="M 0 88 Q 150 87 250 82 Q 330 75 360 55 Q 385 30 395 0"
              fill="none"
              stroke="#A99BFF"
              strokeWidth="2.5"
            />

            {/* Current point indicator */}
            {(() => {
              const cx = velocityFraction * 395;
              const normalizedGamma = Math.min(lorentzFactor, 10);
              const cy = 90 - ((normalizedGamma - 1) / 9) * 80;
              return (
                <g>
                  <line x1={cx} y1="0" x2={cx} y2="95" stroke="#72DDFB" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx={cx} cy={cy} r="5" fill="#72DDFB" className="animate-pulse" />
                </g>
              );
            })()}
          </svg>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#AAB8CB] mt-1">
          <span>0c (γ=1)</span>
          <span>0.5c (γ=1.15)</span>
          <span>0.8c (γ=1.67)</span>
          <span>0.99c (γ=7.09)</span>
          <span className="text-[#72DDFB]">1.0c (γ=∞)</span>
        </div>
      </div>

      {/* Model Limitation Disclaimer */}
      <div className="flex items-start gap-3 bg-[#080D16] p-4 rounded-xl border border-amber-500/20 text-xs text-[#AAB8CB]">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-amber-300">Batasan Model Ilmiah:</strong> Model ini murni relativitas khusus (kerangka inersial tanpa percepatan dan medan gravitasi). Ini bukan simulasi gravitasi Miller's Planet di dekat lubang hitam supermasif Gargantua; dilatasi waktu 1 jam = 7 tahun di film Interstellar diakibatkan oleh kelengkungan potensial gravitasi ekstrem dalam metrik Kerr lubang hitam berputar, bukan sekadar kecepatan translasi.
        </p>
      </div>
    </div>
  );
};
