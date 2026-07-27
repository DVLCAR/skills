# Cross-cutting interface craft

Use this reference when a design question spans sessions rather than belonging to one talk. It preserves high-value material from the original skill on typography, materials, multisensory feedback, accessibility, and design process.

## Typography: shape text for its actual size

Drawn chiefly from *The Details of UI Typography* (WWDC 2020).

- Treat tracking as size-specific. Large display text usually needs tighter spacing; small text may need more space for legibility.
- Treat leading inversely to size. Use tighter line height for large headings and more generous line height for body copy.
- Build hierarchy from size, weight, leading, and spacing together. Size alone creates brittle hierarchy.
- Prefer optical sizing when the typeface supports it.
- Let text-size preferences reshape the layout. Use relative spacing and allow wrapping rather than preserving a fixed composition.
- Test long translations, large accessibility sizes, mixed scripts, and dense information before considering the type system complete.

Reject a typography proposal when it relies on one global tracking value, fixed-height text containers, or truncation to preserve visual neatness.

## Materials and depth: communicate relationship

Translucency, blur, shadow, and scale should explain hierarchy rather than imitate a visual trend.

- Use translucent chrome for a functional layer floating above content; let underlying content establish context.
- Vary material weight by role. Structural regions can feel heavier; controls and transient surfaces can feel lighter.
- Avoid stacking light translucent surfaces where contrast and boundaries collapse.
- Make larger surfaces feel thicker through stronger separation, not merely a larger blur radius.
- Use a dimming scrim for modal interruption. For parallel, non-blocking work, prefer separation without suppressing the background.
- Preserve legibility over changing backgrounds with sufficient contrast, weight, and stable text treatment.
- Materialize a surface through coordinated blur, scale, and position when motion is appropriate; a generic opacity fade often loses the spatial relationship.
- Replace decorative glass with an opaque or frostier equivalent when reduced transparency is requested.

Review question: does the material explain what is foreground, what remains active, and how to return?

## Multisensory feedback: causality, harmony, utility

Drawn from *Designing Audio-Haptic Experiences*.

- **Causality:** attach sound or haptic feedback to the event that actually caused it, such as a snap, commit, success, or failure.
- **Harmony:** align visual, sound, and haptic feedback at the same meaningful moment. A delayed channel feels detached.
- **Utility:** reserve extra sensory feedback for events that deserve emphasis. Repetition turns feedback into noise.
- Match feedback character to the interaction's physical and emotional character.
- Never make sound or haptics the only carrier of state.

Use multisensory feedback for confirmation and physical coherence, not as a substitute for visible status.

## Accessibility: preserve meaning while changing the effect

- Reduced motion means replacing vestibular movement with a calmer equivalent, not removing all state feedback.
- Replace large translations, parallax, elastic overshoot, and looping motion with static state changes or short cross-fades.
- Reduced transparency means increasing surface opacity and removing blur where necessary.
- Increased contrast means strengthening foreground/background separation and adding explicit boundaries.
- Avoid full-viewport moving backgrounds, slow perpetual oscillation, abrupt brightness changes, and large sharp objects moving quickly across the field of view.
- Keep status, completion, warning, and error understandable without motion, color, sound, or haptics alone.

Review each sensory channel independently: if one disappears, does the interaction remain understandable and operable?

## Process: discover interaction through use

- Prototype interactively. Static frames cannot reveal interruption, gesture competition, latency, momentum, or recovery.
- Design visuals and interaction together; hierarchy, material, copy, and motion should explain the same model.
- Test with people in the context where the product will be used, not only in a critique room.
- Inspect motion slowly or frame by frame to find discontinuities hidden at full speed.
- Treat the prototype as a behavioral specification, not merely a presentation.
- Iterate toward fewer accidental states and a clearer mental model, not only smoother animation.

## Cross-cutting review

- Does typography remain legible and hierarchical under real content stress?
- Does depth communicate modal versus parallel work?
- Do visual, audio, and haptic feedback share one cause and one moment?
- Do reduced-motion, reduced-transparency, and increased-contrast modes preserve meaning?
- Has the interaction been exercised as a working behavior rather than judged only as static screens?
