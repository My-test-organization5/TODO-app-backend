FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/auth

WORKDIR /var/www/auth
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm i --unsafe-perm
COPY ./ /var/www/auth/

CMD npm run start:dev
