import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Order from '#models/order'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Order.createMany([
      {
        user_id: 1,
        status: 'pending',
        delivery_date: DateTime.fromISO('2022-01-01'),
        order_date: DateTime.fromISO('2021-12-01'),
      },
    ])
  }
}
