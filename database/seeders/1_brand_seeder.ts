import Brand from '#models/brand'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Brand.createMany([
      { name: 'Logitech', cover: 'https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/A13V1IB3VIYZZH/ee705f741d2cec073139e29b8cad0eb0.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg' },
      { name: 'Razer', cover: 'https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/A13V1IB3VIYZZH/ee705f741d2cec073139e29b8cad0eb0.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg' },
      { name: 'Asus', cover: 'https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/A13V1IB3VIYZZH/ee705f741d2cec073139e29b8cad0eb0.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg' },
    ])
  }
}