FROM node:20-alpine

WORKDIR /app

# Create non-root user for security
RUN addgroup -S app && adduser -S app -G app

# Copy only package files first (better caching)
COPY package*.json ./

# Install only production dependencies, reproducible
RUN npm ci --omit=dev

# Copy rest of the app
COPY . .

# Switch to non-root user
USER app

EXPOSE 4000

CMD ["node", "server.js"]
