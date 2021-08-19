import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductsController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListProductService();
        const products = await service.execute();
        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new ShowProductService();
        const product = await service.execute({ id });
        return response.json(product);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;
        const service = new CreateProductService();
        const product = await service.execute({ name, price, quantity });
        return response.json(product);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;
        const { id } = request.params;
        const service = new UpdateProductService();
        const product = await service.execute({ id, name, price, quantity });
        return response.json(product);
    }

}