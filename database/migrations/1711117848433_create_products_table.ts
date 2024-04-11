import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('type').notNullable()
      table.float('price').notNullable()
      table.string('cover').notNullable()
      table.integer('withdraw_time').notNullable()
      table.integer('purchase_amount').notNullable()
      table.boolean('is_prime').notNullable()
      table.boolean('is_number_one').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}