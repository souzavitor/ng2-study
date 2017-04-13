FROM node:6.9.1

RUN npm i -g gulp node-gyp

RUN apt-get update && \
    apt-get install -y nginx-light && \
    echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
    chown -R www-data:www-data /var/lib/nginx

COPY nginx-site.conf /etc/nginx/sites-enabled/default

VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

WORKDIR /etc/nginx

CMD ["nginx"]

EXPOSE 80
EXPOSE 443