import React, { useState } from 'react';
import { RotateCcw, AlertTriangle, ShieldAlert, Scale, Wind, Thermometer, Gauge, ExternalLink } from 'lucide-react';

export const MarsEnvironmentExplorer: React.FC = () => {
  const [activeParam, setActiveParam] = useState<'gravity' | 'pressure' | 'composition' | 'temperature' | 'wind'>('pressure');
  const [userWeightKg, setUserWeightKg] = useState<number>(70);
  const [customWindSpeedKmh, setCustomWindSpeedKmh] = useState<number>(175);

  const handleReset = () => {
    setActiveParam('pressure');
    setUserWeightKg(70);
    setCustomWindSpeedKmh(175);
  };

  // Calculations
  const earthGravity = 9.807; // m/s^2
  const marsGravity = 3.71;   // m/s^2
  const weightMarsKg = (userWeightKg * marsGravity) / earthGravity;
  const jumpMultiplier = earthGravity / marsGravity;

  // Dynamic wind pressure calculation q = 0.5 * rho * v^2
  const vMs = (customWindSpeedKmh * 1000) / 3600;
  const rhoEarth = 1.225; // kg/m3
  const rhoMars = 0.020;  // kg/m3 at surface
  const qMars = 0.5 * rhoMars * vMs * vMs;
  const qEarth = 0.5 * rhoEarth * vMs * vMs;
  // Equivalent Earth wind speed that produces the same dynamic pressure qMars:
  // v_earth_equiv = sqrt(2 * qMars / rhoEarth) = v_mars * sqrt(rhoMars / rhoEarth)
  const equivalentEarthWindKmh = customWindSpeedKmh * Math.sqrt(rhoMars / rhoEarth);

  return (
    <div className="bg-[#050f24]/85 backdrop-blur-md rounded-2xl border border-[#1e3461] p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2d42] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A99BFF] font-semibold">
              Experiment 02
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-[#A99BFF] border border-[#A99BFF]/30">
              Reference Comparison
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3F6FC] mt-1">
            Mars Environment Explorer
          </h3>
          <p className="text-xs sm:text-sm text-[#AAB8CB] mt-1">
            Bandingkan parameter atmosfer, gravitasi, dan termal Mars dengan kondisi referensi Bumi berdasarkan data empiris NASA.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#AAB8CB] hover:text-[#72DDFB] bg-[#080D16] border border-[#1e2d42] hover:border-[#72DDFB]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#72DDFB]"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset parameters</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#1e2d42] pb-3" role="tablist">
        {[
          { id: 'pressure', label: 'Atmospheric Pressure', icon: Gauge },
          { id: 'gravity', label: 'Surface Gravity', icon: Scale },
          { id: 'wind', label: 'Storm Dynamic Pressure', icon: Wind },
          { id: 'temperature', label: 'Temperature Ranges', icon: Thermometer },
          { id: 'composition', label: 'Gas Composition', icon: ShieldAlert },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeParam === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveParam(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#72DDFB] text-black font-semibold shadow-md'
                  : 'bg-[#080D16] text-[#AAB8CB] hover:text-[#F3F6FC] hover:bg-[#152336] border border-[#1e2d42]'
              }`}
              role="tab"
              aria-selected={isActive}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {activeParam === 'pressure' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42]">
              <span className="text-xs font-mono text-[#72DDFB] uppercase">Bumi (Earth Sea Level)</span>
              <div className="text-3xl font-display font-bold text-[#F3F6FC] mt-2 font-mono">
                1,013.25 mbar
              </div>
              <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
                Kondisi standar permukaan laut (1 atm / 101.325 Pa). Udara cukup rapat untuk menahan cairan biologis dan menopang paru-paru tanpa baju bertekanan.
              </p>
            </div>

            <div className="bg-[#080D16] p-5 rounded-xl border border-rose-500/30">
              <span className="text-xs font-mono text-rose-400 uppercase">Mars (Surface Mean Reference)</span>
              <div className="text-3xl font-display font-bold text-rose-400 mt-2 font-mono">
                6.36 mbar (~0.006 atm)
              </div>
              <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
                Hanya 0,63% dari tekanan Bumi. Bervariasi antara 4,0 mbar (puncak Gunung Olympus Mons) hingga 11,5 mbar (dasar kawah Hellas Planitia).
              </p>
            </div>
          </div>

          {/* Armstrong limit alert */}
          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-[#F3F6FC] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-rose-300">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Batas Fisiologis Kritis: Garis Batas Armstrong (Armstrong Limit ~63 mbar)</span>
            </div>
            <p className="text-[#AAB8CB] leading-relaxed">
              Titik didih air pada tekanan 63 mbar turun tepat ke suhu 37°C (suhu tubuh manusia). Karena tekanan Mars hanya <strong>6,36 mbar</strong>, tanpa pakaian antariksa bertekanan (pressurized suit), air liur, cairan mata, dan cairan paru-paru manusia akan langsung mendidih pada suhu tubuh normal!
            </p>
          </div>
        </div>
      )}

      {activeParam === 'gravity' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42]">
              <span className="text-xs font-mono text-[#72DDFB] uppercase">Gravitasi Bumi</span>
              <div className="text-3xl font-display font-bold text-[#F3F6FC] mt-2 font-mono">
                9.81 m/s² (1.00 g)
              </div>
              <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
                Gravitasi standar permukaan laut Bumi.
              </p>
            </div>

            <div className="bg-[#080D16] p-5 rounded-xl border border-[#A99BFF]/30">
              <span className="text-xs font-mono text-[#A99BFF] uppercase">Gravitasi Permukaan Mars</span>
              <div className="text-3xl font-display font-bold text-[#A99BFF] mt-2 font-mono">
                3.71 m/s² (0.378 g)
              </div>
              <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
                Sekitar 38% gravitasi Bumi. Anda dapat melompat 2,64 kali lebih tinggi dengan energi otot yang sama.
              </p>
            </div>
          </div>

          {/* Weight calculator */}
          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="weight-input" className="text-xs font-mono text-[#F3F6FC]">
                Uji Massa Tubuh Anda:
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="weight-input"
                  type="number"
                  min="20"
                  max="200"
                  value={userWeightKg}
                  onChange={(e) => setUserWeightKg(Math.max(1, parseFloat(e.target.value) || 0))}
                  className="w-24 bg-[#111C2B] text-[#72DDFB] font-mono px-3 py-1 rounded border border-[#1e2d42] focus:border-[#72DDFB] outline-none text-right font-bold"
                />
                <span className="text-xs text-[#AAB8CB] font-mono">kg</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-[#111C2B] p-3 rounded-lg border border-[#1e2d42]">
                <span className="text-[10px] font-mono uppercase text-[#AAB8CB] block">Berat di Bumi</span>
                <span className="text-lg font-bold font-mono text-[#F3F6FC]">{userWeightKg} kg</span>
                <span className="text-[10px] text-[#AAB8CB] block">({(userWeightKg * earthGravity).toFixed(0)} N)</span>
              </div>
              <div className="bg-[#111C2B] p-3 rounded-lg border border-[#A99BFF]/40">
                <span className="text-[10px] font-mono uppercase text-[#A99BFF] block">Berat di Mars</span>
                <span className="text-lg font-bold font-mono text-[#A99BFF]">{weightMarsKg.toFixed(1)} kg</span>
                <span className="text-[10px] text-[#AAB8CB] block">({(userWeightKg * marsGravity).toFixed(0)} N)</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-[#111C2B] p-3 rounded-lg border border-[#72DDFB]/40">
                <span className="text-[10px] font-mono uppercase text-[#72DDFB] block">Kelipatan Lompatan</span>
                <span className="text-lg font-bold font-mono text-[#72DDFB]">{jumpMultiplier.toFixed(2)}x</span>
                <span className="text-[10px] text-[#AAB8CB] block">Tinggi relatif</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeParam === 'wind' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-[#72DDFB] uppercase">The Martian Storm Deconstruction</span>
                <h4 className="text-sm font-semibold text-[#F3F6FC] mt-0.5">
                  Kecepatan Badai Mars: {customWindSpeedKmh} km/jam
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="50"
                  max="250"
                  step="5"
                  value={customWindSpeedKmh}
                  onChange={(e) => setCustomWindSpeedKmh(parseInt(e.target.value))}
                  className="w-40 h-2 bg-[#111C2B] rounded accent-[#72DDFB]"
                  aria-label="Mars wind speed in km/h"
                />
                <span className="font-mono text-xs text-[#72DDFB] w-16 text-right">
                  {customWindSpeedKmh} km/h
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#111C2B] border border-amber-500/30">
                <span className="text-[11px] font-mono text-amber-300 block uppercase">
                  Tekanan Dinamis di Mars (q = ½ · ρ_Mars · v²)
                </span>
                <div className="text-2xl font-mono font-bold text-amber-400 mt-1">
                  {qMars.toFixed(1)} N/m² (Pa)
                </div>
                <p className="text-xs text-[#AAB8CB] mt-1.5 leading-relaxed">
                  Dengan kerapatan udara Mars hanya 0.020 kg/m³, daya dorong fisik terhadap roket atau antena sangat kecil.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111C2B] border border-[#72DDFB]/30">
                <span className="text-[11px] font-mono text-[#72DDFB] block uppercase">
                  Dampak Setara Angin di Bumi
                </span>
                <div className="text-2xl font-mono font-bold text-[#72DDFB] mt-1">
                  ~{equivalentEarthWindKmh.toFixed(1)} km/jam
                </div>
                <p className="text-xs text-[#AAB8CB] mt-1.5 leading-relaxed">
                  Badai 175 km/jam di Mars terasa persis seperti <strong>angin sepoi-sepoi {equivalentEarthWindKmh.toFixed(0)} km/jam</strong> di Bumi.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080D16] border border-[#1e2d42] text-xs text-[#AAB8CB] leading-relaxed">
            <strong className="text-[#F3F6FC]">Kesimpulan Ilmiah:</strong> Badai debu Mars nyata dan dapat menutupi seluruh planet (global dust storm), menghalangi sinar matahari pada panel surya selama berbulan-bulan (seperti yang menonaktifkan Opportunity rover pada 2018). Namun, badai tersebut tidak memiliki daya dorong mekanis untuk merobek kabel, menusuk astronot, atau menggulingkan roket peluncur.
          </div>
        </div>
      )}

      {activeParam === 'temperature' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42]">
            <span className="text-xs font-mono text-[#72DDFB] uppercase">Bumi</span>
            <div className="text-2xl font-display font-bold text-[#F3F6FC] mt-2 font-mono">
              -89°C s/d +58°C
            </div>
            <span className="text-xs text-[#72DDFB] font-mono block mt-1">Rata-rata global: +15°C</span>
            <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
              Efek rumah kaca alami dari uap air dan CO2 menjaga suhu Bumi stabil dan ramah bagi kehidupan air cair.
            </p>
          </div>

          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42]">
            <span className="text-xs font-mono text-cyan-400 uppercase">Mars</span>
            <div className="text-2xl font-display font-bold text-cyan-300 mt-2 font-mono">
              -140°C s/d +20°C
            </div>
            <span className="text-xs text-cyan-400 font-mono block mt-1">Rata-rata global: -63°C</span>
            <p className="text-xs text-[#AAB8CB] mt-2 leading-relaxed">
              Pada musim panas di khatulistiwa, suhu tanah bisa mencapai +20°C di siang hari, namun anjlok hingga -73°C pada malam yang sama karena atmosfer terlalu tipis untuk menahan panas.
            </p>
          </div>
        </div>
      )}

      {activeParam === 'composition' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42] space-y-2">
            <span className="text-xs font-mono text-[#72DDFB] uppercase">Atmosfer Bumi</span>
            <div className="space-y-1.5 pt-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Nitrogen (N₂)</span>
                <span className="text-[#72DDFB] font-bold">78.08%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Oksigen (O₂)</span>
                <span className="text-emerald-400 font-bold">20.95%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Argon (Ar)</span>
                <span className="text-[#AAB8CB]">0.93%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#F3F6FC]">Karbon Dioksida (CO₂)</span>
                <span className="text-[#AAB8CB]">0.04%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#080D16] p-5 rounded-xl border border-[#1e2d42] space-y-2">
            <span className="text-xs font-mono text-rose-400 uppercase">Atmosfer Mars</span>
            <div className="space-y-1.5 pt-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Karbon Dioksida (CO₂)</span>
                <span className="text-rose-400 font-bold">95.32%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Nitrogen (N₂)</span>
                <span className="text-[#72DDFB]">2.60%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1e2d42]">
                <span className="text-[#F3F6FC]">Argon (Ar)</span>
                <span className="text-[#AAB8CB]">1.90%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#F3F6FC]">Oksigen (O₂)</span>
                <span className="text-amber-400 font-bold">0.13% (Jejak)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verified Data Sources Footnote */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#AAB8CB]/80 gap-2 font-mono">
        <span>Verified NASA Sources: NSSDCA Mars Fact Sheet & Glenn Research Center</span>
        <a 
          href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#72DDFB] hover:underline flex items-center gap-1 self-start sm:self-auto"
        >
          <span>NASA Factsheet Data</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
