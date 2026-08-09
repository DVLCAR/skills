<a href="https://animations.dev/">
<img width="320" height="168" alt="opengraph-image-pwu6ef" src="https://github.com/user-attachments/assets/a405a37f-1a1a-4e8d-8fd6-269ee6d4fba6" />
</a>

# Skills For Designers and Engineers

[![skills.sh](https://skills.sh/b/emilkowalski/skills)](https://skills.sh/emilkowalski/skills)

This repository bundles two skill collections for AI coding agents (Claude Code and compatible tools):

1. **[Design & animation skills](#design--animation-skills)** by [Emil Kowalski](https://emilkowal.ski/) — help agents make better UI, motion, and design decisions.
2. **[Agent Skills](#agent-skills-engineering-lifecycle-skills)** by [Addy Osmani](https://github.com/addyosmani/agent-skills) — production-grade engineering workflows covering the full software lifecycle, from spec to ship.

Both sets live side by side under [`skills/`](./skills) and can be installed together or individually. See [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) for attribution and licensing of the imported collection.

---

## Design & animation skills

For designers and engineers to help them build better user interfaces.

Knowing whether you made a right choice when it comes to animations, or design in general, is hard. These skills aim to help you get to those right decisions faster.

They are based on my years of experience working at companies like Vercel and Linear.

All the skills here are a side-effect of domain-expertise. AI doesn’t replace such expertise, it amplifies what you can get out of it and makes you way better relative to others.

So learn to code, design, or develop expertise in any other field. It’s extremely valuable.

You can stay up to date with my skills here:

[Sign Up To The Newsletter](https://animations.dev/skills)

### Install

```bash
npx skills@latest add emilkowalski/skills
```

### Why use it?

Agents don’t have great taste

I have seen plenty of times that agents don’t pick the right ingredients for an animation. An `ease-in` easing for an enter animation when it’s supposed to be `ease-out` ([here’s why](https://emilkowal.ski/ui/7-practical-animation-tips#4.-choose-the-right-easing)). Or they choose a solid border instead of a semi-transparent shadow for your UIs.

All these small things compound and make your interface either amazing, or just... not that great.

As explained in [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste), these skills list all the little mistakes agents can potentially make and explain how to fix them.

This is your shortcut to great interfaces. A shortcut to stand out in a sea of slop.

### Reference

- **[emil-design-eng](./skills/emil-design-eng/SKILL.md)** — The main skill that consists of mostly animation, but also some design advice.
- **[animate](./skills/animate/SKILL.md)** — Builds an animation from scratch while choosing the correct curve, duration, properties, and so on.
- **[review-animations](./skills/review-animations/SKILL.md)** — Review your animations in a strict way, based on my rules.
- **[improve-animations](./skills/improve-animations/SKILL.md)** — Audit all the animations in your codebase and get prioritized, self-contained plans that any agent can execute.
- **[find-animation-opportunities](./skills/find-animation-opportunities/SKILL.md)** — Search your UI for places that would genuinely benefit from motion, while also telling you what not to animate.
- **[animation-vocabulary](./skills/animation-vocabulary/SKILL.md)** — Get better animations from an AI by telling it exactly what you want by using the right words.
- **[apple-design](./skills/apple-design/SKILL.md)** — Apple’s principles for interface design and fluid motion, distilled from their WWDC design talks and translated for the web.
- **[pick-ui-library](./skills/pick-ui-library/SKILL.md)** — Have your agent pick the right library for the task based on libraries I use and trust, instead of letting AI hand-roll a toast component or install an abandoned package.
- **[prototype](./skills/prototype/SKILL.md)** — Build multiple different versions of a UI piece you describe and go through them using a switcher.

---

## Agent Skills (engineering lifecycle skills)

Production-grade engineering skills for AI coding agents, imported from [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills).

These skills encode the workflows, quality gates, and best practices senior engineers use when building software — spec writing, planning, incremental implementation, testing, code review, security, performance, and shipping — packaged so an agent follows them consistently across every phase of development. Several skills reference shared checklists in [`references/`](./references) (definition of done, security, performance, accessibility, observability, testing patterns, orchestration).

### Install

```bash
# All 24 skills
npx skills@latest add addyosmani/agent-skills

# A single skill
npx skills@latest add addyosmani/agent-skills --skill code-review-and-quality
```

> Installing a single skill this way only copies that skill's folder, not the shared `references/` directory some of them link to. This repository keeps `references/` alongside the skills so the relative links resolve when cloned or installed as a whole.

### Reference

**Meta**

- **[using-agent-skills](./skills/using-agent-skills/SKILL.md)** — Maps incoming work to the right skill workflow and defines shared operating rules.

**Define — clarify what to build**

- **[interview-me](./skills/interview-me/SKILL.md)** — One-question-at-a-time interview that extracts what the user actually wants.
- **[idea-refine](./skills/idea-refine/SKILL.md)** — Structured divergent/convergent thinking to turn vague ideas into concrete proposals.
- **[spec-driven-development](./skills/spec-driven-development/SKILL.md)** — Write a PRD before any code: objectives, commands, structure, style, testing, boundaries.

**Plan — break it down**

- **[planning-and-task-breakdown](./skills/planning-and-task-breakdown/SKILL.md)** — Decompose specs into small, verifiable tasks with acceptance criteria and dependency ordering.

**Build — write the code**

- **[incremental-implementation](./skills/incremental-implementation/SKILL.md)** — Thin vertical slices: implement, test, verify, commit.
- **[test-driven-development](./skills/test-driven-development/SKILL.md)** — Red-Green-Refactor, test pyramid, test sizes, DAMP over DRY, the Beyoncé Rule.
- **[context-engineering](./skills/context-engineering/SKILL.md)** — Feed agents the right information at the right time.
- **[source-driven-development](./skills/source-driven-development/SKILL.md)** — Ground every framework decision in official documentation, cited.
- **[doubt-driven-development](./skills/doubt-driven-development/SKILL.md)** — Adversarial fresh-context review of non-trivial decisions in-flight.
- **[frontend-ui-engineering](./skills/frontend-ui-engineering/SKILL.md)** — Component architecture, design systems, state management, WCAG 2.1 AA accessibility.
- **[api-and-interface-design](./skills/api-and-interface-design/SKILL.md)** — Contract-first design, Hyrum's Law, error semantics, boundary validation.

**Verify — prove it works**

- **[browser-testing-with-devtools](./skills/browser-testing-with-devtools/SKILL.md)** — Chrome DevTools MCP for live runtime data: DOM, console, network, performance.
- **[debugging-and-error-recovery](./skills/debugging-and-error-recovery/SKILL.md)** — Five-step triage: reproduce, localize, reduce, fix, guard.

**Review — quality gates before merge**

- **[code-review-and-quality](./skills/code-review-and-quality/SKILL.md)** — Five-axis review, change sizing, severity labels, review speed norms.
- **[code-simplification](./skills/code-simplification/SKILL.md)** — Chesterton's Fence, Rule of 500, reduce complexity while preserving behavior.
- **[security-and-hardening](./skills/security-and-hardening/SKILL.md)** — OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing.
- **[performance-optimization](./skills/performance-optimization/SKILL.md)** — Measure-first: Core Web Vitals, profiling, bundle analysis.

**Ship — deploy with confidence**

- **[git-workflow-and-versioning](./skills/git-workflow-and-versioning/SKILL.md)** — Trunk-based development, atomic commits, the commit-as-save-point pattern.
- **[ci-cd-and-automation](./skills/ci-cd-and-automation/SKILL.md)** — Shift Left, feature flags, quality gate pipelines.
- **[deprecation-and-migration](./skills/deprecation-and-migration/SKILL.md)** — Code-as-liability mindset, deprecation and migration patterns.
- **[documentation-and-adrs](./skills/documentation-and-adrs/SKILL.md)** — Architecture Decision Records, API docs, documenting the *why*.
- **[observability-and-instrumentation](./skills/observability-and-instrumentation/SKILL.md)** — Structured logging, RED metrics, OpenTelemetry tracing, alerting.
- **[shipping-and-launch](./skills/shipping-and-launch/SKILL.md)** — Pre-launch checklists, staged rollouts, rollback procedures.

For slash commands, agent personas, and full setup docs for other tools (Cursor, Codex, Gemini CLI, Windsurf, OpenCode, Copilot, and more), see the upstream repository: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills).
