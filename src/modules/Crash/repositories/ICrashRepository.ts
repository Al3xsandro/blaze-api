import { ICreateCrashDTO } from "../dtos/ICreateCrashDTO";
import { ICrashDocument } from "../infra/mongoose/schemas/Crash";

export interface ICrashRepository {
    create({ 
        crash_point,
        bad_crash,
        crash_id
    }: ICreateCrashDTO): Promise<void>;
    findById(id: string): Promise<ICrashDocument | null>
    find(page: number): Promise<ICrashDocument[]>
}