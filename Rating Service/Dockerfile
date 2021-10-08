FROM node:9-slim

RUN mkdir  /ratingService
WORKDIR /ratingService

ADD package.json /ratingService/package.json
RUN  npm install

ADD . /ratingService

#EXPOSE  3010

CMD ["npm","start"]