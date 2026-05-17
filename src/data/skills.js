// ════════════════════════════════════════════════════════
//  SKILLS DATA — EASY TO UPDATE
//  To add a skill: copy one block and fill in your details.
//  Fields:
//    title    — name of the skill
//    level    — "Beginner" | "Intermediate" | "Advanced" | "Expert"
//    category — used for filter buttons (e.g. "AI Tools", "Programming")
//    desc     — one line description
//    icon     — any emoji
//    who      — "Faculty" | "Students" | "Leadership" | "All"
// ════════════════════════════════════════════════════════

export const SKILLS_DATA = [

  // ── AI Tools ─────────────────────────────────────────
  { title:"Prompt Engineering",     level:"Advanced",      category:"AI Tools",     icon:"✍️",  who:"Faculty",    desc:"Designing effective prompts for Gemini, Claude, and GPT for academic and research tasks." },
  { title:"Google Gemini",          level:"Advanced",      category:"AI Tools",     icon:"🔷",  who:"Faculty",    desc:"Using Gemini for lesson planning, content generation, and student feedback automation." },
  { title:"Claude AI",              level:"Advanced",      category:"AI Tools",     icon:"🤖",  who:"Faculty",    desc:"Agentic workflows, code generation, and building live applications using Claude API." },
  { title:"ChatGPT / GPT-4",        level:"Intermediate",  category:"AI Tools",     icon:"💬",  who:"All",        desc:"AI-assisted writing, research summarisation, and Q&A for academic purposes." },
  { title:"Midjourney / DALL-E",    level:"Beginner",      category:"AI Tools",     icon:"🎨",  who:"Students",   desc:"AI image generation for presentations, posters, and creative academic projects." },
  { title:"NotebookLM",             level:"Intermediate",  category:"AI Tools",     icon:"📓",  who:"Faculty",    desc:"AI-powered research notebook for summarising, questioning, and analysing documents." },

  // ── Programming ──────────────────────────────────────
  { title:"Python",                 level:"Advanced",      category:"Programming",  icon:"🐍",  who:"Faculty",    desc:"Core programming language for AI, data analysis, automation, and backend development." },
  { title:"JavaScript / React",     level:"Intermediate",  category:"Programming",  icon:"⚛️",  who:"Faculty",    desc:"Building interactive web applications and dashboards for AI portals." },
  { title:"Node.js",                level:"Intermediate",  category:"Programming",  icon:"🟩",  who:"Faculty",    desc:"Server-side development for HKBK's live AI portals and API endpoints." },
  { title:"SQL / NeDB",             level:"Intermediate",  category:"Programming",  icon:"🗄️",  who:"Faculty",    desc:"Database design and querying for storing student, video, and prompt data." },

  // ── AI / ML ───────────────────────────────────────────
  { title:"Machine Learning",       level:"Advanced",      category:"AI / ML",      icon:"🧠",  who:"Faculty",    desc:"Supervised and unsupervised learning algorithms, model evaluation, and deployment." },
  { title:"Deep Learning",          level:"Intermediate",  category:"AI / ML",      icon:"🔬",  who:"Faculty",    desc:"Neural networks, CNNs, RNNs using TensorFlow and PyTorch for research projects." },
  { title:"LangChain / CrewAI",     level:"Intermediate",  category:"AI / ML",      icon:"🔗",  who:"Faculty",    desc:"Building multi-agent systems and LLM pipelines for academic automation." },
  { title:"Reinforcement Learning", level:"Beginner",      category:"AI / ML",      icon:"🎮",  who:"Students",   desc:"RL fundamentals — reward, policy, agent loops — applied in lab experiments." },
  { title:"RAG Systems",            level:"Intermediate",  category:"AI / ML",      icon:"📚",  who:"Faculty",    desc:"Retrieval-Augmented Generation for building knowledge-aware AI applications." },

  // ── Teaching & Academia ───────────────────────────────
  { title:"AI Curriculum Design",   level:"Expert",        category:"Academia",     icon:"📋",  who:"Faculty",    desc:"Designing VTU-aligned AI/ML curriculum integrating hands-on tools and NAAC documentation." },
  { title:"FDP Facilitation",       level:"Expert",        category:"Academia",     icon:"🎤",  who:"Leadership", desc:"Conducting Faculty Development Programs on AI tools, prompt engineering, and agentic AI." },
  { title:"NAAC Documentation",     level:"Expert",        category:"Academia",     icon:"📄",  who:"Leadership", desc:"AI-assisted NAAC report generation, lesson plans, and academic documentation." },
  { title:"Research Guidance",      level:"Advanced",      category:"Academia",     icon:"🔭",  who:"Faculty",    desc:"Guiding students in AI-based research projects, paper writing, and conference publications." },

  // ── Quantum & Emerging Tech ───────────────────────────
  { title:"Quantum Computing",      level:"Beginner",      category:"Emerging Tech", icon:"⚛️", who:"Faculty",    desc:"Fundamentals of quantum gates, circuits, and algorithms using IBM Quantum and i-STEM access." },
  { title:"Cybersecurity + AI",     level:"Intermediate",  category:"Emerging Tech", icon:"🔐", who:"Faculty",    desc:"AI-based threat detection, network monitoring, and security automation (VAANI FDP)." },
  { title:"IoT & Edge AI",          level:"Intermediate",  category:"Emerging Tech", icon:"📡", who:"Students",   desc:"Deploying AI on edge devices using NVIDIA Jetson and Arduino for real-world projects." },
];

export const LEVEL_COLOR = {
  "Beginner"    : { bg:"rgba(34,197,94,.12)",   border:"rgba(34,197,94,.35)",   text:"#22c55e" },
  "Intermediate": { bg:"rgba(0,180,216,.12)",   border:"rgba(0,180,216,.35)",   text:"#00d4ff" },
  "Advanced"    : { bg:"rgba(139,92,246,.12)",  border:"rgba(139,92,246,.35)",  text:"#a78bfa" },
  "Expert"      : { bg:"rgba(244,196,48,.12)",  border:"rgba(244,196,48,.35)",  text:"#f4c430" },
};

export const LEVEL_BAR = { "Beginner":25, "Intermediate":55, "Advanced":80, "Expert":100 };
