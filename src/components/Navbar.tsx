import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'ai-lab', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Systems', href: '#projects' },
    { name: 'Labs', href: '#ai-lab' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Log', href: '#build-log' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-black/30 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone: Exactly 1 single text element */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
        >
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform">
            PD
          </div>
          <span className="font-mono text-sm tracking-widest text-white uppercase font-semibold whitespace-nowrap">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Navigation Links Zone: 4-6 nav links, single line */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-widest font-medium text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors whitespace-nowrap py-1 ${
                  isActive
                    ? 'text-blue-400 font-bold border-b border-blue-500 shadow-[0_4px_12px_rgba(37,99,235,0.3)]'
                    : 'hover:text-blue-400 text-slate-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Zone: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-1.5 border border-blue-500/30 rounded-full text-[10px] uppercase tracking-widest bg-blue-500/5 hover:bg-blue-500/20 text-blue-400 transition-all font-bold font-mono cursor-pointer whitespace-nowrap shadow-[0_0_10px_rgba(37,99,235,0.15)] focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Download CV
          </button>
          <a
            href="#contact"
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(37,99,235,0.4)] focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1 border border-blue-500/30 rounded-full text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 font-bold font-mono"
            aria-label="Open Resume"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#030406]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400"
            >
              View & Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
