# Motion

> The animation system: durations, easings, keyframes, and usage patterns.

---

## Purpose

This document defines how motion works in LUMORA. Every animation serves a purpose: guiding attention, communicating state, or creating a premium feel.

## Principles

- **Purposeful** — Every animation communicates something
- **Subtle** — Never distracting or overwhelming
- **Consistent** — Similar actions produce similar animations
- **Respectful** — Always respect `prefers-reduced-motion`

## Animation Stack

| Layer | Library | Use Case |
|-------|---------|----------|
| Component | Framer Motion | Hover, tap, enter/exit |
| Timeline | GSAP | Scroll sequences, hero animation |
| Scroll | Lenis | Smooth scrolling |

## Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| instant | 100ms | Hover states |
| fast | 200ms | Button interactions |
| normal | 400ms | Card transitions |
| slow | 600ms | Page reveals |
| glacial | 1200ms | Hero animations |

## Easing Curves

| Name | Value | Usage |
|------|-------|-------|
| ease-out | `cubic-bezier(0.16, 1, 0.3, 1)` | All reveal animations |
| power3.out | GSAP default | Timeline animations |
| linear | `linear` | Loading indicators |

## Component Animations

### Hover Scale

```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  Click me
</motion.button>
```

**Duration**: 200ms | **Easing**: Default

### Card Lift

```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  Card content
</motion.div>
```

**Duration**: 400ms | **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`

### Scroll Reveal

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Content
</motion.div>
```

**Duration**: 600ms | **Viewport**: Once, -80px margin

### Staggered Children

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  };
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

**Stagger**: 100ms between items

## Timeline Animations (GSAP)

### Hero Sequence

```tsx
useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(headingRef.current,
    { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
    { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.2 }
  )
  .fromTo(taglineRef.current,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8 },
    "-=0.6"
  );
}, []);
```

## Custom Keyframes

### Pulse Soft

```css
@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
--animate-pulse: pulse-soft 3s ease-in-out infinite;
```

### Float

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
--animate-float: float 6s ease-in-out infinite;
```

## Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

When reduced motion is preferred:
- Animations complete instantly
- Scroll behavior is instant
- No infinite animations

## Performance Rules

1. **Transform only** — Prefer `transform` and `opacity`
2. **GPU accelerated** — Use `will-change` sparingly
3. **Batch reads** — Never read layout in animation loops
4. **Offload** — Use `requestAnimationFrame` for JS animations

---

## Do

- Use the duration scale for all animations
- Test with reduced motion enabled
- Keep animations under 600ms for most interactions

## Don't

- Do not animate layout properties (width, height, padding)
- Do not create infinite animations without purpose
- Do not ignore `prefers-reduced-motion`

## Related

- [Motion Token](../tokens/motion.json) — Animation tokens
- [Duration Token](../tokens/duration.json) — Duration scale
- [Philosophy](./philosophy.md) — Why motion matters
