FROM nginx:1.31.3

COPY dist/idai /app
COPY nginx.conf /etc/nginx/nginx.conf
