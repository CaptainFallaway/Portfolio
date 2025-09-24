FROM mirror.gcr.io/library/node:22-alpine AS build

WORKDIR /build

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile 

COPY . .
RUN pnpm build

FROM rtsp/lighttpd:latest AS prod

COPY --from=build /build/dist /var/www/html
EXPOSE 80