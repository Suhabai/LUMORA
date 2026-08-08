"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slowFade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  },
  deepReveal: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  },
};

type RevealProps = {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "slowFade" | "deepReveal";
  delay?: number;
  duration?: number;
  className?: string;
};

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration,
  className,
}: RevealProps) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={duration ? { duration, delay, ease: [0.16, 1, 0.3, 1] } : { delay, duration: variant === "slowFade" ? 1.2 : variant === "deepReveal" ? 1.0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
