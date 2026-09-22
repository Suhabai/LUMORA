# LUMORA Phase 0E.3 — Route and navigation audit

Checkpoint: `921c8cd`. Production code was not changed.

## Runtime route results

| Route | Result | Evidence | Severity |
|---|---|---|---|
| `/` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/work` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/about` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/contact` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/system` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/docs` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/work/nexora` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/work/omnia` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/work/velocity` | 200 OK | VERIFIED LIVE — local HTTP response | PASS |
| `/this-route-does-not-exist` | 404 Not Found | VERIFIED LIVE — local HTTP response | PASS |

HTTP success verifies server rendering reached a response. Visual layout, client runtime console, interactive behavior, and browser navigation are NOT VERIFIED DUE TO TOOLING because Playwright and an available browser surface were absent.

## Navigation and fragment-link matrix

| Label / surface | Actual href | Target ID on home | From `/` | From `/work`, `/about`, `/contact` | Severity |
|---|---|---|---|---|---|
| Work | `/work` | n/a | VERIFIED STATICALLY — route change is valid | VERIFIED STATICALLY — valid route change | PASS |
| About | `/about` | n/a | VERIFIED STATICALLY — route change is valid | VERIFIED STATICALLY — valid route change | PASS |
| Worlds | `#works` | `works` in `SelectedWorks` | VERIFIED STATICALLY — target exists | VERIFIED STATICALLY — fragment remains on the internal document, where no `works` target is rendered | MAJOR |
| Thinking | `#philosophy` | `philosophy` in `DesignPhilosophy` | VERIFIED STATICALLY — target exists | VERIFIED STATICALLY — target absent from internal route documents | MAJOR |
| Person | `#about` | `about` in `About` | VERIFIED STATICALLY — target exists | VERIFIED STATICALLY — target absent from internal route documents | MAJOR |
| Threshold | `#contact` | `contact` in `Contact` | VERIFIED STATICALLY — target exists | VERIFIED STATICALLY — target absent from internal route documents | MAJOR |
| Footer Worlds / Person / Connect | `#works` / `#about` / `#contact` | as above | VERIFIED STATICALLY — targets exist | VERIFIED STATICALLY — target absent from internal routes | MAJOR |
| Skip link | `#hero` | `main#hero`; homepage also has `section#hero` | VERIFIED STATICALLY — destination exists | VERIFIED STATICALLY — global main target exists | PASS |

The local fragment-link problem is real. It affects both desktop and mobile navigation because both use `ENV_LINKS`, and it affects the footer. Actual click, scroll position, history back/forward behavior, and focus movement are NOT VERIFIED DUE TO TOOLING.

## Identity and 404

### M Core icon

**BLOCKER — VERIFIED STATICALLY.** The frozen source specifies:

```text
M258,50L328,50L328,950L258,950ZM664,50L734,50L734,922L656,950L664,950ZM328,50L540,411L664,50Z
```

`app/icon.svg` instead uses a left stem `M240,50 L330,50 ...`, a plain rectangular right stem `M670,50 L760,50 L760,950 ...`, and V geometry `M330,50 L500,400 L670,50`. This differs in every structural segment, omits the canonical right-stem lower notch (`L734,922L656,950`), and changes the canonical V apex from `(540,411)` to `(500,400)`. Identity Freeze v3 requires the frozen M Core geometry on browser-icon surfaces.

### 404 experience

**MAJOR — VERIFIED STATICALLY / VERIFIED LIVE.** `app/not-found.tsx` does not exist; the tested nonexistent URL returns 404. The response is therefore a framework fallback rather than a dedicated branded LUMORA 404. Visual appearance is NOT VERIFIED DUE TO TOOLING.
