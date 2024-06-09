import vine from "@vinejs/vine";

const getProductByCategoryValidator = vine.compile(vine.object({
    product_type_id: vine.number()
}));

export default getProductByCategoryValidator