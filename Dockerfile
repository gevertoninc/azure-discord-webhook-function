FROM node:19-alpine3.16 AS dependencies

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./

RUN npm ci --omit dev

COPY . .

RUN npm run build

FROM node:19-alpine3.16
