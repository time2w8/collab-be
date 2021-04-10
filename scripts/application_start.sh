
#!/bin/bash

# Stop all servers and start the server as a daemon
echo "STARTING APP"
forever stopall
forever start /home/ubuntu/nodejs/app.js