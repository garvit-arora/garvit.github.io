import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const projects = [
  { img: '/debtai.png', title: 'DEBTAI', tag: 'AI · Fintech Platform', year: '2025', url: 'https://debtai.in' },
  { img: '/chatbazzz.png', title: 'CHATBAZZZ', tag: 'Web3 Messaging', year: '2025', url: 'https://chatbazzzz.netlify.app' },
];

const ProjectCard = ({ p, index }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    const title = card.querySelector('.ptitle');
    const meta = card.querySelectorAll('.pmeta');
    const overlay = card.querySelector('.poverlay');

    ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top top',
      end: '+=120%',
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: '+=120%', scrub: 0.4 },
    });

    tl.fromTo(card,
      { width: '80%', height: '65vh', borderRadius: 20 },
      { width: '100%', height: '100vh', borderRadius: 0, ease: 'power1.inOut', duration: 1 },
      0
    );
    tl.fromTo(overlay, { opacity: 0.65 }, { opacity: 0.3, ease: 'none', duration: 1 }, 0);
    tl.fromTo(title,
      { scale: 0.85, opacity: 0, yPercent: 15 },
      { scale: 1, opacity: 1, yPercent: 0, ease: 'power2.out', duration: 0.6 },
      0.3
    );
    tl.fromTo(meta,
      { opacity: 0, x: (i) => i === 0 ? -30 : 30 },
      { opacity: 1, x: 0, stagger: 0.05, ease: 'power2.out', duration: 0.4 },
      0.4
    );
  }, { scope: wrapRef });

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <a href={p.url} target="_blank" rel="noreferrer" ref={cardRef} data-cursor-label="VIEW WORK" style={{
        position: 'relative', width: '80%', height: '65vh', borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 20px 80px rgba(0,0,0,0.6)', display: 'block', textDecoration: 'none', cursor: 'none',
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ width: '100%', height: '100%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center top', transition: 'transform 0.6s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
        <div className="poverlay" style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.6) 1px, transparent 1px)', backgroundSize: '4px 4px', opacity: 0.3, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="pmeta" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'monospace', fontSize: 'clamp(0.6rem,0.9vw,0.95rem)', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0 }}>{p.tag}</div>
          <div className="pmeta" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'monospace', fontSize: 'clamp(0.6rem,0.9vw,0.95rem)', color: '#fff', letterSpacing: '0.2em', opacity: 0 }}>{p.year}</div>

          <h3 className="ptitle" style={{
            fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(3.5rem,11vw,14rem)',
            color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.04em', margin: 0, lineHeight: 1.1,
            textShadow: '0 6px 60px rgba(0,0,0,0.8)', opacity: 0,
          }}>{p.title}</h3>
        </div>

        <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.3em' }}>
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </a>
    </div>
  );
};

const Work = () => (
  <section id="work" style={{ background: '#000', paddingTop: 60, paddingBottom: 80 }}>
    <div style={{ textAlign: 'center', paddingBottom: 20 }}>
      <h2 style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,8vw,10rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.04em', margin: 0, lineHeight: 1, opacity: 1 }}>SELECTED WORK</h2>
    </div>
    {projects.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
    <div style={{ textAlign: 'center', paddingTop: 60 }}>
      <Link to="/projects" data-cursor-label="ALL PROJECTS" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(1rem,1.5vw,1.4rem)', fontWeight: 700,
        color: '#000', background: '#D4FF00', textDecoration: 'none', textTransform: 'uppercase',
        padding: '16px 40px', borderRadius: 8, letterSpacing: '0.05em',
        transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'none',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,255,0,0.3)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
        View All Projects <span style={{ fontSize: 18 }}>→</span>
      </Link>
    </div>
  </section>
);

export default Work;
