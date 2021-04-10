#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/projects/TP2_test

#navigate into our working directory where we have all our github files
cd /home/ubuntu/projects/TP2_test

#install node modules
npm install

#start our node app in the background
pm2 restart collab-be > app.out.log 2> app.err.log < /dev/null & 