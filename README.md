[![lint-test-build-check](https://github.com/estepanov/my-turbo-stack/actions/workflows/lint-test-build-check.yml/badge.svg)](https://github.com/estepanov/my-turbo-stack/actions/workflows/lint-test-build-check.yml)

# My Turborepo Stack

This is an my customized starter Turborepo with multiple started from [kitchen sink official turborepo example](https://github.com/vercel/turbo/tree/main/examples/kitchen-sink).

## Using this example

This repo is setup using `pnpm`, so once you are in the project run `pnpm i` to install everything and then you can get started with

```sh
pnpm dev
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `trpc-api`: a [tRPC](https://trpc.io/) server app (backend server agnostic, but currently runs in `main-app` nextjs server)
- `main-app`: a [Next.js](https://nextjs.org/) app
  - `msw`/`msw-trpc` configured for testing
- `auth`: a placeholder package to handle auth. _no real logic here for now._
- `logger`: isomorphic logger (a small wrapper around console.log) _no real logic here for now._
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is:

- 100% [TypeScript](https://www.typescriptlang.org/)
- ESLint configured
- Jest configured

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- VSCode shared settings with recommended extensions
- GitHub action that runs `pnpm test`
