import { type ReactNode } from "react";
import { cn } from "@/utils";

type BadgeProps = {
  variant?: "accent" | "muted";
  children: ReactNode;
  className?: string;
};

export function Badge({ variant = "accent", className, children }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]",
        variant === "accent" && "bg-accent-soft text-accent border border-accent/10",
        variant === "muted" && "bg-surface text-text-muted border border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
