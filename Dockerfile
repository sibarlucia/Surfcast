# Use an official Node.js runtime as the base image
FROM node:18.0.0-alpine
# Set the working directory in the container to /app
WORKDIR /app
# Copy the package.json and package-lock.json to the container

RUN npm install -g npm@latest

RUN npm install --global serve
 
COPY package*.json ./
# Install the app's dependencies in the container

RUN npm install
# Copy the rest of the app's source code to the container
COPY . .

RUN npm run build
# Specify the command to run when the container starts
EXPOSE 3000

CMD [ "serve", "./dist", "-s" ]