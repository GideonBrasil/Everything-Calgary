# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.9.4
# Set the working directory to /api
WORKDIR ./server
# copy package.json into the container at /api
ENV PATH $HOME/app/node_modules/.bin:$PATH
ADD package.json $HOME

COPY package*.json /server/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /server/
# Make port 80 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD [ "npm", "start" ]
