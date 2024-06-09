import factory from '@adonisjs/lucid/factories'
import ProductToOrderRelationship from '#models/product_to_order_relationship'

export const ProductToOrderRelationshipFactory = factory
  .define(ProductToOrderRelationship, async ({ faker }) => {
    return {}
  })
  .build()