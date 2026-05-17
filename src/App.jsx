import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Vision from './components/Vision.jsx';
import Framework from './components/Framework.jsx';
import Champions from './components/Champions.jsx';
import Journey from './components/Journey.jsx';
import Portals from './components/Portals.jsx';
import Infrastructure from './components/Infrastructure.jsx';
import Achievements from './components/Achievements.jsx';
import Skills from './components/Skills.jsx';
import Roadmap from './components/Roadmap.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* HOME */}
      <section className={`section${activeTab === 'home' ? ' active' : ''}`}>
        <Hero setActiveTab={setActiveTab} />
        {/* Quick intro cards */}
        <div className="sec-wrap" style={{ paddingTop:'40px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'20px' }}>
            <div className="layer-card l3" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('vision'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>👁️</div>
              <h3>Leadership Vision</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>Director, Principal, and Chief AI Officer share their vision for HKBK's AI-first future.</p>
            </div>
            <div className="layer-card l2" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('framework'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>🧱</div>
              <h3>5-Layer Framework</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>Layers 1–3 active, Layer 4 in progress, Layer 5 planned — a structured transformation across the entire campus.</p>
            </div>
            <div className="layer-card l1" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('champions'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>🌟</div>
              <h3>AI Champions &amp; Ambassadors</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>15 faculty AI Champions leading department-level transformation, supported by 50 Student Ambassadors.</p>
            </div>
            <div className="layer-card l1" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('journey'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>📅</div>
              <h3>Our Journey</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>From awareness sessions in Jan–Feb to live AI portals and AICTE recognition — month by month.</p>
            </div>
            <div className="layer-card l4" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('portals'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>🚀</div>
              <h3>Live AI Portals</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>Fully functional AI-powered portals built in-house — prompt library, video library, health tracker, and student chatbot.</p>
            </div>
            <div className="layer-card l5" style={{ cursor:'pointer' }} onClick={() => { setActiveTab('achievements'); window.scrollTo({ top:0, behavior:'smooth' }); }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>🏆</div>
              <h3>Achievements</h3>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'8px' }}>AICTE recognition, VAANI sponsorship, ATAL FDP, Quantum Computing grants, and AIML intake expansion.</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

      {/* VISION */}
      <section className={`section${activeTab === 'vision' ? ' active' : ''}`}>
        <Vision />
        <Footer />
      </section>

      {/* FRAMEWORK */}
      <section className={`section${activeTab === 'framework' ? ' active' : ''}`}>
        <Framework />
        <Footer />
      </section>

      {/* CHAMPIONS */}
      <section className={`section${activeTab === 'champions' ? ' active' : ''}`}>
        <Champions />
        <Footer />
      </section>

      {/* JOURNEY */}
      <section className={`section${activeTab === 'journey' ? ' active' : ''}`}>
        <Journey />
        <Footer />
      </section>

      {/* PORTALS */}
      <section className={`section${activeTab === 'portals' ? ' active' : ''}`}>
        <Portals />
        <Footer />
      </section>

      {/* INFRASTRUCTURE */}
      <section className={`section${activeTab === 'infra' ? ' active' : ''}`}>
        <Infrastructure />
        <Footer />
      </section>

      {/* ACHIEVEMENTS */}
      <section className={`section${activeTab === 'achievements' ? ' active' : ''}`}>
        <Achievements />
        <Footer />
      </section>

      {/* SKILLS */}
      <section className={`section${activeTab === 'skills' ? ' active' : ''}`}>
        <Skills />
        <Footer />
      </section>

      {/* ROADMAP */}
      <section className={`section${activeTab === 'roadmap' ? ' active' : ''}`}>
        <Roadmap />
        <Footer />
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo">HKBK Group of Institutions</div>
      <div className="footer-sub">AI-First &amp; Quantum-Ready Campus by 2028</div>
      <p>Bengaluru, Karnataka · hod.aiml@hkbk.edu.in</p>
    </footer>
  );
}
