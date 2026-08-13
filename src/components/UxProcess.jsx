import { Search, Compass, Layers, Sliders, Sparkles, Zap, Target, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function UxProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Empathize & Research',
      subtitle: 'Understanding User Pain Points',
      icon: <Search size={22} color="var(--accent-cyan)" />,
      badge: 'Discovery Phase',
      color: 'var(--accent-cyan)',
      summary: 'Laying the foundation through qualitative user interviews, competitor benchmarking, and persona mapping.',
      deliverables: [
        'User Interview Scripts & Transcripts',
        'Empathy Maps & Target User Personas',
        'Competitive Feature Matrix Analysis',
        'Problem Statement & Friction Point Map',
      ],
      keyMetrics: '85% increase in user intent clarity before wireframing',
      quote: 'Great design starts by listening deeply to the user before touching a single vector pixel.',
    },
    {
      number: '02',
      title: 'Define & Architect',
      subtitle: 'Mapping Flows & Low-Fi Structure',
      icon: <Compass size={22} color="var(--accent-violet)" />,
      badge: 'Architecture Phase',
      color: 'var(--accent-violet)',
      summary: 'Structuring information hierarchy and defining intuitive user journeys from landing to conversion.',
      deliverables: [
        'User Flow Diagrams & Decision Trees',
        'Information Architecture (IA) Site Maps',
        'Low-Fidelity Paper & Digital Wireframes',
        'Content Hierarchy Schemas',
      ],
      keyMetrics: '3x faster navigation flow approvals in early testing',
      quote: 'Clear information architecture ensures users never feel lost or confused.',
    },
    {
      number: '03',
      title: 'Prototype & Test',
      subtitle: 'Interactive Figma Mockups',
      icon: <Layers size={22} color="var(--accent-pink)" />,
      badge: 'Interaction Phase',
      color: 'var(--accent-pink)',
      summary: 'Building high-fidelity interactive Figma prototypes with realistic animations and testing them with real users.',
      deliverables: [
        'High-Fidelity Figma Component Prototypes',
        'Interactive Smart Animate Transitions',
        'Usability Testing Reports & Task Completion Loops',
        'A/B Feedback Variant Iterations',
      ],
      keyMetrics: '92% task success rate during usability validation',
      quote: 'If a picture is worth 1000 words, a prototype is worth 1000 meetings.',
    },
    {
      number: '04',
      title: 'Design Systems & Handoff',
      subtitle: 'Scalability & Accessibility Audit',
      icon: <Sliders size={22} color="var(--accent-blue)" />,
      badge: 'Delivery Phase',
      color: 'var(--accent-blue)',
      summary: 'Establishing standardized Figma design tokens, reusable UI component libraries, and developer handoff specs.',
      deliverables: [
        'Figma Design Tokens (Color, Type, Spacing)',
        'Atomic UI Component Library & Variants',
        'WCAG AA/AAA Accessibility Contrast Audits',
        'Developer Specs & Asset Export Handoff',
      ],
      keyMetrics: '100% WCAG color contrast compliance across components',
      quote: 'Consistent design systems empower engineering teams to build faster with zero design debt.',
    },
  ];

  return (
    <section id="process" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} />
          <span>Design Methodology</span>
        </div>
        <h2>My End-to-End UI/UX Process</h2>
        <p>A structured, human-centered framework bridging user research, rapid Figma prototyping, and design system engineering.</p>
      </div>

      {/* Process Stepper Navigation Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '36px',
        }}
      >
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="glass-panel"
              style={{
                padding: '20px',
                cursor: 'pointer',
                borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                backgroundImage: isActive
                  ? `linear-gradient(135deg, rgba(15, 22, 40, 0.95) 0%, rgba(25, 35, 60, 0.8) 100%)`
                  : 'none',
                boxShadow: isActive ? `0 10px 30px -10px ${step.color}40` : 'none',
                transform: isActive ? 'translateY(-4px)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: isActive ? step.color : 'var(--text-dim)',
                  }}
                >
                  {step.number}
                </span>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                {step.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      <div
        className="glass-panel"
        style={{
          padding: '40px',
          borderColor: steps[activeStep].color,
          boxShadow: `0 20px 50px -20px ${steps[activeStep].color}30`,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span className="badge-pill" style={{ background: `${steps[activeStep].color}15`, color: steps[activeStep].color, borderColor: `${steps[activeStep].color}40` }}>
                {steps[activeStep].badge}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                Step {steps[activeStep].number} of 04
              </span>
            </div>

            <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              {steps[activeStep].title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {steps[activeStep].summary}
            </p>

            <div
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.03)',
                borderLeft: `4px solid ${steps[activeStep].color}`,
                marginBottom: '28px',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
                "{steps[activeStep].quote}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: steps[activeStep].color, fontSize: '0.92rem', fontWeight: 600 }}>
              <Zap size={18} />
              <span>Key Impact: {steps[activeStep].keyMetrics}</span>
            </div>
          </div>

          {/* Right Column: Key Deliverables List */}
          <div
            style={{
              padding: '28px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-glass)',
            }}
          >
            <h4
              className="font-display"
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Target size={20} color={steps[activeStep].color} />
              <span>Core Outputs & Artifacts</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {steps[activeStep].deliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: `${steps[activeStep].color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <CheckCircle2 size={15} color={steps[activeStep].color} />
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
