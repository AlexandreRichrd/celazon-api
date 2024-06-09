import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_bikes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('description').notNullable()
      table.string('images').nullable()
      table.string('size').notNullable()
      table.string('color').notNullable()

      table.string('bike_type').notNullable()
      table.string('frame_material').notNullable()
      table.string('fork_material').notNullable()
      table.string('wheel_size').notNullable()
      table.integer('speed').notNullable()
      table.string('brake_type').notNullable()
      table.string('suspension').notNullable()
      table.string('weight').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}