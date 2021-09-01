FROM node:16.8-alpine3.12 AS build
WORKDIR /AppPokedex
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:1.19.10-alpine AS prod-stage
COPY --from=build /AppPokedex/build /usr/share/nginix/html
EXPOSE 80
CMD [ "nginix", "-g", "daemon off;"]