# Portfolio continuation — 19 October 2026

Base: `main` at `0b28fe345e50040326778c871b215da081023721`.
Branch: `feat/portfolio-case-studies`.

## Result

- Replace inert work/case-study buttons with section navigation and real case-study routes.
- Add category filters, normalized title/tool search, result announcements, and empty-result reset.
- Add seven project case studies from public source evidence; see PROJECT_COVERAGE.md for the complete inventory.
- Keep project stage, implementation, and remaining work explicit. Remove unverified concurrency
  and deployment claims; remove generic LinkedIn/Upwork destinations until owner profiles are known.
- Preserve existing GitHub/WhatsApp/email destinations and GA4 measurement ID.
- Keep glass cards and bento composition; extend the layout with responsive project artwork,
  a project process section, contact section, and consistent detail pages.
- Keep most page content server-rendered; isolate theme and project filters as client components.
- Fix the system-theme toggle using `resolvedTheme` and persist explicit visitor choices.
- Add skip navigation, focus indicators, reduced-motion support, direct-route 404 handling,
  per-case metadata, TypeScript strict mode, and reproducible browser checks in CI.
- Centralize editorial content in `data/portfolio.ts`; no runtime GitHub dependency.

## Verification

- `npm ci`: passed on the original lockfile; the updated lockfile adds Playwright test tooling.
- `npm run build`: passed, including the homepage and seven generated case-study routes.
- `npm run typecheck`: passed with strict mode, including browser tests and config.
- `git diff --check`: passed.
- `npm run test:e2e`: **34 passed**, desktop/light and mobile/dark Chromium emulation.
- Screenshots reviewed for desktop, mobile, and a case study; no layout overflow at 320px.
- Browser checks also cover keyboard access, reduced motion, no-JavaScript content/navigation,
  combined search/filter/reset, direct page refresh, unknown route 404, and theme persistence.

The default Playwright Chromium download returned invalid archives in this execution environment.
Local tests used a temporary Chromium 133 binary with
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/tmp/portfolio-chromium`; the binary is not committed.
CI uses Playwright's standard Chromium installation. Mobile is viewport/touch emulation,
not a physical-device or Safari test. No production analytics events were sent by tests.

## Content sources

Reviewed public default-branch files on 19 October 2026:

- P4I: `HannR002/p4i-webgis`, `docs/flood-analysis-architecture.md`.
- KampusHub: `HannR002/kantin-fst-ecommerce`, `src/App.tsx`.
- NGA Florist: `HannR002/web-iris`, `src/App.tsx`.
- P4I Corporate Hub: `HannR002/p4i-corporate-hub`, `README.md`, `app/page.tsx`.
- P4I Publisher E-book: `HannR002/P4I-Publisher-Ebook`, `routes/web.php` on `master`.
- OJS Journal Development: `HannR002/ojs-journal-development`, `README.md`, `docs/CODEX_HANDOFF.md`.
- My Cat: `HannR002/My-Cat`, `src/App.tsx`, `src/services/db.ts`, `package.json`.

These are editorial snapshots, not fresh audits of the other applications. This change does
not certify those applications for production or attribute scientific model validation to
Farhan. The OJS case study credits PKP and limits the described contribution to documented
repository preparation. The earlier RT Online text remains omitted without specific evidence.

## Next content work

- Add owner-approved project screenshots and live demo URLs where available.
- Add a real analytical case study with a shareable dataset, reproducible queries/notebook,
  interpretation, and documented evaluation rather than fabricated business metrics.
- Add verified LinkedIn/Upwork URLs and a CV only when the owner supplies the actual details.
- Keep the current portfolio language English; Indonesian localization can be a later change.
- Root `index.html` remains a historical unrelated publisher mockup; Next.js does not serve it.

No main-branch merge, database mutation, or production deployment is part of this change.
