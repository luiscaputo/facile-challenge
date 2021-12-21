# Development
FROM node:14 as dev

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run dev

ENV PORT=4000

ENV NODE_ENV=development

EXPOSE 3333/tcp

CMD [ "npm", "dev" ]