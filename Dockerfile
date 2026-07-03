FROM nginx:1.31.2

COPY dist/idai /app
COPY nginx.conf /etc/nginx/nginx.conf
