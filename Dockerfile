# Use official Node LTS image
FROM node:20-alpine AS base
WORKDIR /app
# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source
COPY . .

# Build
RUN npm run build

# Production image
FROM node:20-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
EXPOSE 3000
CMD ["node", "node_modules/.bin/next", "start", "-p", "3000"]
