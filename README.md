# Portfolio-Website

Personal portfolio site built with React, TypeScript, and Bootstrap.

## Tech stack

- [Vite](https://vite.dev/) — build tool / dev server
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — client-side routing
- [React Bootstrap](https://react-bootstrap.github.io/) + [Bootstrap 5](https://getbootstrap.com/) — UI components/styling
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting/formatting
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server               |
| `npm run build`        | Type-check and build for production      |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without writing changes |

## Project structure

```
src/
  components/   Shared UI components (NavBar, Footer, PageHeader, ProjectCard, ...)
  data/         Placeholder content (projects.ts, experience.ts) — replace with real data
  layouts/      Route layouts (MainLayout wraps every page)
  pages/        Route-level page components (Home, Projects, Experience, Contact)
  routes/       React Router route configuration
  styles/       Design tokens, typography, and Bootstrap variable overrides (custom.css)
```

## Design system

All design tokens live in [src/styles/custom.css](src/styles/custom.css) as CSS custom
properties, and several are mapped onto Bootstrap 5.3's own CSS variables (`--bs-primary`,
`--bs-body-bg`, etc.) so standard Bootstrap/react-bootstrap components pick up the theme
automatically without a Sass build step.

- **Color:** gray-washed white background (`--color-bg`), space blue accent
  (`--color-space-blue-*`), slate gray text/borders (`--color-slate-*`), plus a soft
  diagonal gradient (`--gradient-primary`) used on the hero and CTA banner.
- **Type:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings,
  [Inter](https://fonts.google.com/specimen/Inter) for body text — both self-hosted variable
  fonts via `@fontsource-variable`, so there's no external font request at runtime.
- **Hierarchy:** `h1`–`h4` sizes/weights are set globally; `.eyebrow` is the small
  uppercase label used above section headings; `.lead` is the larger intro paragraph style.
- **Placeholders:** `PlaceholderImage` renders an on-brand gradient block (no external image
  service) wherever a real photo/screenshot will eventually go — swap it out per-page once
  you have real assets.

## Deployment (Cloudflare Pages)

This repo is set up for the free tier of Cloudflare Pages via its Git integration:

1. In the Cloudflare dashboard, create a new Pages project and connect this GitHub repo.
2. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Push to `main` and Cloudflare will build and deploy automatically.

`public/_redirects` contains the SPA fallback rule (`/* /index.html 200`) so client-side routes resolve correctly on direct load/refresh.

A GitHub Actions workflow ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs formatting, lint, and build checks on every push/PR to `main`, independent of Cloudflare's own deploy.
