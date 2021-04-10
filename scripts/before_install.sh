

#create our working directory if it doesnt exist
DIR="/home/ubuntu/projects/collab-be"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir -p ${DIR}
fi