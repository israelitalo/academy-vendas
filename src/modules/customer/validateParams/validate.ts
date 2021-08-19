import { celebrate, Joi, Segments } from 'celebrate';

const create = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required()
    }
}, { abortEarly: false });

const id = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}, { abortEarly: false });

export {
    create,
    id
}