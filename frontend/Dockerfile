ARG http_proxy
ARG https_proxy

FROM alpine

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy

WORKDIR /workspace
RUN apk add nodejs npm git
RUN git clone https://github.com/obara13/cn-extractor.git
WORKDIR /workspace/cn-extractor/frontend
RUN npm install

EXPOSE 3000

CMD npm start
