import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import CreateProductService from "../services/CreateProductService";

export default class ProductsController {

    public async index(request: Request, response: Response): Promise<Response> {
        const service = new ListProductService();
        const products = await service.execute();
        return response.json(products);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;
        const service = new CreateProductService();
        const product = await service.execute({ name, price, quantity });
        return response.json(product);
    }

}