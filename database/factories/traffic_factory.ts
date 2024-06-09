import factory from '@adonisjs/lucid/factories'
import Traffic from '#models/traffic'

export const TrafficFactory = factory
  .define(Traffic, async ({ faker }) => {
    return {}
  })
  .build()