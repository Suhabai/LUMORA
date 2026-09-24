# LUMORA — D.3 Production Integration Blueprint

**Status:** COMPLETE — architecture and planning only. **Production integration:** NOT STARTED.
**Next:** D.4 Production Integration — Gate 1, after founder approval and the sonic governance decision below.

## 1. Executive intent

Connect the approved D.2 narrative, Dark Calm v2.6 — Still, and Reactive Light Freeze v1 as one directed experience: **one light → three design logics → three worlds → three forms of proof**. The authored D.2 sequence carries meaning. Optional sound supplies environmental pressure; the same page is complete in silence. This document proposes production ownership and gates; it authorizes no code or asset changes.

## 2. Authority, frozen systems, and decision gate

Apply, in order: `DESIGN.md` and frozen governance; Identity Freeze v4; Motion Grammar; Loading Freeze v1; Reactive Light Freeze v1; D.2 final synthesis; existing production constraints; advisory references. Keep the luminous ring and approved wordmark still, distinct from the Living Core. Preserve the Event Horizon loader and its silent entry. Preserve the Living Core as its own experiential system. Use the v3.0.2 cinematic edge light lab as the perceptual reference at its approved **2.5X** setting; **3.0X** remains a lab ceiling, not a production target. Use the unchanged Dark Calm v2.6 — Still WAV, whose freeze SHA-256 is `7DF0BF29093E21976151C7F4A0F5AA91B1DB35E6D8C14F2A2ED4B7D1DD4CAD1C`.

**Governance conflict to resolve before audible production work:** `docs/sonic/LUMORA-SONIC-GRAMMAR.md` makes production silence an architectural decision and requires an explicitly opened identity review phase for reconsideration. Reactive Light Freeze v1 approves a lab reference and explicitly says it did not change production sound policy. The D.2 implementation specification also assumes silence and no persistent RAF. This D.3 plan does not itself reopen or override those decisions. D.4 Gate 1 may build silent D.2 foundations and a neutral environmental seam; connecting Dark Calm, creating a sound control, or running a sonic RAF requires explicit founder approval of the sonic/experience review and an updated production decision. If approval is withheld, D.2 remains silent and complete. The Motion Grammar reserves **PRESENCE** for the Living Core; Reactive Light has a felt presence but does not claim or copy that grammar behavior.

## 3. Current production audit — read only

| Concern | Observed production state |
| --- | --- |
| Homepage | `app/page.tsx` is a Server Component. It selects `HeroV2` through `HERO_VARIANT = "living-light"`, then `SignatureMoment` through `TRANSITION_VARIANT = "signature-moment"`, then `SelectedWorks`, `DesignPhilosophy`, `About`, `Contact`, with `SectionTransition` between later sections. These switches point partly into `components/experiments/`, but are currently imported by production. |
| D.2 | The eleven-scene D.2 sequence is in `experiments/visual-concept-lab-D2/`, including `implementation-spec/`, `motion-spec/`, desktop, mobile, and reduced-motion references. It is **not implemented** as the production homepage. Existing world order and section themes overlap with D.2 but do not constitute D.2. |
| Hero | Current production uses `components/experiments/hero-v2.tsx`: a client leaf with GSAP entrance and CSS atmosphere. `components/sections/hero.tsx` and `hero-v3.tsx` exist but are not selected. D.2 Hero Origin is a new authored composition, not a relabeling of HeroV2. |
| Worlds | `SelectedWorks` → `SelectedWorlds` → `WorldSection` maps `world-data` for OMNIA, NEXORA, VELOCITY. `WorldSection` uses GSAP world sequences and NEXORA depth ScrollTriggers; route pages under `/work/{world}` use separate experience components. D.2 proof specimens and First Consequence are not present on the homepage. |
| Layout and navigation | Server `app/layout.tsx` mounts `ExperienceLoader`, `ScrollAtmosphere`, `SmoothScroll`, `ExperienceProvider`, `GlobalCore`, skip link, fixed `Navigation`, `<main id="hero">`, and `Footer`. Navigation is a client component with Framer Motion menu, `z-50`, route links, and anchored homepage links. |
| Motion and loops | GSAP/ScrollTrigger runs hero, transition, worlds, philosophy, and other routes. Framer Motion runs navigation, Living Core visuals, and UI. Lenis owns a persistent RAF on normal motion. `GlobalCore` owns another scroll-response RAF; `ScrollAtmosphere` schedules a RAF from scroll events and writes CSS variables. Some CSS atmosphere animates continuously. These are existing performance interactions; D.3 adds no loop. |
| Client/server and reduced motion | Root and homepage remain server components with client leaves. Multiple components independently call `matchMedia('(prefers-reduced-motion: reduce)')`; `styles/globals.css` also has a global reduced-motion rule. There is no single live preference owner yet. |
| CSS/layers | `styles/globals.css` contains central tokens and an existing continuous `.env-layer` under `GlobalCore`, with void, field, depth, warmth, settle, mist, traces, vignette. `DirectionalLight` is already mounted under `GlobalCore`. HeroV2 has its own CSS atmosphere. Fixed navigation, root Core environment, authored section effects, and existing `backdrop-filter` surfaces require an explicit layer and paint audit before reactive integration. |
| Sound | No production audio controller, sound control, WAV import, analyser, or sonic loop was found in the audited production entry path. Current production is silent. |

