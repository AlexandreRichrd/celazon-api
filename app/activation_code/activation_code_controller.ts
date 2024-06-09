import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";
import { sendMailWithCode } from "../mail/activation_code.mail.js";

export default class ActivationCodeController {
    async generateCode ({ request }: HttpContext): Promise<boolean> {
        const code = Math.floor(1000 + Math.random() * 9000);
        const { user_id } = request.body();
        if(await db.from('verify_codes').where('user_id', user_id).first()){
            await db.from('verify_codes').where('user_id', user_id).delete();
        }

        db.table('verify_codes').insert({
            user_id,
            code,
            created_at: new Date(),
            updated_at: new Date()
        }).returning('id')
        .catch(error => {
            console.log("Erreur lors de l'insertion :", error);
        });
        const user = await db.from('users').where('id', user_id).first();
        if(user){
            console.log('user', user);
            sendMailWithCode(user.email, code.toString());
            return true;
        }
        return false;

    } 

    async verifyCode ({ request }: HttpContext): Promise<boolean> {
        const userId = request.body().user_id;
        const code = request.body().code;

        const result = await db.from('verify_codes').where('user_id', userId).where('code', code).first();
        if(result){
            await db.from('verify_codes').where('user_id', userId).delete();
            await db.from('users').where('id', userId).update('activated', true);
            return true;
        }
        return false;
    }

    async resendCode ({ request }: HttpContext): Promise<number> {
        const user_id = request.body().user_id;
        const user = await db.from('users').where('id', user_id).first();
        const code = await db.from('verify_codes').where('user_id', user_id).first();
        if(user && code){
            sendMailWithCode(user.email, code.code.toString());
            return code.code;
        }
        return 0;
    }
}