import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ── Ticker ── */
export const Ticker = ({ text, bg = '#D4FF00', color = '#000' }) => {
  const ref = useRef(null);
  useGSAP(() => { gsap.to(ref.current, { xPercent: -50, ease: 'none', duration: 20, repeat: -1 }); }, { scope: ref });
  return (
    <div style={{ overflow: 'hidden', background: bg, padding: '11px 0', width: '100%', flexShrink: 0 }}>
      <div ref={ref} style={{ display: 'flex', gap: 54, whiteSpace: 'nowrap', width: 'max-content' }}>
        {Array(14).fill(text).map((t, i) => <span key={i} style={{ fontFamily: 'monospace', fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color, flexShrink: 0 }}>{t}</span>)}
      </div>
    </div>
  );
};

/* ── Word Highlight (pinned scrub) ── */
const SENTENCE = "Hi, I'm Garvit. I build high-performance digital products that merge AI intelligence with clean engineering and strategic clarity.";
const ACCENT_WORDS = new Set(['AI', 'intelligence']);

const WordHighlight = () => {
  const sRef = useRef(null);
  const wRefs = useRef([]);
  const tokens = SENTENCE.split(' ');
  useGSAP(() => {
    const words = wRefs.current.filter(Boolean);
    gsap.to(words, {
      color: (i) => ACCENT_WORDS.has(tokens[i]?.replace(/[^a-zA-Z]/g, '')) ? '#D4FF00' : '#fff',
      stagger: { each: 0.04 }, ease: 'none',
      scrollTrigger: { trigger: sRef.current, start: 'top top', end: `+=${words.length * 55}`, scrub: 0.5, pin: true, pinSpacing: true, anticipatePin: 1 },
    });
  }, { scope: sRef });
  return (
    <section ref={sRef} style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5vw' }}>
      <p style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem,4vw,4.5rem)', lineHeight: 1.2, textAlign: 'center', maxWidth: 950, width: '100%', margin: '0 auto' }}>
        {tokens.map((w, i) => (
          <span key={i} ref={el => wRefs.current[i] = el} style={{ display: 'inline', color: ACCENT_WORDS.has(w.replace(/[^a-zA-Z]/g, '')) ? 'rgba(212,255,0,0.08)' : 'rgba(255,255,255,0.08)' }}>
            {w}{' '}
          </span>
        ))}
      </p>
    </section>
  );
};

/* ── Intro ── */
const Intro = () => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from('.sl', { opacity: 0, y: 14, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 88%' } });
  }, { scope: ref });
  return (
    <section ref={ref} style={{ background: '#000' }}>
      <Ticker text="SYSTEM DESIGN /// PRODUCT STRATEGY /// AI ENGINEERING /// ACCESSIBILITY /// DESIGN SYSTEMS ///" />
      <WordHighlight />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '60px 0 40px', flexWrap: 'wrap' }}>
        {[['GITHUB ↗', 'https://github.com/garvit-arora'], ['LINKEDIN ↗', 'https://linkedin.com/in/garvitt-'], ['EMAIL ↗', 'mailto:garvit.university@gmail.com']].map(([l, h]) => (
          <a key={l} href={h} className="sl" data-hover style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4FF00'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}>{l}</a>
        ))}
      </div>
    </section>
  );
};

export default Intro;
