import React, { useState } from 'react';
import {
  LayoutGrid,
  Target,
  Compass,
  FileCheck,
  BarChart,
  Users,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const ProductManagementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prd' | 'kpi' | 'tradeoff'>('prd');

  return (
    <section id="product-thinking" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
              PRODUCT & PROJECT THINKING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Building with Product Ownership
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed italic">
            "I don't only build technology—I care about why it should exist and how it solves real problems."
          </p>
        </div>

        {/* 4 Pillars of Product Mindset */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
            <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 w-fit">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Problem-First Framing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before selecting a model or agent framework, identify the real user friction, existing alternatives, and verify if AI is truly necessary.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
            <div className="p-2.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 w-fit">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Structured PRDs & Scoping</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Writing structured requirements, user stories, acceptance criteria, and non-functional latency/accuracy budgets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
            <div className="p-2.5 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 w-fit">
              <BarChart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">KPIs & Decision Metrics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building actionable telemetry dashboards (proven at Future Interns & Siemens) that translate raw data into business outcomes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
            <div className="p-2.5 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 w-fit">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Technical Storytelling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging engineering complexity with executive stakeholders, explaining trade-offs between speed, cost, and reliability.
            </p>
          </div>
        </div>

        {/* Interactive Case Study of Product Artifacts */}
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Header tabs */}
          <div className="flex border-b border-white/10 bg-black/60 text-xs font-mono">
            <button
              onClick={() => setActiveTab('prd')}
              className={`py-3 px-6 text-center transition-colors cursor-pointer ${
                activeTab === 'prd'
                  ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              PRD Artifact (NEXUS)
            </button>
            <button
              onClick={() => setActiveTab('kpi')}
              className={`py-3 px-6 text-center transition-colors cursor-pointer ${
                activeTab === 'kpi'
                  ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              KPI & Telemetry Framework
            </button>
            <button
              onClick={() => setActiveTab('tradeoff')}
              className={`py-3 px-6 text-center transition-colors cursor-pointer ${
                activeTab === 'tradeoff'
                  ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Engineering vs Product Trade-offs
            </button>
          </div>

          <div className="p-6 sm:p-8 text-xs sm:text-sm text-slate-300">
            {activeTab === 'prd' && (
              <div className="space-y-4 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-blue-400 font-bold text-xs uppercase">PRD Excerpt: NEXUS Platform v1.0</span>
                  <span className="text-slate-500 text-[11px]">Status: In Execution</span>
                </div>
                <div className="space-y-3 font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <div>
                    <strong className="text-white block mb-1">1. User Persona & Problem Statement:</strong>
                    <p className="text-slate-400">
                      Enterprise security leads and engineers need autonomous agent workflows but cannot tolerate non-deterministic data exposure across departmental boundaries.
                    </p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">2. Core Acceptance Criteria:</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-400">
                      <li>Vector searches must strictly reject chunks outside user role tokens with zero leakage.</li>
                      <li>High-risk tool mutations (e.g. n8n webhook triggers) require a 2-step confirmation token.</li>
                      <li>p95 query response time must remain below 1.8 seconds.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kpi' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono">
                  <span className="text-blue-400 font-bold text-xs uppercase">KPI & Telemetry Tracking Structure</span>
                  <span className="text-slate-500 text-[11px]">Validated in Siemens & Future Interns</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="text-xs font-mono text-blue-400 font-semibold">Product Health</div>
                    <div className="text-base font-bold text-white">Retention & Churn Flagging</div>
                    <p className="text-xs text-slate-400">Predictive features flagging 85%+ at-risk accounts 14 days prior to churn.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="text-xs font-mono text-emerald-400 font-semibold">Operational Velocity</div>
                    <div className="text-base font-bold text-white">Emergency Matching Time</div>
                    <p className="text-xs text-slate-400">HemoLink reduced average donor response broadcast latency to sub-60s.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="text-xs font-mono text-amber-400 font-semibold">Technical Reliability</div>
                    <div className="text-base font-bold text-white">Schema Conformance</div>
                    <p className="text-xs text-slate-400">Pydantic structured output validation with zero JSON format failures.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tradeoff' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono">
                  <span className="text-blue-400 font-bold text-xs uppercase">Prioritization & Engineering Trade-Off Matrix</span>
                  <span className="text-slate-500 text-[11px]">Framework: RICE + Feasibility</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <p className="text-slate-400 leading-relaxed">
                    How I evaluate feature requests: Prioritizing high-impact security constraints (permission-aware vector retrieval) over purely cosmetic features. When compute latency conflicts with generation depth, I implement cyclic LangGraph fallbacks rather than brute-force model scale.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
