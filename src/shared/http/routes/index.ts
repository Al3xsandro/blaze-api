import { Router } from "express";
import { crashRoutes } from "./crash.routes";

const routes = Router();

routes.use("/", crashRoutes);

export { routes };