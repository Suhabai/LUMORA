# LUMORA — Brand Surface Audit

Phase 0C.25 — Visual Architecture Audit (READ-ONLY)

---

## A. ALL BRAND SURFACES FOUND

### Navigation (Desktop)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/navigation.tsx:47-69` |
| Current element | Clock SVG (14x14, circle + path) + "LUMORA" text |
| Container | `w-8 h-8 rounded-lg bg-accent/15 border border-accent/20` |
| Visual role | Primary brand anchor |
| Semantic role | Home link |

### Navigation (Mobile)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/navigation.tsx:89-97` |
| Current element | Hamburger menu (Menu/X from lucide-react) |
| Visual role | Menu toggle |
| Brand text | None — no LUMORA in mobile menu body |

### Mobile Menu (Closing Mark)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/navigation.tsx:151-161` |
| Current element | "LUMORA" text (9px, uppercase, tracking, faint) |
| Visual role | Subtle closing signature |
| Position | Bottom of mobile menu |

### Footer (Identity Block)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/footer.tsx:11-32` |
| Current element | Clock SVG (12x12, circle + path) + "LUMORA" text |
| Container | `w-7 h-7 rounded-lg bg-accent/10 border border-accent/15` |
| Visual role | Secondary brand anchor |
| Semantic role | Home link |

### Footer (Copyright)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/footer.tsx:63-64` |
| Current element | "&copy; 2026 LUMORA" text |
| Visual role | Legal/copyright |

### Hero — Baseline

| Attribute | Value |
|-----------|-------|
| File | `components/sections/hero.tsx:104-115` |
| Current element | "LUMORA" text (10px, uppercase, tracking, muted) with accent lines |
| Position | `top-[14vh]`, centered |
| Visual role | Identity signal above the Core |
| Animated | Yes — GSAP fade+slide at 1.5s |

### Hero — V2 (Living Light)

| Attribute | Value |
|-----------|-------|
| File | `components/experiments/hero-v2.tsx:201-212` |
| Current element | "LUMORA" text (identical to baseline) |
| Position | `top-[14vh]`, centered |
| Visual role | Identity signal |
| Animated | Yes — GSAP at 1.5s |

### Hero — V3 (Living Environment)

| Attribute | Value |
|-----------|-------|
| File | `components/sections/hero-v3.tsx:243-254` |
| Current element | "LUMORA" text (identical style, asymmetric position) |
| Position | `top-[14vh] left-[36%]` |
| Visual role | Identity signal |
| Animated | Yes — GSAP at 1.5s |

### About — Section 01 (The Studio)

| Attribute | Value |
|-----------|-------|
| File | `components/sections/about-experience.tsx:110-115` |
| Current element | "LUMORA" as `<h1>` heading (3rem-6rem, bold, display font) |
| Visual role | Section heading / studio name |
| Context | "A digital studio focused on cinematic web experiences." |

### Contact — Signature

| Attribute | Value |
|-----------|-------|
| File | `components/contact/contact-experience.tsx:172-175` |
| Current element | "Sohrab — LUMORA" text (10px, uppercase, faint) |
| Visual role | Personal signature |
| Context | At the very bottom of the contact section |

---

## B. ALL CLOCK ICON USAGES

| # | File | Lines | Size | Stroke | Role |
|---|------|-------|------|--------|------|
| 1 | `navigation.tsx` | 54-65 | 14x14 | `var(--color-accent)` | Desktop brand icon |
| 2 | `footer.tsx` | 17-28 | 12x12 | `var(--color-accent)` | Footer brand icon |

### Clock Icon SVG Structure

```svg
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
```

- Circle + clock hands (hour marker)
- Stroke-based, accent color
- Container: rounded-lg with accent/15 background + border

---

## C. WORDMARK USAGE MAP

