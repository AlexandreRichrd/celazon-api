import { HttpContext } from "@adonisjs/core/http";
import type { IRegisterPayload } from "../../interfaces/auth.interface.ts";
import hash from "@adonisjs/core/services/hash";
import db from "@adonisjs/lucid/services/db";
import User from "#models/user";

export default class AuthController{
    async register({ request }: HttpContext): Promise<any>{
        if(!request.body().username || !request.body().password || !request.body().email){
            return {
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
                message: 'User already exists'
            }
        }
        await db.table('users').insert(payload).returning('id');

        return {
            message: 'User registered successfully'
        }
    }

    async login({ request }: HttpContext): Promise<any>{
        if(!request.body().username || !request.body().password){
            return {
                message: 'All fields are required'
            }
        }

        const user: User | null = await User.query().where('username', request.body().username).first();

        if(!user){
            return {
                message: 'User not found'
            }
        }

        const password_verified = await hash.verify(user.password, request.body().password);

        if(!password_verified){
            return {
                message: 'Invalid credentials'
            }
        }

        console.log(user);

        const token = await User.accessTokens.create(user, ['*'], {
            expiresIn: '30 days'
        })

        return {
            type: 'bearer',
            value: token.value!.release()
        }
    }
}