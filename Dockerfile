FROM node:16 AS builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn
COPY . .
RUN yarn build:test

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/admin.conf /etc/nginx/conf.d/admin.conf
