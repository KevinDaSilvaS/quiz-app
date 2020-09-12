FROM node:alpine

RUN npm i --save-dev

EXPOSE 4738

CMD node 