FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_MAJOR_VERSION="18"
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable
COPY . /myturbostack
WORKDIR /myturbostack
RUN pnpm add -g turbo
RUN turbo prune --scope="@myturbostack/ui-storybook" --docker

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

FROM base AS docsite
COPY --from=build /myturbostack/out/json/ .
COPY --from=build /myturbostack/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build /myturbostack/node_modules/ /myturbostack/node_modules
COPY --from=build /myturbostack/apps/ui-storybook /myturbostack/apps/ui-storybook
WORKDIR /myturbostack/apps/ui-storybook
EXPOSE 6006
CMD [ "pnpm", "dev" ]
