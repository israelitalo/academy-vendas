import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import { validateCreate } from '../validateParams/create';
import { validateUpdate } from '../validateParams/update';
import { validateId } from '../validateParams/id';

const routerProducts = Router();

const productsController = new ProductsController();

routerProducts.get('/', productsController.index);
routerProducts.get('/:id', validateId, productsController.show);
routerProducts.post('/', validateCreate, productsController.create);
routerProducts.put('/:id', validateUpdate, productsController.update);

export default routerProducts;