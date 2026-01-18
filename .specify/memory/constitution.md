# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!--
Sync Impact Report
- Version change: UNDEFINED -> 1.0.0
- Modified principles: (placeholders -> concrete)
	- [PRINCIPLE_1_NAME] -> I. Code Quality (NON-NEGOTIABLE)
	- [PRINCIPLE_2_NAME] -> II. Testing Standards (TEST-FIRST)
	- [PRINCIPLE_3_NAME] -> III. User Experience Consistency
	- [PRINCIPLE_4_NAME] -> IV. Performance Requirements
	- [PRINCIPLE_5_NAME] -> V. Observability & Simplicity
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Templates checked:
	- .specify/templates/plan-template.md: ✅ aligned
	- .specify/templates/spec-template.md: ✅ aligned
	- .specify/templates/tasks-template.md: ✅ aligned
	- .specify/templates/commands/: ⚠ not present (no action required)
- Follow-up TODOs:
	- None. All constitution placeholders replaced.
-->

# My Personal Website Constitution

## Core Principles

### I. Code Quality (NON-NEGOTIABLE)
All production code MUST follow established style guides and pass automated linters/formatters before review. PRs should be small, focused, and include clear descriptions and rationale. Code MUST be modular, documented, and expose well-defined interfaces. Maintainability is required: minimize global state, prefer explicit contracts, and include README-level usage notes for non-trivial modules.

### II. Testing Standards (TEST-FIRST)
Testing is mandatory: unit tests, integration tests, and end-to-end tests where appropriate. New features MUST include tests that fail before implementation (red → green → refactor). CI MUST enforce test runs and block merges on failing tests. Maintain a test coverage target of at least 80% for critical modules; coverage is a signal, not an absolute gate—focus on meaningful assertions and regressions.

### III. User Experience Consistency
The site MUST follow a single design system and component library for visual and interaction consistency. Accessibility (WCAG AA) is REQUIRED for public-facing pages. UX patterns MUST be documented and reviewed for major flows. Changes that affect primary user journeys require design review and a regression checklist.

### IV. Performance Requirements
Establish performance budgets for page load, Time-to-Interactive, and API p95 latency. New features MUST include a performance rationale and, where applicable, benchmarks or profiling evidence. Performance regressions MUST be fixed before merging; CI should include lightweight performance smoke checks for critical pages.

### V. Observability & Simplicity
Instrumentation (structured logging, basic metrics, and error reporting) MUST be present for interactive features. Keep implementations simple: prefer clear, testable code over clever optimizations. Document expected failure modes and recovery steps. Default to simplicity and defer complexity until demonstrated necessary.

## Additional Constraints
Technology choices SHOULD favor static-first, privacy-respecting, and minimal-dependency approaches appropriate for a personal website. Production assets SHOULD be optimized (images, fonts). Any third-party service MUST be reviewed for privacy impact and availability requirements.

## Development Workflow
- Branching: feature branches named `feat/<short-desc>`; hotfix branches named `fix/<short-desc>`.
- Pull Requests: require one approving review (two for public-facing or risky changes), passing CI, and an explicit description of UX/UX changes and test coverage.
- CI/CD: All merges to the main branch MUST pass linters, tests, and basic build checks. Deploys to production are automated on merge; rollbacks MUST be trivial.
- Releases & Versioning: Follow semantic versioning for public artifacts. For site content, use incremental internal tags when meaningful.

## Governance
Constitution amendments are made via pull requests against this file. Amendments MUST include a clear rationale, migration steps (if any), and an impact assessment. Changes require approval by project maintainers (>=1 maintainer + author) before merging. For breaking governance changes (principle removal or redefinition), bump the MAJOR version and document migration guidance.

Compliance reviews: periodic review of key principles (code quality, tests, UX, and performance) SHOULD occur at least annually or with major platform changes. Non-compliance discovered in reviews MUST be addressed with prioritized remediation tasks.

**Version**: 1.0.0 | **Ratified**: 2026-01-19 | **Last Amended**: 2026-01-19

```
