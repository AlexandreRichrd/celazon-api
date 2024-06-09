import { BaseSeeder } from '@adonisjs/lucid/seeders'
import AdditionalUserInfo from '#models/additional_user_info'

export default class extends BaseSeeder {
  async run() {
    await AdditionalUserInfo.createMany([
      {
        user_id: 1,
        phone_number: '',
        address: '',
        city: '',
        country: '',
        language: 'fr',
        profile_picture: 'http://localhost:8081/images/user.jpg'
      },
    ])
  }
}