FROM node:20-alpine

WORKDIR /newsApp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm","run","dev" ]