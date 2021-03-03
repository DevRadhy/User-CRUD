module.exports = {
  "type": "postgres",
  "host": process.env.POSTGRES_HOST,
  "port": process.env.POSTGRES_PORT,
  "database": process.env.POSTGRES_DB,
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASSWORD,
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/entities/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
};