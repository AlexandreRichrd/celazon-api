import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_type_id').unsigned().references('id').inTable('product_types').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('title').notNullable()
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