FROM node:10

COPY . /app/

WORKDIR /app

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]