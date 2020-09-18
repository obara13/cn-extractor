ARG http_proxy
ARG https_proxy

FROM ubuntu

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy
ENV DEVIAN_FRONTEND=noninteractive

RUN apt-get update && DEVIAN_FRONTEND=noninteractive apt-get install -y tzdata
RUN apt-get install -y \
        curl \
        nodejs npm

# install latest nodejs pachage, and remove old deb nodejs.
RUN npm install -g n
RUN n stable
RUN apt purge -y nodejs npm

WORKDIR /workspace
EXPOSE 3000

RUN npm install

CMD npm start
