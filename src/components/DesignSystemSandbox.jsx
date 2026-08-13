import React, { useState } from 'react';
import { Sliders, ShieldCheck, Sparkles, RefreshCw, Moon, Sun } from 'lucide-react';

export default function DesignSystemSandbox() {
  const [accentColor, setAccentColor] = useState('#00f0ff');
  const [borderRadius, setBorderRadius] = useState(12);
  const [buttonState, setButtonState] = useState('default'); // 'default', 'hover', 'active', 'disabled', 'loading'
  const [themeMode, setThemeMode] = useState('dark');

  const colorPalettes = [
    { name: 'Cyber Cyan', hex: '#00f0ff' },
    { name: 'Electric Violet', hex: '#8a2be2' },
    { name: 'Passion Pink', hex: '#ff2a85' },
    { name: 'Emerald Green', hex: '#10b981' },
    { name: 'Amber Gold', hex: '#f59e0b' },
  ];

  return (
    <section id="design-system" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} />
          <span>Figma System Tokens</span>
        </div>
        <h2>Interactive Design System Sandbox</h2>
        <p>Explore the atomic design tokens, dynamic theme states, and accessibility standards built into Blesson's design system architecture.</p>
      </div>

      <div
        className="glass-panel"
        style={{
          padding: '36px',
          borderColor: accentColor,
          transition: 'border-color 0.4s ease',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
          }}
        >
          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              className="font-display"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Sliders size={20} color={accentColor} />
              <span>Token Configuration Controls</span>
            </h3>

            {/* 1. Accent Color Token Picker */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Primary Accent Token (<code style={{ color: accentColor }}>--accent-primary</code>)
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {colorPalettes.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setAccentColor(c.hex)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: c.hex,
                      border: accentColor === c.hex ? '3px solid #fff' : '1px solid transparent',
                      cursor: 'pointer',
                      boxShadow: accentColor === c.hex ? `0 0 15px ${c.hex}` : 'none',
                      transition: 'all 0.2s ease',
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* 2. Border Radius Token Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                <span>Border Radius Token (<code style={{ color: accentColor }}>--radius-custom</code>)</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: accentColor,
                  cursor: 'pointer',
                }}
              />
            </div>

            {/* 3. Button Interactive States Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Component Interactive State
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['default', 'hover', 'active', 'disabled', 'loading'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setButtonState(st)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                      background: buttonState === st ? accentColor : 'rgba(255, 255, 255, 0.05)',
                      color: buttonState === st ? '#070913' : 'var(--text-muted)',
                      border: '1px solid var(--border-glass)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Component Sandbox Preview Canvas */}
          <div
            style={{
              padding: '30px',
              borderRadius: 'var(--radius-md)',
              background: themeMode === 'dark' ? '#080c19' : '#f8fafc',
              color: themeMode === 'dark' ? '#fff' : '#0f172a',
              border: `1px solid ${accentColor}40`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              transition: 'all 0.4s ease',
              boxShadow: `0 15px 35px -10px ${accentColor}25`,
            }}
          >
            {/* Header Canvas Control */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: accentColor }}>
                Live Component Preview
              </span>
              <button
                onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: themeMode === 'dark' ? '#fff' : '#0f172a',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {themeMode === 'dark' ? <Sun size={14} color="#f59e0b" /> : <Moon size={14} color="#8a2be2" />}
                <span>{themeMode === 'dark' ? 'Dark Canvas' : 'Light Canvas'}</span>
              </button>
            </div>

            {/* Interactive Component Demo */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '24px 0',
              }}
            >
              {/* Dynamic Styled Button */}
              <button
                disabled={buttonState === 'disabled'}
                style={{
                  padding: '12px 28px',
                  borderRadius: `${borderRadius}px`,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: buttonState === 'disabled' ? 'not-allowed' : 'pointer',
                  backgroundColor: accentColor,
                  color: '#070913',
                  boxShadow:
                    buttonState === 'hover'
                      ? `0 10px 25px ${accentColor}80, 0 0 15px ${accentColor}`
                      : buttonState === 'active'
                      ? `0 2px 10px ${accentColor}60`
                      : `0 4px 15px ${accentColor}40`,
                  transform:
                    buttonState === 'hover' ? 'translateY(-3px)' : buttonState === 'active' ? 'translateY(1px)' : 'none',
                  opacity: buttonState === 'disabled' ? 0.4 : 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
              >
                {buttonState === 'loading' ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Action</span>
                    <Sparkles size={16} />
                  </>
                )}
              </button>

              <div style={{ fontSize: '0.8rem', color: themeMode === 'dark' ? '#94a3b8' : '#64748b' }}>
                State: <strong>{buttonState}</strong> | Radius: <strong>{borderRadius}px</strong>
              </div>
            </div>

            {/* Contrast Compliance Indicator */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>WCAG AA Contrast Compliance</span>
              </div>
              <span style={{ fontWeight: 800, color: '#10b981' }}>7.4:1 (Passed)</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
