import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#', path: '/' },
  { label: 'Work', href: '#work', path: '/' },
  { label: 'Experience', href: '#about', path: '/' },
  { label: 'Contact', href: '#contact', path: '/' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const links = overlay.querySelectorAll('.nav-link');
    const footer = overlay.querySelector('.nav-footer');
    const bg = overlay.querySelector('.nav-bg');

    gsap.set(links, { yPercent: 100, opacity: 0 });
    gsap.set(footer, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ paused: true });
    tl.to(bg, { scaleY: 1, transformOrigin: 'top', duration: 0.6, ease: 'expo.inOut' })
      .to(links, { yPercent: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'expo.out' }, 0.3)
      .to(footer, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.45);

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;
    if (open) { document.body.style.overflow = 'hidden'; tlRef.current.play(); }
    else { document.body.style.overflow = ''; tlRef.current.reverse(); }
  }, [open]);

  const handleClick = (href, path) => {
    setOpen(false);
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 8000, padding: '20px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: open ? 'transparent' : 'rgba(0,0,0,0.5)', backdropFilter: open ? 'none' : 'blur(16px)', WebkitBackdropFilter: open ? 'none' : 'blur(16px)', borderBottom: open ? 'none' : '1px solid rgba(255,255,255,0.04)', transition: 'all 0.3s ease' }}>
        <a href="/" data-hover style={{ fontFamily: "'Antonio', sans-serif", fontSize: 18, fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
          GARVIT<span style={{ color: '#D4FF00' }}>.</span>
        </a>
        <button data-hover onClick={() => setOpen(!open)} aria-label="Menu" style={{
          background: 'none', border: 'none', padding: '8px 0', display: 'flex', flexDirection: 'column', gap: open ? 0 : 5, cursor: 'none',
        }}>
          <span style={{ display: 'block', width: 26, height: 1.5, background: '#fff', transition: 'all 0.35s cubic-bezier(0.76,0,0.24,1)', transform: open ? 'rotate(45deg) translateY(0.75px)' : 'rotate(0)' }} />
          <span style={{ display: 'block', width: 26, height: 1.5, background: '#fff', transition: 'all 0.35s cubic-bezier(0.76,0,0.24,1)', transform: open ? 'rotate(-45deg) translateY(-0.75px)' : 'rotate(0)', marginTop: open ? -1.5 : 0 }} />
        </button>
      </header>

      <div ref={overlayRef} style={{ position: 'fixed', inset: 0, zIndex: 7999, pointerEvents: open ? 'auto' : 'none' }}>
        <div className="nav-bg" style={{ position: 'absolute', inset: 0, background: '#000', transform: 'scaleY(0)', transformOrigin: 'top' }} />

        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10vw' }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((link, i) => (
              <div key={i} style={{ overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <a href={link.href} className="nav-link" data-hover
                  onClick={(e) => { e.preventDefault(); handleClick(link.href, link.path); }}
                  style={{ display: 'flex', alignItems: 'center', gap: 24, textDecoration: 'none', padding: '20px 0' }}
                  onMouseEnter={e => {
                    gsap.to(e.currentTarget, { x: 24, duration: 0.3, ease: 'expo.out' });
                    e.currentTarget.querySelector('.nl').style.color = '#D4FF00';
                  }}
                  onMouseLeave={e => {
                    gsap.to(e.currentTarget, { x: 0, duration: 0.3, ease: 'expo.out' });
                    e.currentTarget.querySelector('.nl').style.color = '#fff';
                  }}>
                  <span className="nl" style={{ fontFamily: "'Antonio', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,6.5vw,6.5rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1.1, transition: 'color 0.3s' }}>
                    {link.label}
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: 18, color: 'rgba(255,255,255,0.4)', marginLeft: 'auto', transition: 'transform 0.3s' }}>→</span>
                </a>
              </div>
            ))}
          </nav>

          <div className="nav-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: 6 }}>Interested in working together?</p>
              <a href="mailto:garvit.university@gmail.com" data-hover style={{ fontFamily: "'Antonio', sans-serif", fontSize: 'clamp(1rem,2vw,1.6rem)', color: '#fff', textDecoration: 'underline', textUnderlineOffset: 6, transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4FF00'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                garvit.university@gmail.com
              </a>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.2em', textAlign: 'right' }}>
              © 2026<br />GARVIT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
