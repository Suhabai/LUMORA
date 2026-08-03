"use client";

import { motion } from "framer-motion";

export function ScanLine() {
  return (
    <motion.div
      initial={{ y: "0vh" }}
      animate={{ y: ["0vh", "100vh"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      className="pointer-events-none fixed inset-0 z-[100] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      aria-hidden="true"
    />
  );
}
