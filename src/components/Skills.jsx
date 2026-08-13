import React from 'react';
import { PenTool, Layout, Code, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillSphere3D from './3d/SkillSphere3D';

export default function Skills() {
  const categories = [
    {
      title: 'Design Tools',
      icon: <PenTool size={22} color="var(--accent-cyan)" />,
      badge: 'Software Mastery',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Affinity Designer', 'Canva'],
    },
    {
      title: 'UI/UX Skills',
      icon: <Layout size={22} color="var(--accent-violet)" />,
      badge: 'Core Competencies',
      skills: [
        'User Research',
        'Information Architecture',
        'Wireframing',
        'Prototyping',
        'Interaction Design',
        'Usability Testing',
        'Responsive Design',
        'Accessibility (WCAG)',
      ],
    },
    {
      title: 'Technical Skills',
      icon: <Code size={22} color="var(--accent-pink)" />,
      badge: 'Computer Applications',
      skills: ['HTML (Basic)', 'CSS (Basic)', 'JavaScript (Basic)', 'Python (Basic)', 'PHP (Basic)', 'Vibe Coding'],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>Skill Matrix</span>
        </div>
        <h2>Tools & Methodologies</h2>
        <p>A balanced toolkit of modern UI/UX design software, user research methodologies, and frontend technical knowledge.</p>
      </div>

      {/* 3D Interactive Orbit Visualizer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{
          marginBottom: '50px',
          padding: '24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(15, 20, 35, 0.7) 0%, rgba(20, 28, 48, 0.4) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
            Interactive 3D Skill Orbit (Drag to Rotate)
          </span>
        </div>
        <SkillSphere3D />
      </motion.div>

      {/* Structured Category Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card-interactive"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cat.icon}
                </div>
                <span className="badge-pill" style={{ fontSize: '0.72rem' }}>
                  {cat.badge}
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)',
                      fontSize: '0.88rem',
                      color: '#fff',
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle size={14} color="var(--accent-cyan)" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
