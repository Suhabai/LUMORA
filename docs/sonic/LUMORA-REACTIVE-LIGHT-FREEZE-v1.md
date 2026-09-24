# LUMORA — Reactive Light Freeze v1

## 1. Status

**FROZEN — REACTIVE LIGHT FREEZE v1.** This is the founder-approved experience-layer design reference. It is not a production integration or a change to the current production sound policy. No production UI, D.2 choreography, Identity Freeze v4, Living Core, or Loading Freeze v1 was changed by this freeze.

## 2. Founder approval

The founder approved the Reactive Light system shown in the v3.0.2 lab and its `founder-review-v302.mp4` video. The review established **2.5X as the production-intent perceptual baseline**. This is approval of the perceived light and resonance behavior, not an instruction to copy every laboratory scalar into production. **3.0X is a lab ceiling** and **2.0X is a comparison reference**.

The founder's art direction is: the site should feel like a living luminous organism. It should not show graphics reacting to sound. Sound creates pressure inside the environment; light expresses that pressure. A rare deep moment may pass through the physical space as a tiny resonance. The result remains calculated, cinematic, calm, and unmistakably LUMORA.

## 3. Canonical experimental reference

**Canonical freeze reference:** `experiments/sonic-identity-v2/cinematic-edge-light-v302/`

The approved local lab contains `reactive-ui-demo.html`, `styles.css`, `reactive-light.js`, the unchanged WAV in `assets/`, and review tooling. Its local `founder-review-v302.mp4` and PNG captures are the visual evidence. **v3.0.2 is the canonical freeze reference.** Earlier labs remain historical evidence, not production authority. Do not retune this lab as part of freeze governance.

## 4. Sonic foundation and provenance

The approved foundation is **Dark Calm v2.6 — Still**:

- Original experimental source: `experiments/sonic-identity-v2/dark-calm-v26/dark-calm-still.wav`
- Canonical lab copy: `experiments/sonic-identity-v2/cinematic-edge-light-v302/assets/dark-calm-still.wav`
- SHA-256 of both files at freeze: `7DF0BF29093E21976151C7F4A0F5AA91B1DB35E6D8C14F2A2ED4B7D1DD4CAD1C`

Do not regenerate, normalize, remaster, or replace the WAV. Sound remains opt-in. The existing [Sonic Grammar](LUMORA-SONIC-GRAMMAR.md) defines the production site as silent; this approved experimental reference does not silently alter that production architecture. Production sound requires the separate integration decision and blueprint.

## 5. Visual philosophy

The reactive environmental body is **light only**: bloom, haze, pressure, depth, diffusion, tremor, and spatial release. It must never become visible objects or an audio visualizer. Exactly **two** primary living-light sources occupy the environmental left and right edges. There is no dominant central reactive slit. The center remains available for readable content and authored section choreography.

## 6. Bilateral light anatomy

Each source has a microscopic hot core, tight inner bloom, a wider volumetric body, a dark atmospheric falloff, and a localized vertical hot zone. The sources share one sonic nervous system but differ subtly:

| Source | Frozen character |
| --- | --- |
| Left edge | Denser, narrower, stronger local hot zone, faster pressure response |
| Right edge | Broader, softer, slightly slower response, longer spatial release |

They are related, never mirrored duplicates. Energy can appear to move inward and outward through light density alone; no connector, travelling dot, drawn line, or side body is permitted.

## 7. Brand color contract

The approved sequence is **near-white microscopic core → LUMORA violet → deep purple volumetric bloom → black void**. Violet and purple dominate. The source may approach white only at its hottest microscopic point. Amber/orange identity, cyan cyberpunk light, and RGB or multicolor audio response are forbidden.

## 8. Light quality contract

The edge sources must not look like LED strips, CSS borders, neon tubes, or uniform glowing lines. Approved quality includes tapered vertical energy, hot zones at different heights, layered bloom radii, non-uniform luminance, subtle optical irregularity, and darkness between the sources. The intended perception is **energy concentrated inside darkness**.

## 9. Reactive mapping

One smoothed analysis pipeline derives semantic variables for presence, depth, bloom, air, pressure, tremor, and asymmetric left/right light. Low energy chiefly drives pressure and spatial depth; mid energy supports bloom and local density; high energy supports fine detail. Curves are eased and bounded. Raw FFT bins must not drive visible properties directly or create beat-synced pulsing. Attack and release differ by property; deep light settles with inertia.

## 10. Deep-pressure behavior

Two levels are approved:

- **Level A — environmental resonance:** Side-light positions, bloom, haze, atmospheric pressure, and background density may move or deepen within restrained bounds.
- **Level B — rare whole-scene shiver:** A meaningful deep-pressure event may pass once through the complete visual scene as a tiny physical resonance. Readable content remains stable during normal reactivity and may participate only in this rare, extremely small event.

