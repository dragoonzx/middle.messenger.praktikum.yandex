FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:webpack

FROM steebchen/nginx-spa:stable as production-stage
COPY --from=build-stage /app/dist /app
EXPOSE 80
CMD ["nginx"]
