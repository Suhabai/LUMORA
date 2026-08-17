import SelectedWorlds from "@/components/worlds/SelectedWorlds";

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="relative"
      aria-labelledby="works-heading"
    >
      {/* Hidden heading for accessibility */}
      <h2 id="works-heading" className="sr-only">
        Project Worlds
      </h2>

      <SelectedWorlds />
    </section>
  );
}
