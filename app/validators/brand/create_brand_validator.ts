import vine from "@vinejs/vine"

const brandBodyValidator = vine.compile(vine.object({
    name: vine.string(),
}));

export default brandBodyValidator;