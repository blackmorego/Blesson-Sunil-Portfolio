import React from 'react';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenResume }) {
  const stats = [
    { label: 'Internships', value: '3', sub: 'Fresh Mind Ideas, Kreative Academy, Srishti' },
    { label: 'Design Stack', value: 'Figma+', sub: 'Adobe XD, Photoshop, Illustrator' },
    { label: 'Focus Areas', value: 'UI/UX', sub: 'Research, Prototyping, Accessibility' },
    { label: 'Tech Foundation', value: 'BCA/MCA', sub: 'Computer Applications Background' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2,
          padding: '0 24px', /* Override global padding to fix vertical alignment */
          width: '100%',
        }}
      >
        {/* Status Pill Badge */}
        <div
          className="badge-pill animate-pulse-glow"
          style={{
            marginBottom: '24px',
            padding: '8px 18px',
            fontSize: '0.88rem',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.25)',
            textAlign: 'center',
            whiteSpace: 'normal',
            maxWidth: '100%',
          }}
        >
          <Sparkles size={16} color="var(--accent-cyan)" />
          <span>Available for UI/UX Design Opportunities</span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-display gradient-text"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '900px',
            letterSpacing: '-0.03em',
          }}
        >
          Crafting Intuitive & Accessible Digital Experiences
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#fff',
            maxWidth: '680px',
            marginBottom: '36px',
            lineHeight: 1.6,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Hi, I'm <strong style={{ color: '#fff' }}>Blesson Sunil</strong>. I don't just design interfaces, I craft digital journeys. Fusing psychological research with pixel-perfect Figma aesthetics, I build intuitive experiences that actually solve problems.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '60px',
            width: '100%',
          }}
        >
          <a href="#projects" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <Mail size={18} />
            <span>Contact Me</span>
          </a>

        </div>

        {/* Interactive Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card-interactive"
              style={{
                padding: '24px 20px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                className="font-display gradient-accent"
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: 'var(--text-dim)',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
