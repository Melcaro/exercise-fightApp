FROM nginx:latest 

VOLUME /images

VOLUME /usr/share/nginx/html/

COPY nginx.conf /etc/nginx