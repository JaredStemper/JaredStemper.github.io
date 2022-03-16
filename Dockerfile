FROM nginx:alpine
COPY . /usr/share/nginx/html

#docker -D run -d -p 80:80 --name devtest7 --mount type=bind,source="/home/jared/website",target=/usr/share/nginx/html,readonly nginx:alpine


