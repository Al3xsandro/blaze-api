import { CrashRepository } from "../../infra/mongoose/repositories/CrashRepository";
import { ICrashDocument } from "../../infra/mongoose/schemas/Crash";

class ListAllCrashUseCase {
    constructor(
        private crashRepository: CrashRepository
    ) {}

    async execute(page: number): Promise<ICrashDocument[]> {
        const crashs = await this.crashRepository.find(page);

        return crashs;
    };
}

export { ListAllCrashUseCase };