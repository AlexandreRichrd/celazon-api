import router from '@adonisjs/core/services/router'
import ProductController from '../app/product/product.controller.ts'
import AuthController from '../app/auth/auth_controller.ts'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



router.group(() => {
  router.group(() => {
    router.get('/', [ProductController, 'index'])
    router.post('/', [ProductController, 'createProduct'])
  }).prefix('products'),

  
  router.group(() => {
    router.group(() => {
      router.post('/', [AuthController, 'register'])
    }).prefix('register')
    router.group(() => {
      router.post('/', [AuthController, 'login'])
    }).prefix('login')
  }).prefix('auth')
})
