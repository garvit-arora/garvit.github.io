import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Ticker } from './Intro';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from('.ft', { yPercent: 70, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
  }, { scope: ref });

  return (
    <section id="contact" style={{ background: '#000', marginTop: 40 }}>
      <Ticker text="LET'S WORK TOGETHER · BUILD SOMETHING GREAT · LET'S SHIP ·" />
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>
        <div style={{ overflow: 'hidden', padding: '0.1em 0' }}>
          <h2 className="ft" data-hover style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(5rem,12vw,14rem)', textTransform: 'uppercase', margin: 0, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.1 }}>
            LET'S<br /><span style={{ color: '#D4FF00' }}>TALK</span>
          </h2>
        </div>
        <a href="mailto:garvit.university@gmail.com" data-hover style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)', textDecoration: 'underline', textUnderlineOffset: 8, letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'color 0.25s', marginTop: 12 }}
          onMouseEnter={e => e.currentTarget.style.color = '#D4FF00'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>garvit.university@gmail.com</a>
        <div style={{ display: 'flex', gap: 48, marginTop: 8 }}>
          {[['GITHUB ↗', 'https://github.com/garvit-arora'], ['LINKEDIN ↗', 'https://linkedin.com/in/garvitt-']].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" data-hover style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.22)', textDecoration: 'none', letterSpacing: '0.25em', textTransform: 'uppercase', transition: 'color 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4FF00'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}>{l}</a>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', width: '100%', paddingTop: 24, marginTop: 24, fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.1)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          GARVIT © 2026 · BUILT WITH REACT + GSAP
        </div>
      </div>
    </section>
  );
};

export default Footer;
