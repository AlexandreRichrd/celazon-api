import MetaShoe from "#models/meta/shoe";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class MetaShoeSeeder extends BaseSeeder {
    public async run () {
        await MetaShoe.createMany([
            {
                product_id: 1,
                brand_id: 1,
                description: 'Chaussure de sport pour homme',
                images: 'https://m.media-amazon.com/images/I/71GUUtRndkL._AC_SY695_.jpg',
                size: '42, 43, 44, 45',
                color: 'Black',
                sole_material: 'Rubber',
                upper_material: 'Mesh',
                inside_material: 'Textile',
                closure_type: 'Lace-up',
                heel_type: 'Flat',
                heel_height: '2 inches',
                product_size: 'M',
                product_gender: 'male',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                product_id: 2,
                brand_id: 2,
                description: 'Chaussure de sport pour femme',
                images: 'https://m.media-amazon.com/images/I/61rHjXbXUuS._AC_SY575_.jpg',
                size: '36, 37, 38, 39',
                color: 'White',
                sole_material: 'Rubber',
                upper_material: 'Mesh',
                inside_material: 'Textile',
                closure_type: 'Lace-up',
                heel_type: 'Flat',
                heel_height: '2 inches',
                product_size: 'M',
                product_gender: 'female',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                product_id: 3,
                brand_id: 3,
                description: 'Chaussure de sport pour enfant',
                images: 'https://m.media-amazon.com/images/I/71z4e7BdRGL._AC_SY575_.jpg',
                size: '28, 29, 30, 31',
                color: 'Blue',
                sole_material: 'Rubber',
                upper_material: 'Mesh',
                inside_material: 'Textile',
                closure_type: 'Lace-up',
                heel_type: 'Flat',
                heel_height: '2 inches',
                product_size: 'M',
                product_gender: 'child',
                created_at: new Date(),
                updated_at: new Date()
            }
        ])
    }

}
