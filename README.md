# Caleb Myers Portfolio

Personal portfolio and résumé built with Astro and Tailwind CSS. The configured site URL is `https://caleblmyers.github.io`; this documentation review did not check the hosted site.

## Project checkpoint

Documentation reviewed 2026-10-05 against local source and manifests; application checks were not rerun for this review. Archive decision: keep at the workspace root (owner decision, 2026-10-05).

**Current state:** Implemented Astro site with portfolio sections and a résumé page; deployment configuration exists, but live availability was not checked in this documentation review.

**Stack:** Astro 5, Tailwind CSS, local font packages, npm.

**Resume here:** Review `src/components/Projects.astro` and `src/pages/resume.astro` for content that needs refreshing.

**Agent guidance:** [AGENTS.md](AGENTS.md) contains the Codex/project instructions.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Build and preview

```bash
npm run build
npm run preview
```

The build writes `dist/`. Edit the source files, not the generated output. There are no dedicated test or lint scripts in the manifest.

## Where to edit

- `src/pages/index.astro` — home page
- `src/pages/resume.astro` — résumé page
- `src/components/Projects.astro` — project presentation
- `src/components/` — hero, skills, contact, and navigation
- `src/layouts/Layout.astro` — shared layout
- `public/` — static files
- `astro.config.mjs` — site URL and integrations

Check both desktop and mobile layouts and verify project/contact links after content edits. Deployment configuration is under `.github/workflows/`; inspect it before changing publishing behavior.
