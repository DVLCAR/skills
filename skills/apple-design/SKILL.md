---
name: apple-design
description: Apple's design principles-first approach for web products, combining core interaction principles with practical WWDC-based supplements on structure, navigation, content, visual clarity, voice/tone, discoverability, trust, and quality craftsmanship.
---

# Apple Design

This skill is now explicitly principle-first and based on Apple's WWDC human-interface principles.

The goal is not to make interfaces look animated—it is to help people feel safe, understand what’s happening, accomplish goals quickly, and enjoy the result.

Use this skill when the design question is about structure, interaction model, feedback strategy, hierarchy, or when evaluating whether an interaction is right, not just polished.

## Apple's core human needs

Design is evaluated against four needs:

- Safety and predictability — can people trust the interface?
- Understanding — can people build a reliable mental model quickly?
- Achievement — can people complete goals with low friction?
- Joy — does the experience feel complete and humane?

When deciding, start by identifying which need your design choice strengthens.

## WWDC 2025 workflow: structure → navigation → content → visual

The talk organizes design critique as a sequence. Use this when a product feels off even though the UI is “pretty.”

### A) Structure first

- Write down what the app actually does before judging visuals.
- List all features, then separate essentials from nice-to-haves.
- Ask where users are in their routine and what they need in that moment.
- Simplify the initial mental model before you simplify controls.
- If users can’t answer:
  - Where am I?
  - What can I do?
  - Where can I go from here?
  then the structure is failing before any motion or styling work can rescue it.

### B) Navigation architecture

- Navigation is about reducing uncertainty while moving between places.
- Prefer persistent navigation primitives (e.g., always-visible top-level sections) for primary paths.
- Limit top-level destinations to what’s essential; each extra destination adds cognitive cost.
- Don’t place primary actions in components meant for navigation.
- Use names and symbols that state function before decoration.
- Keep layout and behavior familiar to platform conventions unless you can prove a better pattern.

### C) Content architecture

- Present content so it answers likely next actions quickly.
- Use meaningful grouping before visual polish:
  - by time (Recent / this week),
  - by status or progress (In progress / complete),
  - by relationship or pattern (genres, related families, linked objects).
- Use progressive disclosure when full breadth is useful only after intent is clear.
- Choose list/grid/collection based on volume and scan behavior, not aesthetics:
  - lists for text-heavy quick scanning and hierarchy,
  - collections for scannable visual clusters.
- Remove decorative elements that obscure what matters to people now.

### D) Visual layer as a consequence, not the driver

- Visual design should communicate hierarchy and personality together.
- Set a clear visual anchor for most important content first.
- Use system text styles or a robust token system so hierarchy survives:
  - language changes,
  - longer copy,
  - larger preferred text sizes.
- Keep imagery and color cohesive; avoid local inconsistency that makes meaning harder to read.
- Use semantic/system colors wherever possible for accessibility and appearance adaptation; add brand color deliberately and sparingly.
- Optimize legibility first (contrast, readability, text-over-image handling), then brand expression.

## WWDC-inspired design principles

Apply these as named constraints.

### 1) Wayfinding

- Every screen must answer: where am I, where can I go, what will I find next, and how do I get out?
- Make primary routes and nearby destinations visible (tabs, back paths, navigation labels, section landmarks).
- Use consistent location hierarchy so people can predict where action lives.
- If users get lost, add orientation before adding ornament.

### 2) Feedback

Great feedback is not decorative. It is the interface conversation.

- Status feedback: what is the current state now?
- Completion feedback: did the action succeed?
- Warning feedback: what might fail soon?
- Error feedback: what did I do wrong and how do I recover?
- Feedback should be clear, timely, and understandable; real-time inline validation is better than waiting for form submit failure.

### 3) Visibility

- If a control or status is useful, make it visible at the level where it is most needed.
- Hide complexity, not critical state.
- Reduce hidden pathways for common actions; avoid forcing users to navigate just to understand current state.

### 4) Consistency

- Represent similar things in similar ways and place controls in learned positions.
- Prefer platform conventions for basic interaction patterns unless there is evidence they hurt your product.
- Maintain internal consistency: controls with similar purpose should share style, size, behavior, and motion language.
- Treat every intentional inconsistency as a tradeoff that must be justified.

### 5) Proximity and grouping

