
FROM node:alpine

WORKDIR /home/app 

# COPY package-lock.json package-lock.json
# COPY package.json package.json
# we can also use wildcard 
COPY package*.json .
RUN npm i 

COPY index.js index.js

EXPOSE 3000 8000
# EXPOSE 3000 8000 1200
# EXPOSE 3000-3010

CMD [ "npm","run","dev" ]

