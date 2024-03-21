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

export interface IProductBody {
    name: string;
    price: number;
    description: string;
    cover: string;
    sizes: string[];
    notation: number;
    orderCount: number;
}