import { useState } from 'react';

export default function Infrastructure() {
  const [activeInfra, setActiveInfra] = useState('physical');

  function showInfra(id) {
    setActiveInfra(id);
  }

  return (
    <div className="sec-wrap">
      <div className="sec-header">
        <div className="sec-tag">⚙️ Infrastructure</div>
        <h2 className="sec-title">AI-Ready <span>Infrastructure</span></h2>
        <p className="sec-desc">Three pillars of infrastructure — Physical, Digital, and Policy — that power the AI-First campus transformation.</p>
      </div>

      <div className="infra-tabs">
        <button className={`infra-tab${activeInfra === 'physical' ? ' active' : ''}`} onClick={() => showInfra('physical')}>🏢 Physical</button>
        <button className={`infra-tab${activeInfra === 'digital' ? ' active' : ''}`} onClick={() => showInfra('digital')}>☁️ Digital &amp; Cloud</button>
        <button className={`infra-tab${activeInfra === 'policy' ? ' active' : ''}`} onClick={() => showInfra('policy')}>📋 Policy &amp; Curriculum</button>
        <button className={`infra-tab${activeInfra === 'industry' ? ' active' : ''}`} onClick={() => showInfra('industry')}>🤝 Industry Collaboration</button>
      </div>

      {/* Physical Panel */}
      <div className={`infra-panel${activeInfra === 'physical' ? ' active' : ''}`}>

        {/* AICTE IDEA Lab — featured full-width card */}
        <div className="infra-item" style={{ gridColumn:'1/-1', background:'linear-gradient(135deg,rgba(0,180,216,.1),rgba(139,92,246,.08))', border:'2px solid rgba(0,180,216,.45)', borderRadius:'18px', padding:'28px', display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'14px', flexWrap:'wrap' }}>
            <div style={{ fontSize:'44px' }}>💡</div>
            <div style={{ flex:1, minWidth:'220px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap', marginBottom:'4px' }}>
                <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--cyan)', textTransform:'uppercase' }}>AICTE Recognised Facility</div>
                <span style={{ background:'rgba(0,180,216,.18)', color:'var(--cyan)', border:'1px solid rgba(0,180,216,.4)', fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'20px' }}>AICTE IDEA Lab</span>
              </div>
              <h4 style={{ fontSize:'20px', fontWeight:'800', fontFamily:"'Space Grotesk',sans-serif" }}>IDEA Lab — Innovation, Design, Exploration &amp; Application</h4>
              <p style={{ fontSize:'13px', color:'var(--grey)', marginTop:'4px' }}>AICTE-funded state-of-the-art interdisciplinary innovation hub — where Design Thinking methodology meets advanced manufacturing and AI. Ideas become prototypes, prototypes become products.</p>
            </div>
            <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)', fontSize:'11px', fontWeight:'700', padding:'5px 14px', borderRadius:'20px', whiteSpace:'nowrap', alignSelf:'flex-start' }}>✅ Operational</span>
          </div>

          {/* Design Thinking Process Banner */}
          <div style={{ background:'linear-gradient(90deg,rgba(0,180,216,.12),rgba(139,92,246,.1),rgba(244,196,48,.08))', border:'1px solid rgba(255,255,255,.1)', borderRadius:'12px', padding:'14px 18px' }}>
            <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'10px' }}>🧠 Design Thinking Methodology</div>
            <div style={{ display:'flex', alignItems:'center', gap:'0', flexWrap:'wrap', justifyContent:'center' }}>
              <div style={{ textAlign:'center', padding:'8px 14px' }}>
                <div style={{ fontSize:'22px' }}>🔍</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'var(--cyan)', marginTop:'4px' }}>Empathise</div>
              </div>
              <div style={{ color:'var(--grey)', fontSize:'18px', padding:'0 4px' }}>→</div>
              <div style={{ textAlign:'center', padding:'8px 14px' }}>
                <div style={{ fontSize:'22px' }}>🎯</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'#a78bfa', marginTop:'4px' }}>Define</div>
              </div>
              <div style={{ color:'var(--grey)', fontSize:'18px', padding:'0 4px' }}>→</div>
              <div style={{ textAlign:'center', padding:'8px 14px' }}>
                <div style={{ fontSize:'22px' }}>💡</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'var(--gold)', marginTop:'4px' }}>Ideate</div>
              </div>
              <div style={{ color:'var(--grey)', fontSize:'18px', padding:'0 4px' }}>→</div>
              <div style={{ textAlign:'center', padding:'8px 14px' }}>
                <div style={{ fontSize:'22px' }}>🛠️</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'#f97316', marginTop:'4px' }}>Prototype</div>
              </div>
              <div style={{ color:'var(--grey)', fontSize:'18px', padding:'0 4px' }}>→</div>
              <div style={{ textAlign:'center', padding:'8px 14px' }}>
                <div style={{ fontSize:'22px' }}>✅</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'#22c55e', marginTop:'4px' }}>Test</div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'12px', marginTop:'4px' }}>
            <div style={{ background:'rgba(239,68,68,.08)', border:'1px solid rgba(239,68,68,.25)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>⚡</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px', color:'#fca5a5' }}>Laser Cutter / Engraver</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>CO₂ laser cutting and engraving machine for precision cutting of acrylic, wood, fabric, and metal sheets — ideal for product design and rapid prototyping.</div>
            </div>
            <div style={{ background:'rgba(249,115,22,.08)', border:'1px solid rgba(249,115,22,.25)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>⚙️</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px', color:'#fdba74' }}>CNC Milling Machine</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Computer Numerical Control milling machine for precision machining of mechanical parts, molds, and custom components for engineering prototypes.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🖨️</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>3D Printers &amp; Fabrication</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>High-resolution FDM and resin 3D printers for rapid prototyping of AI-designed models, robotics parts, and biomedical devices.</div>
            </div>
            <div style={{ background:'rgba(139,92,246,.08)', border:'1px solid rgba(139,92,246,.25)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🧩</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px', color:'#c4b5fd' }}>Design Thinking Studio</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Dedicated ideation space with sticky-wall canvases, LEGO Serious Play kits, persona boards, and journey mapping tools for structured innovation sprints.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🥽</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>VR / AR Workstations</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Meta Quest headsets and AR glasses for immersive learning, architectural walkthroughs, medical simulation, and spatial computing.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🤖</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Robotics &amp; IoT Kits</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Arduino, Raspberry Pi, ROS-compatible robots, and sensor arrays for building real-world AI+IoT applications and autonomous systems.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🖥️</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>High-Performance GPU Nodes</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>NVIDIA RTX GPU workstations for deep learning model training, computer vision, and large language model fine-tuning.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>⚛️</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Quantum Computing Terminal</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Cloud-connected quantum interface (IBM Quantum, Google Sycamore) for student experiments in quantum algorithms and cryptography.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🔬</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Electronics Prototyping Bay</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>PCB design stations, soldering workbenches, oscilloscopes, and component inventory for building custom electronics and embedded systems.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🎙️</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Podcast &amp; Content Studio</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Professional audio-video recording studio for AI-assisted educational content, research demos, and student project showcases.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>📡</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Edge AI &amp; Embedded Systems</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>NVIDIA Jetson boards, Google Coral TPUs, and Intel NCS for deploying AI models on edge devices in real-time applications.</div>
            </div>
            <div style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
              <div style={{ fontSize:'20px', marginBottom:'6px' }}>🚁</div>
              <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>Drone &amp; UAV Lab</div>
              <div style={{ fontSize:'12px', color:'var(--grey)' }}>Programmable drones with camera payloads for AI-based aerial imaging, path planning, autonomous navigation, and delivery system research.</div>
            </div>
          </div>

          <div style={{ marginTop:'4px', background:'rgba(244,196,48,.06)', border:'1px solid rgba(244,196,48,.2)', borderRadius:'10px', padding:'14px', fontSize:'13px', color:'var(--grey2)', lineHeight:'1.7' }}>
            <strong style={{ color:'var(--gold)' }}>🌟 AICTE IDEA Lab Vision:</strong> The AICTE IDEA Lab is not just a laboratory — it is the physical heart of HKBK's AI-First transformation. Students from all engineering disciplines converge here to solve real-world problems through Design Thinking, advanced fabrication tools (Laser Cutters, CNC Machines, 3D Printers), and AI-powered systems — guided by AI Champions and industry mentors.
          </div>
        </div>

        {/* i-STEM */}
        <div className="infra-item" style={{ gridColumn:'1/-1', background:'linear-gradient(135deg,rgba(244,196,48,.07),rgba(34,197,94,.05))', border:'1px solid rgba(244,196,48,.3)', borderRadius:'16px', padding:'24px' }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap:'14px', flexWrap:'wrap' }}>
            <div style={{ fontSize:'40px' }}>🏛️</div>
            <div style={{ flex:1, minWidth:'220px' }}>
              <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--gold)', textTransform:'uppercase', marginBottom:'4px' }}>Government of India Initiative</div>
              <h4 style={{ fontSize:'18px', fontWeight:'800', fontFamily:"'Space Grotesk',sans-serif", marginBottom:'6px' }}>i-STEM — Indian Science Technology &amp; Engineering Facilities Map</h4>
              <p style={{ fontSize:'13px', color:'var(--grey)', lineHeight:'1.7' }}>HKBK is a registered institution on the <strong style={{ color:'var(--white)' }}>i-STEM portal</strong> — a Government of India initiative under the Office of the Principal Scientific Adviser. Through i-STEM, our UG students, research scholars, and faculty gain <strong style={{ color:'var(--gold)' }}>direct access to world-class laboratory infrastructure</strong> at IITs, IISc, NITs, and other premier national institutions — without leaving Bengaluru.</p>
            </div>
            <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)', fontSize:'11px', fontWeight:'700', padding:'5px 14px', borderRadius:'20px', whiteSpace:'nowrap', alignSelf:'flex-start' }}>✅ Registered</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:'12px', marginTop:'18px' }}>
            {[
              { icon:'🎓', title:'UG Student Access', desc:'Undergraduate students can book time on high-end instruments at IIT Bengaluru, IISc, and NIT labs for final-year and mini projects — instruments otherwise inaccessible to engineering colleges.' },
              { icon:'🔬', title:'Research Scholar Support', desc:'PhD scholars and M.Tech researchers can access SEM, XRD, FESEM, NMR, mass spectrometry, and other advanced characterisation tools at IISc and IIT labs on a per-slot booking basis.' },
              { icon:'👩‍🔬', title:'Faculty Research Access', desc:'Faculty members can use i-STEM for collaborative research with IIT / IISc counterparts, access funded projects, and publish with premier institute co-authors — elevating HKBK\'s research output.' },
              { icon:'🤝', title:'IIT & IISc Lab Network', desc:'Access to 1,000+ instruments across 75+ premier institutions — IIT Bombay, IIT Madras, IIT Delhi, IISc Bengaluru, JNCASR, and more — all bookable through a single portal.' },
              { icon:'💡', title:'AI + Lab Research Integration', desc:'HKBK students combine AI-powered data analysis with experimental results from i-STEM labs — creating truly interdisciplinary research at the intersection of AI and physical sciences.' },
              { icon:'📄', title:'Publication & Patent Support', desc:'Access to premier lab data strengthens research quality — enabling better journal publications, conference papers, and patent applications from HKBK faculty and students.' },
            ].map((item, i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.04)', borderRadius:'10px', padding:'14px' }}>
                <div style={{ fontSize:'18px', marginBottom:'6px' }}>{item.icon}</div>
                <div style={{ fontSize:'13px', fontWeight:'700', marginBottom:'4px' }}>{item.title}</div>
                <div style={{ fontSize:'12px', color:'var(--grey)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:'14px', background:'rgba(244,196,48,.05)', border:'1px solid rgba(244,196,48,.15)', borderRadius:'10px', padding:'12px 16px', fontSize:'12px', color:'var(--grey2)', lineHeight:'1.7' }}>
            <strong style={{ color:'var(--gold)' }}>ℹ️ About i-STEM:</strong> Launched by the Office of the Principal Scientific Adviser to the Government of India, i-STEM maps all publicly funded research infrastructure in India and enables scheduled access for all eligible researchers — democratising world-class lab access for institutions like HKBK.
          </div>
        </div>

        <div className="infra-item"><div className="infra-item-icon">🧪</div><h4>Innovation Hubs</h4><p>Dedicated spaces for interdisciplinary AI projects, hackathons, and student innovation sprints with collaborative workstations.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🖥️</div><h4>Smart Classrooms</h4><p>AI-enabled classrooms with interactive displays, real-time analytics, and integrated learning management systems.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🎮</div><h4>GPU-Powered AI Labs</h4><p>Dedicated high-performance GPU workstations for model training, computer vision experiments, and deep learning projects.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🎙️</div><h4>Podcast &amp; Media Studios</h4><p>Professional recording studios for content creation, digital media production, and AI-generated educational content.</p></div>
        <div className="infra-item"><div className="infra-item-icon">📡</div><h4>High-Speed Network</h4><p>Campus-wide gigabit network infrastructure supporting cloud AI access, video streaming, and concurrent model inference.</p></div>
        <div className="infra-item"><div className="infra-item-icon">☁️</div><h4>In-House AI Servers</h4><p>Management-approved investment in on-premise AI servers for running Small Language Models locally — for privacy and cost efficiency.</p></div>
      </div>

      {/* Digital Panel */}
      <div className={`infra-panel${activeInfra === 'digital' ? ' active' : ''}`}>
        <div className="infra-item"><div className="infra-item-icon">🌐</div><h4>Google Gemini Enterprise</h4><p>Enterprise subscription providing every student and faculty member access to Google's most capable AI model for learning and research.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🤖</div><h4>Claude (Anthropic) API</h4><p>Anthropic Claude integration powering all HKBK-built portals — EduStream video library, EduPrompt faculty library, and IA Marks Chatbot.</p></div>
        <div className="infra-item"><div className="infra-item-icon">⚡</div><h4>Groq AI Infrastructure</h4><p>Ultra-fast Groq LPU inference for real-time chatbot responses, health coaching, and instant AI-powered academic support.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🏠</div><h4>Small Language Models (SLMs)</h4><p>On-premise deployment of lightweight AI models for sensitive data processing — student records, internal documents — ensuring data privacy.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🔓</div><h4>Open-Source AI Ecosystem</h4><p>Hugging Face, Ollama, LangChain, CrewAI, Mesa, PettingZoo — students and faculty work with cutting-edge open-source tools.</p></div>
        <div className="infra-item"><div className="infra-item-icon">☁️</div><h4>Cloud GPU Access</h4><p>Google Colab Pro and cloud GPU subscriptions for students working on deep learning and computer vision final year projects.</p></div>
      </div>

      {/* Policy Panel */}
      <div className={`infra-panel${activeInfra === 'policy' ? ' active' : ''}`}>
        <div className="infra-item"><div className="infra-item-icon">⚖️</div><h4>AI Ethics Policy</h4><p>Institutional guidelines on responsible AI use — academic integrity, data privacy, bias awareness, and transparent AI decision-making.</p></div>
        <div className="infra-item"><div className="infra-item-icon">📖</div><h4>AI-Integrated Curriculum</h4><p>Every department has an AI module — Civil+AI, Mechanical+AI, Humanities+AI — mandatory 3-credit AI projects for 2nd semester students.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🎓</div><h4>Faculty AI Certification</h4><p>Mandatory AI upskilling for all faculty — completion of 3-phase FDP program with certification from HKBK and external partners.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🕊️</div><h4>Human Values Integration</h4><p>All AI programs include Universal Human Values (UHV) components — ensuring technology serves humanity, not the other way around.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🏭</div><h4>Industry Collaboration Policy</h4><p>Structured framework for industry-sponsored AI projects, student internships, and joint research with AICTE-recognised partners.</p></div>
        <div className="infra-item"><div className="infra-item-icon">📊</div><h4>AI Outcome Measurement</h4><p>Key metrics tracked: AI tool adoption rate, time saved per faculty, student project quality, placement impact, and NAAC evidence quality.</p></div>
      </div>

      {/* Industry Panel */}
      <div className={`infra-panel${activeInfra === 'industry' ? ' active' : ''}`}>

        {/* Citriot Partnership Banner */}
        <div style={{ gridColumn:'1/-1', background:'linear-gradient(135deg,rgba(0,180,216,.1),rgba(34,197,94,.06))', border:'1px solid rgba(0,180,216,.35)', borderRadius:'20px', padding:'32px', display:'flex', alignItems:'flex-start', gap:'20px', flexWrap:'wrap' }}>
          <div style={{ fontSize:'48px', flexShrink:0 }}>🏢</div>
          <div style={{ flex:1, minWidth:'220px' }}>
            <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'6px' }}>Strategic Industry Partner</div>
            <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'24px', fontWeight:'800', marginBottom:'10px' }}>Citriot Technologies</h3>
            <p style={{ fontSize:'14px', color:'var(--grey2)', lineHeight:'1.8' }}>HKBK has entered a formal collaboration with <strong style={{ color:'var(--cyan)' }}>Citriot</strong>, a leading IT company, to bridge the gap between academic learning and industry-ready AI skills. This partnership brings real-world projects, mentorship from working professionals, and live deployment experience directly into the campus ecosystem.</p>
            <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginTop:'16px' }}>
              <span style={{ background:'rgba(34,197,94,.12)', color:'#22c55e', border:'1px solid rgba(34,197,94,.3)', fontSize:'12px', fontWeight:'700', padding:'6px 14px', borderRadius:'20px' }}>✅ Active MoU</span>
              <span style={{ background:'rgba(0,180,216,.1)', color:'var(--cyan)', border:'1px solid var(--border)', fontSize:'12px', fontWeight:'600', padding:'6px 14px', borderRadius:'20px' }}>3 Ongoing Projects</span>
              <span style={{ background:'rgba(139,92,246,.1)', color:'#c4b5fd', border:'1px solid rgba(139,92,246,.3)', fontSize:'12px', fontWeight:'600', padding:'6px 14px', borderRadius:'20px' }}>Faculty + Student Teams</span>
            </div>
          </div>
          <div className="tl-photo-placeholder" style={{ width:'160px', height:'120px', flexShrink:0, borderRadius:'12px' }}>🏢<br/>Citriot Logo /<br/>MoU Photo<br/><span style={{ fontSize:'9px', opacity:.4 }}>[Add Photo]</span></div>
        </div>

        <div className="infra-item"><div className="infra-item-icon">🎯</div><h4>Real-World Project Exposure</h4><p>Students and faculty work on live industry problems under Citriot mentorship — building products that are actually deployed, not just submitted as college assignments.</p></div>
        <div className="infra-item"><div className="infra-item-icon">👨‍💼</div><h4>Industry Mentorship</h4><p>Citriot professionals mentor student project teams, conduct guest lectures, and participate in project reviews — giving students direct access to working IT professionals.</p></div>
        <div className="infra-item"><div className="infra-item-icon">💼</div><h4>Internship Pipeline</h4><p>Top-performing students from collaborative projects receive priority consideration for internships and pre-placement offers at Citriot.</p></div>
        <div className="infra-item"><div className="infra-item-icon">🧑‍🏫</div><h4>Faculty Co-Development</h4><p>Citriot collaborates with HKBK faculty to co-develop AI course modules aligned with actual industry requirements — keeping curriculum relevant.</p></div>

        {/* 3 Projects */}
        <div style={{ gridColumn:'1/-1' }}>
          <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'20px', marginBottom:'20px', color:'var(--cyan)' }}>🔭 3 Ongoing Projects — Citriot × HKBK</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px' }}>

            {/* Project 1 */}
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden', transition:'all .3s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='#00b4d8'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor='rgba(0,180,216,0.2)'; e.currentTarget.style.transform='translateY(0)'; }}>
              <div style={{ background:'linear-gradient(135deg,rgba(0,180,216,.15),rgba(34,197,94,.08))', padding:'20px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px' }}>
                  <span style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--cyan)', textTransform:'uppercase' }}>Project 01 · EV / Power Electronics</span>
                  <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'20px', border:'1px solid rgba(34,197,94,.3)' }}>🟢 In Progress</span>
                </div>
                <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'18px', fontWeight:'700', marginBottom:'4px' }}>⚡ EV Charging Infrastructure</h4>
                <p style={{ fontSize:'12px', color:'var(--cyan2)' }}>DC Fast-Charging Solutions for Electric Vehicles</p>
              </div>
              <div style={{ padding:'20px', display:'flex', flexDirection:'column', gap:'14px' }}>
                <p style={{ fontSize:'13px', color:'var(--grey2)', lineHeight:'1.75' }}>Design and development of DC fast-charging solutions for electric vehicles, focusing on power electronics, Battery Management Systems (BMS), and smart grid integration.</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {['DC fast-charger hardware design & power electronics','Battery Management System (BMS) integration','Smart grid communication & load balancing','AI-based predictive charging optimisation'].map((pt,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', fontSize:'12px', color:'var(--grey2)' }}><span style={{ color:'var(--cyan)', flexShrink:0 }}>▸</span>{pt}</div>
                  ))}
                </div>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  {['Power Electronics','BMS','Smart Grid','EV / Green Tech'].map((t,i)=>(
                    <span key={i} style={{ background:i<3?'rgba(0,180,216,.08)':'rgba(34,197,94,.08)', color:i<3?'var(--cyan2)':'#86efac', fontSize:'11px', padding:'4px 10px', borderRadius:'6px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', paddingTop:'10px', borderTop:'1px solid rgba(255,255,255,.05)', fontSize:'12px', color:'var(--grey)' }}>
                  <div style={{ width:'28px', height:'28px', borderRadius:'50%', background:'rgba(0,180,216,.1)', border:'1px dashed rgba(0,180,216,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', flexShrink:0 }}>👤</div>
                  Faculty Lead &amp; Student Team — <span style={{ color:'var(--cyan)', marginLeft:'4px' }}>To be added</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden', transition:'all .3s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='#8b5cf6'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor='rgba(0,180,216,0.2)'; e.currentTarget.style.transform='translateY(0)'; }}>
              <div style={{ background:'linear-gradient(135deg,rgba(139,92,246,.14),rgba(244,196,48,.06))', padding:'20px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px' }}>
                  <span style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'#c4b5fd', textTransform:'uppercase' }}>Project 02 · IoT / Smart Grid</span>
                  <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'20px', border:'1px solid rgba(34,197,94,.3)' }}>🟢 In Progress</span>
                </div>
                <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'18px', fontWeight:'700', marginBottom:'4px' }}>📡 Intelligent Smart Meter</h4>
                <p style={{ fontSize:'12px', color:'#c4b5fd' }}>IoT-Enabled Energy Metering with Real-Time Analytics</p>
              </div>
              <div style={{ padding:'20px', display:'flex', flexDirection:'column', gap:'14px' }}>
                <p style={{ fontSize:'13px', color:'var(--grey2)', lineHeight:'1.75' }}>IoT-enabled energy metering with real-time analytics, tamper detection, and two-way communication for smart grid applications — bringing intelligence to utility infrastructure.</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {['IoT sensor integration & real-time data streaming','AI-driven tamper detection & anomaly alerts','Two-way communication for demand response','Analytics dashboard for energy consumption insights'].map((pt,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', fontSize:'12px', color:'var(--grey2)' }}><span style={{ color:'#c4b5fd', flexShrink:0 }}>▸</span>{pt}</div>
                  ))}
                </div>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  {['IoT','Real-Time Analytics','Smart Grid','Edge AI'].map((t,i)=>(
                    <span key={i} style={{ background:i<3?'rgba(139,92,246,.08)':'rgba(244,196,48,.08)', color:i<3?'#c4b5fd':'#fde68a', fontSize:'11px', padding:'4px 10px', borderRadius:'6px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', paddingTop:'10px', borderTop:'1px solid rgba(255,255,255,.05)', fontSize:'12px', color:'var(--grey)' }}>
                  <div style={{ width:'28px', height:'28px', borderRadius:'50%', background:'rgba(139,92,246,.1)', border:'1px dashed rgba(139,92,246,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', flexShrink:0 }}>👤</div>
                  Faculty Lead &amp; Student Team — <span style={{ color:'#c4b5fd', marginLeft:'4px' }}>To be added</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'16px', overflow:'hidden', transition:'all .3s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='#f4c430'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor='rgba(0,180,216,0.2)'; e.currentTarget.style.transform='translateY(0)'; }}>
              <div style={{ background:'linear-gradient(135deg,rgba(244,196,48,.12),rgba(255,107,107,.08))', padding:'20px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px' }}>
                  <span style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px', color:'var(--gold)', textTransform:'uppercase' }}>Project 03 · Edge AI / ADAS</span>
                  <span style={{ background:'rgba(34,197,94,.15)', color:'#22c55e', fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'20px', border:'1px solid rgba(34,197,94,.3)' }}>🟢 In Progress</span>
                </div>
                <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'18px', fontWeight:'700', marginBottom:'4px' }}>🚗 Autonomous Vehicle Research Platform</h4>
                <p style={{ fontSize:'12px', color:'#fde68a' }}>Sensor Fusion · Path Planning · Edge AI for ADAS</p>
              </div>
              <div style={{ padding:'20px', display:'flex', flexDirection:'column', gap:'14px' }}>
                <p style={{ fontSize:'13px', color:'var(--grey2)', lineHeight:'1.75' }}>Research platform integrating sensor fusion, path planning, and edge AI for autonomous navigation and ADAS (Advanced Driver Assistance Systems) development.</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {['Multi-sensor fusion — LiDAR, camera, radar, ultrasonic','Real-time path planning & obstacle avoidance algorithms','Edge AI inference on NVIDIA Jetson / embedded platforms','ADAS feature development — lane detection, object recognition'].map((pt,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', fontSize:'12px', color:'var(--grey2)' }}><span style={{ color:'var(--gold)', flexShrink:0 }}>▸</span>{pt}</div>
                  ))}
                </div>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  {['Sensor Fusion','Path Planning','Edge AI','ADAS'].map((t,i)=>(
                    <span key={i} style={{ background:i<3?'rgba(244,196,48,.08)':'rgba(255,107,107,.08)', color:i<3?'#fde68a':'#fca5a5', fontSize:'11px', padding:'4px 10px', borderRadius:'6px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', paddingTop:'10px', borderTop:'1px solid rgba(255,255,255,.05)', fontSize:'12px', color:'var(--grey)' }}>
                  <div style={{ width:'28px', height:'28px', borderRadius:'50%', background:'rgba(244,196,48,.08)', border:'1px dashed rgba(244,196,48,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', flexShrink:0 }}>👤</div>
                  Faculty Lead &amp; Student Team — <span style={{ color:'var(--gold)', marginLeft:'4px' }}>To be added</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
