import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserToBrandRelationship extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare brand_id: number

  @column()
  declare is_owner: boolean
}