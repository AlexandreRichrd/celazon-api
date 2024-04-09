import router from '@adonisjs/core/services/router'
import ProductController from '../app/product/product.controller.ts'
import AuthController from '../app/auth/auth_controller.ts'
import db from '@adonisjs/lucid/services/db'
import mail from '@adonisjs/mail/services/main'

router.get('/', async () => {

  const users = await db.from('users').select('*')
  return {
    users
  }
})

router.get('/test', async () => {
  await mail.sendLater((message) => {
    message
      .from('test@test.fr')
      .to('test2@test.fr')
      .subject('Hello')
      .html('<p>Test</p>')
  })
  return {
    message: 'Mail sent'
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
