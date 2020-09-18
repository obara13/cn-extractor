ARG http_proxy
ARG https_proxy

FROM ubuntu

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy

RUN apt-get update && \
    apt-get install -y \
        python3 python3-pip \
        mecab mecab-ipadic-utf8 \
        curl unzip git
RUN pip3 install \
        flask flask-cors \
        mecab-python3 openpyxl

WORKDIR /workspace
#RUN wget https://s3-ap-northeast-1.amazonaws.com/chakki.jcl.jp/public/jcl_slim_mecab.dic.zip
RUN curl -LO https://s3-ap-northeast-1.amazonaws.com/chakki.jcl.jp/public/jcl_slim_mecab.dic.zip
RUN unzip jcl_slim_mecab.dic.zip
RUN echo "userdic = /workspace/jcl_slim_mecab.dic" >> /etc/mecabrc

RUN git clone https://github.com/obara13/cn-extractor.git
WORKDIR /workspace/cn-extractor/backend

EXPOSE 5000

#CMD flask run --host=0.0.0.0 --debugger
CMD python3 app.py
