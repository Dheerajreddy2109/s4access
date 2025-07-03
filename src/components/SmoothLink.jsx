import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function SmoothLink({ to, children, ...props }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis instance (shared across app)
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
    }

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = to.substring(1); // Remove '#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        lenisRef.current.scrollTo(targetElement, {
          offset: 0, // Adjust for fixed header if needed
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    const anchor = document.querySelector(`a[href="${to}"]`);
    if (anchor) {
      anchor.addEventListener('click', handleClick);
      return () => anchor.removeEventListener('click', handleClick);
    }
  }, [to]);

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

export default SmoothLink;