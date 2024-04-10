import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";

export default class ActivationCodeController {
    generateCode = ({ request }: HttpContext): number => {
        const code = Math.floor(1000 + Math.random() * 9000);
        const { user_id } = request.body();

        db.table('verify_codes').insert({
            user_id,
            code,
            created_at: new Date(),
            updated_at: new Date()
        }).returning('id')
        .catch(error => {
            console.log("Erreur lors de l'insertion :", error);
        });
        return code;
    } 

    verifyCode = ({ request }: HttpContext): boolean => {
        const { user_id, code } = request.body();
        const code_exists = db.from('codes').where('user_id', user_id).where('code', code).first();
        console.log(code_exists);
        if(code_exists){
            return true;
        }
        return false;
    }


    
}