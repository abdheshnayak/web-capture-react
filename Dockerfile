FROM node:alpine AS base
RUN npm i -g pnpm
WORKDIR /app
COPY package.json  ./
COPY . ./

RUN pnpm i
RUN npm run build

FROM nginx 
COPY --from=base /app/build  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf 
