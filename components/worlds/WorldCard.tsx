import Link from "next/link"
import { World, WorldAtmosphere, WorldRestingAtmosphere } from "./world-types"

interface Props {
  world: World
}

function getRestingGradientStyle(resting: WorldRestingAtmosphere) {
  const { gradient } = resting
  const color = "var(--accent)"
  if (gradient.type === "radial") {
    return `radial-gradient(${gradient.position}, ${color} 0%, transparent 70%)`
  }
  return `linear-gradient(${gradient.position}, ${color} 0%, transparent 70%)`
}

function getHoverGradientStyle(atmosphere: WorldAtmosphere) {
  const { gradient } = atmosphere
  if (gradient.type === "radial") {
    return `radial-gradient(${gradient.position}, ${gradient.color} 0%, transparent 70%)`
  }
  return `linear-gradient(${gradient.position}, ${gradient.color} 0%, transparent 70%)`
}

function getOverlayStyle(atmosphere: WorldAtmosphere) {
  if (!atmosphere.overlay) return {}
  const gradients: Record<string, string> = {
    "to-top": `linear-gradient(to top, ${atmosphere.gradient.color}/[${atmosphere.overlay.opacity}] 0%, transparent 100%)`,
    "to-bottom": `linear-gradient(to bottom, ${atmosphere.gradient.color}/[${atmosphere.overlay.opacity}] 0%, transparent 100%)`,
    "to-right": `linear-gradient(to right, ${atmosphere.gradient.color}/[${atmosphere.overlay.opacity}] 0%, transparent 100%)`,
    "to-left": `linear-gradient(to left, ${atmosphere.gradient.color}/[${atmosphere.overlay.opacity}] 0%, transparent 100%)`,
  }
  return {
    background: gradients[atmosphere.overlay.direction],
  }
}

function getContentAlignment(alignment: WorldRestingAtmosphere["alignment"]) {
  switch (alignment) {
    case "center":
      return "justify-center"
    case "lower":
      return "justify-end"
    case "directional":
      return "justify-center"
    default:
      return "justify-center"
  }
}

export default function WorldCard({ world }: Props) {
  const { atmosphere, restingAtmosphere } = world

  return (
    <Link
      href={`/work/${world.id}`}
      className="group relative block min-h-[360px] md:min-h-[400px] overflow-hidden transition-all ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-2px]"
      style={{
        transitionDuration: atmosphere.motion.contentDuration,
      }}
    >
      {/* ── Base Surface ──
          Quiet foundation, not a card border. */}
      <div className="absolute inset-0 rounded-[var(--radius-xl)] border border-border/40 transition-colors duration-[800ms] group-hover:border-border/60" />

      {/* ── Resting Atmosphere ──
          Always present, creates default-state personality.
          Each world has a unique ambient signature. */}
      <div
        className="absolute inset-0 rounded-[var(--radius-xl)]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 transition-opacity duration-[1200ms]"
          style={{
            background: getRestingGradientStyle(restingAtmosphere),
            opacity: restingAtmosphere.gradient.opacity,
          }}
        />
      </div>

      {/* ── Hover Atmosphere Layer ──
          Intensifies on hover, creates environmental depth.
          The world awakens. */}
      <div
        className="absolute inset-0 rounded-[var(--radius-xl)] opacity-0 transition-opacity ease-out group-hover:opacity-100"
        aria-hidden="true"
        style={{
          transitionDuration: atmosphere.motion.atmosphereDuration,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: getHoverGradientStyle(atmosphere),
            opacity: atmosphere.gradient.opacity,
          }}
        />
        {atmosphere.overlay && (
          <div
            className="absolute inset-0"
            style={getOverlayStyle(atmosphere)}
          />
        )}
      </div>

      {/* ── Content Layer ──
          Clear hierarchy with per-world alignment. */}
      <div className={`relative z-10 flex flex-col h-full p-8 md:p-10 ${getContentAlignment(restingAtmosphere.alignment)}`}>
        {/* Identity — category signal */}
        <div className="mb-auto">
          <p
            className="text-accent text-[9px] font-semibold uppercase tracking-[0.16em] mb-6 transition-colors duration-[600ms]"
          >
            {world.category}
          </p>
          <h3
            className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-4 transition-colors duration-[600ms] group-hover:text-white"
          >
            {world.title}
          </h3>
          <p
            className="text-text-muted text-[14px] leading-[1.65] max-w-[280px] transition-colors duration-[600ms] group-hover:text-text-muted/80"
          >
            {world.description}
          </p>
        </div>

        {/* Personality — feeling signals, extremely quiet */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {world.feeling.map((item, index) => (
              <span
                key={item}
                className="text-[9px] font-medium uppercase tracking-[0.12em] text-text-faint transition-colors duration-[600ms] group-hover:text-text-muted"
              >
                {index > 0 && <span className="mr-4 text-border" aria-hidden="true">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Entry invitation — "Enter World", not "View Project" */}
        <div
          className="flex items-center gap-3 mt-8 pt-6 border-t border-border/30 transition-all duration-[600ms] group-hover:border-border/50"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-faint transition-colors duration-[600ms] group-hover:text-accent"
          >
            Enter World
          </span>
          <svg
            className="w-3 h-3 text-text-faint transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[600ms] group-hover:text-accent group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
