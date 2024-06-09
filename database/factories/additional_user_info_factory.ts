import factory from '@adonisjs/lucid/factories'
import AdditionalUserInfo from '#models/additional_user_info'

export const AdditionalUserInfoFactory = factory
  .define(AdditionalUserInfo, async ({ faker }) => {
    return {}
  })
  .build()