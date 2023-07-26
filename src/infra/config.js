export const getDatabaseConfig = Object.freeze({
  DB_HOST: process.env.DB_HOST ?? '127.0.0.1',
  DB_PORT: process.env.DB_PORT ?? '5432',
  DB_USER: process.env.DB_USER ?? 'root',
  DB_PASSWORD: process.env.DB_PASSWORD ?? 'root',
  DB_NAME: process.env.DB_NAME ?? 'knex-lab',
});
