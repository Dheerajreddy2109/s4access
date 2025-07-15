import { useEffect, useContext, useCallback } from 'react';
import { LenisContext } from './LenisContext';

function SmoothLink({ to, children, ...props }) {
  const lenis = useContext(LenisContext);

  const handleClick = useCallback(
    (e) => {
      if (!lenis) {
        console.warn('Lenis not available');
        return;
      }
      e.preventDefault(); // Prevent default jump
      console.log('Scrolling to:', to);
      const targetId = to.substring(1); // Remove '#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0, // Adjust for fixed header if needed
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        });
      } else {
        console.warn('Target element not found:', targetId);
      }
    },
    [lenis, to]
  );

  useEffect(() => {
    if (!lenis) {
      console.log('Lenis not yet available, skipping event listener setup');
      return;
    }
    const anchor = document.querySelector(`a[href="${to}"]`);
    if (anchor) {
      console.log('Attaching click listener to:', to);
      anchor.addEventListener('click', handleClick);
      return () => {
        console.log('Removing click listener from:', to);
        anchor.removeEventListener('click', handleClick);
      };
    } else {
      console.warn('Anchor not found for:', to);
    }
  }, [to, lenis, handleClick]);

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

export default SmoothLink;