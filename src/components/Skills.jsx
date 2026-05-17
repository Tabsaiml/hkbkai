import { useState } from 'react';
import { SKILLS_DATA, LEVEL_COLOR, LEVEL_BAR } from '../data/skills.js';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(SKILLS_DATA.map(s => s.category))];

  const filtered = activeFilter === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === activeFilter);

  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🎯 Capabilities</div>
        <h2 className="sec-title">Skills &amp; <span>Competencies</span></h2>
        <p className="sec-desc">AI skills being built across faculty, students, and leadership at HKBK — updated as we grow.</p>
      </div>

      {/* Filter buttons */}
      <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', marginBottom:'28px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`skill-filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'20px' }}>
        {filtered.map((s, i) => {
          const c = LEVEL_COLOR[s.level] || LEVEL_COLOR['Beginner'];
          const bar = LEVEL_BAR[s.level] || 25;
          return (
            <div
              key={i}
              className="skill-card"
              style={{ borderColor:'var(--border)' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = c.text; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
                <span style={{ fontSize:'26px' }}>{s.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'14px', fontWeight:'700', color:'var(--white)' }}>{s.title}</div>
                  <div style={{ fontSize:'10px', color:'var(--grey)', marginTop:'1px' }}>{s.category} &nbsp;•&nbsp; {s.who}</div>
                </div>
                <span style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  color: c.text,
                  fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'20px', whiteSpace:'nowrap'
                }}>
                  {s.level}
                </span>
              </div>
              <p style={{ fontSize:'12px', color:'var(--grey)', lineHeight:'1.6', marginBottom:'12px' }}>{s.desc}</p>
              <div style={{ background:'rgba(255,255,255,.06)', borderRadius:'20px', height:'5px', overflow:'hidden' }}>
                <div style={{
                  height:'100%', width:`${bar}%`,
                  background:`linear-gradient(90deg,${c.text},${c.border})`,
                  borderRadius:'20px', transition:'width .6s'
                }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
