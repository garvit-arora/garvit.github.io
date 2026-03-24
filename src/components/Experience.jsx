import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { num: '01', role: 'Full-Stack Developer', company: 'MercuryAI', url: 'mercuryai.in', period: 'Oct 2025 – Dec 2025', months: 3, type: 'REMOTE', accent: '#D4FF00', detail: 'Built and shipped full-stack features for an AI-first platform. Owned frontend architecture, API integrations, and deployment pipelines end-to-end.' },
  { num: '02', role: 'Full-Stack Developer', company: 'Clothbuddy LLP', url: 'clothbuddy.in', period: 'Feb 2025 – Apr 2025', months: 3, type: 'HYBRID', accent: '#ff9500', detail: 'Developed core product features for a fashion-tech startup. Led full-stack development across the web app, inventory system, and customer-facing UI.' },
];

const Experience = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from('.exp-item', { opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } });
    // Animate progress bars
    gsap.utils.toArray('.exp-bar-fill').forEach(bar => {
      gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: bar, start: 'top 90%' } });
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="about" style={{ background: '#000', padding: '140px 0 120px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 5vw' }}>
        {/* Heading — full white, opacity 1 */}
        <h2 style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,8vw,10rem)', lineHeight: 1, color: '#fff', textTransform: 'uppercase', marginBottom: 64, letterSpacing: '-0.04em', textAlign: 'center' }}>
          EXPERIENCE
        </h2>

        {experiences.map((e, i) => (
          <div key={i} className="exp-item" data-hover style={{
            position: 'relative', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.08)',
            transition: 'background 0.3s',
          }}
            onMouseEnter={ev => {
              gsap.to(ev.currentTarget.querySelector('.exp-accent'), { scaleX: 1, duration: 0.4, ease: 'expo.out' });
              gsap.to(ev.currentTarget.querySelector('.exp-role'), { color: e.accent, duration: 0.25 });
            }}
            onMouseLeave={ev => {
              gsap.to(ev.currentTarget.querySelector('.exp-accent'), { scaleX: 0, duration: 0.35, ease: 'expo.out' });
              gsap.to(ev.currentTarget.querySelector('.exp-role'), { color: '#fff', duration: 0.25 });
            }}>

            {/* Hover accent line */}
            <div className="exp-accent" style={{ position: 'absolute', top: 0, left: 0, height: 2, width: '100%', background: e.accent, transform: 'scaleX(0)', transformOrigin: 'left', pointerEvents: 'none' }} />

            {/* Top row: number + role + period */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 10, color: e.accent, letterSpacing: '0.15em' }}>{e.num}</span>
                <div>
                  <div className="exp-role" style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(1.3rem,2.2vw,2.2rem)', textTransform: 'uppercase', color: '#fff', letterSpacing: '-0.02em', transition: 'color 0.25s' }}>{e.role}</div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{e.company}</span>
                    {e.url && <a href={`https://${e.url}`} target="_blank" rel="noreferrer" data-hover style={{ fontFamily: 'monospace', fontSize: 10, color: e.accent, textDecoration: 'none', transition: 'opacity 0.2s' }}>↗ {e.url}</a>}
                    <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.12)', padding: '2px 7px', borderRadius: 3, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{e.type}</span>
                  </div>
                </div>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textAlign: 'right', lineHeight: 1.5, flexShrink: 0 }}>{e.period}</div>
            </div>

            {/* Description */}
            <p style={{ fontFamily: 'monospace', fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 650, marginBottom: 16, paddingLeft: 40 }}>{e.detail}</p>

            {/* Progress bar */}
            <div style={{ paddingLeft: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', maxWidth: 200 }}>
                <div className="exp-bar-fill" style={{ width: '100%', height: '100%', background: `linear-gradient(90deg, ${e.accent}, ${e.accent}88)`, borderRadius: 2, transform: 'scaleX(0)', transformOrigin: 'left' }} />
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>{e.months} MO</span>
            </div>
          </div>
        ))}

        {/* Bottom line */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
      </div>
    </section>
  );
};

export default Experience;
