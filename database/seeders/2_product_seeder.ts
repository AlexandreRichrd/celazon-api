import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/products'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        title: 'Logitech G Pro X Superlight',
        type: 'Mouse',
        price: 149.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',
        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: true
      },
      {
        title: 'Razer Viper Ultimate',
        type: 'Mouse',
        price: 129.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        title: 'Asus ROG Strix Scope TKL',
        type: 'Keyboard',
        price: 129.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      }
    ])
  }
}