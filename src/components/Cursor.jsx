import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      gsap.to(dot.current, { x: mx, y: my, duration: 0.08, ease: 'none' });
      gsap.to(label.current, { x: mx, y: my, duration: 0.12, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', onMove);

    const follow = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
      gsap.set(ring.current, { x: rx, y: ry });
      requestAnimationFrame(follow);
    };
    const raf = requestAnimationFrame(follow);

    // Hover effects
    const grow = (e) => {
      gsap.to(ring.current, { scale: 2.5, opacity: 0.4, duration: 0.35, ease: 'expo.out' });
      const hoverLabel = e.currentTarget.getAttribute('data-cursor-label');
      if (hoverLabel) {
        gsap.to(label.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'expo.out' });
        label.current.textContent = hoverLabel;
      }
    };
    const shrink = () => {
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.35, ease: 'expo.out' });
      gsap.to(label.current, { opacity: 0, scale: 0.5, duration: 0.2 });
    };

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover], [data-cursor-label]').forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };
    attach();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} style={{ position: 'fixed', top: 0, left: 0, width: 6, height: 6, borderRadius: '50%', background: '#D4FF00', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%,-50%)', mixBlendMode: 'difference' }} />
      <div ref={ring} style={{ position: 'fixed', top: 0, left: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.5)', pointerEvents: 'none', zIndex: 99998, transform: 'translate(-50%,-50%)' }} />
      <div ref={label} style={{ position: 'fixed', top: 0, left: 0, transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 99999, fontFamily: 'monospace', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#000', background: '#D4FF00', padding: '6px 14px', borderRadius: 20, opacity: 0, scale: 0.5, whiteSpace: 'nowrap' }} />
    </>
  );
};

export default Cursor;
