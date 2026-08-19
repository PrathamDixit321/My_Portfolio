# 🌌 Pratham Dixit — AI/ML Engineer & Systems Builder Portfolio

Welcome to the repository for **Pratham Dixit's Portfolio**. This is a premium, interactive web application showcasing personal projects, industry simulations, technical skills, and research experiments, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Bio & Core Philosophy
> "Building enterprise AI systems, RAG architectures, and multi-agent platforms with product-grounded engineering."

Computer Science (AI & ML) engineering student bridging modern generative AI systems (LLMs, LangGraph, RAG) with robust backend software and product thinking. Currently architecting **NEXUS**, an open-source enterprise AI operating system.

---

## 🛠️ Technical Stack & Core Competencies

- **Generative AI & Agentic Orchestration**: LangGraph, LangChain, CrewAI, OpenAI / Gemini APIs, Vector Search (Pinecone, FAISS), Hybrid Retrieval.
- **Machine Learning & NLP**: Supervised Learning (PyTorch, Scikit-learn), Feature Engineering, Churn Prediction, OpenCV.
- **Databases & Backends**: FastAPI (Async Python), PostgreSQL, MySQL, MongoDB, SQLite, REST APIs, Webhooks.
- **Languages & Frameworks**: Python, React.js, TypeScript, C++, SQL, Tailwind CSS.
- **Workflow Automation & Tools**: Git/GitHub, n8n automation, VS Code, Jupyter, Apache Kafka.

---

## 📂 Highlighted Projects

### 1. **NEXUS — Enterprise AI Operating System** (Flagship Project)
*   **Overview**: Open-source enterprise AI platform combining RAG, permission-aware vector retrieval, LangGraph agents, and n8n workflow automation.
*   **Core Architecture**: LangGraph Cyclic Multi-Agent Supervisor directing specialized domain agents; FastAPI async backend handling LLM streaming; Pinecone/FAISS permission pre-filtering layer.
*   **Technologies**: Python, FastAPI, LangGraph, OpenAI/Gemini APIs, PostgreSQL, React, n8n, Pinecone/FAISS.

### 2. **HemoLink — Emergency Blood Donor Matching Platform**
*   **Overview**: Real-time blood donor management platform connecting donors with recipients to accelerate critical emergency responses.
*   **Core Architecture**: Sub-minute emergency request broadcasting, compatible blood-type matrix matching algorithm, and clean responsive interface built for high-stress mobile usage.
*   **Technologies**: React, Node.js, Express, MongoDB, REST APIs, Tailwind CSS.

### 3. **Autonomous AI Voice Assistant**
*   **Overview**: Low-latency voice command system parsing spoken inputs into structured function calls and executing local desktop workflows.
*   **Technologies**: Python, SpeechRecognition, LLM Function Calling, AsyncIO.

---

## 🏆 Key Metrics & Achievements

*   **Top 50 Performer** in the nationwide *APERTRE 3.0 Open Source Program*.
*   **On-site Competitor** at the *AMD AI Reinforcement Learning Hackathon* held at IIT Delhi.
*   **QuizOff 2026 Nationwide Competitor** — competed alongside 525,000+ students from 48,500+ academic institutions.
*   **Certified AI Agent Architect** by *Lyzr Agent Studio*.

---

## 💻 Running the Portfolio App Locally

Follow these steps to run the interactive React portfolio app on your local machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+ recommended)
*   [Git](https://git-scm.com/)

### Step-by-Step Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/PrathamDixit321/My_Portfolio.git
    cd My_Portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    *   Duplicate `.env.example` and rename it to `.env` (or `.env.local`):
        ```bash
        cp .env.example .env
        ```
    *   Add your `GEMINI_API_KEY` (required for interactive AI components in the portfolio):
        ```env
        GEMINI_API_KEY="your-gemini-api-key-here"
        ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    *   Open your browser and navigate to `http://localhost:3000`.

5.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## ✍️ Build Log Articles & Publications (Included)
*   *Why Enterprise RAG Needs State Graphs, Not Just Chains* (LangGraph, FAISS, Pinecone)
*   *Why Great AI Engineers Must Write PRDs and Think in KPIs* (Product-grounded engineering)

---
Designed and developed by **Pratham Dixit**. Feel free to reach out for collaborations or opportunities!
