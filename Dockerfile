From node:lts

RUN apt-get update \
   && apt-get install -qqy --no-install-recommends libvips-dev \
   && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Add a user with the same UID and GID as the host user, to prevent privilege issues.
ARG WORKSPACE_DIR="/workspace"
ARG USER_ID=1000
ARG GROUP_ID=1011
ARG USER_NAME=docker
RUN if [ $USER_NAME != "root" ] ; \
    then groupadd -f --gid ${GROUP_ID} ${USER_NAME} \
    && adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID ${USER_NAME} ; fi

USER ${USER_NAME}

ENV NODE_OPTIONS --openssl-legacy-provider

WORKDIR $WORKSPACE_DIR

EXPOSE 8080