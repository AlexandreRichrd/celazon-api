import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'meta_mouses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('model_name').notNullable()
      table.string('medias').notNullable()
      table.string('style').notNullable()
      table.string('color').notNullable()
      table.string('configuration').notNullable()
      table.string('connectivity_technology').notNullable()
      table.string('special_caracteristics').notNullable()
      table.string('motion_detection_technology').notNullable()
      table.integer('button_amount').notNullable()
      table.string('hand_orientation').notNullable()
      table.string('usage').notNullable()
      table.string('device_compability').notNullable()
      table.float('weight').notNullable()
      table.string('about').notNullable()
      table.string('warranty').notNullable()
      table.string('os').notNullable()
      table.string('resolution').notNullable()
      table.string('gpu').notNullable()
      table.string('power_type').notNullable()
      table.string('battery_lifetime').notNullable()
      table.string('size').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}