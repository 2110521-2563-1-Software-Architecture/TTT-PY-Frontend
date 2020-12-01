FROM node:alpine

COPY . /root
WORKDIR /root/frontend

RUN npm install
RUN npm install -g serve
RUN npm run-script build

EXPOSE 3000

CMD serve -s build -l 3000