| # | File | Element | Role | Visible |
|---|------|---------|------|---------|
| 1 | `navigation.tsx:67` | "LUMORA" text (bold, base) | Desktop brand | YES |
| 2 | `navigation.tsx:159` | "LUMORA" text (9px, faint) | Mobile menu closing mark | YES |
| 3 | `footer.tsx:30` | "LUMORA" text (bold, base) | Footer brand | YES |
| 4 | `footer.tsx:64` | "LUMORA" in copyright | Legal | YES |
| 5 | `hero.tsx:112` | "LUMORA" text (10px, muted) | Hero identity signal | YES |
| 6 | `hero-v2.tsx:209` | "LUMORA" text (10px, muted) | Hero identity signal | YES |
| 7 | `hero-v3.tsx:251` | "LUMORA" text (10px, muted) | Hero identity signal | YES |
| 8 | `about-experience.tsx:114` | "LUMORA" as h1 (display) | Section heading | YES |
| 9 | `contact-experience.tsx:174` | "Sohrab — LUMORA" text | Signature | YES |

**Total visible occurrences per page load**: 4 minimum (nav + footer + hero + contact signature)

---

## D. MICRO-MARK USAGE MAP

| Usage | Status |
|-------|--------|
| Favicon | APPROVED — `app/icon.svg` (M-MICRO) |
| Apple Touch | APPROVED — `app/apple-icon.png` (M-MICRO) |
| OG image | APPROVED — `app/opengraph-image.png` (M Core + wordmark) |
| Navigation icon | NOT YET — currently clock SVG |
| Footer icon | NOT YET — currently clock SVG |
| Hero | NOT APPLICABLE — hero uses text identity |
| About | NOT APPLICABLE — about uses text heading |
| Contact | NOT APPLICABLE — contact uses text signature |

---

## E. SURFACES WITH NO LOGO

| Surface | Has Identity | Notes |
|---------|-------------|-------|
| Mobile menu body | NO | Only has numbered links + closing "LUMORA" text |
| Hero headline area | TEXT ONLY | "Environments that feel alive." — no logo |
| Selected Works | NO | World cards — no logo |
| Design Philosophy | NO | Content section — no logo |
| System page | NO | Design system exhibition |
| Work pages | NO | Project detail pages |
| 404 page | NO | Error state |

---

## F. RESPONSIVE IDENTITY MATRIX

| Surface | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Navigation | CLOCK SVG + TEXT | HAMBURGER (no brand) | Mobile has no brand icon |
| Footer | CLOCK SVG + TEXT | TEXT ONLY (stacked) | Same elements, stacked layout |
| Hero | TEXT (centered) | TEXT (centered) | Same across breakpoints |
| About | TEXT (h1 heading) | TEXT (h1 heading) | Same across breakpoints |
| Contact | TEXT (signature) | TEXT (signature) | Same across breakpoints |
| Mobile Menu | N/A | TEXT (closing mark) | "LUMORA" at bottom |

---

## G. CORE COLLISION RISKS

| Surface | Risk | Assessment |
|---------|------|------------|
| Navigation icon | LOW | Clock SVG is stroke-based, M Core is fill-based. Different visual language. |
| Footer icon | LOW | Same as navigation. |
| Hero | NONE | Hero uses text only, no icon. Living Core is the visual focal point. |
| OG image | NONE | M Core + wordmark is the approved composition. Living Core is absent. |

**No core collision detected.** The M Core (fill-based, geometric, bilateral) is visually distinct from the Living Core (animated, glowing, concentric rings).

---

## H. REPETITION RISKS

### Current Repetition Count

"LUMORA" text appears **9 times** across the codebase (visible in a single page load: 4-5 times).

### Repetition Map

| Location | Redundant? | Justification |
|----------|-----------|---------------|
| Nav brand | NO | Primary brand anchor — required |
| Nav mobile closing | LOW | Subtle, serves as menu signature — acceptable |
| Footer brand | NO | Secondary brand anchor — required |
| Footer copyright | NO | Legal requirement — required |
| Hero identity | NO | Intentional cinematic identity signal — required |
| About heading | NO | Section heading — "The Studio" → "LUMORA" — structural |
| Contact signature | NO | Personal signature — "Sohrab — LUMORA" — intentional |

**No unnecessary repetition detected.** Each occurrence serves a distinct structural or narrative purpose.

---

## I. PROPOSED IDENTITY REPLACEMENTS

### Navigation (Desktop)

| Attribute | Value |
|-----------|-------|
| Current | Clock SVG (14x14) + "LUMORA" text |
| Proposed | M-MICRO SVG (14x14) + "LUMORA" text |
| Rationale | M-MICRO is the approved identity mark. Clock is legacy. |
| Risk | LOW — same container, same size, same position |
| Spacing | No change — `w-8 h-8` container + `gap-3` preserved |