The audit is based on repository source, not a running browser trace. D.4 must verify actual stacking, scroll, and route behavior on devices before integration.

## 4. Target D.2 architecture and scope

The target homepage is **Arrival → Hero Origin → First Consequence → Light Divide → Three Design Logics → OMNIA → NEXORA → VELOCITY → Thinking → Person → Threshold**. Keep `app/page.tsx` a Server Component and compose authored semantic sections from it. Keep proof content and project links in server-rendered markup where possible; isolate only scroll choreography and environmental control in client leaves. Use the D.2 `implementation-spec`, Light Divide `motion-spec`, mobile and reduced-motion references as the section contract. Reuse established world data, geometry, and case-study routes where they accurately support D.2; do not call existing homepage components D.2 merely because names match.

The D.2 proof sequence must appear with sound off: Hero promises a source with consequences; First Consequence provides NEXORA disclosure evidence before assertion; Light Divide resolves one source into Structure, Depth, Momentum; three distinct proof sections justify their respective case-study entries; Thinking, Person, and Threshold close with judgment and human invitation. The D.2 Light Divide timeline remains deterministic and interruptible by scroll, independent of audio.

## 5. Sonic activation model — proposed, approval gated

Recommend a quiet text-and-state **Sound off / Sound on** button in the navigation action area, separate from the mark, wordmark, Living Core, and loader. Keep a visible compact label on mobile, a minimum comfortable touch area, visible focus, and the same relative placement when the menu opens. It begins **off** on every fresh document load. No modal or onboarding. Nothing loads or plays during the frozen loader.

On deliberate click or keyboard activation, initialize or resume the one `AudioContext` directly within the user gesture, prepare the one audio source and analyser graph, then start Dark Calm at **position zero**. Reflect `on` only after playback succeeds. A second activation stops playback and analysis and settles light to neutral. A later activation begins at zero again; there is no hidden resume point. Keep one control state across client navigation within the mounted root, but never auto-play after a full reload, restored tab, or failed gesture. A stored preference may inform the label only if later approved; it must never trigger playback. When hidden, pause playback and analysis and clear deep-event eligibility; on visibility return stay paused with a clear **Sound paused** state and require another deliberate activation. This protects against surprise audio. If audio initialization, WAV decode/fetch, analyser creation, or `resume()` fails, show a small nonblocking unavailable state at the control, leave D.2 intact, and use neutral lights. Browser autoplay blocking is treated as failed activation, never bypassed.

**Continuity recommendation:** choose **B, homepage-only playback**. The D.2 score and environmental interpretation are tied to the homepage arc; `/work` and other routes have separate semantics and no approved sonic mix. Stop and release playback when leaving the homepage, while a root owner retains the sole context for the document lifetime. Returning through client navigation or Back/Forward remains silent until another user action. Alternative A would make the audio continuous across routes, but would require route-specific art direction, clearer persistent controls, and more lifecycle/testing complexity; it would risk implying a score for case studies. Revisit only through a later review.

