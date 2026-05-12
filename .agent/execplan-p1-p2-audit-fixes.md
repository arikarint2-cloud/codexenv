# Fix P1/P2 Findings: Encoding, Security Headers, Form Clarity, Mobile UX

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

If this repository contains `.agent/PLANS.md`, this plan must follow it.

## Purpose / Big Picture

Close the highest-priority findings from the audit so the site is readable in Russian, has baseline front-end hardening, avoids misleading form behavior, and is easier to use on mobile.

## Progress

- [x] Initial investigation complete. (2026-05-12 11:07)
- [x] Implementation started. (2026-05-12 11:08)
- [x] Validation completed. (2026-05-12 11:19)

## Surprises & Discoveries

- Observation: `contacts.html`, `script.js`, and `assets/og-cover.svg` contain mojibake strings, while `index.html` is already valid Cyrillic.
  Evidence: Direct file reads in workspace.

## Decision Log

- Decision: Keep form in explicit demo mode for now instead of adding a fake backend endpoint.
  Rationale: Repository is static, no backend exists; clearer UX is better than false-success behavior.
  Date/Author: 2026-05-12 / Codex

- Decision: Add CSP and referrer policy via `<meta http-equiv>` now.
  Rationale: Immediate baseline hardening in static hosting; can later be moved to HTTP headers.
  Date/Author: 2026-05-12 / Codex

## Outcomes & Retrospective

Completed:
- Added baseline CSP/referrer policy meta on both pages.
- Reworked contact page and form texts to valid Russian content.
- Updated menu behavior for Escape and click-outside close.
- Added touch-target sizing and reduced-motion handling.
- Added IntersectionObserver fallback.
- Clarified form as demo-only submission.

Goal status:
- Original goal met for P1/P2 scope. Residual hardening still possible on server headers once hosting is configured.

## Context and Orientation

- `index.html`: main landing page.
- `contacts.html`: contact page, currently with corrupted Russian text.
- `styles.css`: global styling and responsive rules.
- `script.js`: nav/menu behavior, form validation/status, reveal animation.
- `assets/og-cover.svg`: OG image with corrupted Russian text.

## Plan of Work

1. Fix corrupted Russian strings in `contacts.html`, `script.js`, and `assets/og-cover.svg`.
2. Add baseline security policies in both HTML pages (CSP + Referrer-Policy via meta).
3. Make form behavior explicit: demo message states no data is sent.
4. Improve mobile UX:
   - Ensure touch targets are at least ~44px for key nav/summary controls.
   - Add Escape + click-outside close behavior for mobile menu.
   - Add reduced-motion support and IntersectionObserver fallback.
5. Validate via built-in browser at mobile and tablet widths.

## Concrete Steps

1. Edit `index.html` and `contacts.html` `<head>` for security meta policies.
2. Replace mojibake text in `contacts.html`.
3. Edit `script.js`:
   - Fix Russian validation/status strings.
   - Add menu close helpers (Escape/click-outside).
   - Add `IntersectionObserver` fallback.
4. Edit `styles.css`:
   - Increase touch target sizing (`.main-nav a`, `.nav-toggle`, `summary`).
   - Add `prefers-reduced-motion`.
   - Adjust micro-typography for very small screens.
5. Run in-browser checks at ~375px and ~768px.

## Validation and Acceptance

- Open `index.html` and `contacts.html` in built-in browser:
  - Russian text readable on all pages.
  - Mobile menu opens and closes by toggle, link click, Escape, and click-outside.
  - Touch targets in nav are easier to tap.
  - Form success text clearly indicates demo/no actual send.
  - No obvious layout break at 375px and 768px.

## Idempotence and Recovery

- All changes are additive and safe to reapply manually.
- If a style tweak regresses layout, revert only the specific CSS block.

## Artifacts and Notes

- Browser validation performed via local static server at `http://localhost:4173`.
- Verified in built-in browser:
  - `index.html` title and content render in Russian.
  - `contacts.html` title renders in Russian.
  - At `375x812` and `768x1024` no horizontal overflow detected.
  - Mobile menu opens, closes on Escape, and closes on outside click.
  - Measured mobile touch-target heights: nav toggle `44px`, nav link `44px` when menu open.
  - Form success status now explicitly states demo mode (no real backend send).

## Interfaces and Dependencies

- No new dependencies.
- Existing interfaces: HTML structure, CSS classes, and JS event listeners only.

Update note: Initial plan created for P1/P2 audit fixes.
Update note: Implemented and validated planned changes; updated progress, outcomes, and evidence.
