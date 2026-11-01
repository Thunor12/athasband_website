# Aþas band website

Astro content site (see `package.json`). Content lives in `src/content/`, pages in `src/pages/`.

## Cursor Cloud specific instructions

- Install deps with `npm ci` (the startup update script does this). Dev server: `npm run dev` serves on `http://localhost:4321/`. Production build: `npm run build` emits static output to `dist/` (this is what `deploy.sh` ships).
- There are no lint or automated-test scripts defined; verification is building and loading pages (`/`, `/updates`, `/releases`, `/merch`, `/press-kit`).