- Proximity implies relationship. Place related controls close together.
- Grouping gives structure faster than visual style alone.
- If a user must infer connections, proximity and grouping are likely too weak.

### 6) Mapping

- Design controls to resemble and relate to what they control.
- The order and arrangement of controls should mirror the structure of the thing being controlled.
- A direct mapping is easier and more reliable than abstract, indirect control surfaces.

### 7) Affordance

- Interface controls should make intended actions obvious from appearance.
- Controls should suggest "tap", "drag", "rotate", or "slide" through form and spacing, not only labels.
- If affordance depends on a label to be understood, the visual cue is probably insufficient.

### 8) Progressive disclosure

- Expose the core path first; defer complexity.
- Prefer 20% of controls that deliver most value over full depth on first screen.
- Use the 80/20 tradeoff: show common and important actions clearly, keep power actions discoverable but not mandatory.
- Too much progressive disclosure can create inefficiency; verify advanced actions are still fast when needed.

### 9) Symmetry and structure

- Use symmetry to create visual stability and order.
- Use repetition and translational rhythm (even spacing, repeated patterns) to reduce cognitive load.
- Balance "calm structure" with local emphasis where the task needs focus.

## Judgment framework for your design decisions

When evaluating a change, choose one principle statement and ask:

- Does this choice make users safer, clearer, more capable, or more joyful?
- Is there a better principle-aligned alternative?
- Does it reduce uncertainty, not just look smoother?

An answer that only improves aesthetics without improving one of those needs should be rejected.

## Motion: when and how to apply (secondary to principles)

Use motion only if it serves at least one design principle above.

- Motion can improve wayfinding (path continuity), feedback (state transitions), and affordance (state changes becoming understandable).
- Motion must preserve control: if users can reverse or re-engage quickly, interruptions should feel continuous.
- Keep motion as a means of meaning, not a default effect.
- Reduced-motion should preserve comprehension feedback (for example static state transitions), while removing vestibular-heavy movement.
- Design motion as continuous behavior, not a sequence of static animations handed back to the user.
- Default to low-friction movement first (minimal bounciness); add bounce only where momentum or explicit intent teaching makes it useful.
- Use immediate feedback for taps/presses, and provide continuous feedback through the gesture lifecycle (not only on gesture end).
- Build spatial continuity: entering and exiting paths should be predictable and symmetric, including handoff moments between interaction states.
- For directional gestures and flicks, infer intent using both position and motion (velocity/acceleration), not position alone.
- In multi-gesture contexts, detect likely gestures early and resolve conflicts only when intent is clear.

## Principle-aligned review checklist

- Is the screen self-explanatory without relying on hidden tooltips?
- Are critical statuses visible at first glance?
- Are controls and labels consistent with user expectations from similar products and platform norms?
- Can users recover from mistakes without surprise?
- Is the common path simple, and is complexity staged for those who need it?
- Does the motion reduce ambiguity, or is it only visual decoration?

## Quick operating mode

- Start with problem framing: which human need is failing?
- Map each section of UI to wayfinding, feedback, visibility, consistency, grouping, mapping, affordance, progressive disclosure, and symmetry.
- Remove anything that fails its mapping.
- Add interaction detail (including motion) only after the design passes these checks.

## Session supplements

For maintainability and faster iteration, session-specific notes are split out:

- WWDC 2017-802 (Design Principles): integrated into the core framework above.
- WWDC 2025-10140 (Structure, navigation, content, and visual strategy): integrated into the workflow section above.
- [WWDC 2024-10140 (Writing for Interfaces): UX voice and tone notes](wwdc2024-10140-writing.md)
- [WWDC 2021-10126 (Making Interfaces Discoverable): feature visibility, gesture hints, behavior-based content organization, and personalization control](wwdc2021-10126-discoverability.md)
- [WWDC 2019-802 (How to Win an Apple Design Award): innovation, trust, refinement, aesthetics, inclusion, and detail-oriented execution](wwdc2019-802-design-awards.md)
- [WWDC 2018-803 (Designing Fluid Interfaces): responsiveness, spatial continuity, dynamic behavior, and gesture intent](wwdc2018-803-fluid-interfaces.md)
- [WWDC 2018-801 (The Qualities of Great Design): quality as care, simplicity, timelessness, positive impact, and design process habits](wwdc2018-801-qualities-of-great-design.md)
