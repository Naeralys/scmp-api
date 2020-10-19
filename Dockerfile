FROM node:10

COPY . /app/

WORKDIR /app

RUN npm run build
RUN npm test

EXPOSE 8080

CMD [ "npm", "start" ]