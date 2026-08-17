import { World } from "./world-types"

export const worlds: World[] = [
  {
    id: "omnia",
    title: "OMNIA",
    category: "Digital Experience",
    description: "Precision, structure, and silence — a world built around control.",
    feeling: ["Architecture", "Precision", "Silence"],
    restingAtmosphere: {
      gradient: {
        type: "radial",
        position: "ellipse_at_center",
        opacity: 0.02,
      },
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
      overlay: {
        direction: "to-top",
        opacity: 0.02,
      },
      hover: {
        borderOpacity: "accent/15",
        contentShift: false,
      },
      motion: {
        atmosphereDuration: "800ms",
        contentDuration: "600ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  {
    id: "nexora",
    title: "NEXORA",
    category: "Intelligent System",
    description: "An intelligent system shaped by discovery. Each layer reveals something.",
    feeling: ["Intelligence", "Discovery", "Depth"],
    restingAtmosphere: {
      gradient: {
        type: "radial",
        position: "ellipse_at_bottom",
        opacity: 0.03,
      },
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
      overlay: {
        direction: "to-top",
        opacity: 0.04,
      },
      hover: {
        borderOpacity: "accent/25",
        contentShift: true,
      },
      motion: {
        atmosphereDuration: "700ms",
        contentDuration: "500ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  {
    id: "velocity",
    title: "VELOCITY",
    category: "Dynamic Experience",
    description: "Built around movement and direction. Energy that flows with purpose.",
    feeling: ["Movement", "Energy", "Flow"],
    restingAtmosphere: {
      gradient: {
        type: "linear",
        position: "135deg",
        opacity: 0.025,
      },
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
      overlay: {
        direction: "to-right",
        opacity: 0.03,
      },
      hover: {
        borderOpacity: "accent/20",
        contentShift: true,
      },
      motion: {
        atmosphereDuration: "600ms",
        contentDuration: "450ms",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
]
