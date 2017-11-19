FROM node

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npm install -g serve

COPY . /usr/src/app

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]