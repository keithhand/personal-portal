#! /bin/bash

sudo docker run -dit --name portal-web -p 8080:80 -v ~/projects/personal-portal:/usr/local/apache2/htdocs/ httpd:2.4
