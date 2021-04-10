#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/projects/collab-be

#navigate into our working directory where we have all our github files
cd /home/ubuntu/projects/collab-be

#install node modules
npm install

#start our node app in the background
pm2 start "node index.js" --name "collab-be"