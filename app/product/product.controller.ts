import { HttpContext } from "@adonisjs/core/http";

import productBodyValidator from "#validators/product/create_product_validator";


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

const coffeeList: IProduct[] = [
    {
        id: 1,
        name: 'Vanilla Latte',
        price: 4.5,
        description: 'Un latte à la vanille.',
        notation: 4.5,
        orderCount: 21023,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L'],
    },
    {
        id:2,
        name: 'Espresso',
        price: 3.5,
        description: 'Espresso simple et plein de malice.',
        notation: 4.5,
        orderCount: 12654,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L'],
    },
    {
        id:3,
        name: 'Hazelnut Latte',
        price: 4.5,
        description: 'Un latte à la noisette.',
        notation: 4.5,
        orderCount: 23467,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L'],
    },
    {
        id: 4,
        name: 'Café Glacé',
        price: 5.5,
        description: 'Un café glacé pour les journées chaudes.',
        notation: 4,
        orderCount: 15023,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 5,
        name: 'Café classique',
        price: 3.5,
        description: 'Un café classique.',
        notation: 4.5,
        orderCount: 30345,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: 'Chocolat chaud',
        price: 4.5,
        description: 'Un chocolat chaud pour les journées froides.',
        notation: 4.5,
        orderCount: 23456,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'Chocolat chaud extra',
        price: 5.5,
        description: 'Un chocolat chaud pour les petits gourmands.',
        notation: 4.5,
        orderCount: 23456,
        cover: 'https://img.freepik.com/photos-gratuite/du-cafe-frais-cuit-vapeur-table-bois-gros-plan-ia-generative_188544-8923.jpg',
        sizes: ['S', 'M', 'L']
    
    }
]

export default class ProductController{
    async index(){
        //logique retour tous les produits
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