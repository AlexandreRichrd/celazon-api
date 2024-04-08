import { HttpContext } from "@adonisjs/core/http";
import type { IRegisterPayload } from "../../interfaces/auth.interface.ts";

export default class AuthController{
    async register({ request }: HttpContext): Promise<any>{
        // Register user
        return request.body();
    }

    async login({ request }: HttpContext): Promise<any>{
        // Login user
        return request.body();
    }
}