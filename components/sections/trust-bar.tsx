import { ShieldCheck, Users, Clock, Star } from "lucide-react";
import { TRUST_ITEMS } from "@/constants";
import { Reveal } from "@/components/ui/reveal";

const iconMap = {
  ShieldCheck,
  Users,
  Clock,
  Star,
} as const;

export function TrustBar() {
  return (
    <section className="py-16 border-t border-b border-border" aria-label="Trust indicators">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {TRUST_ITEMS.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.label} className="flex items-center gap-3 text-text-muted">
                  <Icon size={16} className="text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
