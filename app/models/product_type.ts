import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class ProductType extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare name: string;

    @column()
    declare table_name: string;
}