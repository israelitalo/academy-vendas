# academy-vendas
Back-end simulando vendas, usando typescript + typeorm

Ormconfig.json 
Example

{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "academy",
    "database": "vendas",
    "entities": [
        "./src/modules/**/typeorm/entities/*.ts"
    ],
    "migrations": [
        "./src/shared/typeorm/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/shared/typeorm/migrations"
    }
}

Comandos:

container docker: docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
new migration: yarn typeorm migration:create -n CreateProducts
run migration: yarn typeorm migration:run
