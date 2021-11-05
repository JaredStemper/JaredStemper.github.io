FROM nginx:alpine
#COPY website/src /usr/share/nginx/html
COPY franciscoh017.github.io/ /usr/share/nginx/html
