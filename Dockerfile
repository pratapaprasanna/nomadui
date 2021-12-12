FROM node:16.0.0 as dev

RUN mkdir --parents /tmp/yarn

ADD package.json /tmp/yarn
ADD yarn.lock /tmp/yarn
ADD .prettierrc /usr/local/.

RUN cd /tmp/yarn && yarn install

# Add the source in case it is not mounted
ADD . /app

WORKDIR /app

## To review later, please

CMD yarn docker-init && yarn start

FROM dev as build
RUN yarn docker-init && yarn run build

FROM node:16.0.0 as prod

WORKDIR /dist
COPY --from=build /app/build /dist/build

RUN npm install --global serve

CMD serve --single --listen 3000 build