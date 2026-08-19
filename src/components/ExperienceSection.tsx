import React, { useState } from 'react';
import { EXPERIENCE_ITEMS, JOB_SIMULATIONS, ExperienceItem } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  Award,
  Sparkles,
  Layers,
  Cpu,
  BarChart3,
  ExternalLink,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'All' | 'Internship' | 'Simulation'>('All');

  const allItems: ExperienceItem[] = [
    ...EXPERIENCE_ITEMS,
    ...JOB_SIMULATIONS,
  ];

  const filteredItems = allItems.filter((item) => {
    if (filterType === 'All') return true;
    if (filterType === 'Internship') return item.type === 'Internship';
    if (filterType === 'Simulation') return item.type === 'Job Simulation';
    return true;
  });

  return (
    <section id="experience" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
                EXPERIENCE TIMELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work & Industry Job Simulations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Hands-on machine learning engineering combined with completed enterprise job simulations across AWS, BCG X, Siemens, Lloyds, and JPMorgan Chase.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType('All')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                filterType === 'All'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              All Track ({allItems.length})
            </button>
            <button
              onClick={() => setFilterType('Internship')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                filterType === 'Internship'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              Work Internships ({EXPERIENCE_ITEMS.length})
            </button>
            <button
              onClick={() => setFilterType('Simulation')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                filterType === 'Simulation'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              Simulations ({JOB_SIMULATIONS.length})
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8">
          {filteredItems.map((item) => {
            const isInternship = item.type === 'Internship';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Immersive Glowing Timeline Node */}
                <div
                  className={`absolute -left-[6px] top-2.5 w-3 h-3 rounded-full transition-all ${
                    isInternship
                      ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,1)] ring-4 ring-blue-500/20'
                      : 'bg-white/20 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.8)]'
                  }`}
                />

                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isInternship
                      ? 'bg-white/[0.04] border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.15)] relative overflow-hidden'
                      : 'bg-black/20 border-white/5 hover:border-white/15'
                  }`}
                >
                  {isInternship && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                  )}

                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-lg font-bold text-white tracking-tight">
                        {item.role}
                      </span>
                      <span className="text-slate-500 font-mono">•</span>
                      <span className="text-sm font-semibold text-blue-400 font-mono">
                        {item.organization}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isInternship
                              ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.4)]'
                              : 'bg-white/5 text-slate-400 border border-white/10'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{item.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isInternship ? 'text-blue-400' : 'text-slate-500'
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
