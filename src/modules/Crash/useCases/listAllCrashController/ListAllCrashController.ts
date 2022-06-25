import { Request, Response } from "express";
import { ListAllCrashUseCase } from "./ListAllCrashUseCase";

class ListAllCrashController {
    constructor(
        private listAllCrashUseCase: ListAllCrashUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { page } = request.query;

        const crashs = await this.listAllCrashUseCase.execute(Number(page));

        return response.json(crashs);
    }
}

export { ListAllCrashController };