"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 500, damping: 30 });
  const dotY = useSpring(y, { stiffness: 500, damping: 30 });

  const ringX = useSpring(x, { stiffness: 120, damping: 20 });
  const ringY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 z-[9999] w-9 h-9 rounded-full border border-accent/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
      />
    </>
  );
}
