# Muhammad Farhan — Data & Systems Portfolio

A Next.js portfolio with a glass/bento visual system, a searchable project collection,
and three statically generated case studies. Light and dark themes follow the visitor's
system preference until they choose a theme.

## Local development

Use Node.js 24 and npm. Install the locked dependencies, then start Next.js:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `app/page.tsx` is the homepage; `app/work/[slug]/page.tsx`
provides the case studies. The old root `index.html` is an unrelated historical publisher
prototype and is not served by Next.js. Use the Next.js build for this portfolio.

## Content updates

Edit `data/portfolio.ts` for the owner profile, contact destinations, and project content.
Add a project with a unique slug, category, status, tools, problem, approach, delivered work,
next steps, and a public evidence link. `generateStaticParams` automatically includes it
in the next build. To introduce a new category, also update the categories list.

Current case studies cover P4I Spatial Analytics, KampusHub, and NGA Florist. Their content
is an editorial snapshot of linked public source files reviewed on 19 October 2026, not
a live status feed. The artwork is abstract, not a product screenshot. Do not add client
counts, performance statistics, or production claims without supporting evidence.

LinkedIn and Upwork links can be added when actual profile URLs are supplied. Email,
WhatsApp, and GitHub use the owner's existing repository contact details. Opening a
contact link prepares the relevant client; it does not send a message automatically.

## Verification

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production server on port 3100. It checks desktop/light and
mobile/dark layouts, navigation, filtering/search, empty results, case studies, 404s,
system-theme switching and persistence, keyboard access, 320px overflow, reduced motion,
and navigation without JavaScript. Test traffic to Google Analytics is blocked.

GitHub Actions repeats the typecheck, production build, and browser checks. Existing GA4
integration and measurement ID are preserved in `app/layout.tsx`. No database or external
service credentials are needed to render the portfolio.
