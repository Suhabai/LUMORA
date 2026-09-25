"use client";

import { useSonicControls } from "./sonic-foundation";

export function SoundControl() {
  const sonic = useSonicControls();
  if (!sonic?.availableHere) return null;

  const { status, toggle } = sonic;
  const label = status === "on" ? "Sound on" : status === "starting" ? "Starting sound" : status === "unavailable" ? "Sound unavailable" : "Sound off";
  return (
    <button
      type="button"
      className="sonic-control"
      aria-label={status === "unavailable" ? "Sound unavailable. Try again" : label}
      aria-pressed={status === "on"}
      aria-disabled={status === "starting"}
      aria-busy={status === "starting"}
      onClick={toggle}
    >
      <span className="sonic-control__indicator" aria-hidden="true" />
      <span>{status === "starting" ? "Sound…" : label}</span>
    </button>
  );
}
