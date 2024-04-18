import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";
import brandBodyValidator from "#validators/brand/create_brand_validator";
import ImageController from "../image/image.controller.js";
import UserToBrandRelationship from "#models/user_to_brand_relationship";

export default class BrandController{
    async index(){
        const brandList = await db.from('brands').select('*');
        return brandList;
    }

    async createBrand({ request }: HttpContext){
        console.log('createBrand');
        const body = await request.validateUsing(brandBodyValidator);
        const path :string = await ImageController.saveBase64Image(body.cover);
        console.log('path', path);
        const brand = await db.table('brands').insert({
            name: body.name,
            cover: path
        });
        console.log(brand);
        await UserToBrandRelationship.create({
            user_id: body.user_id,
            brand_id: brand[0],
            is_owner: true
        });

        return brand;
    }

    //TODO: DELETE BRAND (DELETE PRODUCTS, DELETE IMAGES, DELETE BRAND, DELETE RELATIONSHIPS)
}