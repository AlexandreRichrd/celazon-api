import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_phones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()

      table.string('color').notNullable()
      table.string('storage').notNullable()
      table.string('ram').notNullable()
      table.string('processor').notNullable()
      table.string('os').notNullable()
      table.string('battery').notNullable()
      table.string('display').notNullable()
      table.string('camera').notNullable()
      table.string('weight').notNullable()
      table.boolean('warranty').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}