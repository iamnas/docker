FROM node:latest

# COPY src /home/app/src
# COPY tsconfig.json /home/app/tsconfig.json
# COPY package.json /home/app/package.json
COPY . /home/app/

WORKDIR /home/app/

RUN npm i -g pnpm
RUN npm i -g tsc
RUN pnpm i

EXPOSE 3000

CMD [ "pnpm","dev" ]