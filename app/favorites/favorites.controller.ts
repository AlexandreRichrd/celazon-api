import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";

export default class FavoritesController {
    async index({params}: HttpContext) {
        console.log(params.userId);
        return ('ok')
        const favorites = await db.from('favorites').select('*');
        return favorites;
    }

    async addFavorite({ request }: HttpContext) {
        const { user_id, product_id } = request.body();
        const favorite = await db.table('favorites').insert({
            user_id,
            product_id
        });
        return favorite;
    }
    
    async removeFavorite({ params }: HttpContext) {
        const { user_id, product_id } = params;
        const favorite = await db.from('favorites').where('user_id', user_id).where('product_id', product_id).delete();
        return favorite;
    }
    
    async getFavorites({params}: HttpContext) {
        const {user_id} = params;
        console.log(user_id);
        const favorites = await db.from('favorites').where('user_id', user_id).select('*');
        console.log(favorites);
        return favorites;
    }
}
