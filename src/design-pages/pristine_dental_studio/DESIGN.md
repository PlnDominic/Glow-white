# Design System Strategy: The GloWhite

## 1. Overview & Creative North Star
This design system is built upon the "GloWhite" concept. In high-end dental care, we must balance two opposing forces: clinical precision and patient tranquility. We move away from the "template" look by treating the UI as a digital editorial. This means breaking rigid grids with intentional asymmetry—large, confident typography offset by expansive whitespace and overlapping imagery that bleeds across container boundaries. 

The goal is an interface that doesn't just display information but "curates" a high-end patient experience. We use depth, tonal shifts, and sophisticated motion to convey the same level of care a patient receives in a premium clinic.

## 2. Colors & Surface Logic
The palette is rooted in medical authority but softened by dental whites and calming teal accents.

### Surface Hierarchy & The "No-Line" Rule
To achieve a premium, custom feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts or tonal transitions.
*   **Primary Logic:** Use `background` (#f7f9fc) for the main canvas. 
*   **Nesting Depth:** Treat the UI as a series of layered sheets. A `surface_container_low` section should sit on top of the `background`. If a card is needed within that section, use `surface_container_lowest` (#ffffff) to create a soft, natural "lift."
*   **The Glass & Gradient Rule:** For hero sections and primary call-to-actions, use a subtle linear gradient from `primary` (#003f87) to `primary_container` (#0056b3). This adds "soul" and depth. For floating navigation or top-level modals, apply **Glassmorphism**: use `surface` with a 60% opacity and a 20px backdrop-blur to create a frosted-glass effect that integrates the UI with the content behind it.

## 3. Typography: Editorial Authority
We utilize a dual-font approach to balance personality with technical performance.

*   **Display & Headlines (Manrope):** Use Manrope for all `display` and `headline` scales. Its geometric yet friendly curves suggest modern technology. For high-end editorial impact, use `display-lg` with tight letter-spacing (-0.02em) to create an authoritative, "magazine-style" header.
*   **Titles & Body (Inter):** Use Inter for all `title`, `body`, and `label` scales. Inter provides the clinical efficiency required for reading medical information. 
*   **Visual Contrast:** Always pair a `display-sm` headline with a `label-md` uppercase subtitle. This high contrast in scale is the hallmark of a custom, non-templated design.

## 4. Elevation & Depth
Traditional drop shadows are too "software-generic." We convey hierarchy through **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place `surface_container_highest` elements only when they represent the final interactive layer (like a "Book Now" drawer).
*   **Ambient Shadows:** If a floating effect is required (e.g., a high-priority notification), use an extra-diffused shadow.
    *   *Spec:* `0px 20px 40px rgba(25, 28, 30, 0.06)` (Using a tinted version of `on_surface` rather than pure black).
*   **The Ghost Border Fallback:** If a layout requires a container edge for accessibility, use a **Ghost Border**: `outline_variant` (#c2c6d4) at 20% opacity. It should be felt, not seen.

## 5. Signature Components

### Buttons
*   **Primary:** Pill-shaped (`full` roundedness), using a `primary` to `primary_container` gradient. Labels use `title-sm` (Inter).
*   **Secondary:** `surface_container_high` background with `on_secondary_container` text. No border.
*   **Tertiary/Ghost:** `on_background` text with no background. Interaction state triggers a `surface_variant` soft fill.

### Cards & Patient Data
*   **The Forbid Rule:** Dividers and lines are forbidden within cards. Use vertical whitespace (referencing the spacing scale) to separate patient details.
*   **Visual Style:** Use `xl` (1.5rem) corner radius. Cards should feel like "soft stones"—welcoming and organic.

### Input Fields
*   **Clinical State:** Use `surface_container_low` for the field background. Labels must be `label-md` and placed above the field. On focus, shift the background to `surface_container_lowest` and apply a 1px `primary` "Ghost Border" at 40% opacity.

### Featured: The Appointment Scheduler
Rather than a standard grid, the scheduler should use `tertiary_container` for available slots, creating a calming, "open" visual cue. Use glassmorphism on the selected slot to make it feel active and prioritized.

## 6. Do’s and Don'ts

### Do:
*   **Embrace Asymmetry:** Offset images to the right while text stays left, allowing whitespace to flow through the center of the page.
*   **Use Tonal Transitions:** Transition a section from `surface` to `surface_container_low` to signal a change in context.
*   **Prioritize Breathing Room:** If you think there is enough whitespace, add 20% more. Premium medical experiences feel "airy."

### Don't:
*   **Don't use 100% Black:** Never use #000000. Use `on_background` (#191c1e) for text to maintain a soft, professional look.
*   **Don't use Default Shadows:** Avoid the "fuzzy grey" look. Shadows must be wide, light, and tinted.
*   **Don't use Sharp Corners:** Even for "clinical" accuracy, avoid `none` or `sm` roundedness. Stick to `md` (0.75rem) or `lg` (1rem) to maintain the "welcoming" atmosphere.