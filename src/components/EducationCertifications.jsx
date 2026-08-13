import React from 'react';
import { GraduationCap, Award, Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationCertifications() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'IGNOU (Distance Learning)',
      status: 'Currently Pursuing',
      iconColor: 'var(--accent-cyan)',
      desc: 'Advanced software design, database management, web applications, and system analysis principles.',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Christ College, Puliyanmala',
      status: 'Graduated 2025',
      iconColor: 'var(--accent-violet)',
      desc: 'Foundational computer science, programming logic (Python, PHP, JS), database systems, and web design basics.',
    },
  ];

  const certifications = [
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      iconColor: '#ea4335',
      tag: 'Marketing & UX',
    },
    {
      title: 'Adobe Photoshop',
      issuer: 'G-TEC Computer Education',
      iconColor: '#3178c6',
      tag: 'Visual & Graphics',
    },
    {
      title: 'Canva',
      issuer: 'Simplilearn',
      iconColor: '#00c4cc',
      tag: 'Visual Assets',
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      iconColor: '#0096d6',
      tag: 'Emerging Tech',
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>Academic Background</span>
        </div>
        <h2>Education & Professional Certifications</h2>
        <p>Combining computer science degree studies with continuous specialized design & marketing certifications.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}
      >
        {/* Education History Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3
            className="font-display"
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <GraduationCap size={24} color="var(--accent-cyan)" />
            <span>Academic Qualifications</span>
          </h3>

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card-interactive"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge-pill" style={{ fontSize: '0.75rem' }}>
                  {edu.status}
                </span>
                <Calendar size={14} color="var(--text-dim)" />
              </div>

              <h4 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                {edu.degree}
              </h4>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '0.92rem', fontWeight: 600 }}>
                <Building size={16} />
                <span>{edu.institution}</span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '4px' }}>
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3
            className="font-display"
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <Award size={24} color="var(--accent-pink)" />
            <span>Certifications & Credential Badges</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-interactive"
                style={{
                  padding: '20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Award size={20} color={cert.iconColor} />
                  <span className="tag-mini" style={{ fontSize: '0.7rem' }}>
                    {cert.tag}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                  {cert.title}
                </h4>

                <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  Issued by {cert.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
