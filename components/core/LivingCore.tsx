import { useEffect, useMemo } from "react"
import LivingCoreVisual from "./LivingCoreVisual"
import {
  CORE_EVENT_SEMANTIC_MAP,
  CORE_SEMANTIC_LAYERS,
  CORE_EVENT_TRANSITIONS,
  type CoreMode,
  type CoreIntensity,
  type CoreInteraction,
  type CoreEvent,
  type CoreSemanticState,
  type CoreStateLayers,
} from "./core-types"


interface LivingCoreProps {
  mode?: CoreMode
  intensity?: CoreIntensity
  interaction?: CoreInteraction
  /** Drives the semantic state. When provided, overrides event. */
  event?: CoreEvent
  /** Explicit semantic state. Overrides event-derived state. */
  semanticState?: CoreSemanticState
  /** Called when the semantic state changes. */
  onSemanticChange?: (state: CoreSemanticState) => void
}


/**
 * LivingCore — The material heart of LUMORA.
 *
 * Derives semantic state from event, computes per-layer configs,
 * and passes everything to LivingCoreVisual for rendering.
 *
 * This component is pure computation. No DOM, no animation.
 */
export default function LivingCore({
  mode = "presence",
  intensity = "medium",
  interaction = "none",
  event,
  semanticState: explicitState,
  onSemanticChange,
}: LivingCoreProps) {

  // Resolve semantic state: explicit > event-derived > fallback
  const semanticState = useMemo<CoreSemanticState>(() => {
    if (explicitState) return explicitState
    if (event) return CORE_EVENT_SEMANTIC_MAP[event]
    return "present"
  }, [explicitState, event])

  // Compute per-layer configs for the resolved state
  const layerConfigs = useMemo<CoreStateLayers>(() => {
    return CORE_SEMANTIC_LAYERS[semanticState]
  }, [semanticState])

  // Resolve transition timing from event
  const transition = useMemo(() => {
    if (event) return CORE_EVENT_TRANSITIONS[event]
    return { duration: 1.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
  }, [event])

  // Notify parent when semantic state changes
  useEffect(() => {
    onSemanticChange?.(semanticState)
  }, [semanticState, onSemanticChange])

  return (
    <LivingCoreVisual
      mode={mode}
      intensity={intensity}
      interaction={interaction}
      semanticState={semanticState}
      layerConfigs={layerConfigs}
      transition={transition}
    />
  )
}
