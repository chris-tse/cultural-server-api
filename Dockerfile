FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "pnpm", "start" ]