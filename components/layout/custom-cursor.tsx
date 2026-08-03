"use client";

/**
 * PROTOTYPE — Custom Cursor
 *
 * Status: Not finalized. This is an experimental component.
 * The cursor is NOT rendered in production (removed from layout.tsx).
 * Do not re-enable without a final design decision.
 *
 * TODO: Decide final cursor direction before re-enabling.
 */

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect } from "react";

function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 30 });
  const springY = useSpring(y, { stiffness: 500, damping: 30 });

  const handleMove = useCallback(
    (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
    [x, y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
      aria-hidden="true"
    />
  );
}

function CursorRing() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  const handleMove = useCallback(
    (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
    [x, y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-[9999] w-9 h-9 rounded-full border border-accent/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
      aria-hidden="true"
    />
  );
}

export function CustomCursor() {
  return (
    <>
      <CursorDot />
      <CursorRing />
    </>
  );
}
