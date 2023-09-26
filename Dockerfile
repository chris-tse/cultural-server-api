FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app
COPY package.json ./
RUN pnpm install

COPY . .
EXPOSE 8080

CMD [ "pnpm", "start" ]

