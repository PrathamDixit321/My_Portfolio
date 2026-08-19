import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Brain,
  Layers,
  Sparkles,
  Target,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#030406] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
              CORE PHILOSOPHY & BACKGROUND
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering real-world AI systems with product clarity.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            I believe modern AI engineering is about much more than wrapping an API call. It requires understanding system failure modes, vector search latency, data privacy, and framing the real problem before writing code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5 leading-relaxed text-slate-300 text-sm sm:text-base relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
              
              <p>
                I am a Computer Science & Engineering undergraduate specializing in <strong className="text-white font-semibold">Artificial Intelligence & Machine Learning</strong> at <span className="text-blue-400 font-medium font-mono">{PERSONAL_INFO.education.institution}</span> (2024–2028).
              </p>

              <p>
                My engineering focus sits at the intersection of <strong className="text-white font-semibold">Generative AI & LLM Systems</strong>, <strong className="text-white font-semibold">Cyclic Multi-Agent Frameworks (LangGraph, CrewAI)</strong>, and <strong className="text-white font-semibold">Product Management</strong>. Right now, I am architecting <strong className="text-blue-400 font-semibold font-mono">NEXUS</strong>, an open-source enterprise AI operating system designed to solve permission-aware retrieval and multi-agent coordination.
              </p>

              <p>
                During my internship at <strong className="text-white font-semibold">Future Interns</strong>, I engineered customer churn prediction models and built conversational assistants with OpenAI and Gemini APIs, translating model metrics into stakeholder-ready KPI dashboards. I have also completed over <strong className="text-white font-semibold">10+ industry job simulations</strong> spanning cloud architecture (AWS), financial GenAI chatbots (BCG X), backend engineering (JPMorgan Chase), and delivery governance (Siemens, Lloyds Banking Group, TATA).
              </p>

              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Stateful Multi-Agent Graphs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Permission-Aware RAG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Product Roadmaps & PRDs</span>
                </div>
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-2xl bg-black/20 border border-white/5 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest font-mono text-blue-400 font-bold">FORMAL EDUCATION</div>
                <h3 className="text-base font-bold text-white">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-sm text-slate-300">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  Batch: {PERSONAL_INFO.education.batch} • Focus on AI Algorithms, Deep Learning, Data Structures & Systems
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-blue-500 font-bold px-1 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Core Architectural Pillars</span>
            </div>

            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Brain className="w-4 h-4" />
                </div>
                <span>Systems Over Simple Prompts</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Single-turn prompt engineering fails on non-trivial workflows. I architect stateful agent loops, structured JSON outputs with Pydantic, and evaluation metrics to ensure deterministic execution.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <div className="p-1.5 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20">
                  <Target className="w-4 h-4" />
                </div>
                <span>Product Grounding & Discovery</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                I write clear PRDs, define acceptance criteria, and map out user pain points before writing code. Engineering without user empathy creates shelfware.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <span>Production Security & Zero Leakage</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise AI requires permission-aware vector retrieval, role-based tool authorization, and audit logs. Guardrails must be enforced at the data layer.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <div className="p-1.5 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span>Continuous Experimentation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                From competing on-site at IIT Delhi in the AMD Reinforcement Learning Hackathon to open-source contributions in APERTRE 3.0 (Top 50), I test ideas through real code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
