export default function Portals() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🚀 Built at HKBK</div>
        <h2 className="sec-title">Our <span>Live AI Portals</span></h2>
        <p className="sec-desc">Fully functional AI-powered applications built in-house — proof that HKBK does not just teach AI, we build it.</p>
      </div>

      {/* Tech note */}
      <div style={{ background:'rgba(139,92,246,.08)', border:'1px solid rgba(139,92,246,.2)', borderRadius:'14px', padding:'20px 24px', marginBottom:'40px', display:'flex', gap:'16px', alignItems:'flex-start' }}>
        <div style={{ fontSize:'28px', flexShrink:0 }}>🏛️</div>
        <div>
          <h4 style={{ color:'#c4b5fd', marginBottom:'6px' }}>Built at HKBK — In-House Development</h4>
          <p style={{ fontSize:'13px', color:'var(--grey)', lineHeight:'1.7' }}>All portals below were designed and developed entirely in-house by the HKBK AIML department — demonstrating that our faculty and students can build production-grade web applications. Each portal runs on our own server at <strong style={{ color:'var(--cyan)' }}>drive.hkbkce.in</strong></p>
        </div>
      </div>

      <div className="portals-grid">

        <div className="portal-card" style={{ borderColor:'rgba(34,197,94,.3)' }}>
          <div className="portal-icon">📺</div>
          <span className="portal-tag" style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)' }}>✅ LIVE</span>
          <h3>HKBK EduStream</h3>
          <p>A YouTube-style academic video library exclusively for HKBK students and faculty. Features role-based access (Student/Faculty/Admin), HD video streaming with range support, thumbnail generation, like system, approval workflow for content moderation, and search by topic or faculty name. No download allowed — content is protected.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px', margin:'12px 0' }}>
            <div style={{ fontSize:'12px', color:'var(--grey)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
              {['React 18 + Vite','Node.js + Express','NeDB','JWT Auth'].map(t => (
                <span key={t} style={{ background:'rgba(255,255,255,.05)', padding:'3px 8px', borderRadius:'4px' }}>{t}</span>
              ))}
            </div>
          </div>
          <a href="http://localhost:5500" className="portal-link" target="_blank" rel="noreferrer">Open Portal →</a>
        </div>

        <div className="portal-card" style={{ borderColor:'rgba(34,197,94,.3)' }}>
          <div className="portal-icon">📚</div>
          <span className="portal-tag" style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)' }}>✅ LIVE</span>
          <h3>EduPrompt — Faculty Prompt Library</h3>
          <p>A curated library of 200+ AI prompts designed specifically for VTU and NAAC academic contexts. Faculty can browse, search, and use prompts for lesson planning, question paper generation, SSR writing, evidence documentation, research abstract writing, and student assessment. Powered by Google Gemini AI for instant response generation.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px', margin:'12px 0' }}>
            <div style={{ fontSize:'12px', color:'var(--grey)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
              {['React 18','Gemini AI','NeDB','VTU/NAAC Aligned'].map(t => (
                <span key={t} style={{ background:'rgba(255,255,255,.05)', padding:'3px 8px', borderRadius:'4px' }}>{t}</span>
              ))}
            </div>
          </div>
          <a href="http://localhost:3000" className="portal-link" target="_blank" rel="noreferrer">Open Portal →</a>
        </div>

        <div className="portal-card" style={{ borderColor:'rgba(34,197,94,.3)' }}>
          <div className="portal-icon">🤖</div>
          <span className="portal-tag" style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)' }}>✅ LIVE</span>
          <h3>IA Marks Chatbot</h3>
          <p>An intelligent student assistant that allows students to ask natural language questions about their Internal Assessment marks. "What is my marks in TOC?" — the AI parses CSV data uploaded by admin and provides instant, conversational answers. Powered by Groq's Llama 3.3 model. Students log in with their USN number.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px', margin:'12px 0' }}>
            <div style={{ fontSize:'12px', color:'var(--grey)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
              {['Groq LLM','CSV Parsing','RAG Pattern','Node.js'].map(t => (
                <span key={t} style={{ background:'rgba(255,255,255,.05)', padding:'3px 8px', borderRadius:'4px' }}>{t}</span>
              ))}
            </div>
          </div>
          <a href="http://localhost:4000" className="portal-link" target="_blank" rel="noreferrer">Open Portal →</a>
        </div>

      </div>

      {/* Phase 4 & 5 callout */}
      <div style={{ marginTop:'48px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px' }}>
        <div style={{ background:'rgba(0,180,216,.06)', border:'1px solid var(--border)', borderRadius:'16px', padding:'28px' }}>
          <div style={{ fontSize:'32px', marginBottom:'12px' }}>🌐</div>
          <h3 style={{ marginBottom:'10px', fontFamily:"'Space Grotesk',sans-serif" }}>Phase 4 — Agentic AI Workflow</h3>
          <p style={{ fontSize:'13px', color:'var(--grey)', lineHeight:'1.7' }}>HKBK has secured a <strong style={{ color:'var(--cyan)' }}>Google Gemini Enterprise subscription</strong> for every student and faculty member. This gives our campus access to Google's most advanced AI model for research, learning, and problem-solving — making HKBK one of the few Indian engineering colleges with enterprise AI access for all.</p>
        </div>
        <div style={{ background:'rgba(244,196,48,.06)', border:'1px solid rgba(244,196,48,.2)', borderRadius:'16px', padding:'28px' }}>
          <div style={{ fontSize:'32px', marginBottom:'12px' }}>🏭</div>
          <h3 style={{ marginBottom:'10px', fontFamily:"'Space Grotesk',sans-serif" }}>Phase 5 — AI Training for IT Professionals</h3>
          <p style={{ fontSize:'13px', color:'var(--grey)', lineHeight:'1.7' }}>Management has approved investment in <strong style={{ color:'var(--gold)' }}>cloud servers, in-house GPU servers, and Small Language Models</strong>. HKBK will offer end-to-end AI upskilling for working IT professionals — creating a new revenue stream and positioning the institution as an AI training hub for industry.</p>
        </div>
      </div>
    </div>
  );
}
