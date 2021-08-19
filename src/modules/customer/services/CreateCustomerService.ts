import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';
import Customer from '../typeorm/entities/Customer';
import AppError from '@shared/errors/AppError';
import { ICustomer } from '../interfaces/customer';

export default class CreateProductService {
    public async execute({ email, name }: ICustomer): Promise<Customer> {
        const customersRepository = getCustomRepository(CustomersRepository);

        const customerExists = await customersRepository.findByEmail(email);

        if (customerExists) {
            throw new AppError("Cliente já cadastrado");
        }

        const customer = customersRepository.create({
            email,
            name
        });

        await customersRepository.save(customer);

        return customer;
    }
}