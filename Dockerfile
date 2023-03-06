FROM node:14.21.3

WORKDIR /app-tools

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/index.js" ]