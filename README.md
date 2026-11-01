# Muhammad Farhan — Data & Systems Portfolio

An editorial portfolio built with Next.js, React, and TypeScript. Warm off-white and cobalt blue, an owner-provided portrait, original project illustrations, and eight source-backed case studies introduce Farhan's work across data, spatial analytics, and digital systems.

## Development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `app/page.tsx` is the homepage and `app/work/[slug]/page.tsx` renders each case study. The root `index.html` is an unrelated historical publisher prototype and is not served by Next.js.

## Features

- Eight case studies, including NGA Inventra, with context, implementation, next steps, and public source links.
- Search by title, description, category, or tool; combinable category filters; grid/list views; accessible empty-result reset.
- System-aware light/dark themes with persistent visitor choice.
- Optional portrait tilt and keyboard-operable rotation controls, with a motion toggle and reduced-motion support.
- Responsive layouts, visible keyboard focus, skip navigation, per-project metadata, and useful 404 handling.
- Most content is prerendered and remains readable without JavaScript. Search, filters, layout controls, and theme switching require JavaScript.

## Content

Edit `data/portfolio.ts` for the profile and projects. Each project includes its stage, tools, source evidence, problem, approach, implementation, and remaining work. The header and gallery count are derived from this collection. New unique slugs are included by `generateStaticParams` at the next build.

The eight projects are P4I Spatial Analytics, NGA Inventra, KampusHub, NGA Florist, P4I Corporate Hub, P4I Publisher E-book, OJS Journal Development, and My Cat. These are editorial source snapshots, not a live status feed. Do not invent adoption, performance, employment, or business-impact claims. Project cover art is illustrative, not product screenshots.

Existing email, WhatsApp, GitHub, and GA4 configuration are retained. Contact links open the relevant destination; they do not send a message automatically. LinkedIn, Upwork, and CV links should only be added when verified owner information is available.

See [project coverage](docs/PROJECT_COVERAGE.md), [design research](docs/visual-design-references.md), and [redesign verification](docs/REDESIGN_2026-11-01.md).

## Validation

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The Playwright suite uses the production server on port 3100. It covers both desktop/light and mobile/dark configurations, search/filter/reset, grid/list switching, all eight case studies, navigation, theme persistence, keyboard controls, narrow-width overflow, and core navigation without JavaScript. Test traffic to Google Analytics is blocked. GitHub Actions runs these checks on pushes and pull requests.

## Static hosting

The normal Next.js build remains unchanged. To opt into a static export:

```sh
npm run build:static
```

The script sets `PORTFOLIO_STATIC_EXPORT=1` for that build only. The generated site is in `.next-static/`, with directory-based routes such as `/work/nga-inventra/index.html`. Publish the contents of that directory to a static host. Source credentials or a database are not required to render the portfolio. Use the standard build before starting `next start`.
