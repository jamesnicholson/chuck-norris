FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/chuck-norris-frontend
COPY package.json /apps/chuck-norris-frontend
RUN yarn install
COPY . /apps/chuck-norris-frontend
CMD ["yarn", "start"]