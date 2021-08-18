import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const routerProducts = Router();

const productsController = new ProductsController();

routerProducts.get('/', productsController.index);
routerProducts.post('/', productsController.create);

export default routerProducts;