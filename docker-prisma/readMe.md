# Docker Commands Cheat Sheet

This document provides a list of commonly used Docker commands for managing containers, images, networks, and volumes.

## Table of Contents

1. [Docker Installation](#docker-installation)
2. [Docker Commands](#docker-commands)
    - [Container Management](#container-management)
    - [Image Management](#image-management)
    - [Network Management](#network-management)
    - [Volume Management](#volume-management)
    - [Docker System](#docker-system)

## Docker Installation

Before using Docker commands, ensure Docker is installed on your machine. Follow the [official Docker installation guide](https://docs.docker.com/get-docker/) for installation instructions.

## Docker Commands

### Container Management

- **List Containers**
  ```sh
  docker ps
  ```
  List running containers.

- **List All Containers**
  ```sh
  docker ps -a
  ```
  List all containers, including stopped ones.

- **Run a Container**
  ```sh
  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
  ```
  Run a new container from an image.

- **Stop a Running Container**
  ```sh
  docker stop CONTAINER_ID
  ```
  Stop a running container.

- **Start a Stopped Container**
  ```sh
  docker start CONTAINER_ID
  ```
  Start a stopped container.

- **Restart a Container**
  ```sh
  docker restart CONTAINER_ID
  ```
  Restart a container.

- **Remove a Container**
  ```sh
  docker rm CONTAINER_ID
  ```
  Remove a container.

- **Kill a Running Container**
  ```sh
  docker kill CONTAINER_ID
  ```
  Forcefully stop a running container.

- **Execute a Command in a Running Container**
  ```sh
  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
  ```
  Execute a command in a running container.

### Image Management

- **List Images**
  ```sh
  docker images
  ```
  List all images on the local machine.

- **Pull an Image**
  ```sh
  docker pull IMAGE
  ```
  Pull an image from a Docker registry.

- **Build an Image**
  ```sh
  docker build [OPTIONS] PATH | URL | -
  ```
  Build an image from a Dockerfile.

- **Remove an Image**
  ```sh
  docker rmi IMAGE_ID
  ```
  Remove an image from the local machine.

- **Tag an Image**
  ```sh
  docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
  ```
  Tag an image with a new tag.

### Network Management

- **List Networks**
  ```sh
  docker network ls
  ```
  List all networks.

- **Create a Network**
  ```sh
  docker network create NETWORK_NAME
  ```
  Create a new network.

- **Remove a Network**
  ```sh
  docker network rm NETWORK_NAME
  ```
  Remove a network.

- **Inspect a Network**
  ```sh
  docker network inspect NETWORK_NAME
  ```
  View detailed information about a network.

### Volume Management

- **List Volumes**
  ```sh
  docker volume ls
  ```
  List all volumes.

- **Create a Volume**
  ```sh
  docker volume create VOLUME_NAME
  ```
  Create a new volume.

- **Remove a Volume**
  ```sh
  docker volume rm VOLUME_NAME
  ```
  Remove a volume.

- **Inspect a Volume**
  ```sh
  docker volume inspect VOLUME_NAME
  ```
  View detailed information about a volume.

### Docker System

- **Check Docker Version**
  ```sh
  docker --version
  ```
  Display the Docker version.

- **View Docker System Information**
  ```sh
  docker info
  ```
  Display system-wide information about Docker.

- **Clean Up Unused Data**
  ```sh
  docker system prune
  ```
  Remove unused data, including stopped containers, networks, and dangling images.

- **View Disk Usage**
  ```sh
  docker system df
  ```
  Show disk usage for Docker components.

## Additional Resources

For more detailed information on Docker commands and options, refer to the [Docker Documentation](https://docs.docker.com/).

