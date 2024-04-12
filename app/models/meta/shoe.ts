import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class MetaShoe extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare product_id: number;

    @column()
    declare brand_id: number;

    @column()
    declare description: string;

    @column()
    declare images: string;

    @column()
    declare size: string;

    @column()
    declare color: string;

    @column()
    declare sole_material: string;

    @column()
    declare upper_material: string;

    @column()
    declare inside_material: string;

    @column()
    declare closure_type: string;

    @column()
    declare heel_type: string;

    @column()
    declare heel_height: string;

    @column()
    declare product_size: string;

    @column()
    declare product_gender: string;

    @column()
    declare created_at: Date;

    @column()
    declare updated_at: Date;

}