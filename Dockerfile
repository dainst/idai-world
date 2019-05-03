FROM nginx:alpine

COPY dist/idai /app
COPY nginx.conf /etc/nginx/nginx.conf
