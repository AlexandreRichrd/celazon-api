import UserToBrandRelationship from '#models/user_to_brand_relationship'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await UserToBrandRelationship.createMany([
      { user_id: 1, brand_id: 1, is_owner: true },
      { user_id: 1, brand_id: 2, is_owner: false },
      { user_id: 1, brand_id: 3, is_owner: true },
    ])
  }
}