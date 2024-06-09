import router from '@adonisjs/core/services/router'
import ProductController from '../app/product/product.controller.js'
import AuthController from '../app/auth/auth_controller.js'
import ActivationCodeController from '../app/activation_code/activation_code_controller.js'
import db from '@adonisjs/lucid/services/db'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import BrandController from '../app/brand/brand_controller.js'
import FavoritesController from '../app/favorites/favorites.controller.js'
import OrdersController from '../app/order/orders_controller.js'
import TrafficController from '../app/traffic/traffic_controller.js'
import AdditionalUserInfosController from '../app/additional_user_infos/additional_user_infos_controller.js'

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
    router.post('/', [ProductController, 'createProduct']),
    router.post('/getByCategory', [ProductController, 'getProductByCategory'])
    router.post('/getProductDetails', [ProductController, 'getProductDetailByID'])
  }).prefix('products'),

  
  router.group(() => {
    router.group(() => {
      router.post('/', [AuthController, 'register'])
    }).prefix('register')
    router.group(() => {
      router.post('/', [AuthController, 'login'])
    }).prefix('login')
    router.group(() => {
      router.post('/', [AuthController, 'resetPassword'])
    }).prefix('reset')
    router.group(() => {
      router.post('/', [AuthController, 'resetCodeExists'])
    }).prefix('codeExists')
    router.group(() => {
      router.post('/', [AuthController, 'updatePassword'])
    }).prefix('changePassword')
  }).prefix('auth')

  router.group(() => {
    router.get('/:id', [AdditionalUserInfosController, 'getAdditionalUserInfo'])
    router.post('/:id', [AdditionalUserInfosController, 'updateAdditionalUserInfo'])
  }).prefix('additional_user_infos')

  router.group(() => {
      router.post('/generate', [ActivationCodeController, 'generateCode'])
      router.post('/verify', [ActivationCodeController, 'verifyCode'])
      router.post('/resend', [ActivationCodeController, 'resendCode'])
  }).prefix('code')

  router.group(() => {
    router.get('/', [BrandController, 'index'])
    router.post('/', [BrandController, 'createBrand'])
  }).prefix('brands')

  router.group(() => {
    router.get('/', [FavoritesController, 'index']);
    router.post('/', [FavoritesController, 'addFavorite']);
    router.delete('/:product_id/:user_id', [FavoritesController, 'removeFavorite']);
    router.get('/:user_id', [FavoritesController, 'getFavorites']);
  }).prefix('favorites');

  router.group(() => {
    router.get('/', [OrdersController, 'index'])
    router.get('/:id', [OrdersController, 'getOrderByUser'])
    router.post('/', [OrdersController, 'addOrder'])
  }).prefix('orders')

  router.group(() => {
    router.get('/', [TrafficController, 'index'])
    router.post('/', [TrafficController, 'addTraffic'])
  }).prefix('traffic')

})
