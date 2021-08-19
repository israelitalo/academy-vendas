import { Request, Response } from "express";
import CreateCustomerService from "../services/CreateCustomerService";
import ListCustomerService from "../services/ListCustomerService";
import ShowCustomerService from "../services/ShowCustomerService";

export default class ProductsController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListCustomerService();
        const products = await service.execute();
        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new ShowCustomerService();
        const product = await service.execute({ id });
        return response.json(product);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const service = new CreateCustomerService();
        const customer = await service.execute({ name, email });
        return response.json(customer);
    }

}