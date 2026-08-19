import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'rag' | 'eval'>('agent');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#030406] text-slate-300"
    >
      {/* Immersive Dot Matrix Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-immersive-dots" />
      
      {/* Immersive Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Immersive Hero Card */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            {/* Immersive Left Accent Strip */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />

            <div className="space-y-6">
              {/* System Online Status Indicator */}
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-400 font-semibold">
                  System Online • {PERSONAL_INFO.status.text}
                </span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.25em] font-mono text-blue-400 font-bold">
                  PORTFOLIO & LABS
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-slate-300 font-mono tracking-tight">
                  AI/ML Engineer • AI Systems Builder • Product Thinker
                </p>
              </div>

              {/* Summary */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Building real-world AI systems, exploring stateful multi-agent workflows, and architecting permission-aware RAG pipelines. Thinking about products and problems—not just models.
              </p>

              {/* CTA Action Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] group cursor-pointer"
                >
                  <span>Explore Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/20 text-blue-400 transition-all cursor-pointer shadow-[0_0_10px_rgba(37,99,235,0.1)]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </button>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email"
                    className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    <Mail className="w-4 h-4" />
                    {copiedEmail && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium px-2 py-0.5 bg-blue-950 border border-blue-700 text-blue-300 rounded shadow-md whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Immersive Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-8 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="text-xl font-bold font-mono text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400 truncate">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Immersive System Architecture Terminal */}
          <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-md">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 font-medium flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  nexus_agent_supervisor.py
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold">
                  ACTIVE PIPELINE
                </span>
              </div>
            </div>

            {/* Architecture Switcher Tabs */}
            <div className="flex items-center border-b border-white/10 bg-black/30 text-xs font-mono">
              <button
                onClick={() => setActiveTab('agent')}
                className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer ${
                  activeTab === 'agent'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                LangGraph Agent
              </button>
              <button
                onClick={() => setActiveTab('rag')}
                className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer ${
                  activeTab === 'rag'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Permission RAG
              </button>
              <button
                onClick={() => setActiveTab('eval')}
                className={`flex-1 py-2.5 px-3 text-center transition-colors cursor-pointer ${
                  activeTab === 'eval'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-white/[0.04] font-bold shadow-[inset_0_-2px_0_rgba(37,99,235,1)]'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Guardrails & Eval
              </button>
            </div>

            {/* Code / Visualizer Panel */}
            <div className="p-5 font-mono text-xs text-slate-300 space-y-3 min-h-[300px] bg-black/50 overflow-x-auto">
              {activeTab === 'agent' && (
                <div className="space-y-2.5">
                  <div className="text-slate-500">// LangGraph Stateful Agent Supervisor (NEXUS Engine)</div>
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-amber-300">EnterpriseAgentState</span>(TypedDict):
                  </div>
                  <div className="pl-4 text-slate-400">
                    messages: Annotated[list, add_messages]<br />
                    auth_context: <span className="text-blue-300">TenantPermissions</span><br />
                    next_node: <span className="text-blue-300">Literal</span>['rag_retriever', 'tool_executor', 'supervisor']
                  </div>
                  <div className="pt-2">
                    <span className="text-purple-400">async def</span>{' '}
                    <span className="text-blue-400">supervisor_node</span>(state: EnterpriseAgentState):
                  </div>
                  <div className="pl-4 text-slate-300">
                    intent = <span className="text-purple-400">await</span> llm_client.structured_call(<br />
                    &nbsp;&nbsp;model=<span className="text-emerald-300">"gemini-2.5-flash"</span>,<br />
                    &nbsp;&nbsp;schema=AgentHandoffSchema,<br />
                    &nbsp;&nbsp;context=state[<span className="text-emerald-300">"auth_context"</span>]<br />
                    )
                  </div>
                  <div className="pt-2 text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Node routing: deterministic state handoffs with Pydantic schemas</span>
                  </div>
                </div>
              )}

              {activeTab === 'rag' && (
                <div className="space-y-2.5">
                  <div className="text-slate-500">// Permission-Aware Hybrid Vector Filter</div>
                  <div>
                    <span className="text-purple-400">async def</span>{' '}
                    <span className="text-blue-400">query_permission_filtered_rag</span>(query: str, user_roles: list[str]):
                  </div>
                  <div className="pl-4 text-slate-300">
                    embedding = <span className="text-purple-400">await</span> embed_text(query)<br />
                    <span className="text-slate-500">// Enforce zero-leakage security boundary in FAISS/Pinecone</span><br />
                    docs = vector_db.similarity_search_with_filter(<br />
                    &nbsp;&nbsp;vector=embedding,<br />
                    &nbsp;&nbsp;filter=&#123;<span className="text-emerald-300">"allowed_roles"</span>: &#123;<span className="text-emerald-300">"$in"</span>: user_roles&#125;&#125;,<br />
                    &nbsp;&nbsp;top_k=<span className="text-amber-300">5</span><br />
                    )
                  </div>
                  <div className="pl-4 text-blue-300">
                    <span className="text-purple-400">return</span> re_rank_and_ground(docs, query)
                  </div>
                  <div className="pt-2 text-blue-400 flex items-center gap-1.5 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Zero-leakage retrieval: unauthorized chunks filtered before LLM context synthesis</span>
                  </div>
                </div>
              )}

              {activeTab === 'eval' && (
                <div className="space-y-2.5">
                  <div className="text-slate-500">// Real-time Structured Validation & Human in the Loop</div>
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-amber-300">ActionExecutionPayload</span>(BaseModel):
                  </div>
                  <div className="pl-4 text-slate-400">
                    action_type: <span className="text-blue-300">str</span><br />
                    risk_level: <span className="text-blue-300">Literal</span>['low', 'medium', 'high']<br />
                    requires_human_approval: <span className="text-blue-300">bool</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-purple-400">if</span> payload.risk_level == <span className="text-emerald-300">"high"</span>:
                  </div>
                  <div className="pl-4 text-amber-300">
                    <span className="text-purple-400">await</span> pause_and_notify_stakeholder(state)
                  </div>
                  <div className="pt-2 text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Audited execution: high-risk actions gated by human authorization</span>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer Status Bar */}
            <div className="px-5 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                <span>main: nexus-core/v1.0.4</span>
              </div>
              <div className="text-blue-400 font-semibold">FastAPI • LangGraph • React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