## 6. One sonic nervous system

After approval, a single root-scoped client controller owns **one `AudioContext`, one source pipeline, one `AnalyserNode`, and one analysis loop**. One audio element or decoded buffer source chain feeds the analyser and output; the implementation must ensure there is never concurrent playback or a second connected source. An analyser failure disables reactive response and may leave audible playback available only if an explicit visual **Sound on, light unavailable** state can be maintained; the simpler default is to stop and return neutral. No section owns FFT processing, an AudioContext, or analysis RAF. React state changes only for discrete states (`off`, `starting`, `on`, `paused`, `unavailable`) and route/section identity, never on analyser frames.

The controller smooths and bounds FFT-derived values into normalized `presence`, `depth`, `bloom`, `air`, `pressure`, `tremor` (all 0–1). Low energy primarily informs pressure/depth, middle energy bloom/density, high energy fine air; attacks and releases differ by property. `tremor` is a bounded environmental signal, not direct page movement. Expose only semantic values through an imperative environmental sink such as `--sonic-presence`, `--sonic-depth`, `--sonic-bloom`, `--sonic-air`, `--sonic-pressure`, `--sonic-tremor`. Keep names namespaced from existing `--core-*` and `--env-*` variables. No arbitrary FFT bin or per-frame React context broadcast reaches sections. Preserve the v3.0.2 perception through visual review, not copied laboratory scalars.

## 7. Reactive Light architecture and ownership choice

Choose **C: one shared page-level bilateral environment with section modulation**. A fully page-level environment without modulation would flatten the D.2 arc. Section-local environments would duplicate two-light systems, create seams, and invite multiple loops. The hybrid has one two-source visual body for the homepage and a separate low-frequency section semantic state that controls its bounds, bias, falloff, and release. Section registration uses `data` metadata or a small observer/scroll handoff; it does not create section RAFs. Section changes interpolate with canonical Motion Grammar easing. On homepage unmount, remove the environment, its styles, observer, and shiver target while the root controller settles silent.

The **left** source is denser and narrower with faster pressure response and a stronger local hot zone. The **right** is broader, softer, with longer release. Each consists of layered, bounded light and falloff; the only two primary living-light sources remain at the edges. The near-white point is microscopic, then approved violet/deep purple resolves into the void. There is no central reactive slit, visible capsule/ellipse/node/filament/waveform/line, particle, or RGB assignment. The center stays dark enough for copy and proof. Existing `.env-layer`, `DirectionalLight`, HeroV2 atmosphere, and D.2 authored atmosphere must be reconciled in D.4 so there are not competing light sources; no frozen Living Core or identity behavior is transferred into the bilateral layer.

**Neutral fallback:** when sound is off or unavailable, the two edges may retain a quiet art-directed static light state if it supports the D.2 composition; there is no fake audio motion. The D.2 authored lighting and readability remain complete. A temporary development-only feature flag gates the additive reactive system without changing D.2 semantics.

## 8. Section intensity and authored interpretation

The table in §20 is the production-authoritative perceptual map. Scale: **0 = no reactive presence; 0.25 = barely present; 0.50 = supporting; 0.75 = clearly alive; 1.00 = approved 2.5X reference**. These are relative review targets, not CSS multipliers. Section modulation changes density, distance, bloom, pressure, and release inside the same violet light; it never creates new colors or visible shapes.

