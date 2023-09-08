---
sidebar_position: 2
---

# Using docker

each `app` can be built with the `Dockerfile` within the apps directory. From root of the repo you can build these or use `docker-compose.yml`.

## Requirements

Docker needs to be installed :)

## Individual apps

```bash
docker build apps/main-app --target main-app --tag main-app:latest
```

## Docker compose

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network
```

```bash
# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build
```

```bash
# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Now you can open:

- `apps/main-app` on [http://localhost:3000](http://localhost:3000)
- `apps/doc-site` on [http://localhost:3001](http://localhost:3001)
- `apps/ui-storybook` on [http://localhost:3002](http://localhost:3002)

To shutdown all running containers:

```bash
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

---

Sources:

- [Turborepo: deploying with docker](https://turbo.build/repo/docs/handbook/deploying-with-docker)
- [Turborepo docker example](https://github.com/vercel/turbo/tree/main/examples/with-docker)
- [pnpm - working with docker](https://pnpm.io/docker)
