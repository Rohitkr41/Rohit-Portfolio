import { useEffect, useRef } from "react";

// Cards get normal (fast) bubble effect
const CARD_SELECTOR = ".glass.rounded-3xl, .glass.rounded-2xl";
// Nav links get slow trailing bubble effect
const NAV_SELECTOR = "[data-bubble-hover]";

const RING_SIZE = 40;
const RING_HOVER_SCALE = 2.2;
const LERP_FAST = 0.35; // normal trailing for cards
const LERP_SLOW = 0.12; // slow trailing for nav

export default function BubbleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const isSlow = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const tNav = (e.target as HTMLElement).closest(NAV_SELECTOR);
      const tCard = (e.target as HTMLElement).closest(CARD_SELECTOR);
      if (tNav) {
        hovering.current = true;
        isSlow.current = true;
        if (ringRef.current) ringRef.current.dataset.hover = "1";
      } else if (tCard) {
        hovering.current = true;
        isSlow.current = false;
        if (ringRef.current) ringRef.current.dataset.hover = "1";
      }
    };

    const onOut = (e: MouseEvent) => {
      const tNav = (e.target as HTMLElement).closest(NAV_SELECTOR);
      const tCard = (e.target as HTMLElement).closest(CARD_SELECTOR);
      const relatedNav = (e.relatedTarget as HTMLElement | null)?.closest(NAV_SELECTOR);
      const relatedCard = (e.relatedTarget as HTMLElement | null)?.closest(CARD_SELECTOR);
      if ((tNav && tNav !== relatedNav) || (tCard && tCard !== relatedCard)) {
        hovering.current = false;
        isSlow.current = false;
        if (ringRef.current) ringRef.current.dataset.hover = "0";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });

    let rafId = 0;
    const loop = () => {
      const lerp = isSlow.current ? LERP_SLOW : LERP_FAST;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;
      if (ringRef.current) {
        const scale = hovering.current ? RING_HOVER_SCALE : 1;
        const tx = ring.current.x - RING_SIZE / 2;
        const ty = ring.current.y - RING_SIZE / 2;
        ringRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        data-hover="0"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border-2 border-[oklch(0.72_0.2_255)] will-change-transform transition-[background-color,border-color] duration-300 data-[hover=1]:bg-[oklch(0.72_0.2_255_/_0.15)]"
        style={{ boxShadow: "0 0 18px oklch(0.72 0.2 255 / 0.5)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.2_255)] will-change-transform"
        style={{ boxShadow: "0 0 12px oklch(0.72 0.2 255 / 0.9)" }}
      />
    </>
  );
}