- **Arrival (0.20):** establish the void and orientation. Sound adds almost no spectacle.
- **Hero Origin (0.90):** strongest early bilateral demonstration. Baseline is readable darkness between left/right fields. Sound-on pressure becomes clear without beat sync; deep pressure increases environmental density, subject to the global shiver gate. At the handoff, the light contracts and recedes into First Consequence rather than continuing at hero strength.
- **First Consequence (0.55):** compress bloom, let pressure recede, give the left denser field slight dominance while NEXORA’s surface → inference → hidden signal specimen becomes the focal evidence. This authored handoff prepares the Divide without letting audio reveal evidence.
- **Light Divide (0.45):** hold tension through edge density and inward atmospheric pressure, then soften on release. Audio cannot trigger, time, reorder, or alter the Structure/Depth/Momentum paths or labels. Sound-off choreography is identical.
- **Three Design Logics (0.35):** one light subtly foreshadows disciplined falloff for Structure, inward depth for Depth, and held/released bloom for Momentum. These are spatial interpretations, not separate RGB modes.
- **OMNIA (0.45):** tighter discipline and falloff; low displacement and restrained bloom. Existing axes belong to proof content, never to audio response.
- **NEXORA (0.85):** deepest violet pressure and greatest inward atmospheric reach; strongest proof moment, with disclosure layers and route fully legible. Rare global deep resonance may feel most natural here, but its trigger stays global and evidence never moves in normal reactivity.
- **VELOCITY (0.65):** hold pressure tighter, release bloom in a controlled direction, settle at arrival. No speed lines, HUD, streaks, or particles.
- **Thinking (0.30):** cognitive breathing; restrained living atmosphere while text leads.
- **Person (0.20):** intimate minimal response. Global rare event, if eligible, is attenuated to almost imperceptible here; human image and story remain calm.
- **Threshold (0.25, decaying toward 0.10):** reduce core intensity, broaden soft haze, lengthen release, suppress new shiver eligibility, settle into open space. It is an exhale, not a completion animation.

## 9. Rare whole-scene shiver

The single sonic controller owns the **deep-pressure envelope, positive-rise test, high/low hysteresis thresholds, and refractory cooldown**. Only it can emit a bounded resonance event. The homepage resonance wrapper receives the event and performs one short damped impulse, smaller counter-response, and release, roughly the approved v3.0.2 perception (~350 ms and ~1.25 px combined desktop displacement at 2.5X; mobile ~0.65 px). These are review envelopes, not copied values. No continuous mapping of page transform to bass. Disable event emission while hidden, on route exit, during reduced motion, and at Threshold; reset the armed state on return. Person attenuates a qualifying global event. Cooldown and hysteresis survive section boundaries but clear on route unmount; no queued event plays after remount.

The wrapper must be a dedicated visual scene surface, **outside Lenis’ transform ownership and outside GSAP targets**, with an inner transform composed separately from all authored section transforms. It must not transform the root scrolling element, fixed navigation, skip link, sound control, loader, or identity lockup. If a truly complete-scene microscopic movement cannot be achieved without moving those protected layers or breaking fixed positioning, D.4 must stop that subfeature and obtain a frozen-system/accessibility decision; it must not silently redefine “whole scene.” Keep overflow clipped within the visual scene, no hit-test displacement at click targets, no new scrollbars, no layout shift, and no giant repaint. A rare shiver is a bounded physical consequence, not a new motion category.

## 10. Motion Grammar and separation of motion

| Grammar | D.3 relationship |
| --- | --- |
| REVEAL | Authored D.2 information entrances only; never timed by audio. |
| ALIGN | Authored proof hierarchy and three-path resolution; never FFT-driven. |
| RELEASE | Authored consequence/Threshold handoffs; environmental bloom may settle in response to sound within approved bounds. |
| DRIFT | Appropriate vocabulary for restrained environmental density/distance changes. |
| HANDOFF | Authored continuity between sections; section modulation follows the handoff but cannot cause it. |
| PRESENCE | **Living Core exclusive.** Reactive Light can feel alive without adopting its multi-rate oscillation, morphing, or motion ownership. |

Canonical Motion Grammar easing and reduced-motion equivalents govern. The D.2 Light Divide remains one authored GSAP sequence. Audio never determines content entrance, visibility, navigation progression, section order, proof disclosure, or required interaction.

## 11. Route and visibility lifecycle

