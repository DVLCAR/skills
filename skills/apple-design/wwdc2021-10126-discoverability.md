# WWDC 2021-10126 (Making Interfaces Discoverable) notes

This session gives a concrete framework for interfaces that should announce capabilities before users need to touch them.

## Core idea

People can use a feature when they can infer it. If they need to hunt for discovery first, your structure is off.

## Five principles for discoverability (expanded)

### 1) Prioritize important features

- Rank features by frequency, user intent, and startup importance.
- Show essentials at the primary level.
- Push lower-frequency actions into deeper layers only when clearly acceptable.
- Avoid extremes:
  - hiding too much in one menu (users forget features exist),
  - overloading one primary row or bar (decision fatigue).

### 2) Use familiar words and symbols as clues

- Prefer known platform semantics first, then clarify with labels when ambiguity exists.
- Use concise naming for icon-laden areas.
- Address the blank-state gap by offering concrete examples before requiring user invention.
- Match symbol vocabulary to audience knowledge:
  - novices need explicit labels,
  - experts tolerate conventions.

### 3) Hint at gestures, don’t hide them

- Standard gestures first; custom gestures only when absolutely needed and real-world aligned.
- Gestures should be accelerators, not the only entry point.
- Keep explicit alternatives (buttons/tabs) so actions remain legible.
- Align transition animation direction with expected gesture motion.

### 4) Organize content by behavior

- Group content by how people actually seek it:
  - context,
  - recency,
  - social context,
  - personal preference.
- Use clear section structure, headers, and visual separation so category intent is immediate.
- Personalization should reduce discovery cost, not add surprise.

### 5) Give users control of personalization

- Make feedback explicit and clear (`like`, `less like`, `not shown` style).
- Show what inputs feed recommendations.
- Make correction paths obvious and quick.
- Don’t hide moderation controls behind “more” menus.

## Practical AI review checklist

- Can this screen communicate top 3 capabilities at a glance?
- Do all key actions have an obvious non-gesture path?
- Are standard interactions discoverable without prior onboarding?
- Is recommendation logic understandable from visible context?
- Can users correct bad suggestions in one or two taps?

## Anti-patterns

- Everything depends on a hidden gesture.
- Visuals that look interactive but are not clearly labeled.
- Recommendation systems with no visible provenance.
- Generic controls with ambiguous consequences.
- Dense content presented as one undifferentiated stream.

## Copyable “first run” prompt filters

- “Does this screen answer: what can I do now, and what happens when I act?”
- “What should a new user know without touching anything?”
- “For each recommended item, what input produced it?”
- “Can a user revert or reduce a personalized suggestion in one step?”
