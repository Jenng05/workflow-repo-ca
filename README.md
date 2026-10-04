# Workflow CA

This is my course assignment for Workflow at Noroff. The site lets you browse venues and log in. My job was to add tools and tests to the project.

## About the API

The project originally used the old v1 API, but it wasn't working anymore (register, login and venues all gave 500 errors). I asked my teacher, who said to use v2 instead, so the project now uses `https://v2.api.noroff.dev`.

## How to run it

1. Clone the repo and run `npm install`
2. Make a `.env` file in the root folder (copy `.env.example`)
3. Add the email and password of a user registered on the v2 API. You can make one on the `/register/` page.

Environment variables you need:

- `LOGIN_EMAIL`
- `LOGIN_PASSWORD`

## Scripts

- `npm run dev` – runs Tailwind
- `npm run format` – formats the code with Prettier
- `npm run lint` – checks the code with ESLint
- `npm run lint:fix` – fixes what ESLint can fix by itself
- `npm test` – runs the unit tests (Vitest)
- `npm run test:watch` – runs the unit tests in watch mode
- `npm run test:e2e` – runs the end-to-end tests (Playwright)

## What I added

- Prettier and ESLint
- Husky and lint-staged, so HTML gets formatted and JS gets formatted and linted before every commit
- Unit tests for `isActivePath` and `getUsername`
- E2E tests for login (valid and invalid) and for clicking into a venue

## AI use

I used AI for help with some of this assignment.
See `AI_LOG.md`.
