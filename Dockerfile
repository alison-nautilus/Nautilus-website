FROM nginx:alpine

WORKDIR /app

RUN mkdir ./static

COPY ./static/* ./static

COPY ./nginx.conf /etc/nginx/nginx.conf 