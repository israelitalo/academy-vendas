import { celebrate, Joi, Segments } from 'celebrate';

const validateCreate = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().required().precision(2),
        quantity: Joi.number().required()
    }
}, { abortEarly: false });

export { validateCreate }