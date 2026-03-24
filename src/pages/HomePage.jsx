import React, { useState, useCallback } from 'react';
import Cursor from '../components/Cursor';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import TechMarquee from '../components/TechMarquee';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const handleDone = useCallback(() => { setLoading(false); setTimeout(() => setReady(true), 150); }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', cursor: 'none' }}>
      <Cursor />
      <Navbar />
      {loading && <Preloader onDone={handleDone} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.45s ease', pointerEvents: loading ? 'none' : 'auto' }}>
        <Hero ready={ready} />
        <Intro />
        <TechMarquee />
        <Work />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
