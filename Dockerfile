# Fetching the latest node image on alpine linux
FROM node:16

# Setting up the work directory
WORKDIR /my-portfolio

# Installing dependencies
COPY ./package*.json /my-portfolio/
RUN npm install

# Copying all the files in our project
COPY . .

#Expose ports
EXPOSE 3000

# Starting our application
CMD ["npm", "start"]
