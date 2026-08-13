import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, CheckCircle2, Monitor, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Figma } from './icons/BrandIcons';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: 'UI/UX Designer Intern',
      company: 'Fresh Mind Ideas',
      location: 'Technopark Campus, Thiruvananthapuram',
      period: 'April 2026 – July 2026',
      icon: <Figma size={20} color="var(--accent-cyan)" />,
      badge: 'Mobile App & Digital Design',
      highlights: [
        'Created creative designs for digital marketing campaigns and presentation (PPT) designs.',
        'Developed UI/UX designs for mobile applications, focusing on user-friendly interface designs.',
        'Contributed to visual presentations and digital creatives aligned with project requirements.',
      ],
      skills: ['Mobile App Design', 'Digital Creatives', 'Presentations', 'UI/UX Design', 'User-friendly Interfaces'],
    },
    {
      role: 'UI/UX Intern',
      company: 'The Kreative Academy',
      location: 'Edappally, Kochi',
      period: 'December 2025 – February 2026',
      icon: <Monitor size={20} color="var(--accent-violet)" />,
      badge: 'Academy & Product Design',
      highlights: [
        'Designed user interfaces and user flows for web and mobile applications as part of academy training projects.',
        'Practiced core UI/UX principles including information architecture, responsive design, and WCAG accessibility guidelines.',
        'Presented design concepts and iterated rapidly based on peer and mentor critique.',
      ],
      skills: ['Information Architecture', 'Responsive Design', 'Accessibility', 'Mobile & Web Flows', 'User Testing'],
    },
    {
      role: 'Technical Intern',
      company: 'Srishti Innovative Computer Systems',
      location: 'Trivandrum',
      period: 'April 2024',
      icon: <Cpu size={20} color="var(--accent-pink)" />,
      badge: 'IT & Systems Support',
      highlights: [
        'Gained hands-on exposure to technical support and computer systems fundamentals.',
        'Built a strong technical foundation in troubleshooting, IT workflows, and computer applications architecture.',
      ],
      skills: ['Technical Support', 'Computer Systems', 'IT Workflows', 'Troubleshooting'],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>Work Experience</span>
        </div>
        <h2>Professional Journey & Internships</h2>
        <p>Hands-on industry experience building design systems, prototyping, and conducting usability research.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}
      >
        {/* Experience Selector Tabs (Left) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="glass-panel"
              style={{
                padding: '20px 24px',
                cursor: 'pointer',
                borderColor: activeTab === idx ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeTab === idx ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                backgroundImage: activeTab === idx
                  ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(138, 43, 226, 0.05) 100%)'
                  : 'none',
                transform: activeTab === idx ? 'translateX(6px)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                      {exp.role}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  color={activeTab === idx ? 'var(--accent-cyan)' : 'var(--text-dim)'}
                  style={{
                    transform: activeTab === idx ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)', fontSize: '0.78rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Details Display (Right) */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
            >
              <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div>
                <span className="badge-pill" style={{ fontSize: '0.75rem', marginBottom: '8px' }}>
                  {experiences[activeTab].badge}
                </span>
                <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>
                  {experiences[activeTab].role}
                </h3>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1rem' }}>
                  {experiences[activeTab].company}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Calendar size={14} color="var(--accent-violet)" />
                  <span>{experiences[activeTab].period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '4px' }}>
                  <MapPin size={14} />
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>

            <div className="glow-divider" style={{ margin: '20px 0' }} />

            <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '14px' }}>
              Key Contributions & Accomplishments:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {experiences[activeTab].highlights.map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '10px' }}>
              Skills & Methodologies Applied:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {experiences[activeTab].skills.map((skill, i) => (
                <span key={i} className="tag-mini" style={{ background: 'rgba(0, 240, 255, 0.06)', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
