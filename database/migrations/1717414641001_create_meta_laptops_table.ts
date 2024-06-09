import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_laptops'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()

      table.string('processor').notNullable()
      table.string('ram').notNullable()
      table.string('storage').notNullable()
      table.string('graphics').notNullable()
      table.string('display').notNullable()
      table.string('os').notNullable()
      table.string('weight').notNullable()
      table.boolean('warranty').notNullable()
      table.boolean('touchscreen').notNullable()
      table.boolean('backlit_keyboard').notNullable()
      table.boolean('fingerprint_scanner').notNullable()
      table.boolean('webcam').notNullable()
      table.boolean('bluetooth').notNullable()
      table.boolean('wifi').notNullable()
      table.boolean('ethernet').notNullable()
      table.boolean('hdmi').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}