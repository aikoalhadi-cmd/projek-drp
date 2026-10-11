import React, { useState, useEffect } from 'react';
import { Compass, FlaskConical, Info, Menu, X, Orbit } from 'lucide-react';

interface Props {
  activeRoute: string;
  onNavigate: (route: string) => void;
}

export const SiteHeader: React.FC<Props> = ({ activeRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EXPLORE', route: '/explore', icon: Compass },
    { label: 'PHYSICS LAB', route: '/physics-lab', icon: FlaskConical },
    { label: 'ABOUT', route: '/about', icon: Info },
  ];

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#03091e]/90 backdrop-blur-xl border-b border-[#1e40af]/30 shadow-2xl shadow-[#03091e]/80' 
          : 'bg-gradient-to-b from-[#030712]/85 via-[#030712]/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Wordmark */}
          <button 
            onClick={() => handleNavClick('/')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-lg py-1 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#071d49] border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:border-[#fbbf24] transition-all">
              <Orbit className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div>
              <span className="font-serif-display font-bold text-base sm:text-xl tracking-[0.2em] text-white group-hover:text-[#38bdf8] transition-colors block">
                BEYOND THE FRAME
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#94a3b8] font-sans block">
                THE PHYSICS BEHIND FICTION
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.route || (link.route === '/explore' && activeRoute.startsWith('/articles/'));
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-xs font-serif-display tracking-[0.2em] uppercase transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#38bdf8] border-b-2 border-[#38bdf8] pb-0.5 shadow-[0_4px_12px_rgba(56,189,248,0.3)]'
                      : 'text-[#cbd5e1] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right badge: Kelompok 1 */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/physics-lab')}
              className="px-4 py-1.5 rounded-full border border-[#f59e0b]/60 bg-[#0d2252]/80 hover:bg-[#f59e0b] hover:text-[#03091e] text-xs font-sans tracking-wider text-[#fbbf24] font-semibold transition-all shadow-[0_0_12px_rgba(245,158,11,0.25)] cursor-pointer"
            >
              Kelompok 1
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#cbd5e1] hover:text-white hover:bg-[#071d49] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] cursor-pointer"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#38bdf8]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#03091e]/98 backdrop-blur-2xl border-b border-[#1e40af]/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-serif-display tracking-[0.18em] uppercase transition-all text-left cursor-pointer ${
                  isActive
                    ? 'text-[#38bdf8] bg-[#071d49] border border-[#38bdf8]/40'
                    : 'text-[#cbd5e1] hover:text-white hover:bg-[#071d49]/60'
                }`}
              >
                <Icon className="w-4 h-4 text-[#38bdf8]" />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <div className="px-4 py-2 text-center text-xs font-sans font-semibold tracking-wider text-[#fbbf24] border border-[#f59e0b]/40 rounded-full bg-[#071d49]">
              Kelompok 1
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
