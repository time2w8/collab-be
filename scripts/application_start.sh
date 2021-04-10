#!/bin/bash
set -e
# Stop all servers and start the server as a daemon
echo "STARTING APP"
sudo forever stopall
sudo forever start /home/ubuntu/projects/collab-be/index.js