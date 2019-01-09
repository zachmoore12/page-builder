FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /package.json
ADD . /usr/src/app

RUN npm install

EXPOSE 80:8080

CMD ["npm start"]
