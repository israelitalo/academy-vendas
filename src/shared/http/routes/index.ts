import { Router } from "express";
import routerProducts from "@modules/product/routes/product.routes";

const routes = Router();

routes.use('/products', routerProducts);

export default routes;