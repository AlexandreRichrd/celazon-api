import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      { id: 1, name: 'Vanilla Latte', price: 4.5, description: 'Un latte à la vanille.', notation: 4.5, orderCount: 21023, sizes: 'S,M,L', cover: 'http://localhost:8081/images/vanilla_latte.png' },
      { id: 2, name: 'Espresso', price: 3.5, description: 'Espresso simple et plein de malice.', notation: 4.5, orderCount: 12654, sizes: 'S,M,L', cover: 'http://localhost:8081/images/espresso.png' },
      { id: 3, name: 'Hazelnut Latte', price: 4.5, description: 'Un latte à la noisette.', notation: 4.5, orderCount: 23467, sizes: 'S,M,L', cover: 'http://localhost:8081/images/hazelnut_latte.png' },
      { id: 5, name: 'Café classique', price: 3.5, description: 'Un café classique.', notation: 4.5, orderCount: 30345, sizes: 'S,M,L', cover: 'http://localhost:8081/images/cafe-glace.webp' },
      { id: 6, name: 'Chocolat chaud', price: 4.5, description: 'Un chocolat chaud pour les journées froides.', notation: 4.5, orderCount: 23456, sizes: 'S,M,L', cover: 'http://localhost:8081/images/chocolat.jpg' },
      { id: 7, name: 'Chocolat chaud extra', price: 5.5, description: 'Un chocolat chaud pour les petits gourmands.', notation: 4.5, orderCount: 23456, sizes: 'S,M,L', cover: 'http://localhost:8081/images/chocolat-fat.jpg' }
    ])
  }
}