import Brand from '#models/brand'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Brand.createMany([
      { name: 'Logitech' },
      { name: 'Razer' },
      { name: 'Asus' },
    ])
  }
}