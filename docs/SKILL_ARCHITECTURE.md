# LUMORA — Skill Architecture

> The intelligence layer of the LUMORA development system.
> Defines how specialized creative and engineering agents protect LUMORA quality.

---

## What Are LUMORA Skills?

LUMORA Skills are not simple prompts.

They are specialized creative and engineering agents. Each skill protects a specific dimension of LUMORA quality. Together, they form an intelligence layer that ensures every decision — from brand expression to code architecture — maintains the cinematic, premium, intentional experience LUMORA demands.

Skills exist because LUMORA is not a simple website. It is a complete experience system combining brand identity, user experience, interface design, motion design, frontend engineering, and emotional storytelling. No single perspective can protect all dimensions simultaneously.

Skills solve this by distributing expertise across specialized guardians.

---

## Why Skills Exist

LUMORA faces a fundamental challenge:

Every decision affects multiple dimensions simultaneously.

A component change affects:
- Brand identity
- User experience
- Visual consistency
- Motion behavior
- Performance
- Accessibility

Without specialized oversight, quality degrades silently. One compromise becomes two. Two become systemic.

Skills prevent this by ensuring each dimension has a dedicated protector. The Brand Guardian never lets a trend-chasing decision slip through. The Motion Director never allows decorative animation. The Performance Engineer never lets beauty destroy speed.

Each skill is a specialized filter. Nothing passes that does not meet the standard.

---

## How Skills Improve Quality

Skills improve quality through three mechanisms:

### 1. Specialized Review

Each skill evaluates decisions from its domain expertise. The Brand Guardian asks "Does this feel like LUMORA?" The UX Storyteller asks "Does this improve the user journey?" The Performance Engineer asks "Does this maintain speed?"

No single perspective catches everything. Specialized review catches what general review misses.

### 2. Conflict Resolution

When dimensions compete — performance vs. beauty, speed vs. experience, simplicity vs. richness — skills provide a structured resolution system. Priority order prevents stalemates. Brand identity always wins.

### 3. Consistency Enforcement

Skills reference the same authority documents: DESIGN.md, AGENTS.md, LUMORA_PROJECT_MASTER_RECORD.md. They enforce the same standards from different angles. This creates redundant quality protection.

---

## How Skills Interact with OpenCode

LUMORA Skills are designed to work within OpenCode's skill system.

Each skill is a `SKILL.md` file in the `skills/` directory. OpenCode loads skills when tasks match their descriptions. The skill instructions inject specialized context into the conversation.

### Skill Loading

When a task matches a skill description, OpenCode loads the skill's SKILL.md. The skill's role, rules, and philosophy become active context. The AI operates as that specialized agent.

### Skill Chaining

Complex tasks may require multiple skills. The review workflow chains skills in priority order. Each skill reviews the previous skill's output from its perspective.

### Skill Independence

Each skill operates independently. The Brand Guardian does not need the UI System's permission to reject a decision. The Motion Director does not need the Performance Engineer's approval to demand meaningful animation.

Independence prevents consensus paralysis. Each skill has clear authority within its domain.

---

## Skill Hierarchy

Skills operate in a strict priority order. When conflicts arise, higher-priority skills override lower-priority skills.

### Level 01 — Identity Protection

**Skill:** `lumora-brand-guardian`

**Responsibility:**
Protect brand identity, vision, emotional direction, and core philosophy.

**Allowed:**
- Review any decision for brand alignment
- Reject decisions that violate LUMORA identity
- Suggest improvements that strengthen brand expression
- Approve or deny direction changes

**Forbidden:**
- Changing brand identity without authority
- Making UI implementation decisions
- Override technical requirements

**Reference:** DESIGN.md § Brand DNA, § Experience Philosophy, § Visual Language System

---

### Level 02 — Experience Direction

**Skill:** `lumora-ux-storyteller`

**Responsibility:**
Protect user journey, emotional flow, storytelling structure, and experience architecture.

**Allowed:**
- Design user journey maps
- Suggest experience improvements
- Review section flow and narrative coherence
- Define emotional pacing

**Forbidden:**
- Ignoring brand rules (Brand Guardian has priority)
- Making component implementation decisions
- Override motion decisions (Motion Director has priority)

**Reference:** DESIGN.md § Experience Philosophy, § Hero Experience System, § Projects Worlds System

---

### Level 03 — Visual System

**Skill:** `lumora-ui-system`

**Responsibility:**
Protect component architecture, design tokens, typography hierarchy, layout consistency, and visual language implementation.

**Allowed:**
- Improve UI implementation
- Create or modify components
- Enforce token usage
- Define layout patterns

**Forbidden:**
- Creating inconsistent patterns
- Changing brand philosophy
- Adding decorative elements without purpose
- Override motion decisions (Motion Director has priority)

**Reference:** DESIGN.md § Visual Language System, § Typography System, § Color System, § Interface & Navigation System

---

### Level 04 — Motion Language

**Skill:** `lumora-motion-director`

**Responsibility:**
Protect cinematic animation language, timing systems, transitions, and meaningful motion.

**Allowed:**
- Design motion behavior
- Define animation timing
- Review all motion decisions
- Reject decorative animation

**Forbidden:**
- Adding animation without purpose
- Ignoring performance constraints
- Creating generic animation patterns
- Override brand decisions (Brand Guardian has priority)

**Reference:** DESIGN.md § Motion Language System, § Living Core System

---

### Level 05 — Engineering Quality

**Skill:** `lumora-performance-engineer`

**Responsibility:**
Protect performance, architecture, code quality, optimization, and technical sustainability.

**Allowed:**
- Refactor technical problems
- Optimize performance
- Enforce code quality standards
- Recommend architecture improvements

**Forbidden:**
- Breaking experience quality for speed
- Removing meaningful motion for metrics
- Sacrificing brand identity for optimization
- Override brand or experience decisions

**Reference:** ARCHITECTURE.md, AGENTS.md § Technology & Implementation Rules

---

### Level 06 — Final Review

**Skill:** `lumora-quality-reviewer`

**Responsibility:**
Final approval. Comprehensive evaluation of design, UX, code, performance, accessibility, and consistency.

**Allowed:**
- Evaluate complete implementations
- Check all dimensions simultaneously
- Approve or reject final delivery
- Recommend improvements across all domains

**Forbidden:**
- Overriding individual skill decisions without justification
- Approving work that fails any quality gate
- Bypassing the review workflow

**Reference:** All authority documents

---

## Skill Priority Order

| Priority | Skill | Authority |
|----------|-------|-----------|
| 1 (Highest) | Brand Guardian | Brand identity and vision |
| 2 | UX Storyteller | User journey and experience |
| 3 | UI System | Components and visual implementation |
| 4 | Motion Director | Animation and cinematic language |
| 5 | Performance Engineer | Speed, architecture, code quality |
| 6 (Lowest) | Quality Reviewer | Final comprehensive review |

### Priority Logic

Brand identity is the foundation. Everything else is built on top of it. If the brand is wrong, nothing else matters.

User experience comes second. A beautiful brand means nothing if users cannot navigate the experience.

Visual implementation comes third. The experience needs form to exist.

Motion comes fourth. Motion enriches the experience but must not replace it.

Performance comes fifth. Speed supports the experience but must not destroy it.

Quality Review is last. It evaluates everything together but does not override individual domain decisions.

---

## Conflict Resolution

When skills disagree, resolution follows this process:

### Step 1: Identify the Conflict

Which dimensions are in tension?

Examples:
- Performance Engineer wants to remove an animation. Motion Director says it is essential.
- UI System wants a new component pattern. Brand Guardian says it breaks visual identity.
- UX Storyteller wants more storytelling content. Performance Engineer says it hurts load time.

### Step 2: Apply Priority Order

The higher-priority skill's domain takes precedence.

Example:
Performance Engineer wants to remove an animation for speed. Motion Director says the animation is essential for storytelling.

Resolution:
The animation stays. Motion (Priority 4) outranks performance (Priority 5) for decisions about meaningful motion. The Performance Engineer must find another optimization.

### Step 3: Seek Alternative

The lower-priority skill must find a solution that respects the higher-priority decision.

Example:
The Performance Engineer cannot remove the animation. They must optimize something else — reduce file size, simplify other effects, defer non-critical loading.

### Step 4: Escalate if Necessary

