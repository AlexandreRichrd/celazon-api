import ProductType from "#models/product_type";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class extends BaseSeeder {
    public async run() {
        await ProductType.createMany([
            { name: "shoes", table_name: "meta_shoes" },
            { name: "bike", table_name: "meta_bikes" },
            { name: "t-shirt", table_name: "meta_t_shirts" },
            { name: "furniture", table_name: "meta_furnitures" },
            { name: "headphone", table_name: "meta_headphones" },
            { name: "phone", table_name: "meta_phones" },
            { name: "laptop", table_name: "meta_laptops" },
            { name: "makeup", table_name: "meta_makeups" },
            { name: "home appliance", table_name: "meta_home_appliances" },
            { name: "controller", table_name: "meta_controllers" },
            { name: "weight", table_name: "meta_weights" },
            { name: "gardening", table_name: "meta_gardenings" },
            { name: "book", table_name: "meta_books" },
            { name: "mouse", table_name: "meta_mouses" },
        ]);
    }
}