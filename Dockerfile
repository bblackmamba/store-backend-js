FROM node:10.15.0-alpine
EXPOSE 3001

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm i

COPY . /home/app

CMD ["node", "index.js" ]
