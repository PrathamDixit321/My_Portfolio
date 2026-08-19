import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Brain,
  Cpu,
  Database,
  Code,
  LayoutGrid,
  Terminal,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-4 h-4 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Code':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-4 h-4 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      default:
        return <Zap className="w-4 h-4 text-blue-400" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const filteredSkills = cat.skills.filter((skill) => {
        const matchesSearch =
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.context && skill.context.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
      });

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter((cat) => {
      if (activeCategory !== 'All' && cat.title !== activeCategory) {
        return false;
      }
      return cat.skills.length > 0;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
                TECHNICAL STACK
              </span>
              <span className="text-[10px] font-mono opacity-40 text-slate-400">./skills --all</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Interactive Capabilities Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Synthesized directly from verified production architectures, ML pipelines, and enterprise simulations.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-black/40 border border-white/10 rounded-full text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/5 pb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'All'
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            All Stacks
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === cat.title
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-all group backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Card Title & Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {category.skills.length} verified competencies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="space-y-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-black/40 border-blue-900/40 hover:border-blue-700/60'
                          : 'bg-black/20 border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(37,99,235,1)]" />
                          )}
                          <span className="text-xs font-semibold text-slate-200 font-mono">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                            skill.level === 'Core Mastery'
                              ? 'bg-blue-950 text-blue-300 border border-blue-700/60'
                              : skill.level === 'Advanced'
                              ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/60'
                              : 'bg-white/5 text-slate-400 border border-white/10'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-600/5 rounded-xl border border-blue-600/20 mt-4">
                <p className="text-[10px] text-blue-400 font-mono italic">
                  // Applied in active production workflows & research builds
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-black/30 border border-white/10 space-y-3">
            <p className="text-slate-400 text-sm font-mono">No matching technologies found for "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-600/30 transition-colors font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
