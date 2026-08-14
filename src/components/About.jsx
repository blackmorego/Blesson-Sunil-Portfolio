import React from 'react';
import { Layers, ShieldCheck, MapPin, Mail, Phone , Search, Compass} from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      icon: <Search size={24} color="var(--accent-cyan)" />,
      title: 'User Research & Usability',
      desc: 'Conducting user interviews and usability testing to validate design concepts and refine user flows.',
    },
    {
      icon: <Compass size={24} color="var(--accent-violet)" />,
      title: 'Information Architecture',
      desc: 'Designing clean, logical site maps and navigation structures for seamless user navigation.',
    },
    {
      icon: <Layers size={24} color="var(--accent-pink)" />,
      title: 'Rapid Prototyping',
      desc: 'Crafting high-fidelity wireframes and interactive prototypes in Figma for fast design iteration.',
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-cyan)" />,
      title: 'Design Systems & Accessibility',
      desc: 'Maintaining scalable design tokens, component libraries, and adhering to WCAG accessibility standards.',
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>About Me</span>
        </div>
        <h2>Passionate About Human-Centered Design</h2>
        <p>Combining computer science fundamentals with modern interaction design to create intuitive web & mobile products.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}
      >
        {/* Profile Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card-interactive"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  color: '#fff',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
                }}
              >
                BS
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  Blesson Sunil
                </h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                  UI/UX Designer
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', fontSize: '1rem' }}>
              Aspiring UI/UX Designer with hands-on internship experience in user research, wireframing, prototyping, and interaction design. Skilled in Figma, Adobe XD, and the Adobe Creative Suite, with a growing portfolio of personal projects in mobile app and e-commerce design.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
              I combine my computer applications background (BCA/MCA) with a strong interest in creating accessible, user-centered digital experiences that solve real user friction points.
            </p>
          </div>

          <div
            style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-glass)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <MapPin size={16} color="var(--accent-cyan)" />
              <span>Kattappana, Idukki, Kerala, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Mail size={16} color="var(--accent-violet)" />
              <span>blessonsunil8@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Phone size={16} color="var(--accent-pink)" />
              <span>+91 8590389594</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Design Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card-interactive"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pillar.icon}
              </div>
              <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                {pillar.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
