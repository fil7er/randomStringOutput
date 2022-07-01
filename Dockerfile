FROM node:alpine

WORKDIR /home/node/app
COPY . /home/node/app

RUN npm install

EXPOSE 3003

CMD [ "node", "index.js" ]