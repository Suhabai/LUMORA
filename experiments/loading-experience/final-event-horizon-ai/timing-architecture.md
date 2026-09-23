# Timing Architecture

| Readiness | Sequence | Resolution |
|---|---|---|
| Fast | Darkness 0 ms → sphere emergence 160 ms → active 360 ms → resolution 650 ms → handoff | **1100 ms** |
| Normal | Darkness 0 ms → emergence 240 ms → active 630 ms → compression 1400 ms → resolution 1800 ms → handoff | **2400 ms** |
| Slow | Complete the normal environmental narrative once, then lower sphere and letter animation to a calm 14-second cadence | **HOLD from 2600 ms** |
| Reduced motion | Static field, 150 ms opacity reveal, static sphere and static LUMORA letters | Handoff when ready |

No path manufactures progress or waits after readiness. The slow path enters HOLD only when application readiness has not arrived.
