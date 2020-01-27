FROM nginx:latest 

VOLUME /images

COPY nginx.conf /etc/nginx