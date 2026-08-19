import React, { useState } from 'react';
import {
  Brain,
  ShieldCheck,
  GitGraph,
  Wrench,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  Database,
  Cpu,
  RefreshCw,
} from 'lucide-react';

interface Stage {
  id: string;
  stepNumber: string;
  name: string;
  shortDesc: string;
  tech: string[];
  explanation: string;
  codeSnippet: string;
  metrics: { label: string; value: string }[];
}

export const AiEngineeringLab: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const pipelineStages: Stage[] = [
    {
      id: 'intent-parsing',
      stepNumber: '01',
      name: 'Intent Parsing & Context Formulation',
      shortDesc: 'Streaming user query through structured context injection & intent routing.',
      tech: ['OpenAI API', 'Gemini API', 'Prompt Engineering', 'Pydantic'],
      explanation:
        'Raw user input is normalized and evaluated against intent classification schemas. Rather than raw prompt concatenation, prompt templates inject tenant identity, role scope, and execution constraints directly into system messages.',
      codeSnippet: `// 1. Structured Intent Classification\nclass QueryIntent(BaseModel):\n    intent: Literal["knowledge_retrieval", "action_execution", "analytics"]\n    confidence: float\n    entities: list[str]\n    requires_external_tool: bool\n\nasync def parse_intent(query: str, auth_user: User) -> QueryIntent:\n    return await gemini_client.generate_structured(\n        prompt=query,\n        schema=QueryIntent,\n        system_instruction=build_system_context(auth_user)\n    )`,
      metrics: [
        { label: 'Token Overhead', value: '< 180 tokens' },
        { label: 'Classification Latency', value: '~140ms' },
      ],
    },
    {
      id: 'permission-rag',
      stepNumber: '02',
      name: 'Permission-Aware Vector Retrieval',
      shortDesc: 'Dense similarity search with metadata-level role-based access filtering.',
      tech: ['Pinecone', 'FAISS', 'FastAPI', 'Embeddings'],
      explanation:
        'Standard RAG leaks enterprise data across clearance levels. NEXUS enforces pre-filtering in vector stores (FAISS/Pinecone) by injecting allowed ACL tags before computing cosine similarity, ensuring unauthorized chunks are mathematically inaccessible.',
      codeSnippet: `// 2. Permission-Scoped Vector Query\nasync def retrieve_scoped_chunks(embedding: list[float], user: User) -> list[DocumentChunk]:\n    # Security Pre-filter: strict RBAC boundary\n    acl_filter = {"tenant_id": user.tenant_id, "roles": {"$in": user.assigned_roles}}\n    \n    results = await vector_store.similarity_search_vector(\n        vector=embedding,\n        filter=acl_filter,\n        top_k=5\n    )\n    return re_rank_cross_encoder(results, query_text)`,
      metrics: [
        { label: 'Search Latency', value: '< 18ms' },
        { label: 'Data Leakage Risk', value: '0.00% (Strict ACL)' },
      ],
    },
    {
      id: 'langgraph-supervisor',
      stepNumber: '03',
      name: 'LangGraph Multi-Agent Supervisor',
      shortDesc: 'Cyclic state graph coordinating specialized worker agents and retry logic.',
      tech: ['LangGraph', 'LangChain', 'CrewAI', 'Async Python'],
      explanation:
        'Linear chains fail on edge cases. LangGraph models agent workflows as cyclic state graphs. The supervisor evaluates intermediate outputs, triggers query rewriting if retrieval relevance is below threshold, and routes complex sub-tasks to specialized domain agents.',
      codeSnippet: `// 3. LangGraph Cyclic Multi-Agent Supervisor\nworkflow = StateGraph(EnterpriseAgentState)\n\nworkflow.add_node("supervisor", supervisor_decision_node)\nworkflow.add_node("rag_agent", domain_rag_worker)\nworkflow.add_node("action_agent", tool_execution_worker)\n\nworkflow.add_edge("rag_agent", "supervisor")\nworkflow.add_edge("action_agent", "supervisor")\nworkflow.add_conditional_edges(\n    "supervisor",\n    route_next_action,\n    {"rag": "rag_agent", "tool": "action_agent", "finish": END}\n)`,
      metrics: [
        { label: 'Graph Convergence', value: 'Deterministic' },
        { label: 'Max Cyclic Hops', value: '3 Iterations' },
      ],
    },
    {
      id: 'tool-execution',
      stepNumber: '04',
      name: 'Tool Calling & n8n Automation',
      shortDesc: 'Executing external APIs, database mutations, and automated enterprise webhooks.',
      tech: ['n8n', 'REST APIs', 'PostgreSQL', 'FastAPI Webhooks'],
      explanation:
        'Agents invoke validated external tools (e.g. triggering an n8n webhook, querying PostgreSQL, or executing task scripts). High-impact actions are automatically tagged with human-in-the-loop approval requirements before execution.',
      codeSnippet: `// 4. Tool Execution & Webhook Dispatch\n@tool\nasync def trigger_n8n_ticket_workflow(payload: TicketPayload) -> ToolResult:\n    async with httpx.AsyncClient() as client:\n        response = await client.post(\n            settings.N8N_WEBHOOK_URL,\n            json=payload.model_dump(),\n            headers={"X-API-KEY": settings.INTERNAL_SECRET}\n        )\n    return ToolResult(status=response.status_code, data=response.json())`,
      metrics: [
        { label: 'Execution Mode', value: 'Non-blocking Async' },
        { label: 'Audit Logging', value: '100% Traceable' },
      ],
    },
    {
      id: 'guardrails-eval',
      stepNumber: '05',
      name: 'Structured Guardrails & Output Validation',
      shortDesc: 'Enforcing deterministic JSON response formatting and hallucination checks.',
      tech: ['Pydantic v2', 'JSON Schema', 'Prompt Guardrails'],
      explanation:
        'Final responses undergo automated schema validation and factuality checks against retrieved context before being streamed to the user interface, eliminating markdown formatting errors and hallucinations.',
      codeSnippet: `// 5. Final Output Guardrail & Delivery\nasync def synthesize_and_validate(state: EnterpriseAgentState) -> FinalResponsePayload:\n    raw_synthesis = await llm_synthesizer.generate(state.messages)\n    \n    # Validate output schema against strict contract\n    validated_output = FinalResponsePayload.model_validate_json(raw_synthesis)\n    \n    # Verify citations match retrieved context chunks\n    assert_grounding_fidelity(validated_output, state.retrieved_chunks)\n    return validated_output`,
      metrics: [
        { label: 'Schema Conformance', value: '100%' },
        { label: 'Citation Grounding', value: 'Enforced' },
      ],
    },
  ];

  const currentStage = pipelineStages[selectedStageIndex];

  return (
    <section id="ai-lab" className="py-20 bg-[#030406] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-500 font-mono">
              SYSTEMS ARCHITECTURE LAB
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Architect Production AI Pipelines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            An interactive breakdown of the multi-agent RAG pipeline implemented inside <strong className="text-slate-200 font-mono">NEXUS</strong>. Click through each stage to inspect data flow, security boundaries, and code implementation.
          </p>
        </div>

        {/* Interactive Pipeline Stepper Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {pipelineStages.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.06] border-blue-500/60 shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                          : 'bg-white/5 text-slate-500 border border-white/5'
                      }`}
                    >
                      STAGE {stage.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {stage.shortDesc}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{stage.tech[0]}</span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-black/60 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                {currentStage.stepNumber}
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {currentStage.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  {currentStage.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {currentStage.metrics.map((m, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-xl bg-black/40 border border-white/10 text-right"
                >
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{m.label}</div>
                  <div className="text-xs font-mono font-bold text-blue-400">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Body: Explanation + Code Snippet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Engineering Breakdown */}
            <div className="lg:col-span-5 p-6 lg:border-r border-white/10 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed bg-white/[0.01]">
              <div>
                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-[0.2em] mb-2 font-bold flex items-center gap-1.5">
                  <div className="w-1 h-3 bg-blue-600" />
                  <span>Architectural Rationale</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {currentStage.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                  Key Engineering Guarantees
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Deterministic failure handling & structured retry policies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Isolated state updates preventing context explosion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full compatibility with FastAPI async event loops</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Simulating stage {currentStage.stepNumber} of 05</span>
                  <div className="flex gap-1.5">
                    <button
                      disabled={selectedStageIndex === 0}
                      onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-mono"
                    >
                      Prev
                    </button>
                    <button
                      disabled={selectedStageIndex === pipelineStages.length - 1}
                      onClick={() => setSelectedStageIndex((prev) => Math.min(pipelineStages.length - 1, prev + 1))}
                      className="px-2.5 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-mono font-bold"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code & Data Representation */}
            <div className="lg:col-span-7 p-6 bg-black/60 font-mono text-xs text-slate-200 flex flex-col justify-between overflow-x-auto">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>pipeline_core_{currentStage.id}.py</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Python 3.11 • LangGraph</span>
                </div>
                <pre className="text-slate-300 text-xs leading-relaxed overflow-x-auto py-2 whitespace-pre font-mono">
                  {currentStage.codeSnippet}
                </pre>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Telemetry: Monitored via custom KPI logging hooks</span>
                </div>
                <span className="text-blue-400 font-semibold font-mono">NEXUS Core Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
