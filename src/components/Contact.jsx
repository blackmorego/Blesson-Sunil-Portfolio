import React, { useState } from 'react';
import { Phone, MapPin, ExternalLink, Send, Copy , Mail, CheckCircle2} from 'lucide-react';
import { Linkedin } from './icons/BrandIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const formData = new FormData();
    formData.append("entry.751320151", form.name);
    formData.append("entry.2029159075", form.email);
    formData.append("entry.843355835", form.subject);
    formData.append("entry.1905718504", form.message);

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdd1iM7t-eV67iTYWgRuNZ2L_kee4QZzn3YcghrJfL--rxS7w/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }).catch(error => {
      console.error("Error submitting form", error);
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <span>Get In Touch</span>
        </div>
        <h2>Let's Create Something Amazing</h2>
        <p>Open for full-time UI/UX design roles, freelance projects, or design discussions.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}
      >
        {/* Direct Contact Info Panel (Left) */}
        <div
          className="glass-panel glass-card-interactive"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Blesson Sunil
            </h3>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '24px' }}>
              UI/UX Designer | Kattappana, Idukki
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={20} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Email Address</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>blessonsunil8@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('blessonsunil8@gmail.com', 'Email')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer' }}
                >
                  {copiedText === 'Email' ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={20} color="var(--accent-violet)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Phone Number</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>+91 8590389594</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+91 8590389594', 'Phone')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer' }}
                >
                  {copiedText === 'Phone' ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                  gap: '12px',
                }}
              >
                <MapPin size={20} color="var(--accent-pink)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Location</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>Kattappana, Idukki, Kerala</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Portfolios Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Online Portfolio Profiles
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://linkedin.com/in/blesson-sunil-647319392"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <Linkedin size={16} color="#0a66c2" />
                <span>LinkedIn</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://behance.net/blessonsunil2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <span style={{ fontWeight: 800, color: '#1769ff' }}>Bē</span>
                <span>Behance</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form (Right) */}
        <div
          className="glass-panel glass-card-interactive"
          style={{
            padding: '36px',
          }}
        >
          {submitted ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle2 size={32} color="var(--accent-cyan)" />
              </div>
              <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '360px' }}>
                Thank you for reaching out, Blesson will respond to your query shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
                Send a Direct Message
              </h3>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="UI/UX Role / Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Blesson, we loved your UI/UX portfolio and would like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem',
                    resize: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
