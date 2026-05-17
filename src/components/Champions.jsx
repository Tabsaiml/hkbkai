const CHAMPIONS = [
  { name:'Dr. Tabassum Ara', role:'Chief AI Officer · AIML', desc:'Built 4 live AI portals. Driving entire AI transformation strategy.', color:'var(--cyan)', bg:'rgba(0,180,216,.1)', border:'rgba(0,180,216,.4)', icon:'👩‍💻' },
  { name:'AI Champion — CSE', role:'Dept. of Computer Science', desc:'Leading AI integration in DS, Algorithms, and Software Engineering courses.', color:'#c4b5fd', bg:'rgba(139,92,246,.1)', border:'rgba(139,92,246,.4)', icon:'👨‍🏫' },
  { name:'AI Champion — ISE', role:'Dept. of Information Science', desc:'Piloting AI-assisted viva, automated grading, and intelligent tutoring systems.', color:'#4ade80', bg:'rgba(34,197,94,.1)', border:'rgba(34,197,94,.4)', icon:'👩‍🏫' },
  { name:'AI Champion — ECE', role:'Dept. of Electronics', desc:'Integrating AI with signal processing, embedded systems, and IoT domains.', color:'var(--gold)', bg:'rgba(244,196,48,.1)', border:'rgba(244,196,48,.4)', icon:'👨‍🔬' },
  { name:'AI Champion — Mechanical', role:'Dept. of Mechanical Engg.', desc:'Pioneering AI+CAD, predictive maintenance models, and manufacturing automation projects.', color:'#fca5a5', bg:'rgba(255,107,107,.1)', border:'rgba(255,107,107,.4)', icon:'👩‍🔧' },
  { name:'AI Champion — Civil', role:'Dept. of Civil Engineering', desc:'Leading AI for structural analysis, urban planning simulations, and smart construction projects.', color:'var(--cyan)', bg:'rgba(0,180,216,.1)', border:'rgba(0,180,216,.4)', icon:'👨‍🏗️' },
  { name:'AI Champion — MBA', role:'Dept. of Management Studies', desc:'Driving AI for business analytics, marketing automation, HR tech, and entrepreneurship.', color:'#c4b5fd', bg:'rgba(139,92,246,.1)', border:'rgba(139,92,246,.4)', icon:'👩‍💼' },
  { name:'AI Champion — Humanities', role:'Dept. of Humanities & Sciences', desc:'Integrating AI ethics, human values, and AI-assisted communication into foundational courses.', color:'#4ade80', bg:'rgba(34,197,94,.1)', border:'rgba(34,197,94,.4)', icon:'📖' },
  { name:'AI Champion — AIML', role:'Dept. of AI & Machine Learning', desc:'Building advanced ML/DL projects, GenAI applications, and multi-agent system demos for students.', color:'var(--gold)', bg:'rgba(244,196,48,.1)', border:'rgba(244,196,48,.4)', icon:'👨‍💻' },
  { name:'AI Research Champion', role:'Research & Innovation Cell', desc:'Coordinating AI research projects, paper publications, and patent filings across all departments.', color:'#fca5a5', bg:'rgba(255,107,107,.1)', border:'rgba(255,107,107,.4)', icon:'🔬' },
  { name:'AI Champion — NAAC', role:'Quality Assurance Cell', desc:'Using AI for SSR documentation, evidence writing, NAAC compliance, and accreditation reporting.', color:'var(--cyan)', bg:'rgba(0,180,216,.1)', border:'rgba(0,180,216,.4)', icon:'📊' },
  { name:'AI Champion — Placements', role:'Training & Placement Cell', desc:'Integrating AI skills into placement prep — mock interviews, resume analysis, aptitude AI tools.', color:'#c4b5fd', bg:'rgba(139,92,246,.1)', border:'rgba(139,92,246,.4)', icon:'🏅' },
  { name:'AI Champion — IIC', role:'Innovation & Incubation Cell', desc:'Supporting student AI startups, IP filings, and connections to BIRAC, NASSCOM FutureSkills.', color:'#4ade80', bg:'rgba(34,197,94,.1)', border:'rgba(34,197,94,.4)', icon:'🌱' },
  { name:'AI Champion — Admin', role:'Administrative Operations', desc:'Automating office workflows — circulars, attendance reports, HR documents, budget planning with AI.', color:'var(--gold)', bg:'rgba(244,196,48,.1)', border:'rgba(244,196,48,.4)', icon:'⚡' },
  { name:'AI Industry Champion', role:'Industry Collaboration Cell', desc:'Building partnerships with AI companies, managing MoUs, and coordinating IT professional training programs.', color:'#fca5a5', bg:'rgba(255,107,107,.1)', border:'rgba(255,107,107,.4)', icon:'🤝' },
];

const AMBASSADOR_PROGRAMS = [
  { icon:'🎯', title:'Selection Criteria', desc:'Shortlisted based on interest in AI, communication skills, academic performance, and willingness to mentor peers.' },
  { icon:'📚', title:'Training Received', desc:'Priority access to all FDPs, Google Gemini Enterprise, Prompt Engineering workshops, and Google Colab pro access.' },
  { icon:'🔊', title:'Peer Learning Sessions', desc:'Each ambassador conducts at least 2 peer sessions per semester — spreading AI literacy to 60+ classmates per session.' },
  { icon:'🏆', title:'Recognition & Rewards', desc:'Certificate of Recognition from HKBK, priority internship referrals, and recognition at Annual AI Expo.' },
  { icon:'🔗', title:'Mentorship', desc:'Each ambassador is mentored by a Faculty AI Champion — ensuring guided learning, project support, and career direction.' },
  { icon:'🚀', title:'Project Leadership', desc:'Student ambassadors lead multidisciplinary AI mini-project teams (Phase 3 of transformation plan) with 3 credits.' },
];

