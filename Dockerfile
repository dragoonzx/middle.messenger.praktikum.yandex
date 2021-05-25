FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:webpack

FROM steebchen/nginx-spa:stable as production-stage
COPY nginx.conf /etc/nginx/
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build-stage /app/dist /app
# Heroku uses env variable $PORT
# EXPOSE 80
CMD envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
