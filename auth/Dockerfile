FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm i --unsafe-perm
COPY . /usr/src/app

CMD npm run start:dev
