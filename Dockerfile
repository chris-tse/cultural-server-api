FROM node:18.18-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app
COPY package.json ./
RUN pnpm install

COPY . .
EXPOSE 3000

CMD [ "pnpm", "start" ]

