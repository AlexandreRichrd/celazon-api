import vine from "@vinejs/vine";

const productBodyValidator = vine.compile(vine.object({
    name: vine.string(),
    price: vine.number().positive(),
    description: vine.string(),
    cover: vine.string(),
    sizes: vine.array(vine.string()),
    notation: vine.number().positive(),
    orderCount: vine.number().positive()
}));

export default productBodyValidator;