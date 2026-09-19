# LUMORA — Identity Integration Plan

Phase 0C.21 — Architecture Audit

---

## A. CURRENT IDENTITY SOURCES

### Browser Tab Icon

- **File**: `public/icon.svg`
- **Type**: SVG
- **Dimensions**: 32x32 viewBox
- **Content**: Purple rounded rectangle (#8a2eff) + circle + clock path
- **Used by**: `app/layout.tsx` → `icons.icon`, `icons.apple`
- **Also used by**: `public/manifest.json` → `icons[0].src`

### Apple Touch Icon

- **File**: `public/icon.svg` (same file as browser icon)
- **Type**: SVG
- **Issue**: Apple Touch Icon typically requires 180x180 PNG. SVG is not universally supported for this context.
- **Current behavior**: Next.js serves the SVG at the apple icon path

### Open Graph Image

- **File**: `app/opengraph-image.tsx`
- **Type**: Dynamic (Next.js ImageResponse, edge runtime)
- **Dimensions**: 1200x630
- **Content**: Purple glow + Living Core ring + "LUMORA" text (sans-serif, lightweight) + tagline
- **Color**: #07070a background, #8a2eff accents
- **Referenced by**: `app/layout.tsx` → `openGraph.images[0].url = "/opengraph-image"`, `twitter.images = ["/opengraph-image"]`

### Static Assets in public/

- `public/icon.svg` — purple circle/clock icon
- `public/manifest.json` — PWA manifest referencing icon.svg
- No `favicon.ico`
- No `favicon.png`
- No `apple-touch-icon.png`

---

## B. CURRENT METADATA SOURCES

### Layout Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: "LUMORA — ...", template: "%s — LUMORA" },
  description: "...",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: "LUMORA",
    title: "...",
    description: "...",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "..." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_CONFIG.url },
};
```

### File-Based Metadata (Next.js App Router)

- `app/opengraph-image.tsx` — dynamic OG generation
- No `app/icon.tsx` or `app/icon.svg`
- No `app/apple-icon.tsx` or `app/apple-icon.png`
- No `app/twitter-image.tsx`

### PWA Manifest (`public/manifest.json`)

```json
{
  "name": "LUMORA",
  "short_name": "LUMORA",
  "icons": [{ "src": "/icon.svg", "sizes": "any", "type": "image/svg+xml" }]
}
```

---

## C. CURRENT CONFLICTS

| Conflict | Description | Impact |
|----------|-------------|--------|
| Single icon for all contexts | `public/icon.svg` used for favicon, apple, and manifest | No PNG fallback for Apple Touch; SVG not universally supported |
| OG is atmospheric, not neutral | Current OG has purple glow, Living Core ring | Does not match approved neutral identity asset (M Core + wordmark) |
| Navigation uses clock icon | Inline SVG circle + clock, not M Core | Inconsistent with approved identity |
| Footer uses clock icon | Same inline SVG as navigation | Inconsistent with approved identity |
| No dedicated Apple Touch PNG | `apple: "/icon.svg"` serves SVG | May fail on some iOS versions |
| No favicon.ico fallback | Only SVG icon exists | Some older browsers may not render SVG favicon |

---

## D. WORDMARK INTEGRATION MAP

### Navigation (Desktop + Mobile)

| Attribute | Value |
|-----------|-------|
| File | `components/layout/navigation.tsx` |
| Component | `Navigation` |
| Current Implementation | Inline SVG: purple circle + clock icon (14x14) + "LUMORA" text (bold, tracking-tight) |
| Proposed Asset | No SVG replacement yet — text "LUMORA" is the wordmark. The inline icon is a separate decorative element. |
| Priority | OPTIONAL — the text already communicates identity |
| Risk | LOW — changing the inline icon requires design decision about M Core vs decorative element |

### Footer

| Attribute | Value |
|-----------|-------|
| File | `components/layout/footer.tsx` |
| Component | `Footer` |
| Current Implementation | Inline SVG: purple circle + clock icon (12x12) + "LUMORA" text |
| Proposed Asset | Same as navigation — text is the wordmark |
| Priority | OPTIONAL |
| Risk | LOW |

### Hero (Baseline, V2, V3)

| Attribute | Value |
|-----------|-------|
| Files | `components/sections/hero.tsx`, `components/experiments/hero-v2.tsx`, `components/sections/hero-v3.tsx` |
| Current Implementation | "LUMORA" text with decorative accent lines, animated entrance |
| Proposed Asset | No SVG wordmark — text identity is intentional design choice |
| Priority | DO NOT CHANGE |
| Risk | N/A — text is the correct identity expression here |

### About Section

| Attribute | Value |
|-----------|-------|
| File | `components/sections/about-experience.tsx` |
| Current Implementation | "LUMORA" text references in editorial content |
| Proposed Asset | Text only — correct |
| Priority | DO NOT CHANGE |

### Contact Section

| Attribute | Value |
|-----------|-------|
| File | `components/contact/contact-experience.tsx` |
| Current Implementation | "Sohrab — LUMORA" text |
| Proposed Asset | Text only — correct |
| Priority | DO NOT CHANGE |

---

## E. MICRO-MARK INTEGRATION MAP

### Favicon (Primary)

| Attribute | Value |
|-----------|-------|
| Current | `public/icon.svg` — purple circle + clock |
| Proposed | M-MICRO SVG → `app/icon.svg` (Next.js file-based) |
| Priority | REQUIRED |
| Why | Browser tab should show approved identity mark, not decorative clock |

### Apple Touch Icon

| Attribute | Value |
|-----------|-------|
| Current | `public/icon.svg` (SVG, may not work everywhere) |
| Proposed | `public/apple-touch-icon.png` (180x180 PNG of M-MICRO) |
| Priority | REQUIRED |
| Why | PNG is required for reliable Apple Touch Icon support |

### PWA Manifest

| Attribute | Value |
|-----------|-------|
| Current | `public/manifest.json` → `/icon.svg` |
| Proposed | Update to reference new M-MICRO icon |
| Priority | REQUIRED |
| Why | PWA icon should match identity |

### Navigation / Footer Icon

| Attribute | Value |
|-----------|-------|
| Current | Inline SVG: purple circle + clock |
| Proposed | Consider M Core inline SVG |
| Priority | OPTIONAL |
| Why | The current clock icon is decorative, not identity. M Core would be stronger identity expression, but requires design decision. |

---

## F. ICON STRATEGY

### Recommendation: Hybrid Approach

**File-based metadata assets (app/ directory)**:
- `app/icon.svg` — M-MICRO SVG for browser favicon
- `app/opengraph-image.tsx` — REPLACE dynamic OG with static PNG reference

**Static assets (public/ directory)**:
- `public/apple-touch-icon.png` — 180x180 M-MICRO PNG
- `public/icon.svg` — KEEP as fallback (do not delete yet)

### Why Hybrid

1. Next.js App Router supports `app/icon.svg` natively — no configuration needed
2. Apple Touch Icon is best served as a static PNG from `public/`
3. OG image should be the approved neutral composition, not the atmospheric dynamic version
4. The current `public/icon.svg` should be preserved until all references are migrated

### Next.js File-Based Icon Rules

- `app/icon.tsx` or `app/icon.svg` — generates favicon automatically
- `app/apple-icon.tsx` or `app/apple-icon.png` — generates Apple Touch Icon
- These override `metadata.icons` in layout.tsx
- Static files in `public/` are served as-is

---

## G. OG STRATEGY

### Current State

`app/opengraph-image.tsx` generates a dynamic OG with:
- Purple glow background
- Living Core ring (animated in concept)
- "LUMORA" text in sans-serif
- Tagline below

### Proposed State

Replace with the approved neutral OG composition:
- Black/white field
- M Core micro-mark (centered top)
- LUMORA wordmark (centered bottom)
- No Living Core
- No purple glow
- No atmospheric effects

### Implementation Options

**Option A**: Replace `app/opengraph-image.tsx` with a version that serves the static PNG
- Pros: Clean, uses Next.js conventions
- Cons: Still generates dynamically

**Option B**: Remove `app/opengraph-image.tsx`, place `opengraph-image.png` in `app/` directory
- Pros: Static, deterministic, no edge runtime
- Cons: Need to create the file

**Option C**: Place PNG in `public/` and update metadata URL
- Pros: Simple, direct
- Cons: Changes metadata URL pattern

### Recommendation: Option B

Place `app/opengraph-image.png` (the approved 1200x630 composition) and remove the dynamic generator. This is the most deterministic approach.

---

## H. EXACT FILES TO CHANGE

| File | Change | Reason | Risk | Dependency |
|------|--------|--------|------|------------|
| `app/icon.svg` | CREATE — M-MICRO SVG | Browser favicon | LOW | None |
| `app/opengraph-image.png` | CREATE — Approved OG composition | Social preview identity | LOW | None |
| `app/opengraph-image.tsx` | DELETE — Remove dynamic generator | Replace with static PNG | LOW | Must create .png first |
| `app/layout.tsx` | MODIFY — Update `icons.apple` to point to PNG | Apple Touch Icon reliability | LOW | `public/apple-touch-icon.png` |
| `public/apple-touch-icon.png` | CREATE — 180x180 M-MICRO PNG | Apple Touch Icon | LOW | None |
| `public/manifest.json` | MODIFY — Update icon reference | PWA identity consistency | LOW | `app/icon.svg` |
| `public/icon.svg` | KEEP — Do not delete yet | Fallback until migration complete | NONE | N/A |

---

## I. FILES THAT MUST NOT CHANGE

| File | Reason |
|------|--------|
| `app/layout.tsx` metadata structure | Only update icon references, not the metadata architecture |
| `app/page.tsx` | No changes needed |
| `components/layout/navigation.tsx` | Wordmark is text-based, correct expression |
| `components/layout/footer.tsx` | Wordmark is text-based, correct expression |
| `components/sections/hero.tsx` | Identity is text-based, correct expression |
| `components/experiments/hero-v2.tsx` | Identity is text-based, correct expression |
| `components/sections/hero-v3.tsx` | Identity is text-based, correct expression |
| `components/sections/about-experience.tsx` | Text references only |
| `components/contact/contact-experience.tsx` | Text references only |
| `styles/globals.css` | No identity-related changes |
| `next.config.ts` | No changes needed |
| `constants/index.ts` | No changes needed |

---

## J. IMPLEMENTATION ORDER

### Phase 0C.22 — Icon Integration

1. Create `app/icon.svg` (M-MICRO SVG)
2. Create `public/apple-touch-icon.png` (180x180 M-MICRO)
3. Update `app/layout.tsx` → `icons.apple` to `"apple-touch-icon.png"`
4. Update `public/manifest.json` → icon reference
5. Verify: browser tab, mobile browser, installed PWA

### Phase 0C.23 — OG Integration

6. Create `app/opengraph-image.png` (approved neutral composition)
7. Remove `app/opengraph-image.tsx` (dynamic generator)
8. Verify: social preview tools, Twitter card, LinkedIn

### Phase 0C.24 — Validation

9. Full regression check (see Section K)
10. Production build verification
11. Cross-device audit

---

## K. REGRESSION PLAN

### Browser Tab

- [ ] Desktop Chrome: M-MICRO visible in tab
- [ ] Desktop Firefox: M-MICRO visible in tab
- [ ] Desktop Safari: M-MICRO visible in tab
- [ ] Mobile Chrome (Android): M-MICRO visible
- [ ] Mobile Safari (iOS): M-MICRO visible

### Apple Touch Icon

- [ ] iOS Safari: Long-press home screen → M-MICRO appears
- [ ] iOS Chrome: M-MICRO appears
- [ ] iPad Safari: M-MICRO appears

### Open Graph / Social

- [ ] Twitter Card Validator: neutral OG appears
- [ ] Facebook Debugger: neutral OG appears
- [ ] LinkedIn Post Inspector: neutral OG appears
- [ ] Slack link preview: neutral OG appears

### PWA / Manifest

- [ ] Chrome DevTools → Application → Manifest: M-MICRO icon
- [ ] Install prompt shows M-MICRO

### Background Colors

- [ ] OG black: white M Core + white wordmark on black
- [ ] OG white: black M Core + black wordmark on white

### Navigation

- [ ] Desktop nav: "LUMORA" text present (unchanged)
- [ ] Mobile nav: "LUMORA" text present (unchanged)

### Footer

- [ ] Footer: "LUMORA" text present (unchanged)

### Hero

- [ ] Hero: "LUMORA" identity signal present (unchanged)

### Production Build

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] No new TypeScript errors
- [ ] No new ESLint errors

---

## L. ASSET SOURCE OF TRUTH

**Source**: `experiments/brand-assets/lumora/`

**Production Integration**:

| Asset | Destination | Method |
|-------|-------------|--------|
| M-MICRO SVG | `app/icon.svg` | Copy (deterministic) |
| Apple Touch PNG | `public/apple-touch-icon.png` | Copy (deterministic) |
| OG Composition | `app/opengraph-image.png` | Copy (deterministic) |

**No SVG components needed** — all assets are static files. No runtime composition. No dynamic generation.

---

## M. IDENTITY HIERARCHY PRESERVATION

| Identity Layer | Expression | Location | Protection |
|----------------|-----------|----------|------------|
| Wordmark | Text "LUMORA" | Navigation, footer, hero, content | DO NOT replace with SVG |
| M Core | SVG/PNG mark | Favicon, Apple icon, OG | DO NOT use as decorative UI element |
| Living Core | Animated element | GlobalCore, hero atmosphere | DO NOT merge with M Core |
| Motion | GSAP animations | Hero entrance, scroll | DO NOT replace with CSS transitions |

**Rule**: M Core is the favicon and app icon. It does NOT appear as a decorative element in navigation or footer. The wordmark remains text-based.