| Event | Planned behavior |
| --- | --- |
| Fresh document load | Loader runs once, silently. Sonic controller is inert/off; no audio fetch or context creation. Environment is neutral if the homepage is present. |
| Homepage client entry/remount | Reattach one page environment and section registry; remain off. Never construct a second context or playback instance. |
| `/work` and other route navigation | Stop playback/analysis and settle sonic state; unmount homepage environment and scene wrapper. Root control may remain present but indicates off. Preserve existing route motion, Core, and navigation. |
| Back/Forward | Restore route and scroll per platform; recompute active section from actual viewport. Remain silent until new activation. No loader replay on client navigation. |
| Tab hidden | Cancel the analysis RAF, pause source, clear pressure/shiver arming, settle variables. Existing Lenis/GSAP visibility behavior must be checked separately in D.4. |
| Tab visible | Keep sound paused; show control state and require user activation. Re-register section state from viewport. No queued shiver. |
| Controller teardown/full reload | Cancel RAF, listeners, observers, timers; disconnect source/analyser, close context once, clear style variables. No persisted live audio object. |

## 12. Mobile and reduced motion

Mobile preserves the two-edge identity and optional sound. Narrow the light bodies and reduce haze/bloom and paint area; allow the right field’s longer release without filling the center. Analyse at **18–20 Hz maximum**, no mobile section analysers. Reduce shiver displacement below the reviewed ~1 px envelope; if device performance or hit testing fails, disable it. Keep the D.2 mobile proof order and readable labels. Do not replace the mobile scene with an unrelated static visual.

Use one future shared `prefers-reduced-motion` subscription for the new controller/environment and D.2 client choreography, including live preference changes; do not add another listener per D.2 section. Existing components currently snapshot the query independently, so D.4 must integrate carefully and preserve their behavior until migrated. Reduced motion resolves all authored information in meaningful final states; the light may change brightness, bloom, opacity, and atmospheric density slowly. **No shiver, tremor, translation, rotation, or reactive scale.** Audio remains available only by explicit opt-in.

## 13. Accessibility and color/contrast contract

The control is a native button with a visible state label and `aria-pressed` or an equivalent unambiguous accessible state. Activation, mute, and retry work with Enter/Space and touch; focus stays on the control after state changes. A short nonblocking status announces failure/paused state without repeated analyser announcements. Respect menu focus order, safe area, visible focus, and a comfortable touch target. Sound is never the only source of information; reactivity never encodes essential information. No flashing or rapid luminance change. Keyboard and screen-reader use must remain complete when audio is off, blocked, or unavailable.

Use existing brand violet/void tokens. Verify readable contrast for headings, body, project labels, proof specimen text, navigation, focus indicators, and buttons in sound-off, normal, and deep-pressure captures. Put local dark attenuation behind copy/proof and stop inward bloom before it competes with evidence; preserve the strongest approved light at the edges where space permits. Do not weaken every scene globally to repair one hotspot. Reactive layers are `aria-hidden`, `pointer-events: none`, and below all actionable UI and focus indicators.

## 14. Performance and compositing budget

- **One analysis RAF** owned by the controller, throttled to **≤30 Hz desktop** and **≤20 Hz mobile** (target 18–20). RAF may tick more often but must skip reads/writes outside the interval; cancel fully when silent, hidden, or off-route. The existing Lenis and GlobalCore RAFs are separate preexisting owners, not licences for duplicate sonic loops. Verify total frame cost with them active.
- Batch analyser reads, smoothing, and variable writes in one pass. Avoid layout reads, `getBoundingClientRect`, style recalculation requests, React renders, and new GSAP timelines on analyser frames. Browser interpolation can smooth visual output between updates.
- Prefer two bounded edge hosts with layered gradients or pseudo-elements and a small number of composited opacity/transform surfaces. Keep blur radii fixed and bounded; do not animate a full-screen blur/filter or add backdrop filters. Aim for **two large light bodies maximum**, each with restrained internal layers, and fewer/smaller surfaces on mobile. Compare GPU memory and paint flashing on mid-tier hardware.
- Avoid canvas, WebGL, SVG filter animation, huge offscreen surfaces, particles, and extra dependencies unless measured evidence later justifies a review. Apply `will-change` only to proven animated surfaces, and release it when idle. No geometry/layout animation; reserve section dimensions and preserve CLS.
- Account for existing `.env-field` and `DirectionalLight` gradients plus navigation blur; overdraw and large gradient repaints are the chief risks. D.4 must profile sound-off, normal, and deep-pressure states, including tab hide/restore and route cleanup. No long-lived array, decoded asset, listener, observer, AudioContext, or RAF leak.

