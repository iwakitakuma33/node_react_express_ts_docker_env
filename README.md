# docker node/express/typescript node/webpack/react/typescript mongodb 開発環境
Docker/Docker Composeを使用して、三つのコンテナを立ち上げます.

- backend
nodeとexpressとtypescriptが入っています。
以下のコマンドでbackendコンテナを起動して、コンテナ内に入ります。
```
docker-compose run --rm backend /binbash
```
コンテナ内で、packageをインストールします。
```
npm install
exit
```

- frontend
nodeとwebpackとreactとtypescriptが入っています。
以下のコマンドでbackendコンテナを起動して、コンテナ内に入ります。
```
docker-compose run --rm frontend /binbash
```
コンテナ内で、packageをインストールします。
```
npm install
exit
```

-最後にdocker-composeで三つのコンテナを起動します。
```
docker-compose up -d
```

-起動確認
frontend
```
http://localhost:8080/
```
backend
```
curl http://localhost:8888/v1/users
{"userId":"U001","userName":"Yamada Taro"}
```
