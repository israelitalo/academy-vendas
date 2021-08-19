import { celebrate, Joi, Segments } from 'celebrate';

const validateUpdate = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().required().precision(2),
        quantity: Joi.number().required()
    },
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}, { abortEarly: false });

export { validateUpdate }