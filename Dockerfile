FROM node:lts

LABEL MAINTAINER="Rami sfari <rami2sfari@gmail.com>"

# set working directory
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./* /app/
RUN ["npm", "install"]

# Create New user & group
RUN groupadd -r react && useradd -r -g react react
USER react

# start app
CMD ["npm", "start"]
