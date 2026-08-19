import React, { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  Cpu,
  Sparkles,
  Terminal,
  Shield,
  Filter,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Featured', 'AI & Systems', 'Full-Stack', 'ML & Research'];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured') return p.featured;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
                FEATURED SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production Architectures & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Production-grade AI architectures, full-stack systems, and open-source software built to solve real-world problems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'nexus-ai-os';

            return (
              <div
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isFlagship
                    ? 'lg:col-span-12 bg-white/[0.04] border-blue-600/40 hover:border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative'
                    : 'lg:col-span-6 bg-white/[0.03] border-white/10 hover:border-blue-500/40'
                }`}
              >
                {isFlagship && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Bar: Status & Links */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                          isFlagship
                            ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                            : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                      {project.featured && !isFlagship && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} GitHub repository`}
                          className="p-2 rounded-full bg-black/40 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} Live Demo`}
                          className="p-2 rounded-full bg-black/40 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Flagship Extended Architecture preview */}
                  {isFlagship && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-black/40 border border-white/10 text-xs">
                      <div className="space-y-1.5">
                        <div className="text-blue-400 font-mono font-bold uppercase text-[10px] tracking-wider">
                          Core Problem Defined:
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="text-emerald-400 font-mono font-bold uppercase text-[10px] tracking-wider">
                          Architectural Solution:
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Key Highlights Bullets */}
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                      Key Highlights & Architecture:
                    </div>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>[Case Study]</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#030406] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {activeProjectModal.statusBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeProjectModal.category}
                </span>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <h3 id="case-study-title" className="text-2xl font-bold text-white tracking-tight">
                  {activeProjectModal.title}
                </h3>
                <p className="text-sm text-blue-400 font-mono mt-1">
                  {activeProjectModal.tagline}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                    The Problem & Gap
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    The Engineered Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Engineering Details */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-[0.2em] font-bold">
                  Technical Architecture Breakdown
                </div>
                <div className="space-y-2 bg-black/40 p-5 rounded-2xl border border-white/10">
                  {activeProjectModal.architectureDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Personal Contribution */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                  My Contribution & Product Ownership
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeProjectModal.myContribution}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Stack & Tooling
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-mono uppercase bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {activeProjectModal.liveUrl && (
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-mono uppercase bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
