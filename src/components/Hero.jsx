import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* Clock */
const Clock = () => {
  const [t, setT] = useState('00:00:00');
  useEffect(() => { const tick = () => setT(new Date().toLocaleTimeString('en-GB', { hour12: false })); tick(); const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);
  return <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>{t}</span>;
};

const Hero = ({ ready }) => {
  const ref = useRef(null);
  useGSAP(() => {
    if (!ready) return;
    const tl = gsap.timeline();
    tl.from('.hn', { yPercent: 120, duration: 1.4, ease: 'expo.out' })
      .from('.hs', { opacity: 0, y: 20, duration: 1, ease: 'power3.out' }, '-=0.5')
      .from('.hud', { opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.5');
    gsap.to('.hgrid', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1.2 } });
  }, { scope: ref, dependencies: [ready] });

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
      <div className="hgrid" style={{ position: 'absolute', inset: '-20%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px', pointerEvents: 'none' }} />
      <div className="hud" style={{ position: 'absolute', top: 32, left: 40, zIndex: 10 }}><Clock /></div>
      <div className="hud" style={{ position: 'absolute', bottom: 80, left: 40, zIndex: 10, fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>AI · FINTECH · SAAS · WEB</div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ overflow: 'hidden', padding: '0.15em 0' }}>
          <h1 className="hn" data-hover style={{ fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(5rem,14vw,15rem)', fontWeight: 700, letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.15 }}>
            GARVIT<span style={{ color: '#D4FF00' }}>*</span>
          </h1>
        </div>
        <p className="hs" style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.4em', textTransform: 'uppercase', marginTop: 20 }}>
          Full-Stack Developer · AI Engineer
        </p>
      </div>

      <div className="hud" style={{ position: 'absolute', bottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.2)', animation: 'bounceY 2s ease-in-out infinite' }}>↓</span>
      </div>
    </section>
  );
};

export default Hero;
