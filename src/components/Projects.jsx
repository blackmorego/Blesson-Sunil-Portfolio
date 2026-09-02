import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Smartphone, ShoppingBag, Layout, CheckCircle, ExternalLink, X, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const projects = [
    {
      id: 'attune',
      title: 'Attune – Dating Application Concept',
      category: 'mobile',
      categoryLabel: 'Mobile App UI/UX Design',
      type: 'Personal Project',
      icon: <Smartphone size={24} color="var(--accent-pink)" />,
      badge: 'Featured Mobile Concept',
      description:
        'Designed end-to-end UI/UX for a modern dating app concept, focusing on intuitive onboarding, matching algorithms, and real-time chat flows built with engaging navigation.',
      deliverables: [
        'End-to-end UI/UX design & interactive prototype',
        'Wireframes focused on intuitive navigation and user engagement',
        'Onboarding, matching card stack, and chat flow architectures',
        'Figma Design System with reusable UI components and color tokens',
      ],
      flowBreakdown: [
        {
          title: '1. Frictionless Onboarding Flow',
          detail: 'Minimal steps to profile setup, personality trait tags, verified photo badges, and preference sliders.',
        },
        {
          title: '2. Intuitive Match Discovery',
          detail: 'Fluid swipe gestures, rich bio expandable cards, shared interest highlights, and instant match celebration modal.',
        },
        {
          title: '3. Engaging Chat & Connections',
          detail: 'Contextual icebreaker prompts, voice notes support, media sharing, and safety block/report controls.',
        },
      ],
      palette: [
        { name: 'Passion Rose', hex: '#ff2a85' },
        { name: 'Deep Amethyst', hex: '#4c1d95' },
        { name: 'Soft Velvet', hex: '#1e1b4b' },
        { name: 'Warm Amber', hex: '#f59e0b' },
      ],
      tags: ['Figma', 'Mobile UI/UX', 'Wireframing', 'User Flows', 'Prototyping', 'Interaction Design'],
      figmaEmbedUrl:
        'https://embed.figma.com/proto/GG4v7PltlvJc0ftfPktNXO/Attune?page-id=1230%3A2302&node-id=1230-2801&viewport=-233%2C-297%2C0.3&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1230%3A2907&show-proto-sidebar=1&embed-host=share',
      figmaShareUrl:
        'https://www.figma.com/proto/GG4v7PltlvJc0ftfPktNXO/Attune?node-id=1230-2801',
    },
    {
      id: 'mono',
      title: 'Mono – E-Commerce Website (Gaming Equipment)',
      category: 'web',
      categoryLabel: 'E-Commerce & Web Design',
      type: 'Personal Project',
      icon: <ShoppingBag size={24} color="var(--accent-cyan)" />,
      badge: 'Featured Web Concept',
      description:
        'Designed a responsive e-commerce web platform for high-performance gaming gear, applying visual hierarchy and modern UI patterns to maximize product discoverability and checkout conversion.',
      deliverables: [
        'Responsive web layouts for desktop, tablet, and mobile breakpoints',
        'Structured product listing, multi-filter navigation, cart drawer, and checkout UX',
        'Applied visual hierarchy and high-contrast dark gaming aesthetic',
        'Design tokens for product specs comparison & instant checkout confirmation',
      ],
      flowBreakdown: [
        {
          title: '1. Product Discovery & Smart Filtering',
          detail: 'Multi-attribute filter bar (wireless tech, RGB lighting, DPI specs, price range) with instant live result updates.',
        },
        {
          title: '2. High-Impact Product Detail Page (PDP)',
          detail: 'Prominent 3D gear showcase, spec comparison matrix, customer reviews summary, and sticky buy button.',
        },
        {
          title: '3. Streamlined Cart & Checkout UX',
          detail: 'Slide-out mini cart, express 1-click checkout options, address auto-complete, and clear price breakdown.',
        },
      ],
      palette: [
        { name: 'Cyber Cyan', hex: '#00f0ff' },
        { name: 'Electric Purple', hex: '#9333ea' },
        { name: 'Slate Obsidian', hex: '#0f172a' },
        { name: 'Neon Green Accent', hex: '#10b981' },
      ],
      tags: ['Figma', 'Web Design', 'E-Commerce UX', 'Responsive Grid', 'Visual Hierarchy', 'Conversion Design'],
      figmaEmbedUrl:
        'https://embed.figma.com/proto/375gZhHyx9baXWewStKeGD/Mono-E-commerce-website?page-id=343%3A36&node-id=343-40&viewport=58%2C41%2C0.13&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=415%3A456&embed-host=share',
      figmaShareUrl:
        'https://www.figma.com/proto/375gZhHyx9baXWewStKeGD/Mono-E-commerce-website?node-id=343-40',
    },
    {
      id: 'focal',
      title: 'Focal – UI/UX Design Project',
      category: 'web',
      categoryLabel: 'UI/UX Design',
      type: 'Personal Project',
      icon: <Layout size={24} color="var(--accent-pink)" />,
      badge: 'Featured Concept',
      description:
        'Interactive UI/UX design project showcasing user-centric flows, detailed prototyping, and responsive layouts for a seamless digital experience.',
      deliverables: [
        'High-fidelity interactive prototypes in Figma',
        'Structured component library and design tokens',
        'Optimized user flows and navigation architecture',
      ],
      flowBreakdown: [
        {
          title: '1. Seamless Navigation',
          detail: 'Intuitive interface design focusing on clarity and ease of use.',
        },
        {
          title: '2. Engaging Interactions',
          detail: 'Smooth transitions and micro-interactions for a polished feel.',
        },
      ],
      palette: [
        { name: 'Accent', hex: '#ff2a85' },
        { name: 'Dark Base', hex: '#0f172a' },
      ],
      tags: ['Figma', 'UI/UX', 'Prototyping', 'Interaction Design'],
      figmaEmbedUrl:
        'https://embed.figma.com/proto/77b74e2bvYqbed38X91M5G/FOCAL?page-id=&node-id=28-24&viewport=278%2C-508%2C0.58&scaling=min-zoom&content-scaling=fixed&embed-host=share',
      figmaShareUrl:
        'https://www.figma.com/proto/77b74e2bvYqbed38X91M5G/FOCAL?node-id=28-24',
    },
    {
      id: 'bens-spices',
      title: 'Bens Spices – E-Commerce Website',
      category: 'web',
      categoryLabel: 'E-Commerce & Web Design',
      type: 'Live Project',
      inProgress: true,
      icon: <ShoppingBag size={24} color="#f59e0b" />,
      badge: 'Active Live Project',
      description:
        'A live, ongoing e-commerce platform project for Bens Spices, focusing on an intuitive catalog, spice blending guides, and a seamless checkout experience. The project is actively in the research and wireframing phase.',
      deliverables: [
        'User research and competitor analysis for live market',
        'Information architecture for product categories',
        'Low-fidelity wireframing and user flows',
      ],
      flowBreakdown: [
        {
          title: '1. Discovery & Research (Current)',
          detail: 'Analyzing user behavior in online grocery shopping and outlining the optimal flow for culinary enthusiasts.',
        },
        {
          title: '2. UI Design & Prototyping (Upcoming)',
          detail: 'Building high-fidelity mockups with a warm, spice-inspired color palette and intuitive checkout process.',
        },
      ],
      palette: [
        { name: 'Saffron Gold', hex: '#fbbf24' },
        { name: 'Paprika Red', hex: '#ef4444' },
        { name: 'Clove Brown', hex: '#78350f' },
        { name: 'Sage Green', hex: '#22c55e' },
      ],
      tags: ['WIP', 'E-Commerce', 'Web Design', 'UI/UX'],
      figmaEmbedUrl: '',
      figmaShareUrl: '',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>Portfolio Showcase</span>
        </div>
        <h2>Featured UI/UX Projects</h2>
        <p>Interactive Figma prototypes highlighting user research, wireframing, and design system decisions.</p>

        {/* Filter Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '28px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={filter === 'mobile' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => setFilter('web')}
            className={filter === 'web' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            Web & E-Commerce
          </button>
        </div>
      </div>

      {/* Projects List Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card-interactive"
              style={{
                padding: 'clamp(24px, 5vw, 32px) clamp(20px, 5vw, 36px)',
                borderRadius: 'var(--radius-lg)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                background: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
            {/* Card Header & Main Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Info Group */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 100%', minWidth: 0 }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  {project.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span className="badge-pill" style={{ fontSize: '0.72rem', padding: '3px 10px', lineHeight: 1 }}>
                      {project.type}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1 }}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-display" style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3, wordBreak: 'break-word' }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, flexWrap: 'wrap', flex: '1 1 auto' }}>
                {project.inProgress ? (
                  <button
                    disabled
                    className="btn-secondary"
                    style={{
                      padding: '10px 20px',
                      fontSize: '0.88rem',
                      gap: '8px',
                      cursor: 'not-allowed',
                      opacity: 0.6,
                      minHeight: '42px',
                      height: 'auto',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                      justifyContent: 'center',
                      flex: '1 1 auto',
                    }}
                  >
                    <span>{project.type === 'Live Project' ? 'Live (In Development)' : 'Work in Progress'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-primary"
                    style={{
                      padding: '10px 20px',
                      fontSize: '0.88rem',
                      gap: '8px',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.35)',
                      cursor: 'pointer',
                      minHeight: '42px',
                      height: 'auto',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                      justifyContent: 'center',
                      flex: '1 1 auto',
                    }}
                  >
                    <Zap size={16} style={{ flexShrink: 0 }} />
                    <span>Open Interactive Prototype</span>
                  </button>
                )}

                {project.figmaShareUrl && (
                  <a
                    href={project.figmaShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '10px 20px',
                      fontSize: '0.88rem',
                      gap: '8px',
                      textDecoration: 'none',
                      minHeight: '42px',
                      height: 'auto',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                      justifyContent: 'center',
                      flex: '1 1 auto',
                    }}
                  >
                    <ExternalLink size={16} style={{ flexShrink: 0 }} />
                    <span>Figma Link</span>
                  </a>
                )}
              </div>
            </div>

            {/* Description Paragraph */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {project.description}
            </p>

            {/* Key Deliverables Card */}
            <div
              style={{
                padding: '22px 24px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h4
                className="font-display"
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Layout size={16} color="var(--accent-cyan)" />
                <span>Key Deliverables</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-mini">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {/* INTERACTIVE FIGMA PROTOTYPE POP-UP MODAL (PORTALED DIRECTLY TO BODY) */}
      {activeModalProject &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: 'rgba(5, 8, 18, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              animation: 'fadeIn 0.3s ease',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '1120px',
                height: '88vh',
                backgroundColor: '#0c101d',
                borderRadius: '24px',
                border: '1px solid rgba(0, 240, 255, 0.35)',
                boxShadow: '0 25px 60px rgba(0, 240, 255, 0.25), 0 0 50px rgba(0, 0, 0, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                animation: 'zoomIn 0.3s ease',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid var(--border-glass)',
                  gap: '16px',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {activeModalProject.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
                      <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                        Interactive Figma Pop-up
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {activeModalProject.categoryLabel}
                      </span>
                    </div>
                    <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {activeModalProject.figmaShareUrl && (
                    <a
                      href={activeModalProject.figmaShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        gap: '6px',
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>Open in Figma</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)';
                      e.currentTarget.style.borderColor = '#ef4444';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                    title="Close Pop-up (Esc)"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Iframe Container */}
              <div style={{ flex: 1, position: 'relative', background: '#05070e', width: '100%', height: '100%' }}>
                <iframe
                  style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                  src={activeModalProject.figmaEmbedUrl}
                  allowFullScreen
                  title={`${activeModalProject.title} Interactive Figma Prototype`}
                />
              </div>

              {/* Modal Footer Info Bar */}
              <div
                style={{
                  padding: '12px 24px',
                  borderTop: '1px solid var(--border-glass)',
                  background: 'rgba(10, 14, 26, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={14} color="var(--accent-cyan)" />
                  <span>Live Interactive Figma Prototype • Click hotspots and test user flows directly inside this Project</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Press <kbd style={{ padding: '2px 6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>Esc</kbd> to close
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