## 15. Layer contract

Conceptual back-to-front order: **background void → shared reactive environment → authored section atmosphere → content/proof → interactive UI → fixed navigation and sound control → protected identity/loader where applicable**. The Living Core keeps its independent approved layer relationship; do not bury or recolor it to accommodate sonic light. Loader is a separate protected entry overlay and stays silent. In D.4, document actual stacking contexts formed by transforms, opacity, filters, `position`, and the fixed nav before assigning numeric z-index values. Reactive light cannot intercept pointers, cover focus rings, wash navigation, or sit above text. Shiver transform is isolated as described in §9 and never changes stacking order.

## 16. Component ownership plan — proposed, no files created

| Proposed unit / likely integration point | Responsibility and boundary | Receives sonic values / DOM / RAF / cleanup |
| --- | --- | --- |
| Root sonic controller near `app/layout.tsx` client providers | Discrete opt-in state, one audio graph, semantic mapping, visibility/route coordination. Client leaf under Server layout; kept distinct from `ExperienceProvider`’s Core phase. | Owns audio and **sole sonic RAF**. Writes semantic values to one environmental sink; disconnects, cancels, closes, removes listeners on document teardown. |
| Sound control in `components/layout/navigation.tsx` action area | Button label, state, keyboard/touch feedback. Client UI; no brand-mark interaction. | Receives discrete state/actions only. No FFT, analyser, RAF, or direct light DOM manipulation. |
| Homepage reactive environment adjacent to existing `GlobalCore`/environment architecture | Exactly two edge sources, neutral state, section modulation; client visual leaf, with CSS in the existing token/layer system. Must be reconciled with `.env-layer` and `DirectionalLight`. | Receives semantic variables imperatively; owns only its two visual hosts, no RAF. Cleans style variables/observer on homepage unmount. |
| D.2 section registration near `app/page.tsx` | Maps eleven server-rendered sections to a small semantic section state, using visibility/scroll handoff. | Receives no raw sonic values; can set section mode on entry. No per-section RAF; disconnects observer. |
| D.2 Light Divide leaf | One scoped GSAP authored timeline from the D.2 motion spec, with reduced-motion final state. | Receives section mode only; no sonic values or analysis. Kills GSAP context/ScrollTrigger on unmount. |
| Scene resonance owner at homepage visual scene boundary | Receives rare controller event and performs bounded impulse on an isolated visual wrapper. | Receives event, controls one inner transform, no permanent RAF; cancels impulse on route/visibility/reduced-motion changes. |
| Shared motion-preference owner | Single live query signal for **new** D.2/reactive consumers; migration seam for existing independent checks. | No RAF; removes one media-query listener on teardown. |

Names are conceptual. D.4 should choose file names that fit existing conventions after checking the Next 16.3.5 guide in `node_modules/next/dist/docs/` before writing production code. No proposed unit in this table is claimed as an existing file.

## 17. Data-flow diagram

```text
User activates Sound on (explicit gesture; approval gated)
  → one source pipeline for unchanged Dark Calm v2.6 — Still
  → one AudioContext → one AnalyserNode → one ≤30/20 Hz analysis loop
  → bounded semantic signals: presence / depth / bloom / air / pressure / tremor
  → namespaced CSS variables at one environmental sink
  → one bilateral LEFT + RIGHT environment
  → active D.2 section modulation (authored section order remains independent)
  → visible atmospheric response

Smoothed deep pressure + positive rise
  → threshold + hysteresis + cooldown in controller
  → one global resonance event
  → isolated homepage scene wrapper, short damped impulse
  → cooldown / disarm on hide, route exit, reduced motion, Threshold

Sound off / unavailable → neutral two-edge state + complete authored D.2
```

