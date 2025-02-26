# Use Node.js Alpine for a smaller image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy application files
COPY server.js .
COPY index.html .
COPY videos ./videos
COPY ./src ./src

# Expose the port
EXPOSE 443

# Start the server
CMD ["node", "server.js"]
