const PHASES = [
  {
    num: 'Phase 1', title: 'Faculty Training', period: 'Month 1',
    desc: '<strong>Focus:</strong> All faculty understand AI tools, learn Prompt Engineering, identify real problems in their work, and build + test actual prompts using real college documents.',
    participants: '<strong>Participants:</strong> All Faculty across all departments',
    deliverables: ['25–30 Faculty Teams','25–30 Problems Identified','Prompt Library v1','Prompts Tested on Real Docs'],
    gold: false,
  },
  {
    num: 'Phase 2', title: 'Faculty Pilot', period: 'Month 2',
    desc: '<strong>Focus:</strong> Selected departments pilot AI in real academic work — lesson plans, question papers, assignments, viva, and SSR writing using prompts they built.',
    participants: '<strong>Pilot Departments:</strong> CS, IS, AIML/DS, ECE, MBA',
    deliverables: ['AI Lesson Plans','AI Question Papers','AI Assignments','AI Viva Conducted','Time Saved Report'],
    gold: false,
  },
  {
    num: 'Phase 3', title: 'Student Awareness', period: 'Month 3–4',
    desc: '<strong>Focus:</strong> Motivate and expose 2nd, 3rd, 4th year students to AI tools, career opportunities, and real project possibilities. Design Thinking workshop to convert problems into AI ideas.',
    participants: '<strong>Topics:</strong> AI Awareness · Python · Colab · Hugging Face · APIs · GitHub · Design Thinking',
    deliverables: ['Student Awareness Sessions','Tool Demos','Problem→AI Idea Mapping'],
    gold: false,
  },
  {
    num: 'Phase 4', title: 'Student AI Projects', period: 'Month 4–5',
    desc: '<strong>Focus:</strong> Students work in teams of 3–4 with a faculty mentor to build real AI mini projects. Each team has a problem statement, dataset, working model, demo, report, and GitHub repo.',
    participants: '<strong>Tools:</strong> Python · Google Colab · Hugging Face · Open-source models · Open datasets',
    deliverables: ['AI Project Culture','GitHub Repos','Working Model Demos','Project Reports'],
    gold: false,
  },
  {
    num: 'Phase 5', title: 'Institutionalization', period: 'Month 6',
    desc: '<strong>Focus:</strong> Embed AI permanently into the college system — not just for NAAC, not just for a workshop, but as the college\'s permanent way of working. Annual AI Expo, AI Club, industry collaboration.',
    participants: '<strong>Strategic Outcome:</strong> HKBK positioned as <em style="color:var(--gold);">"AI-Integrated Engineering College"</em> — differentiated in admissions, placements, NAAC, AICTE, and industry partnerships.',
    deliverables: ['AI Project Repository','Annual AI Expo','AI Club / AI Lab','Industry Collaboration','NAAC Documentation Ready'],
    gold: true,
  },
];

export default function Roadmap() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">🗺️ 6-Month Plan</div>
        <h2 className="sec-title">AI Transformation <span>Roadmap</span></h2>
        <p className="sec-desc">A structured 6-month implementation plan with clear phases, participants, and deliverables — executed by all leaders at HKBK with consulting support from Mr. Rocky Jagtiani &amp; team.</p>
      </div>

      <div className="roadmap-phases">
        {PHASES.map((ph, i) => (
          <div
            key={i}
            className="phase-row"
            style={ph.gold ? { borderColor:'rgba(244,196,48,.3)' } : {}}
          >
            <div
              className="phase-label"
              style={ph.gold ? { background:'rgba(244,196,48,.06)', borderRightColor:'rgba(244,196,48,.2)' } : {}}
            >
              <div className="phase-num" style={ph.gold ? { color:'var(--gold)' } : {}}>{ph.num}</div>
              <h4>{ph.title}</h4>
              <div className="phase-period">{ph.period}</div>
            </div>
            <div className="phase-body">
              <p dangerouslySetInnerHTML={{ __html: ph.desc }} />
              <p style={{ marginTop:'8px' }} dangerouslySetInnerHTML={{ __html: ph.participants }} />
              <div className="phase-deliverables">
                {ph.deliverables.map((d, j) => (
                  <span
                    key={j}
                    className="deliverable"
                    style={ph.gold ? { borderColor:'rgba(244,196,48,.3)', color:'var(--gold)' } : {}}
                  >{d}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic point */}
      <div style={{ marginTop:'40px', background:'rgba(244,196,48,.06)', border:'1px solid rgba(244,196,48,.2)', borderRadius:'16px', padding:'32px' }}>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", color:'var(--gold)', marginBottom:'16px', fontSize:'20px' }}>💡 The Strategic Positioning Opportunity</h3>
        <p style={{ fontSize:'15px', color:'var(--grey2)', lineHeight:'1.8' }}>
          If this transformation succeeds, HKBK will be positioned as an <strong style={{ color:'var(--white)' }}>"AI-Integrated Engineering College"</strong> — a designation that creates competitive advantages in <strong style={{ color:'var(--gold)' }}>Admissions</strong> (students and parents choose AI-ready colleges), <strong style={{ color:'var(--gold)' }}>Placements</strong> (companies prefer graduates with AI skills), <strong style={{ color:'var(--gold)' }}>NAAC</strong> (AI-integrated curriculum scores higher), <strong style={{ color:'var(--gold)' }}>AICTE</strong> (nodal center status and funding), and <strong style={{ color:'var(--gold)' }}>Industry Collaboration</strong> (AI-ready campus attracts partnerships). This is not just academic improvement — this is an institutional transformation strategy.
        </p>
      </div>
    </div>
  );
}
