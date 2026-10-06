# Caleb Myers Portfolio — agent guide

Personal portfolio and résumé website.

Documentation reviewed 2026-10-05. Implemented Astro site with portfolio sections and a résumé page; deployment configuration exists, but live availability was not checked in this documentation review.

## Start here

- [README.md](README.md) — current setup and project checkpoint

Review `src/components/Projects.astro` and `src/pages/resume.astro` for content that needs refreshing.

## Repository map

- `src/pages/` — home and résumé routes
- `src/components/` — hero, projects, skills, contact, and header
- `src/layouts/Layout.astro` — shared page layout
- `public/` — static assets
- `astro.config.mjs` — canonical site URL and integrations

## Commands and verification

Run commands from this repository root unless a command specifies another directory. Use the existing lockfile and configured tools.

- `npm install` — install dependencies
- `npm run dev` — development server
- `npm run build` — generate the site in `dist/`
- `npm run preview` — inspect the built site locally

For documentation-only edits, verify paths, command names, and the diff. For code changes, run the applicable project gates above and report what actually ran; an old checkpoint is not a current test result.

## Project conventions

- Keep content factual; do not invent experience, metrics, project maturity, or credentials.
- Edit source in `src/` and assets in `public/`; do not hand-edit `dist/`.
- Preserve the existing Astro/Tailwind structure and canonical URL unless the request changes them.
- For visual changes, inspect mobile and desktop layouts and link destinations. No dedicated test or lint script exists.

## Scope and handoff

- Preserve existing local changes, environment files, databases, and generated artifacts that the project intentionally tracks.
- Work on the current user request. Reading this file does not start an autonomous loop or authorize publishing, deployment, or unrelated backlog work.
- Keep README setup/status and these instructions aligned when behavior or tooling changes. Record unfinished implementation in the existing project tracker when there is one.
- The owner chose to keep this repository at the workspace root on 2026-10-05. Do not move or rename this repository as part of routine development.
