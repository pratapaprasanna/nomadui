FROM node:12.0.0 as dev

RUN npm install -g nodemon

RUN mkdir --parents /tmp/yarn

ADD package.json /tmp/yarn
ADD yarn.lock /tmp/yarn

RUN cd /tmp/yarn && yarn install

CMD CHOKIDAR_USEPOLLING=true && yarn build && yarn start
