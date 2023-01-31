FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/gateway

WORKDIR /var/www/gateway
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm i --unsafe-perm
COPY ./ /var/www/gateway/

CMD npm run start:dev
