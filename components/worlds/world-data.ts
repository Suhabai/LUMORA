import type { World } from "./world-types"
import { OMNIA_SEQUENCE, NEXORA_SEQUENCE, VELOCITY_SEQUENCE } from "./world-motion"


// ═══════════════════════════════════════════════════════
// LUMORA — World Data
//
// Data-driven rendering: geometry is defined here,
// rendered by WorldSection, animated by world-motion.
//
// Each world's geometry is its spatial signature.
// The text alone does not carry identity —
// the geometry makes each world visually distinct.
// ═══════════════════════════════════════════════════════


export const worlds: World[] = [
  // ═══════════════════════════════════════════════════════
  // OMNIA — "Structure"
  //
  // Centered. Symmetrical. Vertical guides. Coremark.
  // The world reads as an architectural system.
  // Geometry: axis, guides, floor bands, corner brackets, coremark.
  // ═══════════════════════════════════════════════════════
  {
    id: "omnia",
    title: "OMNIA",
    category: "Digital Experience",
    description: "Precision, structure, and silence — a world built around control.",
    feeling: ["Architecture", "Precision", "Silence"],
    restingAtmosphere: {
      gradient: { type: "radial", position: "ellipse_at_center", opacity: 0.02 },
      alignment: "center",
    },
    atmosphere: {
      style: "structured",
      gradient: {
        type: "radial",
        position: "ellipse_at_center",
        color: "var(--accent)",
        opacity: 0.03,
      },
      overlay: { direction: "to-top", opacity: 0.02 },
      hover: { borderOpacity: "accent/15", contentShift: false },
      motion: {
        atmosphereDuration: "800ms",
        contentDuration: "600ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    geometry: {
      kind: "line",
      className: "absolute inset-0 pointer-events-none",
      elements: [
        {
          // Central axis — the core's spine descending through the scene
          classes: ["omnia-axis", "absolute", "w-px", "-translate-x-1/2"],
          style: {
            top: "6%",
            bottom: "6%",
            left: "50%",
            background: "linear-gradient(to bottom, transparent, rgba(138, 46, 255, 0.18), transparent)",
          },
        },
        {
          // Measurement tick — top
          classes: ["omnia-floor", "absolute", "h-px", "-translate-x-1/2"],
          style: {
            top: "20%",
            left: "50%",
            width: "1.75rem",
            background: "rgba(138, 46, 255, 0.18)",
          },
        },
        {
          // Measurement tick — bottom
          classes: ["omnia-floor", "absolute", "h-px", "-translate-x-1/2"],
          style: {
            bottom: "20%",
            left: "50%",
            width: "1.75rem",
            background: "rgba(138, 46, 255, 0.18)",
          },
        },
        {
          // Vertical guide — left
          classes: ["omnia-guide-l", "omnia-guide", "absolute", "w-px"],
          style: {
            top: "13%",
            bottom: "13%",
            background: "linear-gradient(to bottom, transparent, rgba(138, 46, 255, 0.10), transparent)",
          },
        },
        {
          // Vertical guide — right
          classes: ["omnia-guide-r", "omnia-guide", "absolute", "w-px"],
          style: {
            top: "13%",
            bottom: "13%",
            background: "linear-gradient(to bottom, transparent, rgba(138, 46, 255, 0.10), transparent)",
          },
        },
        {
          // Floor band — top third
          classes: ["omnia-floor", "absolute", "h-px"],
          style: {
            top: "30%",
            left: "18%",
            right: "18%",
            background: "linear-gradient(to right, transparent, rgba(138, 46, 255, 0.11), transparent)",
          },
        },
        {
          // Floor band — center
          classes: ["omnia-floor", "absolute", "h-px"],
          style: {
            top: "50%",
            left: "18%",
            right: "18%",
            background: "linear-gradient(to right, transparent, rgba(138, 46, 255, 0.07), transparent)",
          },
        },
        {
          // Floor band — bottom third
          classes: ["omnia-floor", "absolute", "h-px"],
          style: {
            top: "70%",
            left: "18%",
            right: "18%",
            background: "linear-gradient(to right, transparent, rgba(138, 46, 255, 0.11), transparent)",
          },
        },
        {
          // Corner bracket — top-left
          classes: ["omnia-bracket", "omnia-corner", "absolute", "w-3.5", "h-3.5", "border-t", "border-l"],
          style: {
            top: "16%",
            left: "16%",
            borderColor: "rgba(138, 46, 255, 0.22)",
          },
        },
        {
          // Corner bracket — top-right
          classes: ["omnia-bracket", "omnia-corner", "absolute", "w-3.5", "h-3.5", "border-t", "border-r"],
          style: {
            top: "16%",
            right: "16%",
            borderColor: "rgba(138, 46, 255, 0.22)",
          },
        },
        {
          // Corner bracket — bottom-left
          classes: ["omnia-bracket", "omnia-corner", "absolute", "w-3.5", "h-3.5", "border-b", "border-l"],
          style: {
            bottom: "16%",
            left: "16%",
            borderColor: "rgba(138, 46, 255, 0.22)",
          },
        },
        {
          // Corner bracket — bottom-right
          classes: ["omnia-bracket", "omnia-corner", "absolute", "w-3.5", "h-3.5", "border-b", "border-r"],
          style: {
            bottom: "16%",
            right: "16%",
            borderColor: "rgba(138, 46, 255, 0.22)",
          },
        },
        {
          // Coremark — where axis meets the Core's presence
          classes: ["omnia-coremark", "absolute", "w-1.5", "h-1.5", "rounded-full", "-translate-x-1/2", "-translate-y-1/2"],
          style: {
            top: "50%",
            left: "50%",
            background: "rgba(138, 46, 255, 0.35)",
          },
        },
      ],
    },
    sequence: OMNIA_SEQUENCE,
  },

  // ═══════════════════════════════════════════════════════
  // NEXORA — "Depth"
  //
  // Multiple depth planes. Parallax offsets. Progressive reveal.
  // The world reads as layered space.
  // Geometry: deep/mid/near planes, hidden threads, depth point, falloff.
  // ═══════════════════════════════════════════════════════
  {
    id: "nexora",
    title: "NEXORA",
    category: "Intelligent System",
    description: "An intelligent system shaped by discovery. Each layer reveals something.",
    feeling: ["Intelligence", "Discovery", "Depth"],
    restingAtmosphere: {
      gradient: { type: "radial", position: "ellipse_at_bottom", opacity: 0.03 },
      alignment: "lower",
    },
    atmosphere: {
      style: "exploratory",
      gradient: {
        type: "radial",
        position: "ellipse_at_bottom",
        color: "var(--accent)",
        opacity: 0.05,
      },
      overlay: { direction: "to-top", opacity: 0.04 },
      hover: { borderOpacity: "accent/25", contentShift: true },
      motion: {
        atmosphereDuration: "700ms",
        contentDuration: "500ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    geometry: {
      kind: "plane",
      className: "absolute inset-0 pointer-events-none",
      elements: [
        {
          // Deep plane — the receding surface
          classes: ["nexora-wrap", "nexora-deep", "absolute"],
          style: { top: "8%", right: "6%", width: "46%", height: "74%" },
          children: [
            {
              classes: ["nexora-layer", "absolute", "inset-0", "border", "rounded-sm"],
              style: { borderColor: "rgba(138, 46, 255, 0.07)" },
            },
          ],
        },
        {
          // Mid plane — offset, revealing what lies behind
          classes: ["nexora-wrap", "nexora-mid", "absolute"],
          style: { top: "22%", right: "13%", width: "38%", height: "56%" },
          children: [
            {
              classes: ["nexora-layer", "absolute", "inset-0", "border", "rounded-sm"],
              style: {
                borderColor: "rgba(138, 46, 255, 0.10)",
                background: "rgba(138, 46, 255, 0.018)",
              },
            },
          ],
        },
        {
          // Near plane — the surface closest to the visitor
          classes: ["nexora-wrap", "nexora-near", "absolute"],
          style: { top: "36%", right: "20%", width: "30%", height: "36%" },
          children: [
            {
              classes: ["nexora-layer", "absolute", "inset-0", "border", "rounded-sm"],
              style: {
                borderColor: "rgba(138, 46, 255, 0.14)",
                background: "rgba(138, 46, 255, 0.028)",
              },
            },
          ],
        },
        {
          // Hidden thread — vertical, revealed by depth
          classes: ["nexora-hidden", "absolute", "w-px"],
          style: {
            top: "12%",
            right: "4%",
            bottom: "12%",
            background: "linear-gradient(to bottom, transparent, rgba(138, 46, 255, 0.18), transparent)",
          },
        },
        {
          // Hidden thread — horizontal
          classes: ["nexora-hidden", "absolute", "h-px"],
          style: {
            top: "58%",
            right: "26%",
            width: "40%",
            background: "linear-gradient(to right, rgba(138, 46, 255, 0.14), transparent)",
          },
        },
        {
          // Depth point — a distant marker beyond the planes
          classes: ["nexora-layer", "absolute", "w-1.5", "h-1.5", "rounded-full"],
          style: {
            top: "30%",
            right: "24%",
            background: "rgba(138, 46, 255, 0.22)",
          },
        },
        {
          // Depth falloff — light sinking into the distance
          classes: ["nexora-layer", "absolute", "inset-0"],
          style: {
            background: "radial-gradient(ellipse at 72% 45%, rgba(180, 110, 255, 0.07) 0%, transparent 48%)",
          },
        },
      ],
    },
    sequence: NEXORA_SEQUENCE,
  },

  // ═══════════════════════════════════════════════════════
  // VELOCITY — "Momentum"
  //
  // Directional. Diagonal lines. Trajectory dashes.
  // The world reads as directional force.
  // Geometry: directional field, counter-tension, trajectory, momentum dot.
  // ═══════════════════════════════════════════════════════
  {
    id: "velocity",
    title: "VELOCITY",
    category: "Dynamic Experience",
    description: "Built around movement and direction. Energy that flows with purpose.",
    feeling: ["Movement", "Energy", "Flow"],
    restingAtmosphere: {
      gradient: { type: "linear", position: "135deg", opacity: 0.025 },
      alignment: "directional",
    },
    atmosphere: {
      style: "flowing",
      gradient: {
        type: "linear",
        position: "135deg",
        color: "var(--accent)",
        opacity: 0.04,
      },
      overlay: { direction: "to-right", opacity: 0.03 },
      hover: { borderOpacity: "accent/20", contentShift: true },
      motion: {
        atmosphereDuration: "600ms",
        contentDuration: "450ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    geometry: {
      kind: "line",
      className: "absolute inset-0 pointer-events-none",
      elements: [
        {
          // Directional flow field — the world is already moving
          classes: ["velocity-field", "absolute", "inset-0"],
          style: {},
          children: [
            {
              classes: ["absolute", "-rotate-[14deg]"],
              style: { top: "16%", left: "-4%", width: "78%", height: "1px" },
              children: [
                {
                  classes: ["velocity-line", "absolute", "inset-0"],
                  style: {
                    background: "linear-gradient(to right, rgba(138, 46, 255, 0.24), rgba(138, 46, 255, 0.10), transparent)",
                  },
                },
              ],
            },
            {
              classes: ["absolute", "-rotate-[14deg]"],
              style: { top: "28%", left: "2%", width: "66%", height: "1px" },
              children: [
                {
                  classes: ["velocity-line", "absolute", "inset-0"],
                  style: {
                    background: "linear-gradient(to right, rgba(138, 46, 255, 0.16), rgba(138, 46, 255, 0.06), transparent)",
                  },
                },
              ],
            },
            {
              classes: ["absolute", "-rotate-[14deg]"],
              style: { top: "40%", left: "6%", width: "54%", height: "1px" },
              children: [
                {
                  classes: ["velocity-line", "absolute", "inset-0"],
                  style: {
                    background: "linear-gradient(to right, rgba(138, 46, 255, 0.12), rgba(138, 46, 255, 0.04), transparent)",
                  },
                },
              ],
            },
            {
              classes: ["absolute", "-rotate-[14deg]"],
              style: { top: "52%", left: "10%", width: "44%", height: "1px" },
              children: [
                {
                  classes: ["velocity-line", "absolute", "inset-0"],
                  style: {
                    background: "linear-gradient(to right, rgba(138, 46, 255, 0.09), rgba(138, 46, 255, 0.03), transparent)",
                  },
                },
              ],
            },
          ],
        },
        {
          // Counter tension — resolving from the right
          classes: ["absolute", "rotate-[6deg]"],
          style: { top: "24%", right: "2%", width: "42%", height: "1px" },
          children: [
            {
              classes: ["velocity-accent", "absolute", "inset-0"],
              style: {
                background: "linear-gradient(to left, rgba(138, 46, 255, 0.12), transparent)",
              },
            },
          ],
        },
        {
          classes: ["absolute", "rotate-[6deg]"],
          style: { top: "36%", right: "9%", width: "32%", height: "1px" },
          children: [
            {
              classes: ["velocity-accent", "absolute", "inset-0"],
              style: {
                background: "linear-gradient(to left, rgba(138, 46, 255, 0.08), transparent)",
              },
            },
          ],
        },
        {
          // Trajectory — dashes guiding the eye toward the content
          classes: ["velocity-dash", "absolute"],
          style: { top: "46%", left: "6%", width: "42%", height: "1px" },
        },
        {
          // Momentum dot — rides the trajectory
          classes: ["velocity-dot", "absolute", "w-2", "h-2", "rounded-full"],
          style: {
            top: "46%",
            left: "22%",
            background: "rgba(138, 46, 255, 0.32)",
          },
        },
        {
          // Direction glow — ambient energy
          classes: ["absolute", "inset-0"],
          style: {
            background: "linear-gradient(135deg, rgba(170, 90, 255, 0.07) 0%, transparent 50%)",
          },
        },
      ],
    },
    sequence: VELOCITY_SEQUENCE,
  },
]
