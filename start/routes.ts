import router from '@adonisjs/core/services/router'
import ProductController from '../app/product/product.controller.ts'
import AuthController from '../app/auth/auth_controller.ts'
import ActivationCodeController from '../app/activation_code/activation_code_controller.ts'
import db from '@adonisjs/lucid/services/db'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'

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
      .htmlView('emails/verify_email_html', { code: '3457' })  
    })
  return {
    message: 'Mail sent'
  }
})

router.post('/user', async ({ request }) => {
  const user = await User.findOrFail(request.body().id)
  const token = await User.accessTokens.create(user, ['*'], {
    expiresIn: '30 days'
  })

  return {
    type: 'bearer',
    value: token.value!.release(),
    user: user
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

  router.group(() => {
      router.post('/generate', [ActivationCodeController, 'generateCode'])
      router.post('/verify', [ActivationCodeController, 'verifyCode'])
  }).prefix('code')
})
