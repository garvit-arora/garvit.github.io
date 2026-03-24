import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TECH_STACK = [
  { name: 'REACT', icon: '⚛' }, { name: 'NEXT.JS', icon: '▲' }, { name: 'TYPESCRIPT', icon: '⟨⟩' },
  { name: 'NODE.JS', icon: '⬡' }, { name: 'FASTAPI', icon: '⚡' }, { name: 'PYTORCH', icon: '🔥' },
  { name: 'AWS', icon: '☁' }, { name: 'DOCKER', icon: '🐳' }, { name: 'POSTGRESQL', icon: '🐘' },
  { name: 'GRAPHQL', icon: '◈' }, { name: 'TAILWIND', icon: '🌊' }, { name: 'GSAP', icon: '✦' },
];

const TechMarquee = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.to(ref.current, { xPercent: -50, ease: 'none', duration: 28, repeat: -1 }); }, { scope: ref });
  return (
    <div style={{ overflow: 'hidden', padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div ref={ref} style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content', alignItems: 'center' }}>
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((t, i) => (
          <div key={i} data-hover style={{ padding: '0 40px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'default' }}
            onMouseEnter={e => { e.currentTarget.querySelector('.tn').style.color = '#D4FF00'; e.currentTarget.querySelector('.ti').style.color = '#D4FF00'; }}
            onMouseLeave={e => { e.currentTarget.querySelector('.tn').style.color = '#fff'; e.currentTarget.querySelector('.ti').style.color = 'rgba(255,255,255,0.5)'; }}>
            <span className="ti" style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}>{t.icon}</span>
            <span className="tn" style={{ fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', transition: 'color 0.3s' }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
