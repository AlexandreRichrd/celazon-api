import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_t_shirts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Colonne 'id' définie une seule fois
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()
      table.string('size').notNullable()
      table.string('color').notNullable()
      table.string('material').notNullable()
      table.string('neck_type').notNullable()
      table.string('sleeve_type').notNullable()
      table.string('fit').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
