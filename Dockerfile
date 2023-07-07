

#Stage 1
# FROM node:18.15.0-alpine AS build 
FROM node:18.16.1-alpine AS build 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN  npm install
# RUN npm --verbose install
COPY . .
RUN npm  run build  
##STAGE####
FROM  nginx:1.17.1-alpine
COPY  nginx.conf  /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/oems  /usr/share/nginx/html