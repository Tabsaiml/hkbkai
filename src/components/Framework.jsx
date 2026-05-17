export default function Framework() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🧱 5-Layer Model</div>
        <h2 className="sec-title">The <span>AI-First Campus</span> Framework</h2>
        <p className="sec-desc">A progressive, structured 5-layer model that transforms HKBK from an AI-aware campus to a global AI innovation leader.</p>
      </div>

      <div className="layers-grid">

        <div className="layer-card l1">
          <div className="layer-num">Layer 1 · Active ✓</div>
          <div className="layer-icon">🌱</div>
          <h3>Awareness Campus</h3>
          <div className="layer-sub">AI Literacy for Every Student &amp; Faculty</div>
          <ul>
            <li>AI literacy programs — what is AI, ML, GenAI, Agentic AI</li>
            <li>FDPs and orientation workshops for all faculty</li>
            <li>Student awareness sessions (2nd, 3rd, 4th year)</li>
            <li>AI for productivity — teachers, admin, and students</li>
            <li>Automated assessment generation with AI</li>
            <li>AI-assisted lesson planning across all departments</li>
            <li>Design Thinking workshops to identify real problems</li>
          </ul>
          <span className="layer-status status-active">✅ Active — Since January 2026</span>
        </div>

        <div className="layer-card l2">
          <div className="layer-num">Layer 2 · Active &amp; In Progress</div>
          <div className="layer-icon">⚙️</div>
          <h3>Adoption Campus</h3>
          <div className="layer-sub">AI as a Daily Work Tool</div>
          <ul>
            <li>AI for productivity — integrated into daily academic workflow</li>
            <li>Automated assessments across all departments</li>
            <li>AI-assisted lesson plan generation and review</li>
            <li>Administrative workflow automation — NAAC, SSR, reports</li>
            <li>Pilot departments: CS, IS, AIML, ECE, MBA</li>
            <li>AI mini projects introduced as part of coursework</li>
            <li>Faculty feedback loops and time-saved reports</li>
          </ul>
          <span className="layer-status status-active">✅ Active</span>&nbsp;<span className="layer-status status-inprogress">🔵 In Progress</span>
        </div>

        <div className="layer-card l3">
          <div className="layer-num">Layer 3 · Active &amp; In Progress</div>
          <div className="layer-icon">🔬</div>
          <h3>AI-Infused Campus</h3>
          <div className="layer-sub">Domain + AI = Every Department</div>
          <ul>
            <li>Domain + AI models in every department (Civil+AI, Mechanical+AI, Humanities+AI)</li>
            <li>Multidisciplinary AI projects for 2nd semester students — 3 credits</li>
            <li>AI rubrics integrated into assessment criteria</li>
            <li>Cross-department AI collaboration projects</li>
            <li>Student-led mini projects: chatbots, predictors, analyzers</li>
            <li>Industry problem-solving through student AI teams</li>
            <li>AI Project Repository for all student work</li>
          </ul>
          <span className="layer-status status-active">✅ Active</span>&nbsp;<span className="layer-status status-inprogress">🔵 In Progress</span>
        </div>

        <div className="layer-card l4">
          <div className="layer-num">Layer 4 · Active &amp; In Progress</div>
          <div className="layer-icon">🤖</div>
          <h3>Agentic &amp; Intelligent Campus</h3>
          <div className="layer-sub">Autonomous AI Operations</div>
          <ul>
            <li>AI workflow orchestration — end-to-end automated processes</li>
            <li>Digital twins of campus — simulation and planning</li>
            <li>Predictive analysis — admissions, attendance, performance</li>
            <li>Autonomous academic operations — scheduling, grading</li>
            <li>Google Gemini Enterprise for every student and faculty</li>
            <li>Local AI servers running Small Language Models (SLMs)</li>
            <li>Agentic AI for research assistance and administration</li>
          </ul>
          <span className="layer-status status-active">✅ Active</span>&nbsp;<span className="layer-status status-inprogress">🔵 In Progress</span>
        </div>

        <div className="layer-card l5">
          <div className="layer-num">Layer 5 · Active &amp; In Progress</div>
          <div className="layer-icon">🌍</div>
          <h3>Innovation &amp; Global Leadership</h3>
          <div className="layer-sub">HKBK as an AI Innovation Hub</div>
          <ul>
            <li>Consultancy ecosystem — AI services to industry</li>
            <li>Student-led AI startups and incubation support</li>
            <li>Patent culture — AI inventions from campus research</li>
            <li>Global collaborative research partnerships</li>
            <li>Training IT professionals in AI — external revenue stream</li>
            <li>Annual AI Project Expo — industry showcase</li>
            <li>"AI-Integrated Engineering College" national branding</li>
          </ul>
          <span className="layer-status status-active">✅ Active</span>&nbsp;<span className="layer-status status-inprogress">🔵 In Progress</span>
        </div>

      </div>

      {/* Infrastructure bands */}
      <div style={{ marginTop:'56px' }}>
        <div className="sec-header" style={{ marginBottom:'32px' }}>
          <div className="sec-tag">🏗️ Infrastructure</div>
          <h2 className="sec-title" style={{ fontSize:'28px' }}>Supporting <span>Infrastructure Bands</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px' }}>
          <div className="tl-card">
            <div style={{ fontSize:'28px', marginBottom:'12px' }}>🏢</div>
            <h3 style={{ marginBottom:'12px' }}>Physical Infrastructure</h3>
            <ul>
              <li>Innovation hubs and smart classrooms</li>
              <li>Dedicated GPU-powered AI labs</li>
              <li>Podcast and digital media studios</li>
              <li>Content generation facilities</li>
            </ul>
          </div>
          <div className="tl-card">
            <div style={{ fontSize:'28px', marginBottom:'12px' }}>☁️</div>
            <h3 style={{ marginBottom:'12px' }}>Digital Infrastructure</h3>
            <ul>
              <li>Cloud GPU access for research and training</li>
              <li>Google Gemini Enterprise subscription</li>
              <li>Claude (Anthropic) API integration</li>
              <li>Local AI servers running Small Language Models</li>
              <li>Open-source AI ecosystems</li>
            </ul>
          </div>
          <div className="tl-card">
            <div style={{ fontSize:'28px', marginBottom:'12px' }}>📋</div>
            <h3 style={{ marginBottom:'12px' }}>Policy Infrastructure</h3>
            <ul>
              <li>Institutional AI policies — ethics, privacy, academic integrity</li>
              <li>AI-integrated curriculum frameworks across disciplines</li>
              <li>Mandatory faculty AI certification</li>
              <li>Interdisciplinary AI course integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
