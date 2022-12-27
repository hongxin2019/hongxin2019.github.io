# Personal Homepage

## Git Clone

```
git clone -b source git@github.com:hongxin2019/hongxin2019.github.io.git
yarn
```

## Play with docker


Build the Docker image:

```
docker build -t blog . --build-arg USER_ID=$(id -u) --build-arg GROUP_ID=$(id -g) --build-arg USER_NAME=$(whoami)
```

Install dependencies:

```
docker run -it --rm -v "$PWD":/workspace blog yarn
```

Develop:

```
docker run -it --rm -p 8080:8080 -v "$PWD":/workspace blog yarn develop
```

Deploy:

```
docker run -it --rm -v "$HOME/.ssh":"/home/$(whoami)/.ssh" -v "$HOME/.gitconfig":"/home/$(whoami)/.gitconfig" -v "$PWD":/workspace blog yarn deploy
```