FROM node:alpine

COPY . /root
WORKDIR /root/frontend

RUN npm install

EXPOSE 3000

CMD npm start
