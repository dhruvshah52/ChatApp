FROM node:8

WORKDIR /app/

COPY . .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]