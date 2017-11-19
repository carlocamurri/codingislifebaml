FROM node

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npm install -g serve

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]