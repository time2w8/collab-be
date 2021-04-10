#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/projects/collab-be

#navigate into our working directory where we have all our github files
cd /home/ubuntu/projects/collab-be

#install node modules
npm install

#start our node app in the background
node index.js > app.out.log 2> app.err.log < /dev/null & 