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
    public async execute({ customer_id, products }: IRequest): Promise<Order> {
        const ordersRepository = getCustomRepository(OrdersRepository);
        const customerRepository = getCustomRepository(CustomersRepository);
        const productsRepository = getCustomRepository(ProductsRepository);

        //To do

        const customerExists = await customerRepository.findById(customer_id);

        if (!customerExists) {
            throw new AppError('Cliente não cadastrado');
        }

        const productExists = await productsRepository.findAllByIds(products);

        if (!productExists.length) {
            throw new AppError('Produto(s) não cadastrado(s)');
        }

        const productExistsIds = productExists.map(product => product.id);

        const checkInexistentsProducts = products.filter(
            product => !productExistsIds.includes(product.id),
        );

        if (checkInexistentsProducts.length) {
            throw new AppError(`Produto ${checkInexistentsProducts[0].id} não encontrado`);
        }

        const quantityAvailable = products.filter(
            product =>
                productExists.filter(p => p.id === product.id)[0].quantity <
                product.quantity,
        );

        if (quantityAvailable.length) {
            throw new AppError(`Quantidade ${quantityAvailable[0].quantity} 
            não disponúvel em estoque ${quantityAvailable[0].id}`);
        }

        const serializedProducts = products.map(product => ({
            product_id: product.id,
            quantity: product.quantity,
            price: productExists.filter(prod => prod.id === product.id)[0].price,
        }));

        const order = await ordersRepository.createOrder({
            customer: customerExists,
            products: serializedProducts,
        });

        const { order_products } = order;

        const updatedProductQuantity = order_products.map(product => ({
            id: product.product_id,
            quantity:
                productExists.filter(p => p.id === product.product_id)[0].quantity -
                product.quantity,
        }));

        await productsRepository.save(updatedProductQuantity);

        return order;

    }
}