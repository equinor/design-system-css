FROM node:20-alpine as builder

RUN apk add --no-cache libc6-compat

ENV NODE_ENV development

WORKDIR /opt/app

COPY package*.json ./
COPY tsconfig.json .
COPY ./packages/components ./packages/components
COPY package-lock.json ./packages/components

WORKDIR /opt/app/packages/components
RUN npm ci
RUN npm run build-storybook

FROM bitnami/nginx:latest

WORKDIR /app
COPY --from=builder /opt/app/packages/components/storybook-static /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
