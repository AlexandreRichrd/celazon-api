import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/products'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Logitech G Pro X Superlight',
        price: 149.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',
        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: true
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Razer Viper Ultimate',
        price: 129.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',        
        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      },
      {
        product_type_id: 1,
        brand_id: 1,
        title: 'Asus ROG Strix Scope TKL',
        price: 129.99,
        cover: 'https://m.media-amazon.com/images/I/41J4N5nPURL._AC_UF480,480_SR480,480_.jpg',        
        withdraw_time: 1,
        purchase_amount: 100,
        is_prime: true,
        is_number_one: false
      }
    ])
  }
}