### Navigation (Mobile)

| Attribute | Value |
|-----------|-------|
| Current | Hamburger menu icon (Menu/X) |
| Proposed | KEEP EXISTING — no brand icon in mobile menu |
| Rationale | Mobile menu is a full-screen overlay. Brand appears in closing mark. |
| Risk | NONE |

### Mobile Menu Closing Mark

| Attribute | Value |
|-----------|-------|
| Current | "LUMORA" text (9px, faint) |
| Proposed | KEEP EXISTING — text is appropriate here |
| Rationale | A tiny M-MICRO would be too small to read. Text is correct. |
| Risk | NONE |

### Footer (Identity Block)

| Attribute | Value |
|-----------|-------|
| Current | Clock SVG (12x12) + "LUMORA" text |
| Proposed | M-MICRO SVG (12x12) + "LUMORA" text |
| Rationale | Same replacement as navigation. |
| Risk | LOW — same container pattern |

### Footer (Copyright)

| Attribute | Value |
|-----------|-------|
| Current | "LUMORA" text in copyright string |
| Proposed | KEEP EXISTING — text is correct |
| Risk | NONE |

### Hero (All Versions)

| Attribute | Value |
|-----------|-------|
| Current | "LUMORA" text (10px, muted, accent lines) |
| Proposed | KEEP EXISTING — text identity is correct |
| Rationale | The hero identity is a cinematic text signal, not a logo. The Living Core is the visual focal point. Adding an SVG wordmark would compete with the Core. |
| Risk | NONE |

### About (Section 01)

| Attribute | Value |
|-----------|-------|
| Current | "LUMORA" as `<h1>` heading |
| Proposed | KEEP EXISTING — structural heading |
| Rationale | This is the section heading for "The Studio". It's not a brand mark. |
| Risk | NONE |

### Contact (Signature)

| Attribute | Value |
|-----------|-------|
| Current | "Sohrab — LUMORA" text |
| Proposed | KEEP EXISTING — personal signature |
| Rationale | This is a human signature, not a brand mark. |
| Risk | NONE |

---

## J. EXACT FILES THAT SHOULD CHANGE

| File | Change | Risk |
|------|--------|------|
| `components/layout/navigation.tsx` | Replace clock SVG with M-MICRO SVG (lines 54-65) | LOW |
| `components/layout/footer.tsx` | Replace clock SVG with M-MICRO SVG (lines 17-28) | LOW |

**Total: 2 files**

---

## K. FILES THAT MUST NOT CHANGE

| File | Reason |
|------|--------|
| `components/sections/hero.tsx` | Text identity is correct — no logo needed |
| `components/experiments/hero-v2.tsx` | Text identity is correct — no logo needed |
| `components/sections/hero-v3.tsx` | Text identity is correct — no logo needed |
| `components/sections/about-experience.tsx` | Structural heading — not a brand mark |
| `components/contact/contact-experience.tsx` | Personal signature — not a brand mark |
| `components/layout/global-core.tsx` | Living Core — must not become a logo |
| `app/layout.tsx` | Metadata already correct |
| `app/page.tsx` | No identity changes |
| `styles/globals.css` | No identity changes |
| `public/icon.svg` | Legacy — keep as fallback |

---

## L. IMPLEMENTATION ORDER

### Phase 0C.26 — Navigation Identity

1. Create M-MICRO SVG component (inline, 14x14)
2. Replace clock SVG in `navigation.tsx`
3. Verify desktop navigation appearance
4. Verify mobile menu unaffected

### Phase 0C.27 — Footer Identity

5. Create M-MICRO SVG component (inline, 12x12)
6. Replace clock SVG in `footer.tsx`
7. Verify footer appearance

### Phase 0C.28 — Validation

8. Full regression check
9. Lint + build
10. Cross-device audit

---

## M. MOTION CONSIDERATIONS

| Element | Current Motion | Future Opportunity |
|---------|---------------|-------------------|
| Nav M-MICRO | Static | Subtle hover scale |
| Footer M-MICRO | Static | None needed |
| Hero text | GSAP fade+slide | Keep existing — no change |
| About heading | GSAP Reveal | Keep existing — no change |

**No motion changes recommended.** The existing animations are sufficient.
