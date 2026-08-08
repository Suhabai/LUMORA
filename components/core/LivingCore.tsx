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
  mode = "hero",
  intensity = "soft",
  interaction = "subtle",
}: LivingCoreProps) {

  return (
    <LivingCoreVisual
      mode={mode}
      intensity={intensity}
      interaction={interaction}
    />
  )
}