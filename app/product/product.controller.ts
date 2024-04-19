import { HttpContext } from "@adonisjs/core/http";

import productBodyValidator from "#validators/product/create_product_validator";
import db from "@adonisjs/lucid/services/db";

import Brand from "#models/brand";
import ProductType from "#models/product_type";
import ImageController from "../image/image.controller.js";

export interface IProduct {
    id: number;
    brand_id: number;
    product_type_id: number;
    title: string;
    price: number;
    cover: string;
    withdraw_time: number;
    purchase_amount: number;
    is_prime: boolean;
    is_number_one: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IFullProduct extends IProduct{
    brand: Brand;
    productType: string;
}


export default class ProductController{
    async index() : Promise<IProduct[]>{
        const productList = await db.from('products').select('*');
        for (let i = 0; i < productList.length; i++) {
            const product = productList[i];
            console.log(product);
            const brand = await Brand.find(product.brand_id);
            const productType = await ProductType.find(product.product_type_id);
            productList[i] = {
                ...product,
                brand,
                productType: productType?.name
            };
        }
        return productList;
    }

    async createProduct({ request }: HttpContext): Promise<any>{
        const body = await request.validateUsing(productBodyValidator);
        const cover: string = await ImageController.saveBase64Image(body.cover);
        const product = await db.table('products').insert({
            ...body,
            cover
        });
        return product;
    }
}