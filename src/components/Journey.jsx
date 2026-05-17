export default function Journey() {
  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">📅 2026 Timeline</div>
        <h2 className="sec-title">Our <span>AI Transformation</span> Journey</h2>
        <p className="sec-desc">A month-by-month chronicle of how HKBK is rewriting the future of engineering education.</p>
      </div>

      <div className="timeline">

        {/* ── JAN-FEB ── */}
        <div className="tl-item">
          <div className="tl-dot-wrap"><div className="tl-dot">🌅</div></div>
          <div className="tl-content">
            <div className="tl-card">
              <div className="tl-month">January – February 2026</div>
              <h3>🧠 The Awakening — Principal's Vision Sessions</h3>
              <p>Our transformation began with conviction from the top. The Principal conducted multiple intensive awareness sessions with all department heads and faculty members, laying the groundwork for a campus-wide AI revolution.</p>
              <ul>
                <li>Principal-led awareness sessions with all HoDs and faculty across all departments</li>
                <li>Introduction to AI terminologies: Machine Learning, Deep Learning, Generative AI, Agentic AI, Quantum Computing</li>
                <li>Why AI matters for engineering colleges — impact on admissions, placements, and NAAC</li>
                <li>Demystifying Quantum Computing — what it means for our students' future</li>
                <li>Building a shared vocabulary and urgency across the institution</li>
                <li>Identifying AI champions in each department</li>
              </ul>
            </div>
          </div>
          <div className="tl-photos-col">
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Principal's Session</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">HoD Meeting</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Faculty Awareness</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Dept Heads Discussion</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Vision Board</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Group Photo</div><div className="ph-hint">Add photo</div></div>
          </div>
        </div>

        {/* ── MARCH ── */}
        <div className="tl-item">
          <div className="tl-dot-wrap"><div className="tl-dot">🛠️</div></div>
          <div className="tl-content">
            <div className="tl-card">
              <div className="tl-month">March 2026</div>
              <h3>🚀 Building AI — From Theory to Working Portals</h3>
              <p>March saw HKBK move from awareness to action. Our AIML department built real, working AI applications — proving that AI is not just for tech giants. This hands-on approach earned us national recognition.</p>
              <ul>
                <li>AI-powered presentation tools deployed for faculty use</li>
                <li>UHV (Universal Human Values) Portal — first AI-integrated academic portal</li>
                <li>Result Analysis System — automated student performance analysis using AI</li>
                <li>Student IA Marks Chatbot — students can query their marks using natural language</li>
                <li>Faculty Prompt Library — curated academic prompts for teaching, NAAC, research</li>
                <li>HKBK EduStream — YouTube-style college video library with role-based access</li>
              </ul>
              <div className="achievement-badge">🏅 AICTE Recognition: Potential Nodal Center for Universal Human Values</div>
            </div>
          </div>
          <div className="tl-photos-col">
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">AICTE Recognition</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Portal Live Demo</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">EduStream Launch</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Student Chatbot Demo</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Prompt Library</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Team at Work</div><div className="ph-hint">Add photo</div></div>
          </div>
        </div>

        {/* ── APRIL ── */}
        <div className="tl-item">
          <div className="tl-dot-wrap"><div className="tl-dot">👨‍🏫</div></div>
          <div className="tl-content">
            <div className="tl-card">
              <div className="tl-month">April 2026</div>
              <h3>🎓 6-Month AI Transformation Program — Expert Partnership</h3>
              <p>HKBK partnered with industry expert <strong style={{ color:'var(--cyan)' }}>Mr. Rocky Jagtiani</strong> to launch a comprehensive 6-month AI transformation program. Three intensive Faculty Development Programs were conducted, covering prompt engineering, hands-on AI tools, and pedagogical innovation.</p>
              <ul>
                <li><strong>FDP Cohort 1</strong> — Prompt Engineering Fundamentals: Persona–Context–Task–Output framework</li>
                <li><strong>FDP Cohort 2</strong> — AI for Academic Work: Lesson plans, question papers, SSR writing, viva questions</li>
                <li><strong>FDP Cohort 3</strong> — Hands-on AI Tools: Hugging Face, Google Colab, Python, APIs</li>
                <li>25–30 faculty teams formed; 25–30 real-world problems identified</li>
                <li>25–30 prompts built and tested on real documents → Prompt Library v1 created</li>
                <li>Design Thinking workshop for faculty innovation</li>
              </ul>
            </div>
          </div>
          <div className="tl-photos-col">
            <div className="tl-photo-slot">
              <img src="./images/fdp4.jpg" alt="FDP 4" onError={e => e.target.style.display='none'} />
              <div className="ph-icon">📸</div><div className="ph-label">Faculty Group Photo</div><div className="ph-hint">Add photo</div>
            </div>
            <div className="tl-photo-slot">
              <img src="./images/fdp1.jpg" alt="FDP 1" onError={e => e.target.style.display='none'} />
              <div className="ph-icon">📸</div><div className="ph-label">FDP Cohort 1</div><div className="ph-hint">Add photo</div>
            </div>
            <div className="tl-photo-slot">
              <img src="./images/fdp2.jpg" alt="FDP 2" onError={e => e.target.style.display='none'} />
              <div className="ph-icon">📸</div><div className="ph-label">FDP Cohort 2</div><div className="ph-hint">Add photo</div>
            </div>
            <div className="tl-photo-slot">
              <img src="./images/fdp3.jpg" alt="FDP 3" onError={e => e.target.style.display='none'} />
              <div className="ph-icon">📸</div><div className="ph-label">Mr. Rocky Jagtiani</div><div className="ph-hint">Add photo</div>
            </div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Design Thinking Workshop</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Certificate Distribution</div><div className="ph-hint">Add photo</div></div>
          </div>
        </div>

        {/* ── MAY ── */}
        <div className="tl-item">
          <div className="tl-dot-wrap"><div className="tl-dot">🌱</div></div>
          <div className="tl-content">
            <div className="tl-card">
              <div className="tl-month">May 2026 — Present</div>
              <h3>🌐 Layer 1 Deployed — Awareness Campus Goes Live</h3>
              <p>May marks the full activation of Layer 1 of the 5-layer AI framework. AI is now being used across departments in teaching, planning, and administration. The transformation is happening at scale.</p>
              <ul>
                <li>AI-assisted lesson planning deployed across Computer Science, IS, AIML, ECE, MBA</li>
                <li>Automated assessments — AI-generated question papers and viva questions</li>
                <li>AI literacy program for all students (2nd, 3rd, 4th year)</li>
                <li>Google Gemini Enterprise access rolled out to students and faculty</li>
                <li>Multidisciplinary AI projects introduced for 2nd semester students (3 credits)</li>
                <li>AI rubrics integrated into Civil, Mechanical, and Humanities assessments</li>
                <li>Administrative workflow automation — SSR writing, evidence documentation</li>
              </ul>
            </div>
          </div>
          <div className="tl-photos-col">
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Student AI Workshop</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">AI Projects Showcase</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Gemini Enterprise</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Classroom AI Session</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">AI Rubrics Demo</div><div className="ph-hint">Add photo</div></div>
            <div className="tl-photo-slot"><div className="ph-icon">📸</div><div className="ph-label">Campus AI Event</div><div className="ph-hint">Add photo</div></div>
          </div>
        </div>

      </div>
    </div>
  );
}
