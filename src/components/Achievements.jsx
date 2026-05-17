export default function Achievements() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🏆 Recognition</div>
        <h2 className="sec-title">Achievements &amp; <span>Recognition</span></h2>
        <p className="sec-desc">National recognition, sponsorships, and institutional milestones that validate HKBK's AI-First journey.</p>
      </div>

      <div className="achieve-grid">

        {/* IDEA Lab — full width */}
        <div className="achieve-card" style={{ gridColumn:'1/-1', background:'linear-gradient(135deg,rgba(0,180,216,.08),rgba(139,92,246,.06))', border:'1px solid rgba(0,180,216,.35)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', justifyContent:'center', flexWrap:'wrap', marginBottom:'12px' }}>
            <div className="achieve-icon" style={{ marginBottom:0, fontSize:'40px' }}>💡</div>
            <div style={{ textAlign:'left' }}>
              <div style={{ fontSize:'10px', fontWeight:'800', letterSpacing:'2px', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'2px' }}>AICTE Funded Facility</div>
              <h3 style={{ margin:0, fontSize:'17px' }}>AICTE IDEA Lab — Established at HKBK</h3>
            </div>
            <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)', fontSize:'11px', fontWeight:'700', padding:'4px 12px', borderRadius:'20px' }}>✅ Operational</span>
          </div>
          <p>HKBK established an <strong>AICTE-funded IDEA Lab</strong> (Innovation, Design, Exploration &amp; Application) — a state-of-the-art interdisciplinary innovation hub equipped with Laser Cutters, CNC Machines, 3D Printers, VR/AR Workstations, Robotics Kits, GPU Nodes, Drone Lab, and a dedicated Design Thinking Studio. One of the few engineering colleges in Karnataka with a fully operational AICTE IDEA Lab.</p>
          <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', marginTop:'14px' }}>
            <span style={{ background:'rgba(239,68,68,.1)', color:'#fca5a5', border:'1px solid rgba(239,68,68,.25)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>⚡ Laser Cutter</span>
            <span style={{ background:'rgba(249,115,22,.1)', color:'#fdba74', border:'1px solid rgba(249,115,22,.25)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>⚙️ CNC Machine</span>
            <span style={{ background:'rgba(255,255,255,.06)', color:'var(--grey2)', border:'1px solid rgba(255,255,255,.1)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>🖨️ 3D Printers</span>
            <span style={{ background:'rgba(139,92,246,.1)', color:'#c4b5fd', border:'1px solid rgba(139,92,246,.25)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>🧩 Design Thinking</span>
            <span style={{ background:'rgba(255,255,255,.06)', color:'var(--grey2)', border:'1px solid rgba(255,255,255,.1)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>🥽 VR / AR</span>
            <span style={{ background:'rgba(255,255,255,.06)', color:'var(--grey2)', border:'1px solid rgba(255,255,255,.1)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>🤖 Robotics</span>
            <span style={{ background:'rgba(255,255,255,.06)', color:'var(--grey2)', border:'1px solid rgba(255,255,255,.1)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>🚁 Drone Lab</span>
            <span style={{ background:'rgba(255,255,255,.06)', color:'var(--grey2)', border:'1px solid rgba(255,255,255,.1)', fontSize:'11px', padding:'4px 10px', borderRadius:'8px' }}>⚛️ Quantum Terminal</span>
          </div>
          <div className="achieve-date">📅 2026 — AICTE Funded</div>
          <div className="achieve-photo-placeholder">📸 IDEA Lab — Lab Photo / AICTE Sanction Letter<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">🏛️</div>
          <h3>AICTE Potential Nodal Center — Universal Human Values</h3>
          <p>Recognised by the All India Council for Technical Education as a <strong>Potential Nodal Center for Universal Human Values (UHV)</strong> — acknowledging our commitment to integrating ethics, human values, and responsible AI principles across all programs.</p>
          <div className="achieve-date">📅 March 2026</div>
          <div className="achieve-photo-placeholder">📸 AICTE Recognition Letter / Certificate<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">🔒</div>
          <h3>AI in Cybersecurity FDP — VAANI AICTE Initiative</h3>
          <p>Secured sponsorship under the <strong>VAANI AICTE Initiative</strong> for conducting a Faculty Development Program in AI-integrated Cybersecurity — covering machine learning, threat detection, and network security under the AIML department.</p>
          <div className="achieve-date">📅 2026</div>
          <div className="achieve-photo-placeholder">📸 VAANI Sponsorship Letter<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">⚛️</div>
          <h3>Quantum Computing FDP — ATAL AICTE Initiative</h3>
          <p>Secured sponsorship through the <strong>ATAL AICTE Initiative</strong> for a Quantum Computing Faculty Development Program — lab setup, faculty training, and curriculum development for Quantum + AI convergence.</p>
          <div className="achieve-date">📅 2026</div>
          <div className="achieve-photo-placeholder">📸 ATAL Sponsorship Letter<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">🇮🇳</div>
          <h3>ATAL AICTE — FDP Sponsorship</h3>
          <p>Secured funding under the <strong>ATAL AICTE scheme</strong> for Faculty Development Programs in AI and Quantum Computing — a national government recognition of HKBK's training quality and academic leadership.</p>
          <div className="achieve-date">📅 2026</div>
          <div className="achieve-photo-placeholder">📸 ATAL Scheme Document<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">🌐</div>
          <h3>Google Gemini Enterprise</h3>
          <p>Secured Google Gemini Enterprise subscription for the entire campus — making HKBK one of the few Indian engineering colleges where every student has access to enterprise-grade AI for their academics.</p>
          <div className="achieve-date">📅 Phase 4 — 2026</div>
          <div className="achieve-photo-placeholder">📸 Google Partnership / MoU<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">👨‍🏫</div>
          <h3>3 FDPs Completed</h3>
          <p>Three Faculty Development Programs successfully conducted with Mr. Rocky Jagtiani — covering Prompt Engineering, AI for Academia, and Hands-on AI Tools. 100+ faculty trained across all departments.</p>
          <div className="achieve-date">📅 April 2026</div>
          <div className="achieve-photo-placeholder">📸 FDP Group Photo<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

        <div className="achieve-card">
          <div className="achieve-icon">🏗️</div>
          <h3>AI Portals Built In-House</h3>
          <p>Production-grade AI applications built entirely in-house using Claude AI — HKBK EduStream (live), EduPrompt Faculty Library, and IA Marks Chatbot — running on HKBK's own server infrastructure.</p>
          <div className="achieve-date">📅 March – May 2026</div>
          <div className="achieve-photo-placeholder">📸 Portal Screenshots / Demo<br/><span style={{ fontSize:'10px', color:'rgba(255,255,255,.2)' }}>[Placeholder — Add Photo]</span></div>
        </div>

      </div>
    </div>
  );
}
