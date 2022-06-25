import { Router } from "express";
import { listAllCrashController } from "../../../modules/Crash/useCases/listAllCrashController";

const crashRoutes = Router();

crashRoutes.get('/crash', (request, response) => listAllCrashController.handle(request, response));

export { crashRoutes };