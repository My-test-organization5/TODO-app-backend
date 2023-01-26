FROM node:14

WORKDIR /TODO-app-backend
COPY package.json .
RUN npm install
COPY . .
CMD npm start