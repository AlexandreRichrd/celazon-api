import vine from "@vinejs/vine";

const productBodyValidator = vine.compile(vine.object({
    product_type_id: vine.number(),
    brand_id: vine.number(),
    title: vine.string(),
    price: vine.number().positive(),
    cover: vine.string(),
    withdraw_time: vine.number().positive(),
    purchase_amount: vine.number().positive(),
    is_number_one: vine.boolean(),
    is_prime: vine.boolean()
}));

export default productBodyValidator;