FROM node:12-alpine

RUN mkdir -p /usr/local/bin/service/
COPY package.json /usr/local/bin/service/
COPY yarn.lock /usr/local/bin/service/
COPY tsconfig.json /usr/local/bin/service/
WORKDIR /usr/local/bin/service/
RUN DOCKER_ENV=1 yarn install --frozen-lockfile
COPY . .
RUN yarn build
COPY dist /usr/local/bin/service/
EXPOSE 3000
WORKDIR /usr/local/bin/service/dist
CMD [ "node", "index.js" ]
