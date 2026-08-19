import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, JOB_SIMULATIONS, FEATURED_PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';
import {
  X,
  Printer,
  Download,
  Copy,
  CheckCircle2,
  Mail,
  Phone,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
      window.print();
    } catch {
      // fallback
    }
  };

  const handleCopyMarkdown = () => {
    const resumeText = `# PRATHAM DIXIT
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

## SUMMARY
AI/ML Engineer with product ownership experience — comfortable building the technical stack (LLMs, RAG, AI agents) and driving the product lifecycle around it (discovery, roadmap, stakeholder communication). Currently building NEXUS, an open-source enterprise AI platform, personally engineering the RAG/agent pipeline while running product discovery, PRDs, and prioritization. Completed 10+ industry job simulations spanning AI/ML (AWS, BCG X, JPMorgan) and Product/Project Management (Siemens, Lloyds, TATA).

## EDUCATION
KCC Institute of Technology & Management (2024 – 2028)
B.Tech — Computer Science & Engineering (AI & ML)

## CORE SKILLS
- AI/ML & Engineering: Python, Machine Learning, Deep Learning, NLP, LLMs, RAG, Prompt Engineering, Function/Tool Calling, Multi-Agent Systems, REST APIs, SQL/NoSQL
- Frameworks & Libraries: LangChain, LangGraph, CrewAI, OpenAI/Gemini APIs, OpenCV, Scikit-learn, PyTorch
- Databases & Vector Search: SQLite, MySQL, MongoDB, PostgreSQL, Pinecone, FAISS
- Backend & Web: Python, Async Programming, FastAPI, REST APIs, HTML, CSS, React, n8n automation
- Product & Project Skills: Roadmap thinking, KPI development, Requirements gathering, PRDs, Design thinking, Prioritization, Data-driven decision-making, Stakeholder communication

## EXPERIENCE
Machine Learning Intern — Future Interns (Dec 2025 – Jan 2026)
- Built customer churn prediction model using engineered features to flag at-risk accounts for retention outreach.
- Developed an LLM-powered conversational assistant using OpenAI and Gemini APIs with structured prompt engineering.
- Performed data preprocessing, feature engineering, and model evaluation across multiple ML workflows.
- Built KPI dashboards used for business insight reporting, translating raw data into stakeholder-ready visuals.
- Collaborated cross-functionally on predictive analytics models, gathering requirements and communicating technical trade-offs.

## FEATURED PROJECTS
- NEXUS — Open-Source Enterprise AI Operating System: Enterprise AI platform combining RAG, permission-aware retrieval, AI agents, and n8n automation while driving the full product lifecycle (PRDs, roadmap, prioritization). Stack: Python, FastAPI, React, PostgreSQL, LangGraph, OpenAI/Gemini APIs.
- HemoLink: Real-time emergency blood-donor coordination platform connecting donors with recipients.
- Innoverse: Collaborative platform for student developers to showcase projects and find teammates.
- Autonomous AI Voice Assistant: Voice-command product automating desktop tasks through natural language.
- AMD Hackathon Project: ML data preprocessing and predictive modeling (IIT Delhi, Feb 2026).

## CERTIFICATIONS & ACHIEVEMENTS
- Top 50 Performer — APERTRE 3.0 Open Source Program (2026)
- AI Agent Development Certification — Lyzr Agent Studio & Architect (Feb 2026)
- AMD AI Reinforcement Learning Hackathon — IIT Delhi (Feb 2026)
- QuizOff 2026: India's Biggest AI Quiz — Competed among 5,25,000+ students from 48,500+ institutions (Jul 2026)
- Master Generative AI — GUVI x HCL Workshop (Dec 2025)
- Generative AI Essentials & AI/Cybersecurity Awareness — TCS iON (Apr 2026)
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xl animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#030406] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold uppercase">
              VERIFIED MASTER RESUME
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Synthesized from Official Resumes
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors cursor-pointer"
              title="Copy text markdown to clipboard"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied ATS Text!' : 'Copy ATS Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-mono uppercase bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer shadow-[0_0_12px_rgba(37,99,235,0.4)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Clean Resume Sheet */}
        <div className="p-6 sm:p-10 space-y-6 overflow-y-auto bg-[#030406] text-slate-200 text-xs sm:text-sm print:bg-white print:text-black">
          {/* Header */}
          <div className="text-center pb-4 border-b border-white/10 space-y-2">
            <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-blue-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>|</span>
              <span className="text-blue-400">linkedin.com</span>
              <span>|</span>
              <span className="text-blue-400">github.com</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Summary
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              AI/ML engineer with product ownership experience — comfortable building the technical stack (LLMs, RAG, AI agents) and driving the product lifecycle around it (discovery, roadmap, stakeholder communication). Currently building NEXUS, an open-source enterprise AI platform, personally engineering the RAG/agent pipeline while running product discovery, PRDs, and prioritization. Completed 10+ industry job simulations spanning AI/ML (AWS, BCG X, JPMorgan) and Product/Project Management (Siemens, Lloyds, TATA).
            </p>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Education
            </h3>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-bold text-white text-sm">
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="text-slate-300 text-xs font-medium">
                  {PERSONAL_INFO.education.degree}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400">
                {PERSONAL_INFO.education.batch}
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Core Skills
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div>
                <strong className="text-white">AI/ML & LLM Engineering:</strong> Python, Machine Learning, Deep Learning, NLP, LLMs, RAG, Prompt Engineering, Function Calling, Tool Calling, Multi-Agent Systems, REST APIs, SQL/NoSQL
              </div>
              <div>
                <strong className="text-white">Frameworks & Tools:</strong> LangChain, LangGraph, CrewAI, OpenAI/Gemini APIs, OpenCV, Scikit-learn, PyTorch, Hugging Face, Git/GitHub
              </div>
              <div>
                <strong className="text-white">Databases & Vector Search:</strong> SQLite, MySQL, MongoDB, PostgreSQL, Pinecone, FAISS
              </div>
              <div>
                <strong className="text-white">Backend & Frontend:</strong> Python, Async Programming, FastAPI, REST APIs, HTML, CSS, React, n8n automation
              </div>
              <div>
                <strong className="text-white">Product & Project Skills:</strong> Roadmap thinking, KPI development, Requirements gathering, PRDs, Design thinking, Prioritization, Data-driven decision-making, Stakeholder communication, Technical translation
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Experience
            </h3>
            {EXPERIENCE_ITEMS.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-bold text-white">{item.role}</span> —{' '}
                    <span className="text-blue-400 font-semibold">{item.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs leading-relaxed">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Projects
            </h3>
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="font-bold text-white">
                  {project.title}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {project.tagline}
                </p>
                <div className="text-[11px] font-mono text-blue-400">
                  Stack: {project.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Job Simulations */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Virtual Experience Programs (Job Simulations)
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              {JOB_SIMULATIONS.slice(0, 6).map((sim) => (
                <div key={sim.id} className="flex items-start justify-between gap-4">
                  <div>
                    <strong className="text-white">{sim.organization}:</strong> {sim.bullets[0]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 shrink-0">{sim.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Certifications & Achievements
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li><strong className="text-white">Top 50 Performer</strong> — APERTRE 3.0 Open Source Program (2026)</li>
              <li><strong className="text-white">AI Agent Development Certification</strong> — Lyzr Agent Studio & Architect (Feb 2026)</li>
              <li><strong className="text-white">AMD AI Reinforcement Learning Hackathon</strong> — IIT Delhi (Feb 2026)</li>
              <li><strong className="text-white">QuizOff 2026: India's Biggest AI Quiz</strong> — Competed among 5,25,000+ students from 48,500+ institutions (Jul 2026)</li>
              <li><strong className="text-white">Master Generative AI: A Roadmap to a Successful Career</strong> — GUVI x HCL Workshop (Dec 2025)</li>
              <li><strong className="text-white">Generative AI Essentials & AI/Cybersecurity Awareness</strong> — TCS iON "AI for All" initiative (Apr 2026)</li>
              <li><strong className="text-white">National Hackathons:</strong> HackIndia Spark 4, India Innovates 2026, MasterX Hackathon, Unstop RIFT '26 & Execute 5.0, HackO'Clock 2.0</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Pratham Dixit • 2026 Profile
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
