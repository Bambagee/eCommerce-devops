FROM node:22-alpine

WORKDIR /app

# Copy package files first (layer caching — faster rebuilds)
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]