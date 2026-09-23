# LUMORA Loading Experience — Freeze v1

## Status

FROZEN

## Visual Direction

- Event Horizon environment
- luminous thought sphere
- LUMORA center text
- near-black / violet / white-hot palette
- calm cinematic character
- no sound

## Identity Boundary

The loading sphere is **not** the LUMORA logo.

The frozen LUMORA luminous identity remains separate. Production identity assets
must not be altered by future loader work.

Living Core remains a separate system.

## Source Provenance

The central loading treatment was adapted from:

21st.dev component: `ai loader`

Author: theutkarshmail / Utkarsh Pandey

21st component id: `5219`

Retrieved using: `21st get 5219`

This is implementation provenance only. The AI loader is not the LUMORA
identity.

## Production Timing

```text
MIN_VISIBLE_MS = 1100
HOLD_START_MS  = 2600
MAX_COVER_MS   = 8000
```

The loader records its mount time and waits for the document `load` readiness
signal. If readiness arrives before `MIN_VISIBLE_MS`, handoff starts at 1100 ms.
If readiness arrives after 1100 ms, handoff starts immediately. If readiness
arrives while in HOLD, handoff also starts immediately. If readiness never
arrives, `MAX_COVER_MS` starts the forced handoff, preventing a permanent
cover. The handoff is the approved visual release into the application.

## Slow Network Behavior

- The cinematic sequence runs once.
- It transitions into calm HOLD at 2600 ms if still waiting.
- It does not repeat the Event Horizon narrative.
- It shows no fake percentage or fake progress.
- Readiness during HOLD exits immediately.
- The 8000 ms safety release prevents permanent cover.

## Reduced Motion

- Static sphere
- Static LUMORA text
- No continuous rotation
- No animated letters
- Brief reveal only
- Readiness-aware handoff

## Route Behavior

Fresh document entry: loader appears once.

Client App Router navigation: loader does not replay.

Back / Forward: does not replay unless a full document reload occurs.

## Accessibility

- The loader has status semantics.
- Decorative visuals are hidden from the accessibility tree.
- The underlying application is inert while covered.
- `inert` and ARIA state are restored after handoff.
- No focus trap is introduced.

## Cleanup Guarantees

- Timers are cleared.
- Readiness listeners are removed.
- The overlay is removed from the DOM.
- No permanent interaction blocking remains.
- No permanent scroll modification is made.

## Frozen Visual Rules

Future work must **not** casually change:

- thought-sphere form
- Event Horizon background language
- LUMORA center text
- approved palette
- composition
- motion character
- reduced-motion appearance
- handoff character

Any intentional redesign requires explicitly reopening the loading identity
phase.
