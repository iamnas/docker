FROM node:20.19-alpine3.20 as base

# Stage 1 : build the project
FROM base as builder

WORKDIR /home/build

COPY package*.json .
COPY tsconfig*.json .

RUN npm install

COPY src/ src/

RUN npm run build

# Stage 2 : run the project

FROM base as run

WORKDIR /home/app

COPY --from=builder /home/build/dist dist/ 
COPY --from=builder /home/build/package*.json .

RUN npm install --omit=dev 

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

USER nodejs

EXPOSE 3000
ENV PORT=3000

CMD [ "npm","start"]