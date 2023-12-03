# Base image
FROM node:slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies including 'devDependencies'
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port 3000 to access the server
EXPOSE 3000

# Command to start your app (could be something like nodemon for hot reloading)
CMD [ "npm", "run", "dev" ]
