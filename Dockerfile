FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/chuck-norris-apollo-server
COPY package.json /apps/chuck-norris-apollo-server
RUN npm install
COPY . /apps/chuck-norris-apollo-server
CMD ["npm", "start"]