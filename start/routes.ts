import router from '@adonisjs/core/services/router'
import ProductController from '../app/products/product.controller.js'
import { IProductBody } from '../interfaces/product.interface.js'

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
