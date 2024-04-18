import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_to_brand_relationships'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.boolean('is_owner').defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}