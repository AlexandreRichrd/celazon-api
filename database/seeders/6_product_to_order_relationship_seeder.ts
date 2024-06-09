import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProductToOrderRelationship from '#models/product_to_order_relationship'

export default class extends BaseSeeder {
  async run() {
    await ProductToOrderRelationship.createMany([
      {
        product_id: 1,
        order_id: 1,
        amount: 2
      },
      {
        product_id: 2,
        order_id: 1,
        amount: 1
      },
      {
        product_id: 3,
        order_id: 1,
        amount: 3
      },
    ])
  }
}