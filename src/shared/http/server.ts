import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from '@shared/http/routes';
import '@shared/typeorm';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
            status: 'error'
        });
    }

    return response.status(500).json({
        status: 'error',
        message: error.message
    });
});

app.listen(3333, () => {
    console.log('Server on port 3333');
});