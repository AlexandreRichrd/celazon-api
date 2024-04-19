import ProductType from "#models/product_type";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class extends BaseSeeder {
    public async run() {
        await ProductType.createMany([
            { name: "Mouse", table_name: "meta_mouses" },
            { name: "Shoes", table_name: "meta_shoes" },
        ]);
    }
}