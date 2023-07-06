FROM node:alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm i --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./etc/.nginx/nginx.conf /etc/nginx/nginx.conf
COPY  --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;" ]

#ENTRYPOINT ["nginx", "-g", "daemon off;"]
