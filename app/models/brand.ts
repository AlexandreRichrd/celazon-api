import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class Brand extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare name: string;

    @column()
    declare cover: string;

    @column()
    declare created_at: Date;

    @column()
    declare updated_at: Date;
}