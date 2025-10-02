import Joi from "joi";

const libroSchema = Joi.object({
    title: Joi.string()
        .required()
        .messages({
            "string.base": "El título debe ser un texto",
            "string.empty": "El título no puede estar vacío",
            "any.required": "El título es obligatorio"
        }),

    author: Joi.string()
        .required()
        .messages({
            "string.base": "El autor debe ser un texto",
            "string.empty": "El autor no puede estar vacío",
            "any.required": "El autor es obligatorio"
        }),

    year: Joi.number()
        .integer()
        .optional()
        .messages({
            "number.base": "El año debe ser un número"
        })
});

export default libroSchema;
