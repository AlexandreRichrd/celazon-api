import { BaseSchema } from '@adonisjs/lucid/schema'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username', 255).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.integer('role').unsigned().notNullable().checkIn([0, 1, 2, 3, 9]).defaultTo(0)
      table.boolean('activated').defaultTo(false)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}