If no alternative exists, escalate to the Brand Guardian. The brand perspective is the final authority.

### Conflict Examples

| Conflict | Resolution |
|----------|------------|
| Animation vs. Performance | Animation wins if meaningful. Performance must optimize elsewhere. |
| New Component vs. Consistency | Consistency wins. Extend existing patterns. |
| Rich Experience vs. Load Time | Experience wins. Optimize delivery strategy. |
| Trend vs. Identity | Identity wins. Never chase trends. |
| Feature vs. Simplicity | Simplicity wins. Remove the feature. |

---

## Communication Rules

### How Skills Communicate

Skills communicate through structured review. Each skill evaluates work from its perspective and provides feedback in its domain.

Skills do not negotiate. They state their requirements. The priority system resolves disagreements.

### How Skills Review Each Other

When a skill produces output, the next skill in priority order reviews it:

1. Brand Guardian defines direction
2. UX Storyteller designs the journey
3. UI System implements the interface
4. Motion Director adds cinematic language
5. Performance Engineer optimizes delivery
6. Quality Reviewer evaluates the whole

Each skill can request changes from higher-priority skills, but cannot override them.

### How Disagreements Are Resolved

Disagreements follow the priority order. No vote. No consensus. Clear hierarchy.

If the Brand Guardian says "This does not feel like LUMORA," the discussion is over. No other skill can override that judgment.

If the Motion Director says "This animation is essential," the Performance Engineer must find another way to optimize.

The system is designed to prevent stalemates through clear authority.

---

## Change Permission Model

| Skill | Can Modify | Cannot Modify |
|-------|-----------|---------------|
| **Brand Guardian** | Documentation, direction rules, brand philosophy, identity guidelines | UI components, code implementation, motion behavior, performance architecture |
| **UX Storyteller** | Journey maps, section flow, narrative structure, emotional pacing | Brand identity, component implementation, animation code, technical architecture |
| **UI System** | Components, tokens, layout patterns, visual implementation, responsive behavior | Brand philosophy, motion timing, performance strategy, user journey structure |
| **Motion Director** | Animation timing, transition behavior, cinematic sequences, interaction motion | Brand identity, component structure, performance architecture, user journey |
| **Performance Engineer** | Code architecture, optimization strategy, loading behavior, asset management | Brand identity, motion meaning, user experience flow, visual design decisions |
| **Quality Reviewer** | Final approval status, improvement recommendations across all domains | Individual skill decisions (can recommend changes, cannot override) |

---

## Review Workflow

Every LUMORA implementation passes through this workflow:

```
Idea
  ↓
Brand Review        ← "Does this feel like LUMORA?"
  ↓
UX Review           ← "Does this improve the user journey?"
  ↓
UI Review           ← "Does this follow the visual system?"
  ↓
Motion Review       ← "Does this motion communicate meaning?"
  ↓
Engineering Review  ← "Does this maintain performance and quality?"
  ↓
Quality Review      ← "Does this represent LUMORA at its best?"
  ↓
Approved
```

### Workflow Rules

1. **No skipping.** Every implementation passes every review.
2. **No overriding.** Higher-priority decisions stand.
3. **No shortcuts.** Quality is not negotiable.
4. **No assumptions.** Every decision references authority documents.

### Review Gates

Each review is a gate. Work cannot proceed to the next review until the current review is satisfied.

| Gate | Pass Condition |
|------|----------------|
| Brand Review | Decision strengthens LUMORA identity |
| UX Review | Decision improves user journey |
| UI Review | Decision follows visual system rules |
| Motion Review | Decision adds meaningful motion |
| Engineering Review | Decision maintains performance and code quality |
| Quality Review | Decision meets all LUMORA standards |

---

## LUMORA Non-Negotiables

These rules apply across all skills. No skill can override them.

### 1. No Generic Design

LUMORA must never look like a template, a framework, or another portfolio. Every decision must strengthen the unique LUMORA identity.

### 2. No Random Animation

Every animation must answer: "Why does this move?" If the answer does not improve understanding, emotion, or interaction, the animation is removed.

### 3. No Trend Chasing

Temporary design trends are rejected. LUMORA builds its own recognizable language. Trends expire. Identity endures.

