#stage 1
FROM node as build-step
WORKDIR /ng-app
COPY . .
RUN npm install
RUN npm run build 
#stage 2
FROM nginx:alpine
COPY --from=build-step /ng-app/dist/* /usr/share/nginx/html