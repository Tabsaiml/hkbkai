export default function Vision() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">👁️ Leadership</div>
        <h2 className="sec-title">Voices of <span>Transformation</span></h2>
        <p className="sec-desc">The visionaries behind HKBK's AI-first revolution — from the boardroom to the classroom.</p>
      </div>

      <div className="vision-grid">

        {/* DIRECTOR */}
        <div className="vision-card" style={{ borderTop:'3px solid var(--gold)' }}>
          <div className="vision-person">
            <img src="./images/director.jpeg" alt="Director" className="vision-photo" onError={e => { e.target.style.display='none'; }} />
            <div className="vision-info">
              <h3>Director</h3>
              <div className="role">HKBK Group of Institutions</div>
              <div className="dept">Strategic Leadership &amp; Vision</div>
            </div>
          </div>
          <div className="vision-quote">"</div>
          <p className="vision-text">
            The IT industry is changing faster than any of us anticipated. When AI automates coding, testing, and system administration — what will happen to our graduates? This question kept me awake. The answer is not to fear AI, but to master it.
            <br /><br />
            We are not just teaching engineering. We are preparing human beings who will collaborate with AI, lead AI teams, and build AI systems. If IT jobs disappear, our students must be the ones who create the next wave of AI-powered opportunities. That is why AI-First is not a strategy for us — it is a survival imperative and a moral responsibility.
          </p>
          <div className="vision-highlights">
            <div className="vision-highlight"><div className="hi-icon">🎯</div><p><strong>AI-First Mandate:</strong> Every department, every subject, every semester must integrate AI by 2027.</p></div>
            <div className="vision-highlight"><div className="hi-icon">💼</div><p><strong>Future-Proofing:</strong> Our students will not compete with AI — they will direct it.</p></div>
            <div className="vision-highlight"><div className="hi-icon">🌍</div><p><strong>Global Positioning:</strong> HKBK will be recognised as India's AI-First engineering college.</p></div>
          </div>
        </div>

        {/* PRINCIPAL */}
        <div className="vision-card" style={{ borderTop:'3px solid var(--cyan)' }}>
          <div className="vision-person">
            <img src="./images/principal.jpeg" alt="Principal" className="vision-photo" onError={e => { e.target.style.display='none'; }} />
            <div className="vision-info">
              <h3>Principal</h3>
              <div className="role">HKBK College of Engineering</div>
              <div className="dept">Academic Leadership</div>
            </div>
          </div>
          <div className="vision-quote">"</div>
          <p className="vision-text">
            When parents and students choose an engineering college today, they look at buildings and laboratories. In 2026 and beyond, they will ask: what AI infrastructure does this college have? What AI skills will my child gain? Does this college have access to real AI tools?
            <br /><br />
            We began this year with awareness sessions to break down the fear and confusion around AI. Every department head, every faculty member needed to understand not just what AI is, but how it applies to their discipline. Today, our campus runs on AI-powered portals, AI-assisted teaching, and AI-integrated curriculum. Admissions of the future will be won not by physical infrastructure alone, but by the quality and depth of our academic and AI infrastructure.
          </p>
          <div className="vision-highlights">
            <div className="vision-highlight"><div className="hi-icon">🏛️</div><p><strong>Academic Infrastructure:</strong> AI tools, portals, and curriculum as competitive differentiators in admissions.</p></div>
            <div className="vision-highlight"><div className="hi-icon">📚</div><p><strong>Faculty Transformation:</strong> Teachers who use AI in the classroom inspire students to master it.</p></div>
            <div className="vision-highlight"><div className="hi-icon">📊</div><p><strong>Outcome Focus:</strong> Every AI initiative must improve placement rates, NAAC scores, and student competency.</p></div>
          </div>
        </div>

        {/* CHIEF AI OFFICER */}
        <div className="vision-card" style={{ borderTop:'3px solid var(--purple)' }}>
          <div className="vision-person">
            <img src="./images/dr_tabassum.jpeg" alt="Dr. Tabassum Ara" className="vision-photo" onError={e => { e.target.style.display='none'; }} />
            <div className="vision-info">
              <h3>Dr. Tabassum Ara</h3>
              <div className="role">Chief AI Officer &amp; Dean IIC</div>
              <div className="dept">HoD — Dept. of AIML, HKBKCE</div>
            </div>
          </div>
          <div className="vision-quote">"</div>
          <p className="vision-text">
            Every achievement in this journey — the portals we built, the students we trained, the recognitions we earned — comes from one belief: that AI without humanity is incomplete. We have woven Human Values and Ethics into every AI initiative.
            <br /><br />
            Our intake in AIML has grown from 120 to 180 students — not because we marketed AI, but because we demonstrated AI. I built four live AI applications using Claude — a video library, a prompt library, a health tracker, and a student chatbot — to show that our campus does not just teach AI, we live it. Every sponsorship we earned, every collaboration we secured, began with this proof.
          </p>
          <div className="vision-highlights">
            <div className="vision-highlight"><div className="hi-icon">📈</div><p><strong>AIML Intake:</strong> Expanded from 120 to 180 students due to AI-first brand positioning.</p></div>
            <div className="vision-highlight"><div className="hi-icon">🏅</div><p><strong>AICTE Sponsorship:</strong> Secured funding for AI + Cybersecurity program development.</p></div>
            <div className="vision-highlight"><div className="hi-icon">⚛️</div><p><strong>Quantum Computing:</strong> Sponsorship secured from VAANI and ATAL for Quantum readiness.</p></div>
            <div className="vision-highlight"><div className="hi-icon">🕊️</div><p><strong>Human Values:</strong> All AI-First programs incorporate ethics, UHV, and responsible AI principles.</p></div>
            <div className="vision-highlight"><div className="hi-icon">🤝</div><p><strong>Industry Training:</strong> HKBK now trains IT professionals in AI — creating new revenue and recognition.</p></div>
            <div className="vision-highlight"><div className="hi-icon">🌐</div><p><strong>Google Gemini:</strong> Secured enterprise AI access for every student — real-world AI at their fingertips.</p></div>
          </div>
        </div>

      </div>
    </div>
  );
}
