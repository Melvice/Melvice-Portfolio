import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);
  const rafId   = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const addHoverListeners = (el: Element) => {
      el.addEventListener('mouseenter', () => { hovering.current = true; });
      el.addEventListener('mouseleave', () => { hovering.current = false; });
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(addHoverListeners);

    // Watch for new interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(addHoverListeners);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      const dot  = dotRef.current;
      const ringEl = ringRef.current;
      if (dot && ringEl) {
        // Dot: instant
        dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;

        // Ring: lerped
        ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
        ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
        const scale = hovering.current ? 1.7 : 1;
        ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%) scale(${scale})`;

        if (hovering.current) {
          ringEl.style.borderColor = 'var(--accent)';
          dot.style.opacity = '0';
        } else {
          ringEl.style.borderColor = 'rgba(245, 240, 232, 0.35)';
          dot.style.opacity = '1';
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
