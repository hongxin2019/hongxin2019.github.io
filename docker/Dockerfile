# dockerlab template: workspace_node_18
# https://github.com/hughplay/dockerlab

FROM deepbase/dockerlab:workspace_node_18


# ==================================================
# Node setup
# ==================================================


# Use taobao mirror and update npm and yarn
RUN npm config set registry https://registry.npmmirror.com \
    && npm install -g npm@latest yarn@latest


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
RUN rsync -a /home/${USER_NAME}/ /${USER_NAME}_home_bak


# Switch to the created user
USER ${USER_NAME}


# Set working directory to /project
WORKDIR "/project"