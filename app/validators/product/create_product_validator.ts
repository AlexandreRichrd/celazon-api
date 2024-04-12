import vine from "@vinejs/vine";

const productBodyValidator = vine.compile(vine.object({
    title: vine.string(),
    type: vine.string(),
    price: vine.number().positive(),
    cover: vine.string(),
    withdraw_time: vine.number().positive(),
    purchase_amount: vine.number().positive(),
    is_number_one: vine.boolean(),
    is_prime: vine.boolean()
}));

export default productBodyValidator;