Deep response must be perceptible and cinematic without becoming continuous motion.

## 11. Scene-shiver contract

Trigger philosophy: **smoothed deep-pressure envelope → threshold crossing with meaningful positive rise → short irregular damped impulse → smaller counter-response → release → refractory period**. Hysteresis is required. Do not map page transform continuously to bass amplitude or repeatedly retrigger near a threshold.

The approved v3.0.2 lab demonstrates an event of approximately **350 ms**, with threshold, positive-rise requirement, hysteresis, and cooldown. The review measured approximately **1.25 px** combined displacement at 2.5X, while the 3.0X lab ceiling is approximately **1.64 px** combined; mobile review measured approximately **0.65 px**. These values describe the reviewed perception and safety envelope, not immutable production constants. The result should feel as if deep resonance briefly passed through space. Continuous page shake, glitch, game-hit motion, and repeated alternating shake are forbidden.

## 12. Reduced-motion contract

Under `prefers-reduced-motion: reduce`, there is **no tremor, translation, rotation, reactive scale, or scene shiver**. Slow brightness, bloom, opacity, and atmospheric density may continue. Sound may remain enabled by explicit user choice. Meaning and access cannot depend on motion.

## 13. Mobile contract

Mobile retains the same two edge lights, light-only environment, and sonic-pressure idea. It uses narrower bloom, less haze, smaller displacement, lower analysis frequency, and reduced complexity. It must not switch to an unrelated visual language. Rare scene displacement remains below roughly 1 px in the reviewed lab.

## 14. Performance architecture

The design calls for **one AudioContext, one AnalyserNode, and one shared sonic analysis loop**. Distribute smoothed values through shared CSS variables or similarly lightweight direct environmental updates. Do not rerender React components at analyser-frame frequency or create per-component analysers. No WebGL, shader, particle engine, or heavy visual dependency is required.

## 15. Accessibility

Sound is opt-in. The silent state is complete and understandable. Focus states remain visible. No navigation, content hierarchy, evidence, or essential instruction depends on audio, light response, or motion. Normal reactive behavior leaves headings, paragraphs, navigation, buttons, forms, screenshots, and proof still. Only the rare, bounded scene-shiver exception above may touch the whole scene.

## 16. Protected systems

Reactive Light is separate from [Identity Freeze v4](../identity/LUMORA-IDENTITY-FREEZE-v4.md), the Living Core, and [Loading Freeze v1](../loading/LUMORA-LOADING-FREEZE-v1.md). The luminous identity ring and wordmark stay still; they are not audio visualizers. Reactive Light does not redefine Living Core behavior or change the frozen loader.

## 17. D.2 relationship

Reactive Light is an **enhancement layer**. D.2 is the **authored experience structure**. Future integration may support Hero Origin, Light Divide, OMNIA, NEXORA, VELOCITY, and Threshold through environmental light, but it must not replace their semantic choreography. Audio must never control navigation, content hierarchy, or essential comprehension.

## 18. Production integration constraints

Production integration is **not complete**. The next phase is **Production Integration Blueprint with D.2**. That blueprint must reconcile the approved perceptual reference with production architecture, accessibility, mobile performance, and the existing silent-production Sonic Grammar before implementation. It must preserve the approved perception at the 2.5X baseline without mechanically copying lab scalars. No production component or section choreography is authorized for change by this freeze document alone.

## 19. Forbidden regressions and experiment history

Future work must not regress into glowing borders, LED strips, symmetric side lights, visible side geometry, nodes, filaments, equalizers, waveforms, beat-sync pulses, RGB lighting, excessive bloom, continuous page shake, continuously reactive typography, raw FFT jitter, or multiple analysis loops.

Historical lineage is preserved: v2.8 Living Resonance → v2.8.1 Reactive Presence Amplification → v2.8.2 Living Body Amplification → v2.9 Ignition Body → v3.0 Reactive Light Redirection → v3.0.1 Bilateral Living Light → **v3.0.2 Cinematic Edge Light (canonical freeze reference)**. Do not delete prior experiments.

The approved `founder-review-v302.mp4` and existing PNG captures remain in the local v3.0.2 experiment as review evidence. Large review media are intentionally excluded from the freeze commit; these paths are local references, not permanent repository URLs.

## 20. Reopen policy

This system may be reopened only when the founder explicitly reopens it, production integration exposes a technical impossibility, accessibility fails, performance fails meaningfully, or deployed browser/device evidence shows perceptual failure. A different aesthetic preference or interesting alternative is insufficient.
