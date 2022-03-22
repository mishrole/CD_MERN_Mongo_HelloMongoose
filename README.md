## Database requires user & password to access

### .env
```
DB_USER=<your_database_user>
DB_PWD=<your_database_password>
DB_PORT=<your_mongodb_port>
DB_HOST=<your_mongodb_host>
PORT=<your_express_port>
```


## How to set a database user & password

```
# Connected to Mongo Shell

  use <your_mongodb_database>
  db.createUser({user: <your_database_user>, pwd:<your_database_password>, roles:["dbOwner"]})
```