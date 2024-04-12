import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_shoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()
      table.string('size').notNullable()
      table.string('color').notNullable()
      table.string('sole_material').notNullable()
      table.string('upper_material').notNullable()
      table.string('inside_material').notNullable()
      table.string('closure_type').notNullable()
      table.string('heel_type').nullable()
      table.string('heel_height').nullable()
      table.string('product_size').notNullable()
      table.string('product_gender').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}