import { Router } from "express";
import CustomersController from "../controllers/CustomersController";
import { create, id } from '../validateParams/validate';

const routerCustomers = Router();

const customersController = new CustomersController();

routerCustomers.get('/', customersController.index);
routerCustomers.get('/:id', id, customersController.show);
routerCustomers.post('/', create, customersController.create);

export default routerCustomers;