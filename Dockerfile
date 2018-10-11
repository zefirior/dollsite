FROM node

WORKDIR /app

# deploy project
COPY ./src ./src
COPY ./public ./public
COPY ./package.json ./
RUN npm install -g npm
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start"]
