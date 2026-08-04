# LUMORA — Skill Specification Standard

**Specification Version:** v1.0.0
**Status:** Active
**Owner:** LUMORA Intelligence System

> The mandatory engineering and documentation standard for every LUMORA Skill.
> This is not a skill. This is the template that all skills must follow.

**Specification Version:** v1.0.0  
**Status:** Active  
**Owner:** LUMORA Intelligence System

---

## Purpose

Every LUMORA Skill follows the same specification.

Consistency is more important than individual creativity. The specification exists to guarantee:

- **Maintainability** — Any contributor can understand any skill without learning a new format
- **Predictability** — Every skill contains the same sections in the same order
- **Quality** — The specification enforces completeness. No skill ships with missing responsibilities or undefined boundaries
- **Collaboration** — Skills can reference each other because they share a common structure
- **Scalability** — New skills can be created quickly by following the template

The specification is not bureaucracy. The specification is quality infrastructure.

---

## Skill File Structure

Every skill lives in the `skills/` directory:

```
skills/
└── lumora-{skill-name}/
    └── SKILL.md
```

### Naming Convention

- Directory: `lumora-{skill-name}` (lowercase, hyphenated)
- File: `SKILL.md` (always uppercase)

### Example

```
skills/lumora-brand-guardian/SKILL.md
skills/lumora-motion-director/SKILL.md
```

---

## Mandatory Sections

Every SKILL.md MUST contain the following sections in exactly this order. No section may be omitted. No section may be reordered.

---

### 1. Skill Identity

**Purpose:** Define who the skill is and where it sits in the hierarchy.

**Required fields:**

| Field | Description | Example |
|-------|-------------|---------|
| Skill Name | Full display name | `LUMORA Brand Guardian` |
| Skill ID | Machine identifier | `lumora-brand-guardian` |
| Version | Semantic version | `v1.0.0` |
| Status | Current state | `Active` |
| Priority Level | Hierarchy position | `Level 01 — Identity Protection` |
| Category | Domain classification | `Identity` |
| Owner | Responsible authority | `LUMORA Intelligence System` |

**Rules:**
- Skill Name must include "LUMORA" prefix
- Skill ID must match the directory name
- Version must follow semantic versioning (see Versioning Rules)
- Status must be one of: `Active`, `Deprecated`, `Experimental`
- Priority Level must match SKILL_ARCHITECTURE.md hierarchy

---

### 2. Purpose

**Purpose:** Explain why this skill exists and what problem it solves.

**Required content:**
- One paragraph explaining the skill's reason for existence
- The specific problem it prevents
- The quality dimension it protects

**Rules:**
- Maximum 200 words
- No marketing language
- Direct and specific

**Example format:**
```
## Purpose

LUMORA [skill name] exists to protect [quality dimension].

Without this skill, [specific problem occurs].

This skill prevents [problem] by [mechanism].
```

---

### 3. Mission

**Purpose:** Describe the long-term mission. Not implementation details.

**Required content:**
- The skill's enduring goal
- The state it works toward
- The standard it maintains

**Rules:**
- Mission does not change between versions
- Mission is not implementation-specific
- Maximum 100 words

---

### 4. Responsibilities

**Purpose:** Clearly list everything the skill protects.

**Required content:**
- Bulleted list of all protected areas
- Each item must be a distinct responsibility
- No overlap with other skills' responsibilities

**Rules:**
- Minimum 3 responsibilities
- Maximum 10 responsibilities
- Each responsibility must be specific and actionable
- Responsibilities must not duplicate other skills' domains

**Example format:**
```
## Responsibilities

- Brand identity alignment
- Visual consistency enforcement
- Emotional direction protection
- Living Core integration verification
```

---

### 5. Allowed Actions

**Purpose:** Define everything this skill may modify.

**Required content:**
- Bulleted list of all actions the skill can take
- Clear scope boundaries
- Examples of typical actions

**Rules:**
- Every allowed action must be explicitly listed
- If it is not listed, it is not allowed
- Actions must not encroach on other skills' domains

---

### 6. Forbidden Actions

**Purpose:** Define everything this skill must never modify. This section is mandatory.

**Required content:**
- Bulleted list of all forbidden actions
- Clear explanation of why each is forbidden
- Reference to which skill owns that domain

**Rules:**
- This section cannot be empty
- Every forbidden action must have a reason
- Forbidden actions must reference the owning skill

**Example format:**
```
## Forbidden Actions

- **Modifying UI components** — Owned by lumora-ui-system
- **Changing animation timing** — Owned by lumora-motion-director
- **Altering performance architecture** — Owned by lumora-performance-engineer
```

---

### 7. Inputs

**Purpose:** Describe all expected inputs to this skill.

**Required content:**
- Bulleted list of all input types
- Description of each input format
- Examples where helpful

**Rules:**
- List every type of input the skill may receive
- Include both explicit and implicit inputs

