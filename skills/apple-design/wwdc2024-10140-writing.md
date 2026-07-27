# WWDC 2024-10140 (Writing for Interfaces) notes

This session is a practical language layer for interface design: personality without losing clarity.

## Core message

Design quality is not only visual or interaction. Writing carries personality, confidence, and control.

- **Voice**: what remains stable across the app.
- **Tone**: what changes by context.

## Apple baseline qualities in writing

- Clarity
- Simplicity
- Friendliness
- Helpfulness

All UI copy should map to one or more of these qualities; the goal is balance, not maxing one dimension.

## Process: define and constrain app voice

1. Define app purpose and audience.
2. Collect candidate descriptors (adjectives).
3. Group into 2–4 themes.
4. Choose stable voice traits and explicit non-goals.
5. Keep occasional outliers if they remain truthful to the product.

## Welcome screen as a test harness for voice

- The first screen is the first personality signal.
- Keep copy focused on action and confidence.
- Ensure naming consistency:
  - feature headings,
  - action labels,
  - status text.
- If the welcome screen feels generic, the tone is likely not anchored yet.

## Tone dialing by context

- Keep voice constant while shifting the weights:
  - Clarity for critical contexts.
  - Friendliness for progress and celebration.
  - Helpfulness for safety or repair moments.
  - Simplicity when speed is needed.
- Use tone as a control surface:
  - “don’t push too many levers at once.”

## Three-step writing discipline

1. **Draft for function first**
   - Can the user understand next action?
2. **Align with voice**
   - Does wording stay true to core traits?
3. **Adjust tone**
   - Match the moment while preserving the qualities.

## Quick anti-patterns for interface copy

- Jargon or internally technical language.
- Verbose explanations where a single clear action label works.
- Tone that is playful when users need certainty.
- Personality claims without user benefit.
- Missing redundancy for critical state transitions.

## Expanded practical checks (good for AI review)

- Can someone act safely on the first screen without extra context?
- Does this copy explain outcome, consequence, and next step?
- Are critical errors written to reduce blame and increase recovery?
- Is the same concept named consistently across screens?
- Are inclusive and non-exclusionary terms used across states?

## Tone model for difficult moments

- For positive moments: raise friendliness while preserving clarity.
- For warning/critical moments: raise clarity and helpfulness, reduce ambiguity.
- For onboarding: raise friendliness and helpfulness so actions feel approachable.

### Optional writing pass template

- One-line voice statement.
- Scenario-specific tone priority (clarity/friendliness/helpfulness/simplicity).
- Rewritten action labels with outcome-first language.
- One-sentence recovery text for each error state.
