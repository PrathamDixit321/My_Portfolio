import React, { useState } from 'react';
import {
  ACHIEVEMENTS,
  HACKATHON_LIST,
  WORKSHOPS_AND_PROGRAMS,
  AchievementItem,
} from '../data/portfolioData';
import {
  Trophy,
  Award,
  GitPullRequest,
  CheckCircle2,
  Calendar,
  Flame,
  Sparkles,
  ExternalLink,
  Code2,
  BookOpen,
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Hackathons' | 'Certifications' | 'OpenSource'>('All');

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Hackathons') return item.category === 'Hackathon' || item.category === 'Competition';
    if (activeTab === 'Certifications') return item.category === 'Certification';
    if (activeTab === 'OpenSource') return item.category === 'Open Source';
    return true;
  });

  return (
    <section id="achievements" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
                HONORS & CREDENTIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Achievements, Hackathons & Certifications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Verified recognitions across open-source programs, on-site national hackathons, and certified AI architecture courses.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Hackathons', 'OpenSource', 'Certifications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {tab === 'OpenSource' ? 'Open Source' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {item.highlightMetric && (
                    <div className="text-2xl font-black font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {item.highlightMetric}
                    </div>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 font-medium">
                    {item.issuer}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.verificationBadge && (
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.verificationBadge}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 2-Column Sub-Grid: National Hackathons & Specialized Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Hackathons Portfolio */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-black/20 border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>National Hackathons & Case Competitions</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Active competitor in on-site and national hackathons, building AI systems and rapid prototypes under high pressure.
            </p>

            <div className="space-y-2.5 pt-2">
              {HACKATHON_LIST.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 text-xs hover:border-white/15 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-slate-200">{h.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {h.organizer} • {h.role}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 shrink-0">
                    {h.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized GenAI Workshops */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-black/20 border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Specialized AI Programs & Workshops</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Targeted workshops covering multi-agent orchestration, prompt engineering, and privacy compliance.
            </p>

            <div className="space-y-2.5 pt-2">
              {WORKSHOPS_AND_PROGRAMS.map((w, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 text-xs hover:border-white/15 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-slate-200">{w.name}</div>
                    <div className="text-[11px] text-blue-400 font-mono">
                      {w.focus}
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
