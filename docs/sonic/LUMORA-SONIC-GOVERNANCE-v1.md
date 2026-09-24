# LUMORA — Sonic Governance v1

## 1. Status

**ACTIVE — SONIC GOVERNANCE v1.** Founder-approved documentation decision for the optional production sonic experience. D.4 production integration has **not** begun. This document supersedes the historical NO SOUND rule only within the scope below; it does not alter frozen identity, motion, loading, Living Core, or Reactive Light implementations.

Read with [Sonic Grammar](LUMORA-SONIC-GRAMMAR.md), [Reactive Light Freeze v1](LUMORA-REACTIVE-LIGHT-FREEZE-v1.md), and the [D.3 production blueprint](../experience/LUMORA-D3-PRODUCTION-INTEGRATION-BLUEPRINT.md). In any conflict with a protected non-sonic system, do not silently redesign it; escalate for a founder decision.

## 2. Historical NO SOUND decision

Phase 0D.2 deliberately chose **NO SOUND**. Its assessment that LUMORA was complete in silence, and its concern that unnecessary audio could undermine calm, are preserved in the Sonic Grammar. At that time the production site was intentionally silent, and no sonic production phase was planned. These statements describe the historical decision and remain useful constraints on restraint and necessity. They are not a statement that the later founder review never occurred.

## 3. Reopening event and supersession

The founder later **explicitly reopened Sonic Identity exploration**, reviewed Dark Calm v2.6 — Still and the v3.0.2 Cinematic Edge Light lab, approved Reactive Light Freeze v1, approved opt-in sound, and approved the D.3 production architecture. D.3.1 records the resulting governance decision: **LUMORA MAY USE SOUND AS AN OPTIONAL EXPERIENCE LAYER.** This is a supersession of Phase 0D.2's production-wide NO SOUND rule for the approved homepage experience, not an erasure or retroactive reinterpretation of that rule. It resolves the sonic governance gate identified in D.3 without changing the historical D.3 document. Production work remains subject to D.4 implementation gates and quality review.

## 4. Founder-approved current policy

Sound is **OFF by default** and available only by deliberate user activation. It is non-essential to comprehension, navigation, interaction, and proof. The entire D.2 authored experience works with sound off, unavailable, or disabled. No forced sound, activation modal, mandatory headphones, browser autoplay workaround, fake activation, or loader autoplay. Sound and Reactive Light must remain accessible, compatible with reduced motion, gracefully removable, and complete when unavailable. This approval is narrow: one optional homepage experience based on the canonical foundation, not general permission for sound design across LUMORA.

## 5. Canonical sonic foundation

**Dark Calm v2.6 — Still** is the only approved production sonic foundation.

- Canonical source: `experiments/sonic-identity-v2/dark-calm-v26/dark-calm-still.wav`
- Canonical SHA-256: `7DF0BF29093E21976151C7F4A0F5AA91B1DB35E6D8C14F2A2ED4B7D1DD4CAD1C`

Do not regenerate, normalize, remaster, replace, pitch-shift, add melody or beat, or derive a new production composition without explicit founder reopening. The approved source file and lab copy remain unchanged in this phase. This governance approval does not authorize asset copying into production yet.

## 6. Reactive Light relationship

[Reactive Light Freeze v1](LUMORA-REACTIVE-LIGHT-FREEZE-v1.md) is the approved visual-sonic authority. Its canonical perceptual reference is **v3.0.2 Cinematic Edge Light**. The **2.5X** review is the production-intent perceptual baseline; **3.0X** is a lab-only experimental ceiling. Production must match the approved perception rather than mechanically copy lab scalar values.

**Audio = optional experience input. Reactive Light = optional environmental consequence. D.2 = complete authored experience.** Audio may influence only the approved bilateral environmental light, bloom, haze, atmospheric depth and pressure, and rare bounded scene resonance. It may never determine section order, content entrance, required interaction, navigation, proof or text visibility, or essential transitions. No raw sonic signal redefines the Living Core, identity, or loader.

## 7. Sound activation and control policy

