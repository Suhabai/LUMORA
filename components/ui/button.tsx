"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

type ButtonProps = {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide rounded-full select-none transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-accent text-bg hover:bg-accent-hover",
  ghost: "text-text border border-border hover:border-accent/20 hover:bg-accent-soft",
};

const sizes = {
  sm: "h-10 px-5 text-xs uppercase tracking-widest",
  md: "h-12 px-7 text-sm uppercase tracking-wider",
  lg: "h-14 px-9 text-sm uppercase tracking-wider",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
