import { BaseModel, column } from "@adonisjs/lucid/orm"

export default class MetaMouses extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare product_id: number

    @column()
    declare brand_id: number
    
    @column()
    declare model_name: string

    @column()
    declare medias: string

    @column()
    declare style: string

    @column()
    declare color: string

    @column()
    declare configuration: string

    @column()
    declare connectivity_technology: string

    @column()
    declare special_caracteristics: string

    @column()
    declare motion_detection_technology: string

    @column()
    declare button_amount: number

    @column()
    declare hand_orientation: string

    @column()
    declare usage: string

    @column()
    declare device_compability: string

    @column()
    declare weight: number

    @column()
    declare about: string

    @column()
    declare warranty: string

    @column()
    declare os: string

    @column()
    declare resolution: string

    @column()
    declare gpu: string

    @column()
    declare power_type: string

    @column()
    declare battery_lifetime: string

    @column()
    declare size: string

    @column()
    declare created_ad: Date

    @column()
    declare updated_at: Date
}