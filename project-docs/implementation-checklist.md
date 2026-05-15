# Brand Implementation Checklist (Build + Final QA)

This checklist operationalizes `project-docs/ross-brandbook.pdf` into concrete implementation and QA criteria for the current proposal build.

## 1) Extracted brand rules from the Ross brandbook

### Visual / shape language
- Prefer organic, soft-edged forms (blobs, rounded corners, flowing paths) over rigid boxed layouts.
- Use framed compositions and layered depth (glow fields, translucent panes, controlled blur) to create a crafted—not template—look.
- Chapter breaks should feel editorial and cinematic, not standard SaaS section separators.

### Palette behavior
- Maintain a neutral structural base (`#000000`, `#ffffff`, `#d2d2d2`, `#d8d8d6`) and use accent colors sparingly as directional energy.
- Use color pairing with contrast discipline for readability; accent is for emphasis and movement, not flooding entire sections.
- Keep tonal consistency across chapters so transitions feel like one brand system.

### Whitespace rhythm
- Use generous breathing room and modular spacing cadence across chapters.
- Preserve clear content hierarchy: heading zone, narrative zone, support/bullet zone.
- Avoid dense, conversion-style “above-the-fold cram.”

### Typography system
- Maintain clear display/body hierarchy and stable scale stepping.
- Keep bilingual composition intentional (strong Latin display + readable Persian body flow).
- Preserve readability first: long Persian lines need comfortable line-height and visual rest.

### Motion tone
- Motion should be smooth, confident, and premium (soft easing, staged reveals, restrained parallax).
- Energetic moments belong to emphasis points (e.g., chapter transitions), not constant high-frequency animation.
- Interactions should support narrative progression, not gimmicks.

---

## 2) Chapter-component implementation map

> Status keys: ✅ implemented · ⚠️ partial/gap · ❌ missing

| Chapter component | Shape language | Palette behavior | Whitespace rhythm | Typography scale | Motion tone | Gap remediation action |
|---|---|---|---|---|---|---|
| `IntroSection` | ✅ Rounded narrative panel + cinematic hero framing | ✅ Accent micro-label + dark atmosphere | ✅ Large vertical spacing (`min-h`, generous top/bottom) | ✅ Hero display + long-form Persian body | ✅ Kinetic headline + parallax + magnetic micro-motion | Keep copy block width constrained; avoid adding CTA/button clutter that turns this into generic hero conversion UI. |
| `ChapterOverviewSection` | ⚠️ Rounded cards are present, but structure risks “generic two-card landing pattern” | ✅ Accent bullets + translucent card layering | ✅ Good interior/exterior spacing | ✅ Distinct chapter H2/H3 and readable list sizes | ✅ Staggered reveal rhythm | Break repetitive symmetry: vary card heights/media anchoring per chapter; add one branded motif per chapter (frame line, abstract path, or directional gradient) to avoid template sameness. |
| `AwarenessMediaSection` | ✅ Organic placeholder blob accents and soft geometry | ✅ Accent gradients contained inside cards | ⚠️ Grid is clean but visually uniform | ⚠️ Captions are readable but typographic hierarchy is shallow | ✅ Gentle reveal entrance | Introduce one dominant tile + two supporting tiles to create editorial rhythm; strengthen caption hierarchy (title/subtitle/meta style) instead of equal-weight cards. |
| `ChapterDivider` | ✅ High-brand editorial divider with layered line and oversized index | ✅ Controlled white-on-dark with subtle glow | ✅ Strong chapter breathing space | ✅ Clear chapter numbering/title hierarchy | ✅ Tone-aware timing (`calm`/`energetic`) | Continue using this as anti-generic anchor; do not replace with default `<hr>` + heading stacks. |
| `ProposalShell` + `AmbientScene` (global wrapper) | ✅ Branded atmospheric depth and flowing glows | ✅ Balanced cool accent clouds on dark base | ✅ Supports spacious composition | N/A (container-level) | ✅ Smooth, low-noise background drift | Keep effect subtle; avoid adding high-contrast noise/particles that reduce readability. |

---

## 3) Generic-landing drift checks and resolution rules

Apply these during implementation for every chapter before merge:

1. **No repeated “same card, same rhythm” loops**
   - If 2+ adjacent chapters share identical grid/card hierarchy, alter composition (feature block, asymmetry, or media-led variant).
2. **No conversion-template UI tropes unless required by content**
   - Avoid default CTA rows, pricing-card-like repetition, or stock icon-triplets.
3. **Brand motif presence test**
   - Each chapter must include at least one recognizably branded cue: organic shape, editorial divider behavior, accent-path diagramming, or cinematic depth treatment.
4. **Palette restraint test**
   - Accent colors must guide attention, not dominate backgrounds.
5. **Typographic discipline test**
   - Keep heading/body contrast obvious; Persian narrative blocks must remain readable at scan speed.
6. **Motion restraint test**
   - Motion should support sequence and hierarchy; remove any animation that calls attention to itself without meaning.

---

## 4) Final QA acceptance criteria (must pass before delivery)

Mark each as **Pass/Fail** in final QA run:

- [ ] **Brand fidelity:** All visible chapters reflect Ross cues (organic framing, disciplined accents, editorial rhythm).
- [ ] **Non-generic composition:** No section reads like a default SaaS landing block without brand-specific treatment.
- [ ] **Palette consistency:** Neutral base + controlled accents maintained throughout.
- [ ] **Typography consistency:** Clear hierarchy and readable Persian body typography across sections.
- [ ] **Whitespace consistency:** Section and component spacing follows one coherent cadence.
- [ ] **Motion coherence:** Motion language stays smooth, intentional, and not over-animated.
- [ ] **Chapter distinction:** Each major chapter has at least one unique branded compositional cue.
- [ ] **Readability/accessibility sanity:** Contrast and text density remain comfortably readable.

## 5) Usage during build

1. Start each chapter implementation by checking Section 2 target cues.
2. Run Section 3 drift checks immediately after styling and motion pass.
3. Do not mark a chapter done until all applicable Section 4 criteria pass.
4. Include this file in delivery QA notes and keep status marks updated before handoff.
