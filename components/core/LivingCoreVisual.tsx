import "./living-core.css"
import type { CoreMode, CoreIntensity, CoreInteraction } from "./core-types"

interface LivingCoreVisualProps {
  mode?: CoreMode
  intensity?: CoreIntensity
  interaction?: CoreInteraction
}

export default function LivingCoreVisual({
  mode = "hero",
  intensity = "soft",
  interaction = "subtle",
}: LivingCoreVisualProps) {

  const classNames = [
    "living-core",
    `core-${mode}`,
    `core-intensity-${intensity}`,
    `core-interaction-${interaction}`,
  ].join(" ")

  return (
    <div className={classNames}>
      <div className="core-atmosphere" />
      <div className="core-field" />
      <div className="core-source" />
    </div>
  )

}