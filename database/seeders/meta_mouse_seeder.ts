import MetaMouses from '#models/meta/mouse'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class MetaMousesSeeder extends BaseSeeder {
  async run() {
    await MetaMouses.createMany([
      {
        product_id: 1,
        brand_id: 1,
        model_name: 'G Pro X Superlight',
        medias: 'http://localhost:8081/images/cafe-glace.webp',
        style: 'Gaming',
        color: 'Black',
        configuration: 'sans-fil',
        connectivity_technology: 'Bluetooth',
        special_caracteristics: 'RGB',
        motion_detection_technology: 'Optique',
        button_amount: 5,
        hand_orientation: 'Ambidextre',
        usage: 'Gaming',
        device_compability: 'PC',
        weight: 63,
        about: 'La souris gaming sans fil G PRO X SUPERLIGHT',
        warranty: '2 ans',
        os: 'Windows',
        resolution: '1080p Full HD Pixels',
        gpu: 'NVIDIA GeForce GTX 1080',
        power_type: 'Batterie',
        battery_lifetime: '70 heures',
        size: 'M'
      },
      {
        product_id: 1,
        brand_id: 1,
        model_name: 'DeathAdder V2',
        medias: 'http://localhost:8081/images/cafe-glace.webp',
        style: 'Gaming',
        color: 'Black',
        configuration: 'Filaire',
        connectivity_technology: 'USB',
        special_caracteristics: 'RGB',
        motion_detection_technology: 'Optique',
        button_amount: 7,
        hand_orientation: 'Droitier',
        usage: 'Gaming',
        device_compability: 'PC',
        weight: 82,
        about: 'La souris gaming filaire Razer DeathAdder V2',
        warranty: '2 ans',
        os: 'Windows',
        resolution: '1080p Full HD Pixels',
        gpu: 'NVIDIA GeForce GTX 1080',
        power_type: 'USB',
        battery_lifetime: 'N/A',
        size: 'M'
      },
      {
        product_id: 2,
        brand_id: 2,
        model_name: 'ROG Gladius II',
        medias: 'http://localhost:8081/images/cafe-glace.webp',
        style: 'Gaming',
        color: 'Black',
        configuration: 'Filaire',
        connectivity_technology: 'USB',
        special_caracteristics: 'RGB',
        motion_detection_technology: 'Optique',
        button_amount: 6,
        hand_orientation: 'Droitier',
        usage: 'Gaming',
        device_compability: 'PC',
        weight: 110,
        about: 'La souris gaming filaire ASUS ROG Gladius II Origin',
        warranty: '2 ans',
        os: 'Windows',
        resolution: '1080p Full HD Pixels',
        gpu: 'NVIDIA GeForce GTX 1080',
        power_type: 'USB',
        battery_lifetime: 'N/A',
        size: 'M'
      }
    ])
  }
}