### 4. No Unnecessary Complexity

Every element must earn its presence. If it does not improve the experience, it is removed. Simplicity is luxury.

### 5. No Breaking Identity

No decision can weaken the LUMORA brand, the Living Core, or the cinematic experience. Identity is protected at all costs.

### 6. Quality Over Speed

A fast experience that is generic is worse than a slower experience that is unforgettable. Quality always wins.

### 7. No Hardcoded Values

All visual decisions come from the design token system. No random colors, spacing, or typography values.

### 8. Accessibility Is Not Optional

Every implementation must consider accessibility. Reduced motion preferences must be respected. Semantic HTML is required.

### 9. No Untested Deployment

Every implementation must pass the complete review workflow before deployment. No exceptions.

### 10. Documentation Must Match Implementation

If the code changes, documentation must update. Stale documentation is a quality failure.

---

## Skill File Structure

Each skill follows a consistent structure:

```
skills/
├── lumora-brand-guardian/
│   └── SKILL.md
├── lumora-ux-storyteller/
│   └── SKILL.md
├── lumora-ui-system/
│   └── SKILL.md
├── lumora-motion-director/
│   └── SKILL.md
├── lumora-performance-engineer/
│   └── SKILL.md
└── lumora-quality-reviewer/
    └── SKILL.md
```

### SKILL.md Structure

Each SKILL.md contains:

1. **Role** — Who the skill is
2. **Core Mission** — What the skill protects
3. **Philosophy** — How the skill thinks
4. **Rules** — What the skill enforces
5. **Reference** — Authority documents the skill references
6. **Forbidden** — What the skill never allows

---

## Future Skills

The skill architecture is extensible. Future specialized skills may be added as LUMORA evolves.

### Potential Future Skills

| Skill | Purpose |
|-------|---------|
| `lumora-accessibility-specialist` | WCAG compliance, screen reader optimization, keyboard navigation |
| `lumora-seo-specialist` | Search optimization, structured data, meta strategy |
| `lumora-content-strategist` | Copywriting, tone of voice, content hierarchy |
| `lumora-case-study-architect` | Project storytelling, case study structure, narrative design |
| `lumora-3d-specialist` | Three.js implementation, WebGL optimization, spatial design |
| `lumora-sound-designer` | Audio experience, ambient sound, interaction feedback |

### Adding New Skills

New skills must:

1. Follow the SKILL.md structure
2. Reference LUMORA authority documents
3. Respect the priority hierarchy
4. Protect a specific quality dimension
5. Not duplicate existing skill responsibilities
6. Be approved by the Brand Guardian

### Skill Architecture Rule

The architecture is sacred. New skills extend it. They do not replace it. The six foundational skills — Brand Guardian, UX Storyteller, UI System, Motion Director, Performance Engineer, Quality Reviewer — are permanent. They form the intelligence foundation of LUMORA.

---

## Integration with LUMORA Development

### During Implementation

When building features, the developer (or AI) operates as multiple skills simultaneously:

1. **Think as Brand Guardian:** Does this feel like LUMORA?
2. **Think as UX Storyteller:** Does this improve the journey?
3. **Think as UI System:** Does this follow the visual system?
4. **Think as Motion Director:** Does this motion communicate meaning?
5. **Think as Performance Engineer:** Does this maintain speed?
6. **Think as Quality Reviewer:** Does this represent LUMORA at its best?

### During Review

When reviewing completed work, skills activate in priority order:

1. Brand Guardian reviews first
2. UX Storyteller reviews second
3. UI System reviews third
4. Motion Director reviews fourth
5. Performance Engineer reviews fifth
6. Quality Reviewer evaluates last

### During Conflict

When dimensions compete, the priority system resolves:

1. Reference the priority table
2. Apply the higher-priority decision
3. Find alternatives for the lower-priority concern
4. Escalate only if no alternative exists

---

## Final Architecture Principle

The skill system exists to protect one thing:

A digital experience that users remember.

Every skill, every rule, every review serves this purpose.

The architecture is not bureaucracy.

The architecture is quality insurance.

When every decision passes through specialized review, the result is not slower development. The result is development that does not need to be redone.

Build once. Build right. Build LUMORA.
