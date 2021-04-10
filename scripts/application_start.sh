#!/bin/bash

#give permission for everything in the express-app directory
echo "Giving permissions"
sudo chmod -R 777 /home/ubuntu/projects/collab-be

#navigate into our working directory where we have all our github files
echo "Moving to project files"
cd /home/ubuntu/projects/collab-be

#install node modules
echo "Installing dependencies"
npm install

#start our node app in the background
echo "Starting app"
node index.js > app.out.log 2> app.err.log < /dev/null & 