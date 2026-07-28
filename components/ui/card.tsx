"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "rounded-xl border border-border bg-surface p-8 transition-colors duration-500 hover:bg-elevated",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn("text-xl font-semibold text-text", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={cn("text-[15px] leading-relaxed text-text-muted", className)}>{children}</p>;
}