## 18. State matrix

| State | Audio | Analyser | Lights | Tremor | Scene shiver | Sections |
| --- | --- | --- | --- | --- | --- | --- |
| Sound OFF | Silent, no active context required | Stopped | Art-directed neutral bilateral state | None | None | Full authored D.2 |
| Sound ON / normal | Dark Calm playing after gesture | One shared bounded loop | Semantic edge response | Subtle environmental only | Armed, usually absent | Same content/timing/order |
| Sound ON / deep pressure | Same playback | Same loop, no extra reads | Greater bounded density/depth | Bounded | One rare damped event if threshold, rise, cooldown, section eligibility pass | Evidence/links stable except approved microscopic event |
| Reduced motion | User-selected sound may play | Same rate cap if on | Brightness/bloom/opacity/density only | None | Disabled | Meaningful final authored states |
| Mobile | User-selected sound may play | One shared 18–20 Hz cap | Two narrower, cheaper edge fields | Reduced | Sub-1 px envelope or disabled by performance gate | Mobile D.2 order/proof |
| Tab hidden | Paused | RAF cancelled | Settled neutral | None | Disarmed | No queued response |
| Audio failure / blocked | Silent; control says unavailable | Absent/stopped | Neutral | None | None | Complete D.2, no modal |

## 19. Failure behavior

WAV fetch/decode failure, unsupported or failed `AudioContext`, analyser error, denied resume/autoplay, device resource pressure, and user muting all converge on a stable neutral environment. A failed first activation leaves the control off or unavailable, never falsely on. Low-power mode may reduce analysis to the mobile cap, reduce bloom, then disable shiver, then suspend reactivity while retaining approved neutral bilateral composition. Do not normalize, remaster, replace, or silently fall back to a different soundtrack. No error modal. The site remains complete without audio.

## 20. Section matrix — production perceptual authority

`Intensity` uses the relative 0–1 scale in §8, not a CSS scalar. `Bias` indicates atmospheric emphasis, never removal of either source. `Depth`/`bloom` are qualitative bounds. `Tremor` is environmental only; `Shiver` is a gate for the one global event.

| D.2 section | Intensity | Bias | Depth | Bloom | Tremor | Shiver participation | Semantic purpose |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Arrival | 0.20 | Balanced, quiet | Shallow | Minimal | No | No | Orient in void |
| Hero Origin | 0.90 | Left denser; right wider | Deep | Strong at edges | Low | Yes, rare | Source with consequences |
| First Consequence | 0.55 | Slight left | Receding | Compressed | Low | Yes, attenuated | Energy leaves evidence |
| Light Divide | 0.45 | Balanced tension | Medium | Restrained | Low | No during choreography | One source resolves semantically |
| Three Design Logics | 0.35 | Balanced | Medium | Low | No | No | Prepare three spatial logics |
| OMNIA | 0.45 | Tight left discipline | Shallow/ordered | Narrow | No | No | Structure and clear proof |
| NEXORA | 0.85 | Left pressure, broad right reach | Deepest | Strong edges, masked proof | Low | Yes, rare | Surface → inference → hidden signal |
| VELOCITY | 0.65 | Slight directional release | Medium | Held then released | Low | Yes, attenuated | Held → release → arrival |
| Thinking | 0.30 | Balanced | Shallow | Low | No | No | Cognitive rest |
| Person | 0.20 | Balanced, intimate | Shallow | Minimal | No | Yes, nearly imperceptible only if global event already qualifies | Human connection |
| Threshold | 0.25 → 0.10 | Broad, soft | Settling | Soft, widening | No | No new trigger | Exhale into open space |

## 21. Integration order and production gates

Each gate is independently reviewable and reversible; none is implemented in D.3.