**Example inputs:**
- Component implementation
- Page structure
- Design token values
- Documentation content
- Pull request description
- User request
- Review feedback from higher-priority skills

---

### 8. Outputs

**Purpose:** Describe expected outputs from this skill.

**Required content:**
- Bulleted list of all output types
- Description of each output format
- Examples where helpful

**Rules:**
- List every type of output the skill produces
- Outputs must be actionable
- Outputs must be in a format other skills can consume

**Example outputs:**
- Approval or rejection with reasoning
- Specific improvement suggestions
- Documentation updates
- Refactoring recommendations
- Token adjustments
- Component modifications

### Standard Review Output Format

When a skill performs a review, it must return the result using this structure:

```md
## Review Result

Status: Approved | Approved with Changes | Rejected

### Findings

- Describe verified findings.

### Required Changes

- List mandatory changes required for approval.
- Use `None` when no required changes exist.

### Recommendations

- List optional improvements.
- Use `None` when no recommendations exist.

### Escalation

None | `lumora-{skill-id}`

---

### 9. Dependencies

**Purpose:** Document authority documents, required references, and required knowledge.

**Required content:**
- Authority documents this skill references
- Required knowledge areas
- Related skills

**Rules:**
- Must reference at least one authority document (DESIGN.md, AGENTS.md, or LUMORA_PROJECT_MASTER_RECORD.md)
- Must list related skills by name
- Must not depend on documents that do not exist

**Example format:**
```
## Dependencies

### Authority Documents
- DESIGN.md § Brand DNA
- DESIGN.md § Visual Language System
- LUMORA_PROJECT_MASTER_RECORD.md § Brand Personality

### Required Knowledge
- Brand identity principles
- Visual language systems
- Emotional design

### Related Skills
- lumora-ux-storyteller (receives brand direction)
- lumora-ui-system (provides brand constraints)
```

---

### 10. Decision Rules

**Purpose:** Explain how the skill decides, resolves conflicts, and escalates.

**Required content:**
- Decision-making framework
- Priority order reference
- Conflict resolution process
- Escalation rules

**Rules:**
- Must reference SKILL_ARCHITECTURE.md priority order
- Must define when the skill defers to higher-priority skills
- Must define when the skill overrides lower-priority skills
- Must define escalation path

---

### 11. Review Checklist

**Purpose:** Every skill must include a checklist for evaluating decisions.

**Required content:**
- Checkbox list of review criteria
- Minimum 5 items
- Maximum 12 items
- Each item must be pass/fail (no ambiguous criteria)

**Rules:**
- Checklist must be specific to this skill's domain
- Checklist items must be verifiable
- No subjective criteria (avoid "feels right" — use "passes [specific test]")

**Example format:**
```
## Review Checklist

☐ LUMORA identity preserved
☐ No generic patterns introduced
☐ Visual consistency maintained
☐ Living Core integration correct
☐ Neon Purple usage controlled
☐ Documentation updated
☐ Accessibility considered
☐ No hardcoded values used
```

---

### 12. Failure Conditions

**Purpose:** Describe situations where the skill must refuse approval.

**Required content:**
- Bulleted list of automatic failure conditions
- Each condition must be specific and detectable
- Clear explanation of why each condition is a failure

**Rules:**
- Minimum 3 failure conditions
- Each condition must be objective (not subjective)
- Failure conditions must be enforceable

**Example format:**
```
## Failure Conditions

Automatic rejection when:

- **Generic UI detected** — Template patterns, stock layouts, or copied designs
- **Identity conflict** — Decision weakens LUMORA brand recognition
- **Unsupported claims** — Performance scores, accessibility ratings, or awards without verification
- **Decorative animation** — Motion without meaningful purpose
- **Architecture violation** — Breaks established component or data patterns
```

---

### 13. Examples

**Purpose:** Provide examples of good decisions, bad decisions, and borderline cases.

**Required content:**
- At least 2 good decision examples
- At least 2 bad decision examples
- At least 1 borderline case with explanation

**Rules:**
- Examples must be specific to LUMORA
- Bad examples must explain why they fail
- Borderline cases must show the reasoning process

**Example format:**
```
## Examples

### Good Decisions
- Using Cormorant Garamond for hero statements (follows typography system)
- Applying Neon Purple only to interaction states (follows color discipline)

### Bad Decisions
- Adding a random gradient background (violates Void environment rules)
- Using bounce easing on button hover (violates motion philosophy)

### Borderline Case
- Adding a subtle parallax effect to the hero background.
  Decision: Approved if it serves depth perception. Rejected if it is decorative.
  Test: Does the user's understanding of the content improve with the effect?
