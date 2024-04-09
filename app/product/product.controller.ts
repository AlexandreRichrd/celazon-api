import { HttpContext } from "@adonisjs/core/http";

import productBodyValidator from "#validators/product/create_product_validator";
import db from "@adonisjs/lucid/services/db";


export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    cover: string;
    sizes: string[];
    notation: number;
    orderCount: number;
}


export default class ProductController{
    async index() : Promise<IProduct[]>{
        const coffeeList = await db.from('product').select('*');
        return coffeeList;
    }

    // async indexById({ params }: HttpContext): Promise<any>{
    //     const id = await getProductValidator.validate(params);
    //     // logique
    //     console.log(id)
    // }

    async createProduct({ request }: HttpContext): Promise<any>{
        const body = await request.validateUsing(productBodyValidator);
        // logique
        console.log(body)
    }
}