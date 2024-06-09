import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_headphones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()

      table.string('type').notNullable()
      table.string('color').notNullable()
      table.string('connectivity').notNullable()
      table.boolean('microphone').notNullable()
      table.boolean('noise_cancellation').notNullable()
      table.string('battery_life').notNullable()
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