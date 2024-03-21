import vine from "@vinejs/vine";

const getProductValidator = vine.compile(vine.object({
    id: vine.number()
}));

export default getProductValidator;