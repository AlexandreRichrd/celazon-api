import { BaseModel, column } from "@adonisjs/lucid/orm"


export default class Product extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare product_type_id: number

    @column()
    declare brand_id: number

    @column()
    declare title: string

    @column()
    declare price: number

    @column()
    declare cover: string

    @column()
    declare withdraw_time: number

    @column()
    declare purchase_amount: number

    @column()
    declare is_prime: boolean

    @column()
    declare is_number_one: boolean

    @column()
    declare created_at: Date

    @column()
    declare updated_at: Date
}