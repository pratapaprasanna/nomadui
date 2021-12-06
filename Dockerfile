FROM node:12.0.0 as dev

RUN npm install -g nodemon

WORKDIR /app/

ADD . /app

CMD CHOKIDAR_USEPOLLING=true && yarn build && yarn start
