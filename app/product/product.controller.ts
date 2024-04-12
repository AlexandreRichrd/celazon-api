import { HttpContext } from "@adonisjs/core/http";

import productBodyValidator from "#validators/product/create_product_validator";
import db from "@adonisjs/lucid/services/db";


export interface IProduct {
    id: number;
    title: string;
    type: string;
    price: number;
    cover: string;
    withdraw_time: number;
    purchase_amount: number;
    is_prime: boolean;
    is_number_one: boolean;
    created_at: Date;
    updated_at: Date;
}


export default class ProductController{
    async index() : Promise<IProduct[]>{
        const coffeeList = await db.from('products').select('*');
        return coffeeList;
    }

    async createProduct({ request }: HttpContext): Promise<any>{
        const body = await request.validateUsing(productBodyValidator);
        const product = await db.table('products').insert(body);
        return product;
    }
}