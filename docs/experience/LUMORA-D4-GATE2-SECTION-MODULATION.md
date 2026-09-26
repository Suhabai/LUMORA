# LUMORA — D.4 Gate 2 Section Modulation

**Status:** FOUNDER APPROVED — D.4 Gate 2 passed final visual review, including Founder Corrections A and B. Checkpoint commit records the approved current-homepage section modulation. No push is part of this closeout.

## Scope and authority

Gate 2 extends the founder-approved Gate 1 homepage foundation. Gate 1 remains the authority for the opt-in WAV, bilateral light anatomy, the bounded Living Core light-response exception, and lifecycle. Sonic Governance v1, Reactive Light Freeze v1, Identity Freeze v4, Motion Grammar, and the D.3 blueprint remain in force. This gate adds section detection and temporary profiles for the current homepage; it does not implement the final D.2 scenes.

## Section foundation

`ScrollAtmosphere` owns the single scroll-driven section-state mechanism. It reads the current homepage composition at a viewport anchor, publishes a section change only when the key changes, and updates the root `data-sonic-section`. Reduced motion uses the same detection without its usual scroll animation. No new section observer was introduced.

`sonic-section-profiles.ts` centralizes the keys and bounded profile values. The temporary mapping is Hero Origin (`hero`), signature transition (`signature`), current selected works (`work`), Thinking (`thinking`), Person (`person`), and final contact (`contact`). Transition wrappers carry explicit keys; existing section IDs supply the other keys. Final D.2 scenes can replace these mappings through the resolver without adding analysers or independent light systems.

The shared `SonicFoundation` resolves a target on section change or resize. While sound is on, its existing capped analysis pass eases the energy, bloom, pressure, Core, neutral, atmosphere, and coverage gains across section handoffs. While sound is off, the section profile applies without audio modulation. CSS custom properties drive the existing two light sources and compose the profile with the existing global field and mist; analysis frames do not set React state.

## Hero Origin and current-page behavior

Hero keeps the Gate 1 unit profile: a nearly asleep neutral state, bilateral ON response, deeper pressure response, and the accepted bounded Living Core internal light response. The shared signal derivation and light geometry are unchanged. The signature and work profiles ease down from Hero; Thinking and Person become progressively quieter; final contact settles further. These are temporary current-homepage treatments, not final Light Divide, OMNIA, NEXORA, VELOCITY, or Threshold choreography.

**Founder Correction A:** Founder review found that the Hero DEEP Core became too visually dominant. The Hero Core light response now follows its prior mapping through `0.45`, then rises at `0.32` of the prior rate to a maximum of `0.626`. This local soft knee reduces peak internal brightness, central opacity, and bloom radius through the existing Core light variable. Other sections retain their approved mapping. The global pressure signal and Gate 1 bilateral light geometry are unchanged, so deeper sound remains stronger in the environment. No Core geometry or authored motion changed.

**Founder Correction B:** Final visual review identified that the neutral atmospheric baseline and broad global field overwhelmed the lower semantic section multipliers. The section profile now also controls existing field density, coverage, and mist/warmth contribution. Hero remains at its approved full profile; Work stays moderate; Thinking and Person settle progressively, with Person the most intimate current section; Contact retains a soft residual presence. Bilateral lights remain. No analyser signal, audio graph, Dark Calm source, or Gate 1 geometry changed.

Mobile keeps the two narrower Gate 1 edge lights and the 19 Hz analysis cap. The resolver softens the light-response differences while preserving the atmosphere/coverage order. Reduced motion retains brightness and density changes without new spatial movement. All copy, navigation, and orientation work with sound off; sound remains an explicit homepage-only choice.

## Lifecycle and protected boundaries

Route leave, tab hide, or Sound off cancels the one sonic loop, pauses and resets playback, and zeros the signals. Return and tab visibility do not auto-resume. The same document reuses its one AudioContext and one AnalyserNode. The section event listener and resize listener are removed with their owner. The sound control, canonical WAV, identity mark and lockup, loader, and Living Core geometry and authored motion are unchanged. No scene shiver is present.

## Review and validation

Four Gate 2 Playwright tests cover silent section changes, profile ordering, single-graph active handoffs, mobile and reduced motion, route return, hash navigation, and observer counts. Gate 1's six Playwright regression tests remain the foundation check. `tests/gate2-capture.mjs` produces Hero OFF, ON, and observed deep pressure; Thinking ON; Person ON; the side-by-side Hero/Thinking/Person comparison; mobile Hero ON; reduced motion; an ON-versus-DEEP comparison; and a real-time section review MP4 in `artifacts/gate2/`. The capture checks a real analyser-driven deep response and the Core ceiling. The final run observed Hero ON pressure/Core of `0.0000/0.2000`, Hero DEEP pressure/Core of `0.4548/0.4881`, a maximum Core response of `0.4881`, and a 37.75 second review video.

**Final validation:** `npm run build`, `npx tsc --noEmit`, `npm audit` (zero advisories), all six Gate 1 tests, all four Gate 2 tests, `git diff --check`, and MP4 decode verification passed. Founder review confirmed the perceptual order Hero > Thinking > Person and approved Gate 2. The checkpoint commit closes this gate; no push was made.

## Explicit exclusions

Scene shiver; full D.2 production implementation; Light Divide final choreography; OMNIA-specific, NEXORA final, and VELOCITY final production scenes; and any identity, loader, or sound-control redesign are outside Gate 2.
