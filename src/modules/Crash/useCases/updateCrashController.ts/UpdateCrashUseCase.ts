import { ICrashRepository } from "../../repositories/ICrashRepository";

interface ICrash {
    id: string;
    crash_point: string | null;
}

class UpdateCrashUseCase {
    constructor(
        private crashRepository: ICrashRepository
    ) {}

    async execute(crash: ICrash): Promise<void> {
        const crashExists = await this.crashRepository.findById(crash.id);
        
        if(!crashExists && Number(crash.crash_point) !== 0 && crash.crash_point) {
            await this.crashRepository.create({
                crash_id: crash.id,
                crash_point: crash.crash_point,
                bad_crash: Number(crash.crash_point) > 2 ? false : true
            });
        };
    }
};

export { UpdateCrashUseCase };