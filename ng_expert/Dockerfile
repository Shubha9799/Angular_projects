#stage 1
FROM node
WORKDIR /ng-app
COPY . .
RUN npm install
RUN npm run build 
#stage 2
FROM nginx:alpine
COPY --from=node /ng-app/dist/ng_expert /usr/share/nginx/html