import {
  CoreMode,
  CoreIntensity,
  CoreInteraction,
} from "./core-types"

import LivingCoreVisual from "./LivingCoreVisual"


interface LivingCoreProps {
  mode?: CoreMode
  intensity?: CoreIntensity
  interaction?: CoreInteraction
}


export default function LivingCore({
  mode = "presence",
  intensity = "soft",
  interaction = "none",
}: LivingCoreProps) {

  return (
    <LivingCoreVisual
      mode={mode}
      intensity={intensity}
      interaction={interaction}
    />
  )
}
