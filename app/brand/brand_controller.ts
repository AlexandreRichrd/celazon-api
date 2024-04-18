import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";
import brandBodyValidator from "#validators/brand/create_brand_validator";

export default class BrandController{
    async index(){
        const brandList = await db.from('brands').select('*');
        return brandList;
    }

    async createBrand({ request }: HttpContext){
        console.log('createBrand');
        const body = await request.validateUsing(brandBodyValidator);
        const brand = await db.table('brands').insert(body);
        return brand;
    }
}