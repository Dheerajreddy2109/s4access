import { useEffect, useState } from 'react';
import { LenisContext } from './LenisContext';
import Lenis from '@studio-freight/lenis';

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(newLenis);
    setIsLoading(false);

    // Animation frame loop
    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      newLenis.destroy();
      setLenis(null);
    };
  }, []); // Empty dependency array for one-time setup

  if (isLoading) {
    return null; // Render nothing until lenis is ready
  }

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export default LenisProvider;