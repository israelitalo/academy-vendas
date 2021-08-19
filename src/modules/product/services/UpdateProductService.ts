import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../typeorm/repositories/ProductsRepository';
import Product from '../typeorm/entities/Product';
import { IProductUpdate } from '../interfaces/product';

export default class UpdateProductService {
    public async execute({ id, name, price, quantity }: IProductUpdate): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError("Produto não cadastrado");
        }

        const productExists = await productsRepository.findByName(name);

        if (productExists?.id && product.id !== productExists?.id) {
            throw new AppError("Nome do produto já cadastrado");
        }

        product.name = name;
        product.price = price;
        product.quantity = quantity;

        await productsRepository.save(product);

        return product;
    }
}