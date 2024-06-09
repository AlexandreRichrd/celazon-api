import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Traffic from '#models/traffic'

export default class extends BaseSeeder {
  async run() {
    await Traffic.createMany([
      {
        product_id: 1,
        amount: 10
      },
      {
        product_id: 2,
        amount: 20
      },
      {
        product_id: 3,
        amount: 30
      },
    ])
  }
}