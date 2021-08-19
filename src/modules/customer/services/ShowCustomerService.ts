import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';
import Customer from '../typeorm/entities/Customer';

interface IRequest {
    id: string;
}

export default class ShowProductService {
    public async execute({ id }: IRequest): Promise<Customer> {
        const customerRepository = getCustomRepository(CustomersRepository);

        const customer = await customerRepository.findById(id);

        if (!customer) {
            throw new AppError("Cliente não cadastrado");
        }

        return customer;
    }
}