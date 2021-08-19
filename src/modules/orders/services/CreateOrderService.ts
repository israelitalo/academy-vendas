import { getCustomRepository } from 'typeorm';
import OrdersRepository from '../typeorm/repositories/OrdersRepository';
import CustomersRepository from '@modules/customer/typeorm/repositories/CustomersRepository';
import ProductsRepository from '@modules/product/typeorm/repositories/ProductsRepository';
import Order from '../typeorm/entities/Order';
import AppError from '@shared/errors/AppError';

interface IProduct {
    id: string;
    quantity: number;
}

interface IRequest {
    customer_id: string;
    products: IProduct[];
}

export default class CreateProductService {
    public async execute({ customer_id, products }: IRequest): Promise<void> {
        const orderRepository = getCustomRepository(OrdersRepository);
        const customerRepository = getCustomRepository(CustomersRepository);
        const productRepository = getCustomRepository(ProductsRepository);

        //To do

    }
}