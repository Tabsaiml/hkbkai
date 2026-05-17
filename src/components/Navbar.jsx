import { useState } from 'react';

const TABS = [
  { id: 'home',         label: '🏠 Home' },
  { id: 'vision',       label: '👁️ Leadership Vision' },
  { id: 'framework',    label: '🧱 5-Layer Framework' },
  { id: 'champions',    label: '🌟 AI Champions' },
  { id: 'journey',      label: '📅 Our Journey' },
  { id: 'portals',      label: '🚀 Our Portals', badge: 'LIVE' },
  { id: 'infra',        label: '⚙️ Infrastructure' },
  { id: 'achievements', label: '🏆 Achievements' },
  { id: 'skills',       label: '🎯 Skills' },
  { id: 'roadmap',      label: '🗺️ Roadmap' },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobOpen, setMobOpen] = useState(false);

  function handleTab(id) {
    setActiveTab(id);
    setMobOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="nav-logo">🤖</div>
          <div>
            <div className="nav-brand-text">HKBK Group of Institutions</div>
            <div className="nav-brand-sub">AI Transformation Journey 2026</div>
          </div>
        </div>

        <div className="nav-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => handleTab(tab.id)}
            >
              {tab.label}
              {tab.badge && <span className="nav-badge">{tab.badge}</span>}
            </button>
          ))}
        </div>

        <button className="mob-menu-btn" onClick={() => setMobOpen(o => !o)}>☰</button>
      </nav>

      <div className={`mob-nav${mobOpen ? ' open' : ''}`}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => handleTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
