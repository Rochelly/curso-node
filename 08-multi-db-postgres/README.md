 docker run  --name  postgres \
   -e  POSTGRES_USER=rochelly \
   -e POSTGRES_PASSWAORD=testeteste \
   -e POSTGRES_DB=heros \
   -p 5432:5432 \
   -d  postgres


 docker exec   -it  postgres /bin/bash


docker run \
  --name adminer \
  -p 8080:8080 \
  --link postgres:postgres \
  -d \
   adminer


##---MONGODB
docker run \
  --name mongodb \
  -p 27017:27017 \
  -e  MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=testeteste \
  -d \
  mongo:4

docker run \
 --name \
 -p 3000:3000 \
 --link mongodb:mongodb \
 -d \
 mongoclient/mongoclient
