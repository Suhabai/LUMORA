import { cn } from "@/utils";

type SectionHeaderProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  id,
  label,
  title,
  description,
  centered,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-[680px]", centered && "text-center mx-auto", className)}>
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-5 flex items-center gap-3",
          centered && "justify-center"
        )}
      >
        <span className="w-8 h-px bg-accent/40" aria-hidden="true" />
        {label}
      </p>
      <h2
        id={id}
        className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-text mb-5"
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-[1.7] text-text-muted max-w-[520px]">{description}</p>
      )}
    </div>
  );
}
