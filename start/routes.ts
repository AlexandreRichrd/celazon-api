import router from '@adonisjs/core/services/router'
import ProductController from '../app/product/product.controller.ts'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



router.group(() => {
  router.group(() => {
    router.get('/', [ProductController, 'index'])
    router.post('/', [ProductController, 'createProduct'])
  }).prefix('products')
})
