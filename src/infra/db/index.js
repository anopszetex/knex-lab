import knex from 'knex';

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getDatabaseConfig as config } from './../config.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function buildConnectionConfig() {
  return {
    client: 'pg',
    pool: { min: 0, max: 5, idleTimeoutMillis: 60000 },

    connection: {
      host: config.DB_HOST,
      port: config.DB_PORT,
      user: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
    },
    migrations: {
      directory: resolve(__dirname, './migrations'),
      extension: 'js',
      loadExtensions: ['.js'],
    },
    seeds: {
      directory: resolve(__dirname, './seeds'),
      extension: 'js',
      loadExtensions: ['.js'],
    },
  };
}

function createConnection() {
  return knex(buildConnectionConfig());
}

export { createConnection, buildConnectionConfig };
