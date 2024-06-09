import { HttpContext } from "@adonisjs/core/http";
import type { IRegisterPayload } from "../../interfaces/auth.interface.ts";
import hash from "@adonisjs/core/services/hash";
import db from "@adonisjs/lucid/services/db";
import User from "#models/user";
import sendResetEmail from "../mail/reset_password.mail.js";

export default class AuthController{
    async register({ request }: HttpContext): Promise<any>{
        if(!request.body().username || !request.body().password || !request.body().email){
            return {
                status: false,
                message: 'All fields are required'
            }
        }
        // Register user
        const hashed_password: string = await hash.make(request.body().password);
        const payload: IRegisterPayload = {
            username: request.body().username,
            password: hashed_password,
            email: request.body().email,
            role: 0,
            created_at: new Date(),
            updated_at: new Date()
        }
        const user_exists = await db.from('users').where('username', payload.username).orWhere('email', payload.email).first();
        if(user_exists){
            return {
                status: false,
                message: 'User already exists'
            }
        }
        const user_id =  await db.table('users').insert(payload).returning('id');
        await db.table('additional_user_infos').insert({
            user_id: user_id[0],
            phone_number: '',
            address: '',
            city: '',
            country: '',
            language: 'fr',
            profile_picture: 'http://localhost:8081/images/user.jpg'
        });

        return {
            userId: user_id,
            status: true,
            message: 'User registered successfully'
        }
    }

    async login({ request }: HttpContext): Promise<any>{
        if(!request.body().username || !request.body().password){
            return {
                status: 400,
                message: 'All fields are required'
            }
        }

        const user: User | null = await User.query().where('username', request.body().username).first();

        if(!user){
            return {
                status: 404,
                message: 'User not found'
            }
        }

        const password_verified = await hash.verify(user.password, request.body().password);

        if(!password_verified){
            return {
                status: 401,
                message: 'Invalid credentials'
            }
        }

        console.log(user);

        const token = await User.accessTokens.create(user, ['*'], {
            expiresIn: '30 days'
        })

        return {
            status: 200,
            type: 'bearer',
            value: token.value!.release(),
            user: user
        }
    }

    async resetPassword({ request }: HttpContext): Promise<any>{
        const { email } = request.body();
        const segments: string[] = [];
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code
        if(await db.from('reset_password_codes').where('email', email).first()){
            code = await db.from('reset_password_codes').where('email', email).first();
            code = code.code
        }else{

            for (let i = 0; i < 4; i++) {
                let segment = '';
                for (let j = 0; j < 4; j++) {
                    const randomIndex = Math.floor(Math.random() * chars.length);
                    segment += chars[randomIndex];
                }
                segments.push(segment);
            }
            
            code =  segments.join('-');
            
            const user = await User.findBy('email', email);
            if(!user){
                return {
                    status: 404,
                    message: 'User not found'
                }
            }
            await db.table('reset_password_codes').insert({
                email,
                code,
                created_at: new Date(),
                updated_at: new Date()
            });
        }

        sendResetEmail(email, code);

        return{
            status: 200,
            message: 'Code sent successfully'
        }
    }

    async resetCodeExists({request}: HttpContext){
        const { code } = request.body();
        return (await db.from('reset_password_codes').where('code', code).first() ? true : false);
    }


    async updatePassword({request}: HttpContext){
        const { code, password } = request.body();
        const email = await db.from('reset_password_codes').where('code', code).first();
        if(!email){
            return {
                status: 404,
                message: 'Code not found'
            }
        }
        const hashed_password: string = await hash.make(password);
        await db.from('users').where('email', email.email).update('password', hashed_password);
        return {
            status: 200,
            message: 'Password updated successfully'
        }
    }
}