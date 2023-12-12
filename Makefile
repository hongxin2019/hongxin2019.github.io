# ref: https://saattrupdan.github.io/2022-08-28-makefu/
# ref: https://gist.github.com/MarkWarneke/2e26d7caef237042e9374ebf564517ad
-include .env

# run on host
init:
	python docker.py startd --build

# run on host
in:
	python docker.py

fix_sharp:
	rm -rf ~/.npm/_libvips/ && rm -rf node_modules && yarn

dev:
	yarn develop

copy_git:
	cp ~/.gitconfig $(CONTAINER_HOME)/ && cp -r ~/.ssh $(CONTAINER_HOME)/
