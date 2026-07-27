# WWDC 2019-802 (How to Win an Apple Design Award) notes

This session translates award-level judging values into practical product quality checks for AI outputs.

## Core idea

High-quality products score not by novelty alone, but by measurable confidence gains: easier understanding, safer behavior, stronger trust, and cleaner long-term execution.

## 1) Innovation: challenge assumptions

- Start by questioning defaults, not decorating them.
- Strong innovation often appears when an interaction reduces user burden in a known painful moment.
- Good checks:
  - What assumption is this redesign violating?
  - Does this change solve a real friction point?
  - Did user testing validate the new model, not only internal preference?
- Keep the “best new idea” loop active:
  - generate variants,
  - test,
  - reject weakest assumptions,
  - keep only clarity-improving variants.

## 2) Trust: make intelligence explainable

- ML, recommendations, and automation must remain attributable:
  - what changed,
  - why it changed,
  - how users can adjust results.
- Black-box behavior reduces control and trust.
- Useful design patterns:
  - always visible effect indicators,
  - direct controls to tune algorithmic outcomes,
  - explicit consequences for every meaningful action.
- For AI outputs:
  - never recommend “smart automation” without an override path,
  - state uncertainty when behavior might surprise.

## 3) Refinement: iterate toward clarity

- Great products are often distilled, not improvised.
- Broad exploration first, then repeated simplification.
- A strong signal of refinement:
  - fewer accidental states,
  - clearer micro-behaviors,
  - consistent motion/timing language.
- Ask: what stayed? what was removed? why?

## 4) Aesthetics with function

- Aesthetics should strengthen task comprehension and focus.
- Keep secondary layers hidden unless needed by the moment.
- Keep “immersion” from stealing core affordances:
  - the key action should remain obvious,
  - secondary effects should support primary goals.
- Validate that style decisions increase confidence and continuity.

## 5) Inclusion as baseline behavior

- Use predictable platform conventions when they improve readability and confidence.
- Design for color + text + structure redundancy.
- Never gate understanding on color alone.
- Check each flow for:
  - legibility at varied settings,
  - state visibility across users and settings,
  - alternative channels for learning and discovery.

### 6) Attention to detail

- Quality is built in tiny places:
  - timing/response,
  - naming consistency,
  - control affordance clarity,
  - predictable visual hierarchy.
- Add a “tiny interactions pass” before sign-off.

## Quality review sequence for AI-generated interfaces

1. What real user friction does this reduce?
2. Is behavior explainable and adjustable?
3. Is visual language consistent across screens and states?
4. Are there redundant sensory channels beyond color?
5. Are low-level interactions intentionally tuned rather than “good enough”?

## Anti-patterns (common misses)

- Novel interaction with weak rationale.
- “Automation magic” with opaque outcomes.
- Beautiful surfaces where users still ask “what do I do now?”
- Recommendation behavior without correction controls.
- Inconsistent small controls that feel stitched together.

## Useful prompts for agents

- “List three assumptions this design is changing and the user problem each solves.”
- “Name two affordances where color alone communicates state and add alternatives.”
- “Show a post-automation control path and recovery path.”
- “What is the smallest interaction that still feels intentional?”
