import React, { useState } from 'react';
import { RESEARCH_AND_EXPERIMENTS } from '../data/portfolioData';
import {
  FlaskConical,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
} from 'lucide-react';

export const ResearchExperiments: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState(RESEARCH_AND_EXPERIMENTS[0]);

  return (
    <section id="research" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
              RESEARCH & LABS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Applied AI Research & Experiments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Honest explorations of edge cases, architectural trade-offs, and empirical findings while developing next-generation intelligent systems.
          </p>
        </div>

        {/* 2-Column Interactive Research Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Experiments Selector */}
          <div className="lg:col-span-5 space-y-3">
            {RESEARCH_AND_EXPERIMENTS.map((exp) => {
              const isSelected = selectedExp.id === exp.id;

              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/[0.05] border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.15)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                          exp.status.includes('Active') || exp.status.includes('NEXUS')
                            ? 'bg-blue-950 text-blue-300 border border-blue-800/60'
                            : 'bg-indigo-950 text-indigo-300 border border-indigo-800/60'
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white leading-snug">
                      {exp.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {exp.abstract}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-blue-400 font-semibold">{exp.domain}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Experiment Deep-Dive */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 shadow-2xl backdrop-blur-md space-y-6">
              {/* Header */}
              <div className="space-y-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {selectedExp.domain}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedExp.status}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedExp.title}
                </h3>
              </div>

              {/* Abstract */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Hypothesis & Abstract
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  "{selectedExp.abstract}"
                </p>
              </div>

              {/* Key Findings */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.2em] font-bold">
                  Empirical Findings & Insights
                </div>
                <div className="space-y-2">
                  {selectedExp.keyFindings.map((finding, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Experimental Frameworks Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.stack.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
