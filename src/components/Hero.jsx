import { useEffect, useRef } from 'react';

export default function Hero({ setActiveTab }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let W, H, pts = [], animId;

    function resize() {
      W = c.width = c.parentElement.offsetWidth;
      H = c.height = c.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      pts.push({
        x: Math.random() * 2000, y: Math.random() * 1000,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        a: Math.random() * 0.6 + 0.1
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,216,${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,180,216,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  function goTo(id) {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="hero">
      <canvas id="particles" ref={canvasRef}></canvas>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-badge"><span>🎯</span> New Year Resolution 2026</div>
        <h1 className="hero-title">
          <span className="line1">HKBK AI Transformation</span>
          <span className="line2">Journey 2026</span>
        </h1>
        <p className="hero-sub">
          A bold commitment to build an <strong>AI-First</strong> and <strong>Quantum-Ready</strong> campus<br />
          within the next 2 years — transforming education, research, and careers.
        </p>
        <p className="hero-college">HKBK Group of Institutions — Bengaluru, Karnataka</p>
        <div className="hero-resolution">
          <h3>📜 Our 2026 Resolution</h3>
          <p>"In the next <em>2 years</em>, we will become an <em>AI-First</em><br />
          and <em>Quantum-Ready</em> campus — equipping every student<br />
          and faculty with the tools of the future."</p>
        </div>
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <button className="portal-link" style={{ fontSize:'14px', padding:'12px 24px' }} onClick={() => goTo('vision')}>
            👁️ Leadership Vision
          </button>
          <button className="portal-link" style={{ fontSize:'14px', padding:'12px 24px', borderColor:'rgba(139,92,246,.4)', color:'#c4b5fd', background:'rgba(139,92,246,.1)' }} onClick={() => goTo('framework')}>
            🧱 Explore Framework
          </button>
          <button className="portal-link" style={{ fontSize:'14px', padding:'12px 24px', borderColor:'rgba(244,196,48,.3)', color:'var(--gold)', background:'rgba(244,196,48,.08)' }} onClick={() => goTo('journey')}>
            📅 Our Journey
          </button>
        </div>
      </div>
      <div className="scroll-hint">↓ Explore Our Journey</div>

      {/* Quick intro cards */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0 }}></div>
    </div>
  );
}
