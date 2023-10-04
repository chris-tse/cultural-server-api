FROM node:18.18-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app
COPY package.json ./
RUN pnpm install

COPY . .
EXPOSE 3000

RUN pnpm migration:run

CMD ["pnpm", "migration:run"]
#CMD ["/bin/bash", "-c", "pnpm migration:run;pnpm start"]

