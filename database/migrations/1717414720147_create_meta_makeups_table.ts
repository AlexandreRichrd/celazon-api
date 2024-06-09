import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_makeups'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()

      table.string('color').notNullable()
      table.string('skin_type').notNullable()
      table.string('coverage').notNullable()
      table.string('finish').notNullable()
      table.string('formulation').notNullable()
      table.string('skin_concerns').notNullable()
      table.string('sun_protection').notNullable()
      table.string('weight').notNullable()
      table.string('dimensions').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}