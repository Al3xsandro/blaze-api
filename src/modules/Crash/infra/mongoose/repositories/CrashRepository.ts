import { ICreateCrashDTO } from "../../../dtos/ICreateCrashDTO";
import { ICrashRepository } from "../../../repositories/ICrashRepository";

import { crash, ICrashDocument } from "../schemas/Crash";

export class CrashRepository implements ICrashRepository {
    private repository;
    
    constructor() {
        this.repository = crash;
    }

    async create({ 
        crash_id,
        crash_point,
        bad_crash
    }: ICreateCrashDTO): Promise<void> {
        await this.repository.create({
            crash_point,
            bad_crash,
            crash_id
        });
    };

    async findById(id: string): Promise<ICrashDocument | null> {
        const crash = await this.repository.findOne({
            crash_id: id
        });

        return crash;
    };

    async find(page: number) {
        const crashs = await this.repository.find({}).sort({
            createdAt: -1
        }).skip(Number(page) + 10).limit(130);

        return crashs;
    }
}