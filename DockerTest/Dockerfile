# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable for the port
ENV PORT=27950

# Expose the port the app runs on
EXPOSE 27950

# Define the command to run the application
CMD ["node", "server.js"]