```

---

### 14. Future Extensions

**Purpose:** Explain how future versions may extend the skill without breaking compatibility.

**Required content:**
- Planned areas of extension
- Compatibility guarantees
- Deprecation policy

**Rules:**
- Must define what constitutes a breaking change
- Must define the deprecation process
- Must reference semantic versioning rules

---

## Writing Rules

All skill content must follow these rules:

### Language Style

| Rule | Description |
|------|-------------|
| **Clear** | Every sentence has one meaning. No ambiguity. |
| **Professional** | No casual language, jokes, or conversational tone. |
| **Deterministic** | Every rule produces the same outcome regardless of who applies it. |
| **Actionable** | Every statement implies or describes an action. |

### Forbidden Language

| Pattern | Example | Why |
|---------|---------|-----|
| Marketing language | "stunning", "revolutionary", "game-changing" | Subjective and unverifiable |
| Ambiguous wording | "usually", "generally", "most of the time" | Creates uncertainty |
| Emotional exaggeration | "absolutely critical", "extremely important" | Dilutes meaning |
| Vague directives | "make it better", "improve quality" | Not actionable |
| Conditional authority | "you might consider", "perhaps try" | Undermines decision power |

### Preferred Language

| Instead of | Use |
|------------|-----|
| "Make it feel premium" | "Apply design tokens from the spacing and typography systems" |
| "Improve the animation" | "Verify animation follows timing system: 150ms–250ms for micro, 300ms–600ms for standard" |
| "Ensure quality" | "Pass all items in the Review Checklist" |

---

## Versioning Rules

### Format

```
v{MAJOR}.{MINOR}.{PATCH}
```

### Meaning

| Change Type | Version Bump | Example |
|-------------|-------------|---------|
| **MAJOR** — Breaking change to skill behavior, responsibilities, or decision rules | +1.0.0 | v1.0.0 → v2.0.0 |
| **MINOR** — New capability, additional checklist item, expanded examples | +0.1.0 | v1.0.0 → v1.1.0 |
| **PATCH** — Typo fix, wording improvement, clarification | +0.0.1 | v1.0.0 → v1.0.1 |

### Rules

- Version starts at v1.0.0 when first approved
- MAJOR version changes require Brand Guardian approval
- MINOR version changes require documentation update
- PATCH version changes require only review checklist pass
- Version number must be updated in the Skill Identity section

---

## Compatibility Rules

Every skill must remain compatible with:

- AGENTS.md
- DESIGN.md
- LUMORA_PROJECT_MASTER_RECORD.md
- SKILL_ARCHITECTURE.md

### Conflict Resolution

If a skill conflicts with an authority document:

1. Authority documents always win
2. The skill must be updated to match
3. Version bump follows breaking change rules (MAJOR)
4. The change must be documented in the skill's changelog

### Cross-Skill Compatibility

Skills must not:

- Duplicate another skill's responsibilities
- Override another skill's domain without explicit permission
- Depend on another skill's internal implementation
- Assume another skill's output format

Skills may:

- Reference another skill's approved output
- Request review from another skill
- Provide input to another skill's decision process

---

## Validation Rules

Before a skill is accepted, it must satisfy all of the following:

### Completeness Validation

- ☐ All 14 mandatory sections exist
- ☐ No section is empty
- ☐ Section order matches the specification
- ☐ Skill Identity fields are complete
- ☐ Forbidden Actions section has at least 3 items
- ☐ Review Checklist has 5–12 items
- ☐ Failure Conditions have at least 3 items
- ☐ Examples include good, bad, and borderline cases

### Quality Validation

- ☐ No marketing language
- ☐ No ambiguous wording
- ☐ All rules are deterministic
- ☐ All statements are actionable
- ☐ Writing follows the style rules

### Architecture Validation

- ☐ References at least one authority document
- ☐ Does not duplicate existing skill responsibilities
- ☐ Respects SKILL_ARCHITECTURE.md priority order
- ☐ Compatible with all authority documents
- ☐ Version starts at v1.0.0

### Integration Validation

- ☐ Directory name follows `lumora-{skill-name}` convention
- ☐ File is named `SKILL.md`
- ☐ Skill ID matches directory name
- ☐ Priority Level matches SKILL_ARCHITECTURE.md

---

## Specification Changes

This specification may be updated. Changes follow:

| Change Type | Approval Required |
|-------------|-------------------|
| Adding a mandatory section | Brand Guardian + Quality Reviewer |
| Removing a mandatory section | Brand Guardian + Quality Reviewer + All active skills |
| Modifying section requirements | Brand Guardian |
| Updating writing rules | Brand Guardian |
| Updating versioning rules | Brand Guardian |
| Updating validation rules | Brand Guardian + Quality Reviewer |

All specification changes require a MAJOR version bump.

---

## Final Rule

This specification is the standard. Every LUMORA Skill must follow it.

No exceptions. No shortcuts. No "close enough."

The specification exists because consistency is not automatic. It must be enforced.

Every skill that follows this specification is maintainable, predictable, and compatible with the LUMORA intelligence layer.

Every skill that does not follow this specification is technical debt.

Follow the specification. Build reliable skills. Protect LUMORA quality.
