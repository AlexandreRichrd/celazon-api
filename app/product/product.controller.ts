import { HttpContext } from "@adonisjs/core/http";
import productBodyValidator from "#validators/product/create_product_validator";

export default class ProductController{
    async index(){
        //logique retour tous les produits
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