import { UpdateCrashUseCase } from "./UpdateCrashUseCase";
import { CrashRepository } from "../../infra/mongoose/repositories/CrashRepository";

const crashRepository = new CrashRepository();
const updateCrashUseCase = new UpdateCrashUseCase(crashRepository);

export { updateCrashUseCase };