1. **D.4 Gate 1 — foundation and authority:** obtain founder decision on sonic review before any sound work; verify Next 16.3.5 docs; inventory stacking/scroll ownership on running site; build the D.2 semantic server section skeleton and silent proof hierarchy behind a development flag. Test sound-off, links, responsive reading order, and frozen systems.
2. **Gate 2 — authored D.2:** integrate Hero Origin, First Consequence, one Light Divide GSAP leaf, logic index, three proof sections, Thinking, Person, Threshold. Test each handoff, mobile, reduced-motion final states, route links, and sound-off comprehension. Keep loader/nav/Core untouched except necessary documented integration seams.
3. **Gate 3 — neutral bilateral environment:** reconcile existing Core environment, `DirectionalLight`, and section atmosphere; add exactly two light sources and section modulation with no audio. Test each section against the matrix, contrast, stacking, and disabled-flag rollback.
4. **Gate 4 — opt-in sonic nervous system, only after explicit governance approval:** connect the unchanged WAV, one graph/analyser/loop, control and semantic CSS sink. Test activation, mute, no surprise playback, route continuity, failure, and loop count.
5. **Gate 5 — rare resonance:** add global threshold/hysteresis/cooldown and isolated scene wrapper. Test fixed nav, hit targets, scrollbars, CLS, GSAP conflict, visibility, and device envelopes. Omit the subfeature if safe isolation cannot pass without a review decision.
6. **Gate 6 — mobile, reduced motion, and full QA:** cap analysis, reduce layers, validate live preference changes and hardware; compare against v3.0.2 2.5X review media and D.2 images. Founder video review decides perceptual equivalence before removing the development flag.

## 22. Rollback strategy

Keep a **development-only** integration flag for the reactive/sonic addition, default disabled until each gate passes. Do not expose it as a user debug setting. D.2 authored sections, copy, proof, links, and motion do not depend on the controller. Disabling the flag must remove the sound control, stop/close the graph, cancel the sonic RAF and resonance impulse, remove reactive variables/hosts, and show the neutral authored environment; the D.2 homepage remains premium and complete. Roll back by gate, without editing identity, Core, loader, Motion Grammar, or launch assets.

## 23. QA gates for implementation

- **Visual:** compare D.2 desktop/mobile/reduced-motion references and the v3.0.2 founder video at neutral, normal, deep-pressure, Hero, NEXORA, and Threshold. Founder video review checks organism feel, restraint, and 2.5X perception; numerical CSS values alone cannot approve it.
- **Playwright:** assert eleven-section order, proof text/links, silent default, button accessible name and pressed/paused state, keyboard activation, focus persistence, no modal, blocked media fallback, no audio-only content, no navigation change from sonic signals, and no hidden text in reduced motion.
- **Lifecycle:** fresh load, homepage client entry, `/work` exit, Back, Forward, route remount, reload, tab hide/restore, repeated toggles. Instrument AudioContext/Analyser/source/RAF counts and ensure only one active graph and no loop after off/hidden/unmount.
- **Deep event:** deterministic injected semantic envelope in test mode checks threshold, positive rise, hysteresis, cooldown, single dispatch, no event during Light Divide/Threshold/reduced motion, no queued event on restore. Do not rely on random WAV timing for this test.
- **Layout/accessibility:** viewport and keyboard checks for fixed nav, skip link, focus rings, hit targets, contrast over every proof, no scrollbars or CLS from shiver. Screen-reader review checks control state and linear proof meaning. Check no flash/rapid luminance changes.
- **Performance:** browser profiling on mid-tier desktop and mobile for analysis cap, long tasks, paint flashing, GPU layer/memory pressure, blur overdraw, Lenis/GlobalCore coexistence, hidden-tab pause, and route cleanup. Failure at a gate blocks the next gate and triggers attenuation or rollback within frozen constraints.

## 24. Explicit non-goals and launch boundary

This phase creates no production component, asset, control, playback, CSS behavior, or dependency. It does not revise identity, Living Core, loader, Motion Grammar, Sonic Grammar, D.2 proof meaning, or the frozen Reactive Light lab. It does not add sonic autoplay, audio to the loader, an identity visualizer, colors, particles, speed lines, or a separate analyser per section. It does not touch SEO, metadata, robots, sitemap, icons, OG image, 404/error pages, Node runtime, security remediation, or other launch-readiness work. D.3 completion means **this blueprint is validated and checkpointed**, not that production integration is complete.