const AMBASSADOR_PLACEHOLDERS = [
  { num:1, dept:'CSE · 3rd Yr' }, { num:2, dept:'AIML · 4th Yr' }, { num:3, dept:'ECE · 3rd Yr' },
  { num:4, dept:'ISE · 2nd Yr' }, { num:5, dept:'Mech · 4th Yr' }, { num:6, dept:'Civil · 3rd Yr' },
  { num:7, dept:'MBA · 2nd Yr' }, { num:8, dept:'CSE · 4th Yr' }, { num:9, dept:'AIML · 3rd Yr' },
  { num:10, dept:'Hum · 2nd Yr' },
];

export default function Champions() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🌟 People Behind the Transformation</div>
        <h2 className="sec-title">AI <span>Champions</span> &amp; Student Ambassadors</h2>
        <p className="sec-desc">15 faculty leaders driving department-level AI adoption, backed by 50 Student AI Ambassadors carrying the mission into every classroom.</p>
      </div>

      {/* Ambassadors Banner */}
      <div style={{ background:'linear-gradient(135deg,rgba(0,180,216,.1),rgba(139,92,246,.1))', border:'1px solid var(--border)', borderRadius:'20px', padding:'32px', marginBottom:'48px', display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap' }}>
        <div style={{ fontSize:'52px' }}>🎓</div>
        <div style={{ flex:1, minWidth:'200px' }}>
          <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'22px', marginBottom:'8px' }}>50 Student AI Ambassadors</h3>
          <p style={{ fontSize:'14px', color:'var(--grey2)', lineHeight:'1.7' }}>Selected from all departments and all years, our Student AI Ambassadors are the grassroots force of the AI transformation. They conduct peer learning sessions, onboard classmates to AI tools, lead mini-project teams, and represent HKBK at external AI events. Each ambassador is mentored by a Faculty AI Champion and receives priority access to workshops, certifications, and internship referrals.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', minWidth:'200px' }}>
          {[{ val:'50', color:'var(--cyan)', label:'Student Ambassadors' },{ val:'15', color:'var(--purple)', label:'Faculty Champions' },{ val:'9', color:'var(--gold)', label:'Departments' },{ val:'3', color:'var(--green)', label:'FDPs Completed' }].map((s,i) => (
            <div key={i} style={{ textAlign:'center', background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'28px', fontWeight:'800', color:s.color }}>{s.val}</div>
              <div style={{ fontSize:'11px', color:'var(--grey)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty AI Champions grid */}
      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'22px', marginBottom:'24px', color:'var(--cyan)' }}>👩‍🏫 Faculty AI Champions — 15 Leaders</h3>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'20px', marginBottom:'56px' }}>
        {CHAMPIONS.map((ch, i) => (
          <div key={i} className="vision-card" style={{ padding:'20px', gap:'12px', textAlign:'center', borderTop:`3px solid ${ch.color}` }}>
            <div style={{ width:'80px', height:'80px', borderRadius:'50%', background:ch.bg, border:`2px dashed ${ch.border}`, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px' }}>{ch.icon}</div>
            <div>
              <div style={{ fontSize:'14px', fontWeight:'700', marginBottom:'2px' }}>{ch.name}</div>
              <div style={{ fontSize:'11px', color:ch.color }}>{ch.role}</div>
              <div style={{ fontSize:'11px', color:'var(--grey)', marginTop:'4px' }}>{ch.desc}</div>
            </div>
            <div style={{ fontSize:'9px', color:'rgba(255,255,255,.2)', border:'1px dashed rgba(255,255,255,.1)', borderRadius:'4px', padding:'4px' }}>📸 Photo — To be added</div>
          </div>
        ))}
      </div>

      {/* Student Ambassadors section */}
      <div style={{ background:'rgba(139,92,246,.06)', border:'1px solid rgba(139,92,246,.2)', borderRadius:'20px', padding:'36px' }}>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'20px', marginBottom:'6px' }}>🎓 50 Student AI Ambassadors — Programme</h3>
        <p style={{ fontSize:'13px', color:'var(--grey)', marginBottom:'24px' }}>Representing all departments, years, and branches — our student ambassadors are the face of AI adoption on campus.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'16px' }}>
          {AMBASSADOR_PROGRAMS.map((item, i) => (
            <div key={i} className="infra-item">
              <div className="infra-item-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop:'24px', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(100px,1fr))', gap:'10px' }}>
          {AMBASSADOR_PLACEHOLDERS.map((a) => (
            <div key={a.num} style={{ background:'rgba(255,255,255,.04)', border:'1px dashed rgba(139,92,246,.3)', borderRadius:'8px', padding:'10px', textAlign:'center', fontSize:'10px', color:'var(--grey)' }}>
              🎓<br/>Ambassador {a.num}<br/><span style={{ fontSize:'9px', opacity:.5 }}>{a.dept}</span>
            </div>
          ))}
          <div style={{ background:'rgba(255,255,255,.04)', border:'1px dashed rgba(255,255,255,.1)', borderRadius:'8px', padding:'10px', textAlign:'center', fontSize:'10px', color:'var(--grey)', gridColumn:'span 2' }}>
            + 40 more ambassadors across all departments and years — <span style={{ color:'var(--purple)' }}>names to be added</span>
          </div>
        </div>
      </div>

    </div>
  );
}
