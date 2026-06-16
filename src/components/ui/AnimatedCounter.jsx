import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    // Parse numeric value
    const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, ''));
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numericValue);
    }

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
