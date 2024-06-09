import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { create } from 'domain'
import { sendMailOrder } from '../mail/order_success.mail.js'

export default class OrdersController {
    index() {
        return db.from('orders').select('*')
    }

    async addOrder({ request }: HttpContext) {
        const { user_id, status, products } = request.body()
        const order_id = await db.table('orders').insert({
            user_id,
            status,
            delivery_date: new Date('2021-12-12'),
            order_date: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        }).returning('id')
        console.log(order_id)
        let cpt = 0;
        products.forEach(async (product: any) => {
            console.log(product.product.id, product.quantity)
            cpt+=product.quantity
            await db.table('product_to_order_relationships').insert({
                order_id,
                product_id: product.product.id,
                amount: product.quantity,
                created_at: new Date(),
                updated_at: new Date()
            })
        })

        sendMailOrder('client@client.fr', cpt)

    }

    getOrderByUser({ params }: HttpContext) {
        return db.from('orders').where('user_id', params.id).select('*')
    }

    
}