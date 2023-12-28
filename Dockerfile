FROM node
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

ENV PORT=3000

CMD [ "npm", "start" ]