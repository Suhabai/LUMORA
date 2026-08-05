# LUMORA Report Standard

> The official documentation standard for every report created within the LUMORA ecosystem.

This document defines the structure, purpose, writing style, and validation requirements for all project reports.

Reports are engineering documents.

They are not meeting notes.

They are not summaries.

They are permanent project records.

---

# Purpose

Every report must answer four questions:

1. What was done?
2. Why was it done?
3. What is the current status?
4. What happens next?

A report must allow a new team member to understand the current state of the project without reading the entire history.

---

# Scope

This standard applies to every report inside the project.

Examples include:

- FOUNDATION_LOCK_REPORT.md
- BRAND_GUARDIAN_REPORT.md
- SKILL_ARCHITECTURE_REPORT.md
- UX_STORYTELLER_REPORT.md
- UI_SYSTEM_REPORT.md
- PERFORMANCE_REPORT.md

Every future report must follow this document.

---

# Writing Principles

Every report must be:

- Objective
- Clear
- Verifiable
- Concise
- Structured
- Free of unnecessary repetition

Avoid marketing language.

Avoid emotional language.

Describe facts.

Explain decisions.

Record outcomes.
---

# Standard Report Structure

Every report must follow the same section order unless explicitly approved otherwise.

## 1. Report Information

Every report begins with:

| Field | Description |
|------|-------------|
| Report Name | Official report name |
| Version | Semantic version |
| Status | Draft / Active / Archived |
| Related Skill / System | Primary subject |
| Author | Responsible authority |
| Last Updated | ISO 8601 date |

---

## 2. Overview

A short description explaining what this report is about.

Maximum recommended length:

150 words.

The overview should be understandable without reading the remainder of the report.

---

## 3. Objective

Clearly describe:

- Why this report exists.
- What problem it documents.
- What decision or milestone it records.

---

## 4. Current Status

Describe the current project state.

Examples:

- Completed
- In Progress
- Waiting for Review
- Blocked
- Archived

Status must always be explicit.

---

## 5. Completed Work

Describe completed work only.

Do not include future plans here.

Prefer bullet lists.

Example:

- Identity review completed
- Documentation synchronized
- Skill validated

---

## 6. Validation

Record how the work was validated.

Possible examples:

- Manual Review
- Cross-document verification
- Build verification
- Skill review
- Documentation consistency check
---

## 7. Known Limitations

Document any known limitations, unresolved issues, or intentional exclusions.

Rules:

- Be factual.
- Do not hide limitations.
- Do not speculate.
- If no limitations exist, explicitly state:

`None at the time of this report.`

---

## 8. Next Actions

Describe the logical next step after this report.

This section should answer:

"What should happen next?"

Examples:

- Create the next Skill
- Review implementation
- Begin integration
- Wait for validation
- Archive this report

---

## 9. References

List every authority document used when preparing the report.

Typical references include:

- AGENTS.md
- DESIGN.md
- LUMORA_PROJECT_MASTER_RECORD.md
- SKILL_ARCHITECTURE.md
- SKILL_SPECIFICATION.md
- REPORT_STANDARD.md

Only include documents actually used.

---

## 10. Version History

Every report must maintain its own version history.

Example:

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | Initial Release | First official report |

Never delete previous versions.

Append new versions below older ones.

---

# Report Completion Checklist

Before marking a report as complete, verify:

☐ Report Information completed

☐ Overview written

☐ Objective clearly defined

☐ Current Status updated

☐ Completed Work documented

☐ Validation recorded

☐ Known Limitations included

☐ Next Actions defined

☐ References verified

☐ Version History updated

---

# Final Rule

Reports are permanent engineering records.

A report must document reality.

It must never exaggerate progress.

It must never hide unresolved issues.

If uncertainty exists, record it explicitly.
