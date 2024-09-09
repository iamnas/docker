# Base image
FROM node:18.20.4-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD ["node","dist/index.js"]