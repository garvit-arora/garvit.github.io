import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';

const allProjects = [
  { img: '/debtai.png', title: 'DEBTAI', tag: 'AI · Fintech Platform', year: '2025', url: 'https://debtai.in', description: 'AI-powered debt management platform that helps users optimize repayment strategies with intelligent financial modeling.' },
  { img: '/chatbazzz.png', title: 'CHATBAZZZ', tag: 'Web3 Messaging', year: '2025', url: 'https://chatbazzzz.netlify.app', description: 'Decentralized messaging platform built on Web3 principles with real-time communication and end-to-end encryption.' },
];

const ProjectsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', cursor: 'none' }}>
      <Cursor />
      <Navbar />

      {/* Header */}
      <section style={{ padding: '140px 5vw 60px', textAlign: 'center' }}>
        <Link to="/" data-hover style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', letterSpacing: '0.25em', textTransform: 'uppercase', transition: 'color 0.25s', display: 'inline-block', marginBottom: 40 }}
          onMouseEnter={e => e.currentTarget.style.color = '#D4FF00'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
          ← BACK HOME
        </Link>
        <h1 style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,8vw,10rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.04em', margin: 0, lineHeight: 1 }}>
          ALL PROJECTS
        </h1>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 20 }}>
          {allProjects.length} PROJECTS
        </p>
      </section>

      {/* Project grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5vw 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: 32 }}>
        {allProjects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer" data-cursor-label="VIEW LIVE" style={{
            display: 'block', position: 'relative', borderRadius: 16, overflow: 'hidden',
            textDecoration: 'none', cursor: 'none', aspectRatio: '16/10',
            border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 60px rgba(212,255,0,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            {/* Image */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center top', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85) 100%)' }} />

            {/* Content at bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', zIndex: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h3 style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,3vw,3rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', marginTop: 6, textTransform: 'uppercase' }}>{p.tag}</p>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>{p.year}</span>
              </div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: 12 }}>{p.description}</p>
            </div>
          </a>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
