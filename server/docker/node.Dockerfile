FROM node:latest

EXPOSE 5000

WORKDIR /node/app

VOLUME /node/app


CMD ["npm","run","start:dev"]