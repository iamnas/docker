
to see the version of the docker command `docker version`

how to run any container command 
` docker run -it ubuntu`

to run a container it's use images 
container is supperate own isolation files


docker image is configration
docker containers run docker image 
docker images can't run by themselves
they  need underline containers this container are isolated with each others


commagbde

# S2 Docker Command Line Interface

list of docker containers
docker ps
or 
docker container ls

images

docker image ls
docker images

docker --version
docker info

# Docker RUN CLI Command

docker run ubuntu (noting is haape it pulls image)
docker run -i ubuntu (interactive mode run)
docker run -it ubuntu (interactive mode + tty mode)

pull 
manul pull
docker pull ubunut

# Managing Images with CLI

    docker image ls
    docker image rm ubuntu

    docker image prune

    docker image --help

    docker image inspect ubunut
 
# Container command
    docker run -it --name nasu ubuntu 

# S3 Docker Custom Images

   step 1 write Dockerfile 
   step 2 build Dockerfile command `docker build -t <tag-name> .`
   step 3 run Dockerfile command `docker run -it <tag-name>`

   `docker
   
    FROM node:alpine

    WORKDIR /home/app 

    # COPY package-lock.json package-lock.json
    # COPY package.json package.json
    # we can also use wildcard 
    COPY package*.json .
    RUN npm i 

    COPY index.js index.js

    CMD [ "npm","run","dev" ]
 
   `
"it's run layers by layers one by one and cashed layers if  any changes are made then it will be re run that layer"


# Port Mappings
"<port of host> : <post of container>"

`docker run -it -p 3000:3000 <name>`
#multiple porst
`docker run -it -p 3000:3000 -p 8111:9000 <name>`

automatically port map 
`docker run -it -P <name>`

automatically remove container
`docker run -it -P --rm <name>`

detached mode
`docker run -itd -P <name>`
`docker run -itd -P --rm <name>` (stop then removed )

# publish container 
  step 1 : `docker login`
  step 2 : create a repository in docker hub
  step 3 : build a container with same repository name `docker build -t <name/appname> .`
    eg: `docker build -t iamnas/hello-app .`
  step 4 : publish container 
    eg: `docker push iamnas/hello-app`
  step 5 : use publised container anywhere `docker run -itd -P <name>`

# Multi Stage Builds
  1. build particular file `docker build -t ts-node-old -f Dockerfile.old .`
# Create user 

# ENV 
   `docker run -it -p 3000:3000 -e PORT=3000 -e DB=localhost <name>`
   `docker run -it -p 3000:3000 --envfile=./.env <name>`

# Docker-Networking
  `docker network create nasnet`
  `docker run -itd --network nasnet --rm --name con1 ubuntu`
  `docker run -itd --network nasnet --rm --name con2 ubuntu`
  `docker run -itd --network nasnet --rm --name con3 ubuntu`

# Docker volume
  `docker run -it -v <host/vol>:<container> --rm ubuntu`

   `docker volume create custom_data`
  `docker run -it -v custom_data:<container> --rm ubuntu`

# Docker Compose
  step 1: Create a docker compose file it has to be yml file
  step 2: For running docker compose command `docker compose up` 
  or `docker compose up -d` 
  for down run `docker compose down`

