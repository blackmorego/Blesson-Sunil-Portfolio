import React from 'react';
import { X, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
          background: '#0d111d',
          border: '1px solid var(--accent-cyan)',
          boxShadow: '0 0 50px rgba(0, 240, 255, 0.25)',
          position: 'relative',
        }}
      >
        {/* Header Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
            borderBottom: '1px solid var(--border-glass)',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/profile.png"
              alt="Blesson Sunil"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                objectFit: 'cover',
                border: '1px solid var(--border-glass)',
              }}
            />
            <div>
              <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
                Blesson Sunil – Resume
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>UI/UX Designer</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="/Blesson_Sunil_Resume.pdf"
              download="Blesson_Sunil_Resume.pdf"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.82rem', textDecoration: 'none' }}
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </a>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* RESUME BODY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#e2e8f0' }}>
          {/* Header Contact Block */}
          <div>
            <h1 className="font-display" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
              Blesson Sunil
            </h1>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              UI/UX Designer
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span>📍 Kattappana, Idukki</span>
              <span>📞 +91 8590389594</span>
              <span>✉️ blessonsunil8@gmail.com</span>
              <a href="https://linkedin.com/in/blesson-sunil-647319392" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>
                LinkedIn
              </a>
              <a href="https://behance.net/blessonsunil2" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>
                Behance
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '10px' }}>
              PROFILE
            </h4>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
              Aspiring UI/UX Designer with hands-on internship experience in user research, wireframing, prototyping, and interaction design. Skilled in Figma, Adobe XD, and the Adobe Creative Suite, with a growing portfolio of personal projects in mobile app and e-commerce design. Combines a computer applications background with a strong interest in creating accessible, user-centered digital experiences.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '14px' }}>
              EXPERIENCE
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>
                  <span>UI/UX Designer Intern | Fresh Mind Ideas</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>April 2026 – July 2026</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px' }}>Technopark Campus, Thiruvananthapuram</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <li>Created creative designs for digital marketing campaigns and presentation (PPT) designs.</li>
                  <li>Developed UI/UX designs for mobile applications, focusing on user-friendly interface designs.</li>
                  <li>Contributed to visual presentations and digital creatives aligned with project requirements.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>
                  <span>UI/UX Intern | The Kreative Academy</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>December 2025 – February 2026</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px' }}>Edappally, Kochi</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <li>Designed user interfaces and user flows for web and mobile applications as part of academy training projects.</li>
                  <li>Practiced core UI/UX principles including information architecture, responsive design, and accessibility guidelines.</li>
                  <li>Presented design concepts and iterated based on peer and mentor feedback.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>
                  <span>Technical Intern | Srishti Innovative Computer Systems</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>April 2024</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '6px' }}>Trivandrum</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <li>Gained exposure to technical support and computer systems fundamentals, building a foundation in troubleshooting and IT workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '14px' }}>
              PROJECTS
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                  Attune – Dating Application (UI/UX Design)
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>Personal Project</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <li>Designed end-to-end UI/UX for a dating app concept, including onboarding, matching, and chat flows.</li>
                  <li>Created wireframes and high-fidelity prototypes in Figma focused on intuitive navigation and engagement.</li>
                </ul>
              </div>

              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                  Mono – E-Commerce Website (Gaming Equipment)
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>Personal Project</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <li>Designed a responsive e-commerce website concept for gaming equipment, covering product listing, cart, and checkout flows.</li>
                  <li>Applied visual hierarchy and modern UI patterns to enhance product discoverability and conversion.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '10px' }}>
                EDUCATION
              </h4>
              <div style={{ fontSize: '0.88rem', lineHeight: 1.5 }}>
                <div style={{ fontWeight: 700, color: '#fff' }}>Master of Computer Applications (MCA)</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>IGNOU (Distance Learning) — Currently Pursuing</div>
                <div style={{ fontWeight: 700, color: '#fff', marginTop: '8px' }}>Bachelor of Computer Applications (BCA)</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>Christ College, Puliyanmala — Graduated 2025</div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '10px' }}>
                CERTIFICATIONS
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <li>Fundamentals of Digital Marketing – Google</li>
                <li>Adobe Photoshop – G-TEC Computer Education</li>
                <li>Canva – Simplilearn</li>
                <li>AI for Beginners – HP LIFE</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-glass)', paddingBottom: '6px', marginBottom: '10px' }}>
              SKILLS
            </h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <div><strong style={{ color: '#fff' }}>Design Tools:</strong> Figma, Adobe XD, Photoshop, Illustrator, Affinity Designer, Canva</div>
              <div><strong style={{ color: '#fff' }}>UI/UX Skills:</strong> User Research, Information Architecture, Wireframing, Prototyping, Interaction Design, Usability Testing, Responsive Design, Accessibility</div>
              <div><strong style={{ color: '#fff' }}>Technical Skills:</strong> HTML, CSS (Basic), JavaScript (Basic), Python (Basic), PHP (Basic)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
