# LUMORA — D.4 Gate 1 Sonic Foundation

**Status:** FOUNDER PASS — Gate 1 approved on September 25, 2026. Gate 2 has not begun.

## Official founder decision

The founder reviewed the Correction C production captures and video and **passed D.4 Gate 1**. The approved result is two narrow, localized, symmetrical side slits with a dark readable center, controlled mobile behavior, and a visible but subordinate Living Core light response. The opt-in homepage sound policy, one shared analyser and semantic loop, reduced-motion treatment, and no-scene-shiver boundary remain in force.

**Accepted Living Core exception:** The founder explicitly accepts the narrow sonic **light-response** exception introduced during Gate 1. The existing Core may receive bounded semantic internal luminance and restrained aura response from the same shared analyser. Core identity, geometry, authored motion, meaning, and spatial role remain frozen. This decision does not authorize a second analyser, beat visualizer, sound-driven scale or position, or any broader reopening of Living Core. Previous Living Core history is unchanged.

## Scope and authority

Gate 1 integrates the approved Dark Calm v2.6 — Still WAV and one shared bilateral Reactive Light environment on the homepage. It follows Sonic Governance v1, Reactive Light Freeze v1, Motion Grammar, Identity Freeze v4, and the D.3 production blueprint. The visual reference is the frozen v3.0.2 Cinematic Edge Light lab at its 2.5X production-intent perception. This is an integration review, not a change to those frozen systems.

The production asset is `public/audio/lumora-dark-calm-still.wav`. Its SHA-256 is `7DF0BF29093E21976151C7F4A0F5AA91B1DB35E6D8C14F2A2ED4B7D1DD4CAD1C`, matching the canonical source. It is not regenerated or processed.

## Ownership and behavior

- `SonicFoundation` is mounted once under the root experience provider. It owns one lazy `AudioContext`, one media-element source, one `AnalyserNode`, and one sonic requestAnimationFrame loop for the document lifetime.
- The navigation button is the sole activation control. A fresh document and every homepage return begin **Sound off**. The WAV is requested and playback attempted only on a direct user gesture. **Sound on** appears only after `resume()` and `play()` succeed.
- One pass derives bounded, smoothed `presence`, `depth`, `bloom`, `air`, and `pressure` signals from low, middle, and high frequency bands. It writes namespaced CSS variables directly to the environment; analyser frames do not update React state.
- One fixed, pointer-transparent, screen-reader-hidden environment contains exactly two matching, inset vertical energy slits. Correction C narrows each local field below 100 CSS pixels on desktop and mirrors the right source from the left source's gradients and masks. Each has a near-white short core, close violet bloom, faint vertical tails, and fast inward falloff. Upper and lower regions dissolve into darkness. The center stays dark and readable. The neutral bilateral state remains nearly asleep when sound is off or unavailable.
- Founder correction redirected the original oval composition to symmetric edge light. The shared depth/pressure signal gives the existing Living Core source internal brightness and bloom response through Gate 1 CSS. Correction C also strengthens the Core's existing hero focal glow so the bounded light response is visible in ON and deep captures despite the Core SVG being partly obscured by the authored hero atmosphere. Its geometry, timing, and independent motion behavior are unchanged. No scene shiver or content displacement was added.
- **Founder governance clarification (Correction B):** The founder explicitly reopened **only the Living Core light-response boundary**. Core identity, geometry, authored motion, meaning, and spatial role remain frozen. The sole allowed addition is bounded semantic sonic luminance response from the existing shared analyser. Previous Living Core history is unchanged.
- Disabling sound, navigating away, or hiding the tab pauses playback, cancels analysis, resets playback to zero, and resets signals. Return and tab visibility do not auto-resume. Audio failure shows a nonblocking unavailable state and leaves the page complete.
- Analysis is capped at 30 Hz on desktop and 19 Hz below 700 px. Mobile uses shorter, narrower slits. Reduced motion keeps light response without transition, new spatial motion, or scene displacement; the fixed centering and mirror transforms do not change with sound.
- `SONIC_FOUNDATION_ENABLED` in `app/layout.tsx` is the internal Gate 1 development rollback switch. It is not exposed in the UI.

## Layer and protected-system boundary

The environment is a fixed `z-index: 11` visual sibling inside the root page shell, above the homepage background so the edge light remains visible. Both sources are inset equally from the viewport edges, cannot receive pointer events, and do not cover the center copy. The existing fixed navigation remains above it. The Living Core's internal source and its existing homepage aura receive one bounded sonic brightness value; the Core's protected motion and geometry, identity mark and wordmark, loader, and existing motion owners do not. No section has its own analyser or light pair.

## Validation and review

On September 25, 2026: `npx tsc --noEmit`, `npm run build`, and `npm audit` passed; the audit reported zero vulnerabilities. Six Playwright tests passed in the project's working Edge channel, covering opt-in, single graph, OFF/re-enable, route return, reduced motion, keyboard control, mobile overflow and sample cap, tab hide, and WAV failure. `git diff --check` passed. Full `npm run lint` is blocked by three `require()` imports in the unrelated untracked historical lab file `experiments/sonic-identity-v2/living-resonance-v282/serve-review.cjs`; Gate 1 files have no reported lint errors.

Founder review media are in `artifacts/gate1/`: desktop OFF, desktop ON, observed deep-light, Living Core response, light detail, mobile ON, reduced motion, and a 19.96-second real-time production reactive review video. The video holds ON long enough to include the later deep-pressure passage and returns to OFF at the end. The labeled Core detail places an OFF crop on the left and the highest observed ON luminance crop on the right from the same reduced-motion page, without changing production visibility. `gate1-correction-a-current.png` preserves the prior rail treatment for developer comparison. The captures show the current homepage and shared light foundation only. They do not imply D.2 choreography or section modulation.

## Deliberate Gate 1 exclusions

Rare whole-scene shiver, D.2 section-specific modulation, and Hero, NEXORA, VELOCITY, and Threshold sonic choreography are excluded. Gate 1 does not redesign homepage copy or unrelated navigation behavior. Founder PASS authorizes this Gate 1 checkpoint; Gate 2 is not part of it.
