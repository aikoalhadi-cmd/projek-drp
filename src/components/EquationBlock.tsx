import React from 'react';
import { EquationItem } from '../types';
import { Sigma } from 'lucide-react';

interface Props {
  equation: EquationItem;
}

export const EquationBlock: React.FC<Props> = ({ equation }) => {
  // Render visually formatted mathematical equation based on equation ID
  const renderVisualEquation = () => {
    switch (equation.id) {
      case 'magnetic-force-balance':
        return (
          <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xl sm:text-2xl font-serif text-[#72DDFB] font-medium tracking-wide">
            <span className="inline-flex items-baseline">
              <span className="italic font-serif">F</span>
              <sub className="text-xs sm:text-sm font-sans text-[#72DDFB]/80 ml-0.5">mag</sub>
            </span>
            <span className="text-[#AAB8CB] font-light">=</span>
            <span className="inline-flex items-center">
              <span className="text-[#AAB8CB] mr-0.5">-</span>
              <span className="text-2xl sm:text-3xl font-sans">∇</span>
              <span className="text-[#F3F6FC] font-light ml-0.5">(</span>
              <span className="font-bold text-[#F3F6FC] px-0.5">m</span>
              <span className="mx-1 text-[#72DDFB] font-bold">·</span>
              <span className="font-bold text-[#F3F6FC] px-0.5">B</span>
              <span className="text-[#F3F6FC] font-light mr-0.5">)</span>
            </span>
            <span className="text-[#72DDFB] text-2xl font-bold mx-1">≥</span>
            <span className="inline-flex items-baseline">
              <span className="italic font-serif">M</span>
              <span className="mx-1 text-[#AAB8CB]">·</span>
              <span className="italic font-serif">g</span>
            </span>
          </div>
        );

      case 'special-relativity-dilation':
        return (
          <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xl sm:text-2xl font-serif text-[#72DDFB] font-medium tracking-wide">
            <span className="inline-flex items-baseline">
              <span className="text-xl sm:text-2xl font-sans font-normal">Δ</span>
              <span className="italic font-serif text-xl sm:text-2xl">τ</span>
            </span>
            <span className="text-[#AAB8CB] font-light">=</span>
            <span className="inline-flex items-baseline">
              <span className="text-xl sm:text-2xl font-sans font-normal">Δ</span>
              <span className="italic font-serif text-xl sm:text-2xl">t</span>
            </span>
            <span className="inline-flex items-center">
              <span className="text-3xl sm:text-4xl font-light text-[#72DDFB] -mr-1 select-none">√</span>
              <span className="border-t-2 border-[#72DDFB] pt-1 px-2.5 inline-flex items-center gap-1.5 bg-[#111C2B]/60 rounded-tr-md">
                <span className="text-lg sm:text-xl text-[#F3F6FC] font-sans">1</span>
                <span className="text-[#AAB8CB] font-light">-</span>
                {/* Fraction v^2 / c^2 */}
                <span className="inline-flex flex-col items-center justify-center text-sm sm:text-base mx-0.5">
                  <span className="border-b border-[#72DDFB]/60 pb-0.5 px-1.5 text-center text-[#F3F6FC]">
                    <span className="italic">v</span><sup className="text-xs">2</sup>
                  </span>
                  <span className="pt-0.5 px-1.5 text-center text-[#F3F6FC]">
                    <span className="italic">c</span><sup className="text-xs">2</sup>
                  </span>
                </span>
              </span>
            </span>
            <span className="text-[#AAB8CB] font-light">=</span>
            {/* Fraction Delta t / gamma */}
            <span className="inline-flex flex-col items-center justify-center text-sm sm:text-base">
              <span className="border-b border-[#72DDFB]/60 pb-0.5 px-2 text-center text-[#F3F6FC]">
                <span className="font-sans">Δ</span><span className="italic">t</span>
              </span>
              <span className="pt-0.5 px-2 text-center text-[#72DDFB] font-serif text-lg sm:text-xl">
                γ
              </span>
            </span>
          </div>
        );

      case 'bagnold-sand-transport':
        return (
          <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xl sm:text-2xl font-serif text-[#72DDFB] font-medium tracking-wide">
            <span className="italic font-serif text-2xl">q</span>
            <span className="text-[#AAB8CB] font-light">=</span>
            <span className="font-serif text-xl sm:text-2xl text-[#F3F6FC]">C</span>
            {/* Square root of d/D */}
            <span className="inline-flex items-center">
              <span className="text-3xl sm:text-4xl font-light text-[#72DDFB] -mr-1 select-none">√</span>
              <span className="border-t-2 border-[#72DDFB] pt-1 px-2 inline-flex items-center bg-[#111C2B]/60 rounded-tr-md">
                <span className="inline-flex flex-col items-center justify-center text-sm sm:text-base">
                  <span className="border-b border-[#72DDFB]/60 pb-0.5 px-1.5 text-center text-[#F3F6FC] italic">
                    d
                  </span>
                  <span className="pt-0.5 px-1.5 text-center text-[#F3F6FC] font-serif">
                    D
                  </span>
                </span>
              </span>
            </span>
            <span className="text-[#AAB8CB] mx-0.5">·</span>
            {/* Fraction rho_udara / g */}
            <span className="inline-flex items-center">
              <span className="text-2xl text-[#AAB8CB] font-light">(</span>
              <span className="inline-flex flex-col items-center justify-center text-sm sm:text-base mx-0.5">
                <span className="border-b border-[#72DDFB]/60 pb-0.5 px-1.5 text-center text-[#F3F6FC]">
                  <span className="font-serif text-lg">ρ</span><sub className="text-[10px] text-[#AAB8CB] font-sans">udara</sub>
                </span>
                <span className="pt-0.5 px-1.5 text-center text-[#F3F6FC] italic">
                  g
                </span>
              </span>
              <span className="text-2xl text-[#AAB8CB] font-light">)</span>
            </span>
            <span className="text-[#AAB8CB] mx-0.5">·</span>
            {/* u_*^3 */}
            <span className="inline-flex items-baseline">
              <span className="italic font-serif text-2xl">u</span>
              <sub className="text-xs text-[#AAB8CB] font-sans">*</sub>
              <sup className="text-sm font-sans text-[#72DDFB]">3</sup>
            </span>
          </div>
        );

      case 'dynamic-wind-pressure':
        return (
          <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xl sm:text-2xl font-serif text-[#72DDFB] font-medium tracking-wide">
            <span className="italic font-serif text-2xl">q</span>
            <span className="text-[#AAB8CB] font-light">=</span>
            {/* Fraction 1/2 */}
            <span className="inline-flex flex-col items-center justify-center text-sm sm:text-base mx-0.5">
              <span className="border-b border-[#72DDFB]/60 pb-0.5 px-2 text-center text-[#F3F6FC]">1</span>
              <span className="pt-0.5 px-2 text-center text-[#F3F6FC]">2</span>
            </span>
            <span className="inline-flex items-baseline">
              <span className="font-serif text-2xl text-[#F3F6FC]">ρ</span>
              <sub className="text-xs font-sans text-[#72DDFB]/90 ml-0.5">Mars</sub>
            </span>
            <span className="text-[#AAB8CB] mx-0.5">·</span>
            <span className="inline-flex items-baseline">
              <span className="italic font-serif text-2xl">v</span>
              <sup className="text-sm font-sans text-[#72DDFB]">2</sup>
            </span>
          </div>
        );

      default:
        return (
          <div className="font-mono text-xl sm:text-2xl text-[#72DDFB] font-semibold tracking-wide">
            {equation.formula}
          </div>
        );
    }
  };

  return (
    <div className="my-8 rounded-xl bg-[#0b1320] border border-[#1e2d42] overflow-hidden shadow-lg">
      <div className="px-5 py-3 border-b border-[#1e2d42] bg-[#111C2B]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sigma className="w-4 h-4 text-[#72DDFB]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F6FC]">
            {equation.name}
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#AAB8CB]">Formulasi Matematis</span>
      </div>

      <div className="p-6 sm:p-8 text-center bg-[#080D16]/80 border-b border-[#1e2d42]/60 flex flex-col items-center justify-center">
        <div className="py-4 px-6 rounded-xl bg-[#111C2B]/80 border border-[#72DDFB]/30 shadow-inner max-w-full overflow-x-auto">
          {renderVisualEquation()}
        </div>
        <p className="text-xs text-[#AAB8CB] mt-3 max-w-xl mx-auto italic leading-relaxed">
          {equation.description}
        </p>
      </div>

      {/* Variables Table */}
      <div className="p-4 sm:p-5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#AAB8CB] mb-2 font-semibold">
          Definisi Simbol & Satuan:
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1e2d42] text-[#AAB8CB] font-mono">
                <th className="pb-2 w-24 font-medium">Simbol</th>
                <th className="pb-2 font-medium">Pengertian Fisika</th>
                <th className="pb-2 w-48 font-medium">Satuan SI / Acuan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2d42]/40">
              {equation.variables.map((v, idx) => (
                <tr key={idx} className="hover:bg-[#111C2B]/40 transition-colors">
                  <td className="py-2 font-mono font-bold text-[#72DDFB]">{v.symbol}</td>
                  <td className="py-2 text-[#F3F6FC]">{v.meaning}</td>
                  <td className="py-2 text-[#AAB8CB] font-mono text-[11px]">{v.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