**SOUND DEFAULT = OFF.** A user must explicitly activate playback. A stored preference, if ever introduced, cannot trigger audio by itself. Browser blocking is respected; there is no autoplay bypass. Sound OFF, refusal, or failed activation leaves the art-directed neutral visual experience intact.

The control must be quiet, discoverable, show a clear ON/OFF state, work with keyboard and touch, and expose its state to screen readers. It must be separate from the logo, Living Core, and loader. This freezes behavior only; D.4 will design and review its exact production placement and appearance within the approved identity system. No forced modal or sonic onboarding.

## 8. Sonic Route Policy v1

**Dark Calm belongs to the homepage experience only.** Leaving the homepage stops playback and cleans up the active playback/analysis appropriately. Returning to the homepage through client navigation, Back, or Forward does **not** resume audible sound automatically; the user must activate it again. A full document load also begins silent. The D.3 architecture may keep a single document-lifetime controller/context where appropriate, but it may not leave audio playing off-route or leak an analysis loop.

This policy prevents unexpected persistent audio on unrelated routes, respects user expectation, ties the soundtrack to the authored homepage, simplifies lifecycle and failure handling, and preserves `/work` and other routes as independent experiences. It is the **current production route policy**, not a universal rule for every future LUMORA experience. Reopen only through a founder decision or validated UX evidence under §16.

## 9. Accessibility

No information may be available only through sound or only through Reactive Light. The sound control exposes an accessible state and works without precise pointer input. Sound cannot be required for navigation, proof, or understanding. Avoid flashing, rapid luminance modulation, or assumptions that visitors use headphones. Focus and text contrast remain legible over the environmental light. The site remains complete when sound and reactivity are unavailable.

## 10. Reduced motion

Reduced motion and sound are separate preferences. Reduced motion does **not** automatically mute explicit opt-in audio. Under `prefers-reduced-motion: reduce`, Reactive Light may change brightness, bloom, opacity, and atmospheric density, but it has **no tremor, translation, rotation, reactive scale, or scene shiver**. D.2's authored meanings resolve in accessible final states. The Motion Grammar's **PRESENCE** behavior remains exclusive to the Living Core.

## 11. Loading protection

[Loading Freeze v1](../loading/LUMORA-LOADING-FREEZE-v1.md) remains silent and independently frozen. Do not autoplay Dark Calm during loading, attach sound activation to the Event Horizon loader, feed analyser output into it, or turn it into sonic onboarding. The loader's timing, visual character, accessibility, and handoff are unchanged.

## 12. Identity protection

[Identity Freeze v4](../identity/LUMORA-IDENTITY-FREEZE-v4.md) remains still and non-reactive. The luminous ring is neither a visualizer, sound meter, nor sound control. The approved wordmark remains stable. Do not add sonic branding to identity or transfer Reactive Light motion, glow, or pulse to the mark.

## 13. Living Core protection

The Living Core remains an independent experiential system. It is not analyser output, a sonic pulse, a Reactive Light source, or the sound button. Reactive Light is an environmental layer, not a replacement for the Core or its protected Motion Grammar behavior.

## 14. Failure behavior

If the WAV, `AudioContext`, analyser, browser playback permission, device resources, or power conditions fail—or the user refuses or disables sound—the site falls back to an **art-directed neutral visual state**. No error modal, broken composition, hidden proof, or disabled content. Do not substitute an unapproved audio asset. Failure cannot leave an active sonic loop or unexpected playback.

## 15. Production boundaries

D.3 defines the implementation architecture; this document supplies the superseding sonic decision. D.4 Gate 1 is the next phase, not a completed phase. Production may integrate only the approved homepage soundtrack and Reactive Light within their freezes, with sound opt-in and the shared single-context/single-analyser architecture planned in D.3. The authored D.2 journey retains independent timing and meaning. No production behavior, source file, public asset, dependency, or frozen implementation is changed by D.3.1.

## 16. Reopen policy

Reopen this governance only when the founder explicitly reopens it, production integration reveals technical impossibility, accessibility evidence requires a change, performance evidence requires a change, or deployed UX evidence shows material failure. A merely interesting sound concept is insufficient. Record the reason, the affected frozen authority, the proposed change, and founder decision before modifying this policy. Keep the Phase 0D.2 NO SOUND record intact.
