import WorldCard from "./WorldCard"
import { worlds } from "./world-data"

export default function SelectedWorlds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {worlds.map((world) => (
        <WorldCard key={world.id} world={world} />
      ))}
    </div>
  )
}