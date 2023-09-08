---
sidebar_position: 1
---

# Tutorial Intro

Time to get the ball rolling and start shipping everything under the **web app** sun in a single one repo.

Do you want to get started bulding with a **turborepo** powered **typescripe** monorepo project setup with linting, tests, code formatting, github actions, vscode, nextjs, trpc, msw, docusaurus, and more!

## Whats included

`apps/`

- `trpc-api`: a [tRPC](https://trpc.io/) server app (backend server agnostic, but currently runs in `main-app` nextjs server)
- `main-app`: a [Next.js](https://nextjs.org/) app
  - `msw`/`msw-trpc` configured for testing
- `doc-site`: a [docusaurus](https://docusaurus.io/) markdown based documenation website

`packages/`

- `auth`: a placeholder package to handle auth. _no real logic here for now._
- `logger`: isomorphic logger (a small wrapper around console.log) _no real logic here for now._
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

## Getting Started

Clone the repo, and get your project started!

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [pnmp](https://pnpm.io/) version 8 or above

## Generate a new site

clone the project:

```bash
git clone https://github.com/estepanov/my-turbo-stack.git my-custom-turbo-stack
```

open the project directory:

```bash
cd my-custom-turbo-stack
```

Install all dependencies

```bash
pnpm i
```

## Start your site

Run the development server:

```bash
pnpm dev
```

This boots all the apps into dev mode.

If you want to boot a specifc app, such as the docusaurus app in `apps/doc-site`, then you can filter by app name:

```bash
pnpm dev --filter doc-site
```

or if you just want to boot the nextjs app in `apps/main-site` you can run

```bash
pnpm dev --filter main-app
```
