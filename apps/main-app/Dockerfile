FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_MAJOR_VERSION="18"
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_ENV_VALIDATION=true
RUN corepack enable
COPY . /myturbostack
WORKDIR /myturbostack
RUN pnpm add -g turbo
RUN turbo prune --scope="@myturbostack/main-app" --docker

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

FROM base AS mainapp
ENV SKIP_ENV_VALIDATION=false
COPY --from=build /myturbostack/out/json/ .
COPY --from=build /myturbostack/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=prod-deps /myturbostack/node_modules/ /myturbostack/node_modules
COPY --from=build /myturbostack/apps/main-app /myturbostack/apps/main-app
WORKDIR /myturbostack/apps/main-app
EXPOSE 3000
CMD [ "pnpm", "start" ]
