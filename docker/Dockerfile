# dockerlab template: runtime_node_lts (full)
# https://github.com/hughplay/dockerlab

FROM node:lts

RUN apt-get update \
   && apt-get install -qqy --no-install-recommends \
   libvips-dev \
   rsync \
   sudo \
   && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN yarn global add yrm

# --------------------------------------------------------------------------------
# FROM deepbase/dockerlab:runtime_node_lts


# ==================================================
# Node setup
# ==================================================


# Use taobao mirror
# RUN yrm use taobao


# https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
ENV NODE_OPTIONS --openssl-legacy-provider


# ==================================================
# Post-installation steps
#
# Create a user that has the same UID and GID as the host user. This will
# prevent many privileges issues.
# ==================================================


# TUNA mirror for apt
# RUN sed -i -e 's/archive.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list

# Add a user with the same UID and GID as the host user, to prevent privilege issues.
ARG USER_ID=1011
ARG GROUP_ID=1011
ARG USER_NAME=docker
RUN if [ $USER_NAME != "root" ] ; \
    then addgroup --gid ${GROUP_ID} ${USER_NAME} \
    && adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID ${USER_NAME} \
    && usermod -aG sudo ${USER_NAME} \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers ; fi


# Copy installed configuration files from root to user
COPY misc/init_workspace /usr/local/bin
RUN chmod +x /usr/local/bin/init_workspace
RUN /usr/local/bin/init_workspace --user ${USER_NAME} --home /home/${USER_NAME}


# backup $HOME for reverse mounting $HOME
RUN rsync -a ${HOME}/ /${USER_NAME}_home_bak


# Switch to the created user
USER ${USER_NAME}


# Set working directory to /project
WORKDIR "/project"