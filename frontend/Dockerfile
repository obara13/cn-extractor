ARG http_proxy
ARG https_proxy

FROM ubuntu

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy
ENV DEVIAN_FRONTEND=noninteractive

# install nodejs(ubuntu .dev package).
RUN apt-get update && DEVIAN_FRONTEND=noninteractive apt-get install -y tzdata
RUN apt-get install -y \
        curl git\
        nodejs npm
# install latest nodejs pachage, and remove old nodejs(ubuntu .dev).
RUN npm install -g n
RUN n stable
RUN apt purge -y nodejs npm

WORKDIR /workspace
RUN git clone https://github.com/obara13/cn-extractor.git
WORKDIR /workspace/cn-extractor/frontend
RUN npm install

EXPOSE 3000

CMD npm start
