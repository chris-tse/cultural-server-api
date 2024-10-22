FROM node:20.10-alpine AS base

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json ./

RUN pnpm config set store-dir ~/. --global
RUN pnpm install

#-------------------
# Development Stage
#-------------------
FROM base AS development

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]

#-------------------
# Production Stage
#-------------------
FROM base AS production


