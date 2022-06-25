import { ListAllCrashUseCase } from "./ListAllCrashUseCase";
import { ListAllCrashController } from "./ListAllCrashController";
import { CrashRepository } from "../../infra/mongoose/repositories/CrashRepository";

const crashRepository = new CrashRepository();
const listAllCrashUseCase = new ListAllCrashUseCase(crashRepository);
const listAllCrashController = new ListAllCrashController(listAllCrashUseCase);

export { listAllCrashController }