import { celebrate, Joi, Segments } from 'celebrate';

const validateId = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}, { abortEarly: false });

export { validateId }