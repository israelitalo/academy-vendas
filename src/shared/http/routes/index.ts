import { Router } from "express";
import routerProducts from "@modules/product/routes/product.routes";
import routerCustomers from "@modules/customer/routes/customer.routes";

const routes = Router();

routes.use('/products', routerProducts);
routes.use('/customers', routerCustomers);

export default routes;