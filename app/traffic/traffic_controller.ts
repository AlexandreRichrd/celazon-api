import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class TrafficController {
    async index() {
        return await db.from('traffic').select('*').orderBy('amount', 'desc')
    }

    async getTrafficByUser({ params, response }: HttpContext) {
        return response.json({
            message: 'Get traffic by user'
        })
    }

    async addTraffic({ request }: HttpContext) {
        const { product_id } = request.body()
        await db.from('traffic').where('product_id', product_id).increment('amount', 1)
    }
}