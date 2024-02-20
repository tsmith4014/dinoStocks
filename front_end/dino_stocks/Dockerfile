FROM node:14 AS builder

ENV REACT_APP_BACKEND_HOST localhost
ENV REACT_APP_BACKEND_PORT 8000

WORKDIR /front_end

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine AS final

WORKDIR /front_end

COPY --from=builder /front_end/package.json ./package.json
COPY --from=builder /front_end/package-lock.json ./package-lock.json
COPY --from=builder /front_end/dist ./dist
COPY --from=builder /front_end/index.html ./index.html
COPY --from=builder /front_end/src ./src
COPY --from=builder /front_end/vite.config.js ./vite.config.js

RUN npm install

EXPOSE 5173

CMD [ "npm", "run",  "dev"]