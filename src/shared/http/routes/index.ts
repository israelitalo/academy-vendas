import { Router } from "express";
import routerProducts from "@modules/product/routes/product.routes";
import routerCustomers from "@modules/customer/routes/customer.routes";
import ordersRouter from "@modules/orders/routes/orders.routes";

const routes = Router();

routes.use('/products', routerProducts);
routes.use('/customers', routerCustomers);
routes.use('/orders', ordersRouter);

export default routes;