import React, { useState } from 'react';
import { BUILD_LOG_ARTICLES, BuildLogArticle } from '../data/portfolioData';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  X,
  CheckCircle2,
  Share2,
  Terminal,
  Sparkles,
} from 'lucide-react';

export const BuildLogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BuildLogArticle | null>(null);

  return (
    <section id="build-log" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
              ENGINEERING NOTES & BUILD LOG
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Build Log & Architectural Notes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Documenting engineering solutions, agent orchestration patterns, and lessons learned while building real AI systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUILD_LOG_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                    Core Technical Takeaways:
                  </div>
                  {article.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                >
                  <span>[Read Article]</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#030406] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Reading Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <div className="text-xs font-mono text-blue-400 font-semibold">
                  PUBLISHED: {activeArticle.date}
                </div>
                <h3 id="article-title" className="text-2xl font-bold text-white tracking-tight leading-tight">
                  {activeArticle.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Article Synopsis</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {activeArticle.summary}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">
                  Key Takeaways
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {activeArticle.takeaways.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Author: Pratham Dixit
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
