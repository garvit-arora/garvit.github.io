import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = ({ onDone }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = 0;
    const iv = setInterval(() => {
      c += Math.floor(Math.random() * 8) + 2;
      if (c >= 100) { c = 100; clearInterval(iv); }
      setCount(c);
    }, 40);
    return () => clearInterval(iv);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.8, onComplete: onDone });
    tl.from('.pl-char', { yPercent: 130, opacity: 0, stagger: 0.06, duration: 0.7, ease: 'expo.out' }, 0);
    tl.from('.pl-sub', { opacity: 0, y: 10, duration: 0.5, ease: 'power3.out' }, 0.5);
    tl.to('.pl-counter', { opacity: 0, duration: 0.3 }, 1.4);
    tl.to('.pl-line', { scaleX: 1, duration: 0.5, ease: 'expo.inOut' }, 1.2);
    tl.to('.pl-content', { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, 1.8);
    tl.to(ref.current.querySelectorAll('.tile'), {
      scaleY: 0, transformOrigin: 'top',
      stagger: { amount: 0.5, from: 'edges' },
      ease: 'expo.inOut', duration: 0.6,
    }, 1.9);
  }, { scope: ref });

  return (
    <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 9000, pointerEvents: 'none' }}>
      <div className="pl-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <div style={{ overflow: 'hidden', padding: '0.15em 0', display: 'flex', alignItems: 'center' }}>
          {'GARVIT'.split('').map((ch, i) => (
            <span key={i} className="pl-char" style={{ fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(4rem,10vw,10rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, display: 'inline-block' }}>{ch}</span>
          ))}
          <span className="pl-char" style={{ fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(4rem,10vw,10rem)', fontWeight: 700, color: '#D4FF00', lineHeight: 1.1, display: 'inline-block' }}>*</span>
        </div>
        <p className="pl-sub" style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.4em', marginTop: 16, textTransform: 'uppercase' }}>Developer · Engineer · Creator</p>
        <div className="pl-line" style={{ width: 120, height: 1, background: '#D4FF00', marginTop: 28, transform: 'scaleX(0)' }} />
        <div className="pl-counter" style={{ position: 'absolute', bottom: '12vh', fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.3em' }}>{String(count).padStart(3, '0')}</div>
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gridTemplateRows: 'repeat(4,1fr)', gap: 1, zIndex: 1 }}>
        {Array.from({ length: 20 }).map((_, i) => <div key={i} className="tile" style={{ background: i % 3 === 0 ? '#0f0f0f' : i % 3 === 1 ? '#0b0b0b' : '#080808' }} />)}
      </div>
    </div>
  );
};

export default Preloader;
