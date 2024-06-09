import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class AdditionalUserInfosController {

    getAdditionalUserInfo({ params }: HttpContext) {
        return db.from('additional_user_infos').where('user_id', params.id).first()
    }

    async updateAdditionalUserInfo({ request, params }: HttpContext) {
        const { phone_number, address, city, country, language, profile_picture } = request.body()
        await db.from('additional_user_infos').where('user_id', params.id).update({ phone_number, address, city, country, language, profile_picture })
    }

}