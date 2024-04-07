import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'
import { env } from 'process'

const dbConfig = defineConfig({
  connection: 'mysql',
  connections: {
    mysql: {
      client: 'mysql',
      connection: {
        host: env.DB_HOST,
        port: 0,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig