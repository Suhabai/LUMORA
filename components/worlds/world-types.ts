export type WorldId =
  | "omnia"
  | "nexora"
  | "velocity"

export type AtmosphereStyle =
  | "structured"
  | "exploratory"
  | "flowing"

export interface WorldAtmosphere {
  style: AtmosphereStyle
  gradient: {
    type: "radial" | "linear"
    position: string
    color: string
    opacity: number
  }
  overlay?: {
    direction: "to-top" | "to-bottom" | "to-right" | "to-left"
    opacity: number
  }
  hover: {
    borderOpacity: string
    contentShift: boolean
  }
  motion: {
    atmosphereDuration: string
    contentDuration: string
    easing: string
  }
}

export interface WorldRestingAtmosphere {
  gradient: {
    type: "radial" | "linear"
    position: string
    opacity: number
  }
  alignment: "center" | "lower" | "directional"
}

export interface World {
  id: WorldId
  title: string
  category: string
  description: string
  feeling: string[]
  atmosphere: WorldAtmosphere
  restingAtmosphere: WorldRestingAtmosphere
}