# WWDC 2018-803 (Designing Fluid Interfaces) notes

This session reframes motion as interaction behavior: it should feel like an extension of the user’s intent, not a decorative layer.

## Core thesis

- Fluid interfaces work when they stay responsive to thought and motion in real time.
- Motion should support understanding, control, and prediction—not just visual polish.

## Principle-aligned takeaways

### 1) Immediate responsiveness

- Reduce latency for every interaction, not only swipes (taps, presses, and all transitions included).
- The user’s thought and motion should never feel like they have to “wait their turn.”
- Detect interruption and redirection quickly (for example by using acceleration/velocity cues, not fixed delays).

### 2) Redirectable, interruptible interactions

- Gestures should support changing your mind mid-flight.
- “Thought and gesture in parallel” beats “decide first, execute later.”
- This keeps interaction feeling physically connected and lowers cognitive load.

### 3) Spatial consistency

- Use symmetric paths for motion entering and leaving the screen.
- Preserve destination memory: users predict where objects live in space.
- Reinforces gesture understanding and avoids surprising directionality.

### 4) Gesture direction and intent hints

- Transitions should visibly travel toward intended destination.
- Motion should hint future state so prediction is easy.
- For ambiguous swipes/throws, infer intent from momentum and speed, not just end position.

### 5) Lightweight input, meaningful output

- Touch is often short and light; motion can be proportionally amplified.
- Preserve gesture energy and momentum into a satisfying result.
- This makes interactions feel easy and natural rather than physically effortful.

### 6) Soft boundaries and handoff

- Rubberband-like behavior signals limits without hard stops.
- Boundaries and handoffs should feel continuous, not abrupt “on/off” transitions.

### 7) Motion smoothness quality

- Smoothness is frame quality, not just FPS.
- If adjacent frames differ too much, motion feels stuttery even at high frame rates.
- Motion blur and motion stretching encode movement information and can improve perceptual smoothness.

### 8) Dynamic behavior over fixed animation

- Prefer continuous behavior systems over purely timed animation curves.
- Treat movement as always “in play,” not a static sequence that starts and ends.
- In spring-like systems, focus on:
  - `damping` (overshoot amount),
  - `response`/`frequency` (speed toward target).
- Start with high damping (minimal bounce), then add bounciness only when it serves intent.

### 9) Character with utility

- Motion character (playful, elastic, heavy/light) should be coherent across app behaviors.
- Use bounciness as utility (e.g., to indicate required force or a special state), not decoration.

### 10) Gesture fundamentals

- Tap: immediate touch-down feedback; confirm on touch-up; include forgiving margins for accidental drift.
- Swipe/drag: one-to-one tracking between touch and content is essential.
- Provide continuous feedback for ongoing motion.
- In multi-gesture systems, start detection early and resolve conflicts only when intent is clear.

### 11) Teach through behavior

- Use visual cues and aligned motion to teach patterns (grabbers, clipped content, aligned static/dynamic behavior).
- Keep explicit explanations minimal and only for frequently reused gestures.

## Practical design review for AI-generated motion proposals

Use this filter before accepting a motion change:

- Does it improve responsiveness and interruptibility?
- Does it preserve spatial consistency and prediction?
- Does it amplify user intent without adding unnecessary decoration?
- Is the character consistent with the rest of the product?
- Would this motion still feel clear if reduced-motion is required?

## Expanded OG notes (fuller session recall)

### Responsiveness as a universal baseline

- Apply “instant feedback” to taps, presses, and all interaction points.
- Keep latency-sensitive states obvious; if users hesitate, the illusion breaks.
- For interruptions, prefer detection via acceleration/velocity spikes over fixed timers.

### Redirectable gesture loop

- Good gestural systems let users change direction or destination while in motion.
- Mixed-axis and interruptible gesture spaces support the thought process (“go home then switch apps then reverse”) without forcing strict sequencing.
- If a gesture is treated as a one-shot, users must over-think before input instead of moving naturally.

### Gesture recognition details from iOS

- Tap:
  - Immediate highlight on touch-down.
  - Confirm action only on touch-up.
  - Add comfortable hit area tolerance so slight drift does not cancel intent.
- Swipe/drag:
  - Start as one-to-one movement between finger and content immediately.
  - Don’t move on a control’s center; track relative movement through the whole interaction.
  - Continuously track velocity, not only final point.
- Hysteresis:
  - A short movement threshold helps distinguish swipe from tap before gesture classification.

### Continuous feedback and competition handling

- Provide feedback during the gesture, not after end-of-gesture.
- In multi-gesture UIs (e.g., scroll + tap/peek), begin detecting all candidates early, then cancel losers once intent is clear.
- Avoid high-level recognizers that only report outcomes (`UISwipeGestureRecognizer`) when you need richer dynamics.

### Motion as behavior, not static animation

- Prefer behavior systems that remain “alive” across changes over fixed animation curves.
- Spring systems can be controlled with a small parameter vocabulary:
  - Damping (overshoot tolerance).
  - Response/frequency (speed toward target).
- Start with no bounce; introduce overshoot only where it adds meaning or reinforces momentum.

### Useful motion heuristics

- Use bounce for:
  - Momentum-rich dismiss/swipe gestures.
  - Teaching controls that require stronger pressure or commitment.
- Keep bounce out of neutral, low-momentum interactions.
- Use visual/auditory/haptic bundles only when they reinforce the physical meaning of the interaction.

### Spatial/motion continuity

- “Where did it come from?” and “where is it going?” should be consistent over time.
- Symmetric enter/exit paths reduce disorientation.
- During transitions or handoff (one controller stops tracking, another starts), interpolate smoothly with curved continuity.

### Momentum projection for gesture endpoints

- For ambiguous gestures (such as flicked floating panels), endpoint selection should use momentum projection, not only current position.
- Project where the object would travel under known deceleration and pick destination based on that projected path.
- This lets short gestures produce intended endpoints naturally and avoids over-travel or wrong-direction snaps.
