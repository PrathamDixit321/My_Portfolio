import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#030406] border-t border-white/5 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Positioning */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px] shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                PD
              </div>
              <span className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <div className="text-slate-400 text-xs">
              AI/ML Engineer • AI Systems Builder • Product Thinker
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 uppercase tracking-widest text-[10px]">
            <a href="#about" className="hover:text-blue-400 transition-colors">Core</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Systems</a>
            <a href="#ai-lab" className="hover:text-blue-400 transition-colors">Labs</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Timeline</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Honors</a>
            <button onClick={onOpenResume} className="hover:text-blue-400 transition-colors cursor-pointer uppercase">CV</button>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified credentials recorded.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>System Active • prathamdixit.dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
