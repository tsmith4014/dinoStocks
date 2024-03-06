# Build stage
FROM node:14 AS builder
WORKDIR /front_end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS final 
WORKDIR /usr/share/nginx/html
COPY --from=builder /front_end/dist .