FROM node:18-alpine as build

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /app

COPY  . .

RUN npm ci
RUN npm run build

FROM nginx:stable-alpine as deploy
COPY --from=build /app/build /usr/share/nginx/html