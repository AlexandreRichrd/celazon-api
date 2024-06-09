import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_home_appliances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()

      table.string('type').notNullable()
      table.string('color').notNullable()
      table.string('power').notNullable()
      table.string('voltage').notNullable()
      table.string('weight').notNullable()
      table.boolean('warranty').notNullable()
      table.string('height').notNullable()
      table.string('width').notNullable()
      table.string('length').notNullable()
      table.string('material').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}