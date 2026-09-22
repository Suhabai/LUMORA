# LUMORA A2 Micro-Size Framing Gate

## Exact geometry audit

The approved A2 source contains these exact path strings:

```text
M257 147 A118 118 0 1 1 158 344
M138 353 L158 344
```

Current source viewBox: `0 0 920 320`.

The source applies `translate(0 -35)` to the symbol inside a wide lockup canvas. Browser geometry inspection reports the primary path’s fill bounds as approximately `x=158, y=147, width=205.107, height=235.399`; the terminal fill bounds are `x=138, y=344, width=20, height=9`. Including the approved stroke widths, the rendered no-glow bounds are approximately `x=133` through `374.6` and `y=135.5` through `393.9` before the source transform. After the source’s `-35` y translation, the lower bound remains beyond the `320`-unit source canvas.

Therefore the source lockup viewBox is too tight for the symbol’s full no-glow bounds. The overflow is caused by framing plus stroke extent, not by a glow filter; the final A2 source contains no filter or glow geometry in its mark.

## Framing variants

- **F1 / True Bounds** — `viewBox="132 134 244 261"`; minimal stroke-safe margin around the complete exact geometry.
- **F2 / Optical Pad** — `viewBox="100 120 300 300"`; square UI framing with balanced breathing room.
- **F3 / Micro Safe** — `viewBox="70 90 360 360"`; square framing with additional rasterization safety for 16–32px contexts.

All variants contain the exact same two path strings. No segment was scaled, redrawn, thickened, tapered, or moved.

## Browser test protocol

The comparison page renders original A2 and F1–F3 in system Edge at DPR 1, 1.5, and 2, with native-size samples at 16px, 20px, 24px, 32px, 48px, and 64px. Samples are tested in white/black monochrome, dark no-glow, and restrained violet no-glow presentation.

The expected decision is about framing viability only. If a framed variant preserves the seam and silhouette at 16–32px, A2 is micro-size viable through framing. If all framed variants fail, no simplified micro-mark should be invented without an explicit user decision.

## Path preservation

`PATH GEOMETRY PRESERVED: YES` — A2, F1, F2, and F3 use byte-for-byte identical `d` values.
