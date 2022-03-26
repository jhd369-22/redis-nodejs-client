# Express Redis Docker app

Requirements: [Docker Community Edition](https://www.docker.com/community-edition)

To start the app run: `docker-compose up`.

It will then be started on port 3000.

## Endpoints

### Welcome Page

```sh
curl http://localhost:3000
```
or in browser
```
http://localhost:3000
```

### Storing Data In Sorted Set
```sh
curl http://localhost:3000/store/my-key\?key1\=value1\&key2\=value2
```
or in browser
```
http://localhost:3000/store/order\?key1=value1&key2=value2
```

### Fetching All Data(Admin)

```sh
curl http://localhost:3000/my-key
```
or in browser
```
http://localhost:3000/admin
```
