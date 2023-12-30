FROM node:18-alpine as build

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm ci
USER node
RUN npm run build

FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
COPY --chown=node:node --from=build /home/node/app/build /usr/share/nginx/html