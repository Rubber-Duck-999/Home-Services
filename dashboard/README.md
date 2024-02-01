# Dashboard

[![Docker Image CI](https://github.com/Rubber-Duck-999/HouseGuardServices/actions/workflows/docker.yml/badge.svg)](https://github.com/Rubber-Duck-999/HouseGuardServices/actions/workflows/docker.yml)

## Build

`docker build --rm -f Dockerfile -t ui:latest . --no-cache`


## Run

`docker run -d -p 3000:80 -t ui:latest`