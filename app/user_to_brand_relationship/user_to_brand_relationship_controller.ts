import db from "@adonisjs/lucid/services/db";

export default class UserToBrandRelationshipController {
    async index() {
        const userToBrandRelationshipList = await db.from('user_to_brand_relationships').select('*');
        return userToBrandRelationshipList;
    }

    async createUserToBrandRelationship(brand_id: number, user_id: number, is_owner: boolean) {
        console.log('createUserToBrandRelationship');
        const userToBrandRelationship = await db.table('user_to_brand_relationships').insert({
            user_id,
            brand_id,
            is_owner
        });
        console.log(userToBrandRelationship);
        return userToBrandRelationship;
    }
}