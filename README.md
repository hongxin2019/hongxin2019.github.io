# Homepage

## Pre-requirements

- docker

## Quick start

``` bash
# build the docker image and start a container
make init

# enter the docker container
make in

# install dependencies
yarn

# fix sharp problem if it appears
make fix_sharp

# start develop server
yarn develop

# build
yarn build
```