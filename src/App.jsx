import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UxProcess from './components/UxProcess';
import Projects from './components/Projects';
import DesignSystemSandbox from './components/DesignSystemSandbox';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import BackgroundCanvas from './components/3d/BackgroundCanvas';
import { ArrowUp, FileText } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* 3D Magnetic Cursor */}
      <CustomCursor />

      {/* Grid Overlay & Glowing Orbs */}
      <BackgroundCanvas />
      <div className="bg-grid-overlay" />
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <div 
          style={{ 
            background: 'linear-gradient(180deg, rgba(7, 9, 19, 0) 0%, rgba(25, 15, 45, 0.2) 15%, rgba(10, 25, 45, 0.1) 50%, rgba(7, 9, 19, 0.1) 100%)',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="glow-divider" style={{ marginTop: 0 }} />
          <About />
          <div className="glow-divider" />
          <UxProcess />
          <div className="glow-divider" />
          <Projects />
          <div className="glow-divider" />
          <DesignSystemSandbox />
          <div className="glow-divider" />
          <Experience />
          <div className="glow-divider" />
          <Skills />
          <div className="glow-divider" />
          <EducationCertifications />
          <div className="glow-divider" />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-glass)',
          background: 'rgba(5, 8, 18, 0.95)',
          backdropFilter: 'blur(16px)',
          padding: '40px 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div>
              <div className="font-display" style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                Blesson Sunil
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                © {new Date().getFullYear()}. Designed By BLESSON
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <FileText size={14} color="var(--accent-cyan)" />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                padding: '10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Back to Top"
            >
              <ArrowUp size={18} color="var(--accent-cyan)" />
            </button>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
