import WorldSection from "./WorldSection"
import { worlds } from "./world-data"

export default function SelectedWorlds() {
  return (
    <div className="relative">
      {worlds.map((world, index) => (
        <WorldSection key={world.id} world={world} index={index} />
      ))}
    </div>
  )
}
